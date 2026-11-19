"""
models/naval_architecture.py
Naval Architecture Specification and Geometric Generator for RMS Titanic (Yard No. 401)
Maiden Voyage Configuration — April 1912

Origin (0, 0, 0):
  X = 0 at Ship Centerline (Starboard = +X, Port = -X)
  Y = 0 at Keel Base Line (Moulded bottom)
  Z = 0 at After Perpendicular (A.P. / Rudder Stock Centreline)
  Forward Perpendicular (F.P.) is at Z = +259.08 m (850 ft)
  Extreme length: Stemhead Z = +263.85 m, Stern Counter Taffrail Z = -5.21 m
  Total LOA = 269.06 m (882 ft 9 in)
  Moulded Beam = 28.04 m (92 ft 0 in); Extreme Breadth = 28.19 m (92 ft 6 in)
  Design Waterline Draught = 10.54 m (34 ft 7 in)
"""

import math
import json
import os

# Physical Constants & Principal Dimensions
LOA_METERS = 269.06        # 882 ft 9 in
LBP_METERS = 259.08        # 850 ft 0 in (Between Perpendiculars)
REGISTERED_LEN_M = 259.84  # 852.5 ft
EXTREME_BEAM_M = 28.19     # 92 ft 6 in
MOULDED_BEAM_M = 28.04     # 92 ft 0 in
DESIGN_DRAUGHT_M = 10.54   # 34 ft 7 in
DISPLACEMENT_TONS = 52310  # Imperial tons
GRT = 46328                # Gross Register Tonnage
NRT = 21831                # Net Register Tonnage

# Deck Elevations (Y above Keel Base Line at lowest point of sheer amidships)
DECK_ELEVATIONS = {
    'Keel': 0.00,
    'TankTop': 1.60,         # 63 inches amidships (1.98m / 78in under reciprocating engines)
    'Orlop': 4.50,
    'G_Deck': 7.20,          # Lower Deck
    'F_Deck': 9.80,          # Middle Deck
    'E_Deck': 12.40,         # Upper Deck ("Scotland Road")
    'D_Deck': 15.30,         # Saloon Deck (10'6" height to C amidships)
    'C_Deck': 18.50,         # Shelter Deck (64 ft 9 in = 19.74m at sheer minimum)
    'B_Deck': 21.65,         # Bridge Deck (Strength deck)
    'A_Deck': 24.40,         # Promenade Deck
    'Boat_Deck': 27.30,      # Boat Deck (92 ft 6 in above keel at bridge)
    'Officers_Roof': 29.80,  # Compass platform / Marconi roof
    'Funnel_Tops': 53.34,    # 175 ft above keel
    'Fore_Mast_Truck': 63.40,# 208 ft above keel
    'Main_Mast_Truck': 61.57,# 202 ft above keel
    'Crows_Nest': 29.00      # 95 ft above waterline (10.54 + 28.96 = 39.5m above keel)
}

