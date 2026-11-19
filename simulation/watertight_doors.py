"""
simulation/watertight_doors.py
Watertight Bulkhead Subdivision and Door Operation Simulation for RMS Titanic (Yard No. 401)
Based on 1912 British Wreck Commissioner Inquiry Report (botRepWC.php & botRepStructure.php).

Features:
- 15 transverse watertight bulkheads (A to P) dividing hull into 16 main compartments
- 12 Harland & Wolff vertical sliding drop doors in machinery & boiler spaces
- Bridge master electric release switch with red warning indicators
- 10-second warning bell alarm prior to drop
- Gravity drop controlled by friction cataract cylinders (25-30 seconds descent)
- Local emergency hand release levers
- Bilge automatic float triggers beneath tank top floor plates
"""

import time

class WatertightDoor:
    def __init__(self, door_id, bulkhead, location, deck_level='TankTop', has_bridge_release=True):
        self.door_id = door_id
        self.bulkhead = bulkhead
        self.location = location
        self.deck_level = deck_level
        self.has_bridge_release = has_bridge_release

        # Operational state: 'OPEN', 'ALARMING', 'CLOSING', 'CLOSED'
        self.state = 'OPEN'
        self.position = 1.0  # 1.0 = fully open, 0.0 = fully closed
        self.alarm_timer = 0.0
        self.close_duration = 27.5 # 25 to 30 seconds per Inquiry Report
        self.cataract_functional = True
        self.bilge_float_triggered = False

    def trigger_close(self):
        if self.state in ['OPEN']:
            self.state = 'ALARMING'
            self.alarm_timer = 10.0 # 10-second warning bell rings before release

    def trigger_emergency_hand_lever(self):
        """Local hand release bypasses bridge delay and immediately begins gravity drop."""
        if self.state != 'CLOSED':
            self.state = 'CLOSING'

    def trigger_float_switch(self):
        """Bilge water float rises and trips mechanical release clutch."""
        self.bilge_float_triggered = True
        if self.state != 'CLOSED':
            self.state = 'CLOSING'

    def update(self, dt):
        if self.state == 'ALARMING':
            self.alarm_timer -= dt
            if self.alarm_timer <= 0:
                self.state = 'CLOSING'
                dt_remain = -self.alarm_timer
                if dt_remain > 0:
                    drop_rate = 1.0 / self.close_duration
                    self.position = max(0.0, self.position - drop_rate * dt_remain)
        elif self.state == 'CLOSING':
            # Drop down in tracks controlled by friction cataract
            drop_rate = 1.0 / self.close_duration
            self.position = max(0.0, self.position - drop_rate * dt)
            if self.position <= 0.0:
                self.state = 'CLOSED'
                self.position = 0.0

    def open_manually(self):
        """Doors can be cranked back up manually from upper decks or local gear."""
        self.state = 'OPEN'
        self.position = 1.0
        self.bilge_float_triggered = False

class WatertightSystem:
    def __init__(self):
        self.bridge_switch_closed = False
        self.warning_bell_ringing = False
        self.doors = []
        self._init_doors()

    def _init_doors(self):
        # 12 Lower Vertical Sliding Doors on Tank Top (Boiler & Engine Rooms)
        # As enumerated in 1912 British Inquiry botRepStructure.php and botRepWC.php
        lower_doors_config = [
            ('WTD-D1', 'D', 'Passage forward of Boiler Room 6 to Hold 3', True),
            ('WTD-D2', 'D', 'Bunker passage after end into Boiler Room 6', True),
            ('WTD-E',  'E', 'Bunker passage between Boiler Room 6 & 5', True),
            ('WTD-F',  'F', 'Bunker passage between Boiler Room 5 & 4', True),
            ('WTD-G',  'G', 'Bunker passage between Boiler Room 4 & 3', True),
            ('WTD-H',  'H', 'Bunker passage between Boiler Room 3 & 2', True),
            ('WTD-J',  'J', 'Bunker passage between Boiler Room 2 & 1', True),
            ('WTD-K',  'K', 'Between Boiler Room 1 & Reciprocating Engine Room', True),
            ('WTD-L',  'L', 'Between Reciprocating Engine Room & Turbine Room', True),
            ('WTD-M',  'M', 'Between Turbine Room & Electric Dynamo Room', True),
            ('WTD-N',  'N', 'Between Electric Dynamo Room & Shaft Tunnels', True),
            ('WTD-O',  'O', 'Between Shaft Tunnel & Hold 5', True),
        ]
        for did, bh, loc, bridge in lower_doors_config:
            self.doors.append(WatertightDoor(did, bh, loc, deck_level='TankTop', has_bridge_release=bridge))

        # Additional Upper Deck Sliding Watertight Doors on E and D Decks
        upper_doors = [
            ('WTD-C-E', 'C', 'Upper Deck E Bulkhead C Crew Alleyway', 'E_Deck', False),
            ('WTD-D-E', 'D', 'Upper Deck E Bulkhead D Firemen Passage', 'E_Deck', False),
            ('WTD-E-E', 'E', 'Upper Deck E Bulkhead E Working Passage', 'E_Deck', False),
            ('WTD-K-D1', 'K', 'Saloon Deck D Bulkhead K Starboard Passage', 'D_Deck', False),
            ('WTD-K-D2', 'K', 'Saloon Deck D Bulkhead K Port Passage', 'D_Deck', False),
            ('WTD-L-D1', 'L', 'Saloon Deck D Bulkhead L Starboard Alleyway', 'D_Deck', False),
            ('WTD-L-D2', 'L', 'Saloon Deck D Bulkhead L Port Alleyway', 'D_Deck', False),
        ]
        for did, bh, loc, deck, bridge in upper_doors:
            self.doors.append(WatertightDoor(did, bh, loc, deck_level=deck, has_bridge_release=bridge))

    def trigger_bridge_switch(self):
        """Captain or Officer of the Watch activates the bridge watertight door master switch."""
        self.bridge_switch_closed = True
        self.warning_bell_ringing = True
        for door in self.doors:
            if door.has_bridge_release:
                door.trigger_close()

    def update(self, dt):
        any_alarming = False
        for door in self.doors:
            door.update(dt)
            if door.state in ['ALARMING', 'CLOSING']:
                any_alarming = True
        self.warning_bell_ringing = any_alarming

    def get_status_summary(self):
        return {
            'bridge_switch_closed': self.bridge_switch_closed,
            'warning_bell_ringing': self.warning_bell_ringing,
            'total_doors': len(self.doors),
            'doors_open': sum(1 for d in self.doors if d.state == 'OPEN'),
            'doors_closing': sum(1 for d in self.doors if d.state in ['ALARMING', 'CLOSING']),
            'doors_closed': sum(1 for d in self.doors if d.state == 'CLOSED'),
            'doors': [
                {
                    'id': d.door_id,
                    'bulkhead': d.bulkhead,
                    'deck': d.deck_level,
                    'state': d.state,
                    'position': round(d.position, 2),
                    'float_triggered': d.bilge_float_triggered
                }
                for d in self.doors
            ]
        }

if __name__ == '__main__':
    wts = WatertightSystem()
    print("Initial status:", wts.get_status_summary())
    print("\nActivating Bridge Master Switch...")
    wts.trigger_bridge_switch()
    for t in [2, 10, 20, 35]:
        wts.update(t)
        print(f"Status after t={t}s elapsed:", wts.get_status_summary())
