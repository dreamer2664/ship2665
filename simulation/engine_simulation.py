"""
simulation/engine_simulation.py
Propulsion Plant and Steam Engineering Simulation for RMS Titanic (Yard No. 401)
Replicates the authentic Harland & Wolff combination propulsion system:
- 29 Scotch marine boilers (24 double-ended, 5 single-ended, 159 furnaces) at 215 psi
- Two 4-crank triple-expansion reciprocating steam engines (HP 54", IP 84", two LP 97", stroke 75")
- One Parsons low-pressure reaction steam turbine driving centre screw (ahead only)
- Changeover diverter valves routing exhaust steam to turbine or bypassing to condensers
- Synchronised propeller RPM, hull thrust, ship speed, wake, and funnel smoke emission
- Strictly enforces the historical dummy rule: Funnel 4 emits NO coal smoke!
"""

import math
import time

class TitanicEngineSystem:
    # Engine Order Telegraph Positions
    ORDERS = {
        'FULL_AHEAD':      {'target_speed_kts': 21.5, 'recip_rpm': 75.0,  'turbine_rpm': 165.0, 'boiler_rate': 0.95, 'ahead': True},
        'HALF_AHEAD':      {'target_speed_kts': 15.0, 'recip_rpm': 52.0,  'turbine_rpm': 115.0, 'boiler_rate': 0.65, 'ahead': True},
        'SLOW_AHEAD':      {'target_speed_kts': 10.0, 'recip_rpm': 35.0,  'turbine_rpm': 75.0,  'boiler_rate': 0.40, 'ahead': True},
        'DEAD_SLOW_AHEAD': {'target_speed_kts': 5.0,  'recip_rpm': 18.0,  'turbine_rpm': 35.0,  'boiler_rate': 0.25, 'ahead': True},
        'STOP':            {'target_speed_kts': 0.0,  'recip_rpm': 0.0,   'turbine_rpm': 0.0,   'boiler_rate': 0.15, 'ahead': True},
        'DEAD_SLOW_ASTERN':{'target_speed_kts': -3.5, 'recip_rpm': -18.0, 'turbine_rpm': 0.0,   'boiler_rate': 0.25, 'ahead': False},
        'SLOW_ASTERN':     {'target_speed_kts': -7.0, 'recip_rpm': -35.0, 'turbine_rpm': 0.0,   'boiler_rate': 0.40, 'ahead': False},
        'HALF_ASTERN':     {'target_speed_kts': -10.5,'recip_rpm': -52.0, 'turbine_rpm': 0.0,   'boiler_rate': 0.65, 'ahead': False},
        'FULL_ASTERN':     {'target_speed_kts': -13.0,'recip_rpm': -75.0, 'turbine_rpm': 0.0,   'boiler_rate': 0.95, 'ahead': False},
    }

    def __init__(self):
        self.telegraph_order = 'STOP'
        self.current_order = self.ORDERS[self.telegraph_order]

        # Boilers (29 boilers, 159 furnaces)
        self.boiler_count_double = 24
        self.boiler_count_single = 5
        self.total_furnaces = 159
        self.boiler_pressure_psi = 210.0  # Working pressure 215 psi normal
        self.boiler_firing_rate = 0.15    # Banking fires at stop
        self.steam_generation_lbs_hr = 60000.0

        # Reciprocating Engines (Port & Starboard)
        # Cylinder bores: HP 54", IP 84", LP1 97", LP2 97", Stroke 75" (1.905m)
        self.hp_bore_m = 54.0 * 0.0254
        self.ip_bore_m = 84.0 * 0.0254
        self.lp_bore_m = 97.0 * 0.0254
        self.stroke_m = 75.0 * 0.0254

        self.port_recip_rpm = 0.0
        self.stbd_recip_rpm = 0.0
        self.port_crank_angle_rad = 0.0
        self.stbd_crank_angle_rad = 0.0
        self.stephenson_link_pos = 0.0 # -1.0 full astern, 0.0 neutral, +1.0 full ahead
        self.recip_ihp = 0.0

        # Parsons Low-Pressure Reaction Turbine
        self.turbine_rpm = 0.0
        self.turbine_shp = 0.0
        self.changeover_valves_open_to_turbine = False # Diverted to condenser when stopped or astern!

        # Propellers
        self.port_wing_rpm = 0.0
        self.stbd_wing_rpm = 0.0
        self.centre_prop_rpm = 0.0

        # Vessel Hydrodynamics
        self.speed_knots = 0.0
        self.rudder_angle_deg = 0.0
        self.heading_deg = 245.0 # Leaving Southampton heading into Solent

        # Funnels Smoke Emission State
        # Funnels 1, 2, 3: Working boiler flues
        # Funnel 4: Historical dummy ventilation casing (NO BOILER EXHAUST)
        self.funnel_smoke = {
            1: {'density': 0.2, 'soot_darkness': 0.3, 'active': True,  'is_dummy': False},
            2: {'density': 0.2, 'soot_darkness': 0.3, 'active': True,  'is_dummy': False},
            3: {'density': 0.2, 'soot_darkness': 0.3, 'active': True,  'is_dummy': False},
            4: {'density': 0.0, 'soot_darkness': 0.0, 'active': False, 'is_dummy': True, 'steam_wisps': 0.05}
        }

    def set_order(self, order_name):
        if order_name in self.ORDERS:
            self.telegraph_order = order_name
            self.current_order = self.ORDERS[order_name]
            return True
        return False

    def update(self, dt):
        """Advances propulsion simulation by dt seconds."""
        target = self.current_order
        target_recip = target['recip_rpm']
        target_turbine = target['turbine_rpm']
        target_speed = target['target_speed_kts']
        target_firing = target['boiler_rate']

        # 1. Update Boiler Firing Rate and Steam Pressure
        rate_change_speed = 0.1 * dt
        self.boiler_firing_rate += (target_firing - self.boiler_firing_rate) * min(1.0, rate_change_speed)
        
        # Steam consumption vs generation
        steam_demand = abs(self.port_recip_rpm) / 75.0
        generation_rate = self.boiler_firing_rate
        dp = (generation_rate - steam_demand) * 10.0 * dt
        self.boiler_pressure_psi = max(180.0, min(215.0, self.boiler_pressure_psi + dp))

        # 2. Update Stephenson Link Gear & Reciprocating Engines
        target_link = 1.0 if target['ahead'] and target_recip > 0 else (-1.0 if target_recip < 0 else 0.0)
        self.stephenson_link_pos += (target_link - self.stephenson_link_pos) * min(1.0, 0.5 * dt)

        # Reciprocating engine acceleration (massive inertia of 1000-ton engines)
        accel = 2.5 * dt
        self.port_recip_rpm += (target_recip - self.port_recip_rpm) * min(1.0, accel)
        self.stbd_recip_rpm += (target_recip - self.stbd_recip_rpm) * min(1.0, accel)

        # Update crankshaft rotation
        self.port_crank_angle_rad = (self.port_crank_angle_rad + (self.port_recip_rpm * 2 * math.pi / 60.0) * dt) % (2 * math.pi)
        self.stbd_crank_angle_rad = (self.stbd_crank_angle_rad + (self.stbd_recip_rpm * 2 * math.pi / 60.0) * dt) % (2 * math.pi)

        # Calculate indicated horsepower (IHP)
        self.recip_ihp = 30000.0 * (abs(self.port_recip_rpm) / 75.0) ** 2.8

        # 3. Update Changeover Valves and Parsons Turbine
        # Turbine only engages in ahead operation when reciprocating engines produce exhaust steam
        if target['ahead'] and self.port_recip_rpm > 25.0:
            self.changeover_valves_open_to_turbine = True
            turbine_target = target_turbine * (self.port_recip_rpm / 75.0)
        else:
            # Changeover valves bypass exhaust steam directly to condensers
            self.changeover_valves_open_to_turbine = False
            turbine_target = 0.0

        turbine_accel = 1.8 * dt
        self.turbine_rpm += (turbine_target - self.turbine_rpm) * min(1.0, turbine_accel)
        self.turbine_shp = 16000.0 * (self.turbine_rpm / 165.0) ** 2.8 if self.changeover_valves_open_to_turbine else 0.0

        # 4. Synchronise Propellers
        self.port_wing_rpm = self.port_recip_rpm
        self.stbd_wing_rpm = self.stbd_recip_rpm
        self.centre_prop_rpm = self.turbine_rpm

        # 5. Vessel Speed & Wake
        vessel_inertia = 0.15 * dt
        self.speed_knots += (target_speed - self.speed_knots) * min(1.0, vessel_inertia)

        # 6. Funnel Smoke Simulation
        # Funnels 1, 2, 3: Dynamic coal smoke from active boilers
        active_density = 0.2 + 0.75 * self.boiler_firing_rate
        active_soot = 0.2 + 0.60 * (self.boiler_firing_rate ** 1.5)
        for fn in [1, 2, 3]:
            self.funnel_smoke[fn]['density'] = active_density
            self.funnel_smoke[fn]['soot_darkness'] = active_soot
            self.funnel_smoke[fn]['active'] = True
            self.funnel_smoke[fn]['is_dummy'] = False

        # Funnel 4: STRICT DUMMY RULE. NO COAL SMOKE!
        self.funnel_smoke[4]['density'] = 0.0
        self.funnel_smoke[4]['soot_darkness'] = 0.0
        self.funnel_smoke[4]['active'] = False
        self.funnel_smoke[4]['is_dummy'] = True
        self.funnel_smoke[4]['steam_wisps'] = 0.08 if self.changeover_valves_open_to_turbine else 0.02

    def get_piston_positions(self, crank_angle):
        """
        Calculates instantaneous normalized piston positions (0.0 to 1.0)
        for HP, IP, LP1, LP2 with Harland & Wolff crank sequence.
        Crank angles: HP=0°, IP=90°, LP1=180°, LP2=270° (balanced 4-crank arrangement).
        """
        r = self.stroke_m / 2.0
        l_rod = 3.81 # 12 ft 6 in connecting rod length
        piston_pos = {}
        cranks = {'HP': 0.0, 'IP': math.pi/2, 'LP1': math.pi, 'LP2': 3*math.pi/2}
        for cyl, offset in cranks.items():
            theta = crank_angle + offset
            # Slider-crank exact kinematics: y = r*cos(theta) + sqrt(l^2 - r^2*sin(theta)^2)
            y = r * math.cos(theta) + math.sqrt(max(0.0, l_rod**2 - (r * math.sin(theta))**2))
            # Normalize to 0 (bottom dead center) to 1 (top dead center)
            pos_norm = (y - (l_rod - r)) / (2 * r)
            piston_pos[cyl] = max(0.0, min(1.0, pos_norm))
        return piston_pos

    def get_status_dict(self):
        port_pistons = self.get_piston_positions(self.port_crank_angle_rad)
        stbd_pistons = self.get_piston_positions(self.stbd_crank_angle_rad)
        return {
            'order': self.telegraph_order,
            'speed_knots': round(self.speed_knots, 2),
            'boiler_pressure_psi': round(self.boiler_pressure_psi, 1),
            'boiler_firing_rate': round(self.boiler_firing_rate, 2),
            'port_recip_rpm': round(self.port_recip_rpm, 1),
            'stbd_recip_rpm': round(self.stbd_recip_rpm, 1),
            'turbine_rpm': round(self.turbine_rpm, 1),
            'total_power_hp': round(self.recip_ihp + self.turbine_shp, 0),
            'changeover_valves_to_turbine': self.changeover_valves_open_to_turbine,
            'propeller_wash_intensity': round(abs(self.speed_knots) / 22.5, 2),
            'funnel_smoke': self.funnel_smoke,
            'pistons': {'port': port_pistons, 'stbd': stbd_pistons}
        }

if __name__ == '__main__':
    sim = TitanicEngineSystem()
    print("Initial state (STOP):", sim.get_status_dict())
    sim.set_order('FULL_AHEAD')
    for _ in range(60):
        sim.update(1.0) # Simulate 60 seconds
    print("After 60s Full Ahead:", sim.get_status_dict())