# 15 Transverse Watertight Bulkheads (A through P) dividing into 16 Compartments
# Longitudinal Z coordinate in meters from A.P. (Z=0)
BULKHEADS = [
    {
        'id': 'A',
        'name': 'Collision Bulkhead A',
        'z': 245.0,
        'extends_to': 'C_Deck',
        'y_top': DECK_ELEVATIONS['C_Deck'],
        'doors_tt': 0,
        'doors_passenger': 0,
        'notes': 'Collision bulkhead forward. Heavily stiffened.'
    },
    {
        'id': 'B',
        'name': 'Bulkhead B',
        'z': 228.0,
        'extends_to': 'D_Deck',
        'y_top': DECK_ELEVATIONS['D_Deck'],
        'doors_tt': 0,
        'doors_passenger': 0,
        'notes': 'Divides No. 1 Hold from No. 2 Hold.'
    },
    {
        'id': 'C',
        'name': 'Bulkhead C',
        'z': 207.0,
        'extends_to': 'E_Deck',
        'y_top': DECK_ELEVATIONS['E_Deck'],
        'doors_tt': 0,
        'doors_passenger': 1,
        'notes': 'Divides No. 2 Hold from No. 3 Hold. Lower portion doubled as cofferdam.'
    },
    {
        'id': 'D',
        'name': 'Bulkhead D',
        'z': 186.0,
        'extends_to': 'E_Deck',
        'y_top': DECK_ELEVATIONS['E_Deck'],
        'doors_tt': 1,
        'doors_passenger': 1,
        'notes': 'Divides No. 3 Hold from Boiler Room 6. Double door protection via bunker passage.'
    },
    {
        'id': 'E',
        'name': 'Bulkhead E',
        'z': 168.0,
        'extends_to': 'E_Deck',
        'y_top': DECK_ELEVATIONS['E_Deck'],
        'doors_tt': 1,
        'doors_passenger': 1,
        'notes': 'Divides Boiler Room 6 from Boiler Room 5. WT door at 9ft bunker passage.'
    },
    {
        'id': 'F',
        'name': 'Bulkhead F',
        'z': 149.0,
        'extends_to': 'E_Deck',
        'y_top': DECK_ELEVATIONS['E_Deck'],
        'doors_tt': 1,
        'doors_passenger': 2,
        'notes': 'Divides Boiler Room 5 from Boiler Room 4. WT door at 9ft bunker passage.'
    },
    {
        'id': 'G',
        'name': 'Bulkhead G',
        'z': 130.0,
        'extends_to': 'E_Deck',
        'y_top': DECK_ELEVATIONS['E_Deck'],
        'doors_tt': 1,
        'doors_passenger': 1,
        'notes': 'Divides Boiler Room 4 from Boiler Room 3. WT door at 9ft bunker passage.'
    },
    {
        'id': 'H',
        'name': 'Bulkhead H',
        'z': 111.0,
        'extends_to': 'E_Deck',
        'y_top': DECK_ELEVATIONS['E_Deck'],
        'doors_tt': 1,
        'doors_passenger': 2,
        'notes': 'Divides Boiler Room 3 from Boiler Room 2. WT door at 9ft bunker passage.'
    },
    {
        'id': 'J',
        'name': 'Bulkhead J',
        'z': 92.0,
        'extends_to': 'E_Deck',
        'y_top': DECK_ELEVATIONS['E_Deck'],
        'doors_tt': 1,
        'doors_passenger': 2,
        'notes': 'Divides Boiler Room 2 from Boiler Room 1. WT door at 9ft bunker passage.'
    },
    {
        'id': 'K',
        'name': 'Bulkhead K',
        'z': 75.0,
        'extends_to': 'D_Deck',
        'y_top': DECK_ELEVATIONS['D_Deck'],
        'doors_tt': 1,
        'doors_passenger': 2,
        'notes': 'Divides Boiler Room 1 from Reciprocating Engine Room. WT drop door.'
    },
    {
        'id': 'L',
        'name': 'Bulkhead L',
        'z': 52.0,
        'extends_to': 'D_Deck',
        'y_top': DECK_ELEVATIONS['D_Deck'],
        'doors_tt': 1,
        'doors_passenger': 2,
        'notes': 'Divides Reciprocating Engine Room from Turbine Engine Room.'
    },
    {
        'id': 'M',
        'name': 'Bulkhead M',
        'z': 35.0,
        'extends_to': 'D_Deck',
        'y_top': DECK_ELEVATIONS['D_Deck'],
        'doors_tt': 1,
        'doors_passenger': 3,
        'notes': 'Divides Turbine Room from Electric Dynamo Room.'
    },
    {
        'id': 'N',
        'name': 'Bulkhead N',
        'z': 20.0,
        'extends_to': 'D_Deck',
        'y_top': DECK_ELEVATIONS['D_Deck'],
        'doors_tt': 1,
        'doors_passenger': 4,
        'notes': 'Divides Electric Dynamo Room from No. 4 Hold / Shaft Tunnels.'
    },
    {
        'id': 'O',
        'name': 'Bulkhead O',
        'z': 8.0,
        'extends_to': 'D_Deck',
        'y_top': DECK_ELEVATIONS['D_Deck'],
        'doors_tt': 1,
        'doors_passenger': 1,
        'notes': 'Divides No. 4 Hold from No. 5 Hold.'
    },
    {
        'id': 'P',
        'name': 'Bulkhead P',
        'z': -2.0,
        'extends_to': 'D_Deck',
        'y_top': DECK_ELEVATIONS['D_Deck'],
        'doors_tt': 0,
        'doors_passenger': 0,
        'notes': 'Afterpeak bulkhead around rudder stock.'
    }
]

# 16 Main Watertight Compartments
COMPARTMENTS = [
    {'index': 1, 'name': 'Forepeak Tank', 'z_min': 245.0, 'z_max': 263.85, 'type': 'peak_ballast'},
    {'index': 2, 'name': 'No. 1 Hold', 'z_min': 228.0, 'z_max': 245.0, 'type': 'cargo_hold'},
    {'index': 3, 'name': 'No. 2 Hold', 'z_min': 207.0, 'z_max': 228.0, 'type': 'cargo_hold'},
    {'index': 4, 'name': 'No. 3 Hold (Mail & Specie)', 'z_min': 186.0, 'z_max': 207.0, 'type': 'cargo_hold'},
    {'index': 5, 'name': 'Boiler Room No. 6', 'z_min': 168.0, 'z_max': 186.0, 'type': 'boiler_room', 'boilers': 4, 'furnaces': 24},
    {'index': 6, 'name': 'Boiler Room No. 5', 'z_min': 149.0, 'z_max': 168.0, 'type': 'boiler_room', 'boilers': 5, 'furnaces': 30},
    {'index': 7, 'name': 'Boiler Room No. 4', 'z_min': 130.0, 'z_max': 149.0, 'type': 'boiler_room', 'boilers': 5, 'furnaces': 30},
    {'index': 8, 'name': 'Boiler Room No. 3', 'z_min': 111.0, 'z_max': 130.0, 'type': 'boiler_room', 'boilers': 5, 'furnaces': 30},
    {'index': 9, 'name': 'Boiler Room No. 2', 'z_min': 92.0, 'z_max': 111.0, 'type': 'boiler_room', 'boilers': 5, 'furnaces': 30},
    {'index': 10, 'name': 'Boiler Room No. 1', 'z_min': 75.0, 'z_max': 92.0, 'type': 'boiler_room', 'boilers': 5, 'furnaces': 15, 'single_ended': True},
    {'index': 11, 'name': 'Reciprocating Engine Room', 'z_min': 52.0, 'z_max': 75.0, 'type': 'engine_room'},
    {'index': 12, 'name': 'Turbine Engine Room', 'z_min': 35.0, 'z_max': 52.0, 'type': 'engine_room'},
    {'index': 13, 'name': 'Electric Dynamo Room', 'z_min': 20.0, 'z_max': 35.0, 'type': 'machinery_room'},
    {'index': 14, 'name': 'No. 4 Hold / Tunnel Space', 'z_min': 8.0, 'z_max': 20.0, 'type': 'cargo_tunnel'},
    {'index': 15, 'name': 'No. 5 Hold', 'z_min': -2.0, 'z_max': 8.0, 'type': 'cargo_hold'},
    {'index': 16, 'name': 'Afterpeak Tank / Steering Gear', 'z_min': -5.21, 'z_max': -2.0, 'type': 'peak_steering'}
]

# Sheer Curve Function
def get_sheer_y(z):
    """Calculates sheer rise above midships (Z ~ 130m)."""
    mid_z = 130.0
    dz = z - mid_z
    if dz > 0:
        # Forward sheer: rises ~2.8m (9.2 ft) at the stem
        t = dz / (263.85 - mid_z)
        return 2.80 * (t ** 2.1)
    else:
        # Aft sheer: rises ~1.4m (4.6 ft) at the stern counter
        t = (-dz) / (mid_z - (-5.21))
        return 1.40 * (t ** 2.0)

# Hull Half-Breadth Function b(z, y)
def get_hull_half_breadth(z, y):
    """
    Returns half-breadth (in meters) for station at longitudinal Z and height Y.
    Implements authentic Olympic-class hull lines:
    - Parallel middle body between Z ~ 90m and Z ~ 170m (half breadth = 14.02m)
    - Entrance forward: fine clipper-flared bow lines with hollow waterline forward
    - Run aft: fine run to cruiser counter and propeller apertures
    - Flat bottom with bilge radius of ~1.8m, vertical sides with slight tumblehome at top decks
    """
    if z < -5.21 or z > 263.85:
        return 0.0
    if y < 0:
        return 0.0

    max_b = MOULDED_BEAM_M / 2.0  # 14.02 m

    # Longitudinal waterline profile envelope W(z)
    if 95.0 <= z <= 165.0:
        long_factor = 1.0
    elif z > 165.0:
        t = (z - 165.0) / (263.85 - 165.0)
        # Smooth cubic entrance curve to sharp stem
        long_factor = max(0.0, 1.0 - (1.1 * t**2 - 0.1 * t**3))
    else: # z < 95.0
        t = (95.0 - z) / (95.0 - (-5.21))
        # Smooth run to stern counter
        long_factor = max(0.0, 1.0 - (1.05 * t**1.8 - 0.05 * t**3))

    b_section = max_b * math.sqrt(max(0.0, min(1.0, long_factor)))

    # Vertical section profile at height y
    # Deck sheer at station z
    deck_top = DECK_ELEVATIONS['C_Deck'] + get_sheer_y(z)
    if y > deck_top + 10.0:
        return 0.0

    # Vertical shape factor:
    # Keel flat plate at bottom: narrow half-breadth at y=0 (~0.4m)
    if y <= 0.2:
        return min(b_section, 0.45 * (y / 0.2))
    
    # Bilge turn between y=0.5m and y=3.5m
    if y < 3.5:
        u = y / 3.5
        v_factor = math.pow(u, 0.35)
    elif y <= DECK_ELEVATIONS['C_Deck']:
        v_factor = 1.0
    else:
        # Slight tumblehome on upper decks
        v_factor = 1.0 - 0.02 * ((y - DECK_ELEVATIONS['C_Deck']) / 10.0)

    # Flare forward at bow (high Y, high Z)
    if z > 220.0 and y > DESIGN_DRAUGHT_M:
        flare_t = (z - 220.0) / (263.85 - 220.0)
        flare_y = (y - DESIGN_DRAUGHT_M) / (DECK_ELEVATIONS['C_Deck'] - DESIGN_DRAUGHT_M + 5.0)
        flare_bonus = 1.8 * flare_t * max(0.0, flare_y)
        return min(max_b, b_section * v_factor + flare_bonus)

    # Stern counter overhang (z < 10.0, y > 7.0)
    if z < 10.0:
        if y < 6.0:
            # Deadwood / propeller aperture tapering
            deadwood_factor = max(0.1, y / 6.0)
            return b_section * deadwood_factor * 0.4
        else:
            return b_section * v_factor

    return max(0.0, b_section * v_factor)

# Funnel Specifications
FUNNELS = [
    {
        'number': 1,
        'z_centre': 175.5,
        'boiler_uptake': 'Boiler Room 6 & 5',
        'is_dummy': False,
        'smoke_emitter': True,
        'whistle': True,
        'rake_rad': math.atan(1.0 / 12.0)
    },
    {
        'number': 2,
        'z_centre': 148.0,
        'boiler_uptake': 'Boiler Room 4 & 3',
        'is_dummy': False,
        'smoke_emitter': True,
        'whistle': True,
        'rake_rad': math.atan(1.0 / 12.0)
    },
    {
        'number': 3,
        'z_centre': 120.5,
        'boiler_uptake': 'Boiler Room 2 & 1',
        'is_dummy': False,
        'smoke_emitter': True,
        'whistle': False,
        'rake_rad': math.atan(1.0 / 12.0)
    },
    {
        'number': 4,
        'z_centre': 93.0,
        'boiler_uptake': None,
        'is_dummy': True,
        'smoke_emitter': False, # DUMMY: NO COAL SMOKE! Only faint engine/galley vent steam
        'whistle': False,
        'rake_rad': math.atan(1.0 / 12.0),
        'internal_use': 'Ventilation for turbine casing, first class smoking room fireplace flue, galleys'
    }
]

# Lifeboats Specification (20 Boats, 16 Welin Davit Sets)
LIFEBOATS = [
    # Starboard Forward Group (Boat Deck)
    {'id': 'No.1', 'side': 'Starboard', 'type': 'Emergency Cutter', 'length_ft': 25, 'capacity': 40, 'z': 195.0, 'swung_out': True},
    {'id': 'Collapsible_C', 'side': 'Starboard', 'type': 'Engelhardt Collapsible', 'length_ft': 27.5, 'capacity': 47, 'z': 190.0, 'deck': 'Boat_Deck'},
    {'id': 'No.3', 'side': 'Starboard', 'type': 'Class A Wooden', 'length_ft': 30, 'capacity': 65, 'z': 180.0},
    {'id': 'No.5', 'side': 'Starboard', 'type': 'Class A Wooden', 'length_ft': 30, 'capacity': 65, 'z': 168.0},
    {'id': 'No.7', 'side': 'Starboard', 'type': 'Class A Wooden', 'length_ft': 30, 'capacity': 65, 'z': 156.0},
    # Starboard Aft Group (Boat Deck)
    {'id': 'No.9', 'side': 'Starboard', 'type': 'Class A Wooden', 'length_ft': 30, 'capacity': 65, 'z': 105.0},
    {'id': 'No.11', 'side': 'Starboard', 'type': 'Class A Wooden', 'length_ft': 30, 'capacity': 65, 'z': 93.0},
    {'id': 'No.13', 'side': 'Starboard', 'type': 'Class A Wooden', 'length_ft': 30, 'capacity': 65, 'z': 81.0},
    {'id': 'No.15', 'side': 'Starboard', 'type': 'Class A Wooden', 'length_ft': 30, 'capacity': 65, 'z': 69.0},
    # Port Forward Group (Boat Deck)
    {'id': 'No.2', 'side': 'Port', 'type': 'Emergency Cutter', 'length_ft': 25, 'capacity': 40, 'z': 195.0, 'swung_out': True},
    {'id': 'Collapsible_D', 'side': 'Port', 'type': 'Engelhardt Collapsible', 'length_ft': 27.5, 'capacity': 47, 'z': 190.0, 'deck': 'Boat_Deck'},
    {'id': 'No.4', 'side': 'Port', 'type': 'Class A Wooden', 'length_ft': 30, 'capacity': 65, 'z': 180.0},
    {'id': 'No.6', 'side': 'Port', 'type': 'Class A Wooden', 'length_ft': 30, 'capacity': 65, 'z': 168.0},
    {'id': 'No.8', 'side': 'Port', 'type': 'Class A Wooden', 'length_ft': 30, 'capacity': 65, 'z': 156.0},
    # Port Aft Group (Boat Deck)
    {'id': 'No.10', 'side': 'Port', 'type': 'Class A Wooden', 'length_ft': 30, 'capacity': 65, 'z': 105.0},
    {'id': 'No.12', 'side': 'Port', 'type': 'Class A Wooden', 'length_ft': 30, 'capacity': 65, 'z': 93.0},
    {'id': 'No.14', 'side': 'Port', 'type': 'Class A Wooden', 'length_ft': 30, 'capacity': 65, 'z': 81.0},
    {'id': 'No.16', 'side': 'Port', 'type': 'Class A Wooden', 'length_ft': 30, 'capacity': 65, 'z': 69.0},
    # Officers Quarters Roof (Float-off collapsibles)
    {'id': 'Collapsible_A', 'side': 'Starboard', 'type': 'Engelhardt Collapsible', 'length_ft': 27.5, 'capacity': 47, 'z': 198.0, 'deck': 'Officers_Roof'},
    {'id': 'Collapsible_B', 'side': 'Port', 'type': 'Engelhardt Collapsible', 'length_ft': 27.5, 'capacity': 47, 'z': 198.0, 'deck': 'Officers_Roof'}
]

def export_specifications(filepath='/home/user/ship2665/models/ship_specs.json'):
    data = {
        'ship_name': 'RMS Titanic',
        'builder': 'Harland and Wolff, Queen Island, Belfast',
        'yard_number': 401,
        'configuration_date': '1912-04-10 (Maiden Voyage Southampton Departure)',
        'dimensions': {
            'length_overall_m': LOA_METERS,
            'length_between_perpendiculars_m': LBP_METERS,
            'registered_length_m': REGISTERED_LEN_M,
            'extreme_breadth_m': EXTREME_BEAM_M,
            'moulded_breadth_m': MOULDED_BEAM_M,
            'design_draught_m': DESIGN_DRAUGHT_M,
            'full_load_displacement_tons': DISPLACEMENT_TONS,
            'gross_register_tonnage': GRT,
            'net_register_tonnage': NRT
        },
        'deck_elevations': DECK_ELEVATIONS,
        'bulkheads': BULKHEADS,
        'compartments': COMPARTMENTS,
        'funnels': FUNNELS,
        'lifeboats': LIFEBOATS,
        'propulsion': {
            'wing_propellers': {
                'count': 2,
                'blades': 3,
                'diameter_ft': 23.5,
                'material': 'Manganese bronze',
                'drive': 'Reciprocating 4-crank triple expansion engines',
                'ihp_total': 30000,
                'rpm_normal': 75
            },
            'centre_propeller': {
                'count': 1,
                'blades': 3,
                'diameter_ft': 16.5,
                'material': 'Manganese bronze',
                'drive': 'Parsons low-pressure reaction turbine',
                'shp_total': 16000,
                'rpm_normal': 165
            },
            'boilers': {
                'total_boilers': 29,
                'double_ended': 24,
                'single_ended': 5,
                'total_furnaces': 159,
                'working_pressure_psi': 215,
                'heating_surface_sqft': 144142,
                'grate_surface_sqft': 3466
            },
            'dynamos': {
                'main_sets': 4,
                'capacity_kw_each': 400,
                'voltage_dc': 100,
                'emergency_sets': 2,
                'emergency_capacity_kw': 30
            }
        }
    }
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)
    print(f'Ship specification exported to {filepath}')

if __name__ == '__main__':
    export_specifications()
