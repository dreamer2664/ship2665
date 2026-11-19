// runtime/src/camera_views.js
// Standardized Viewpoints for RMS Titanic (Yard No. 401)
// Automated Render Pipeline and Explorable Runtime Presets

export const CAMERA_VIEWS = {
  // Exterior Naval Architecture
  port_bow: {
    name: 'Port Bow Quarter',
    pos: [-140, 30, 290],
    target: [0, 19, 210],
    desc: 'Fine entrance lines, flared stem, port bower anchor, White Star livery'
  },
  starboard_bow: {
    name: 'Starboard Bow Quarter',
    pos: [140, 30, 290],
    target: [0, 19, 210],
    desc: 'Starboard bower anchor, forecastle sheer strake, Welin davits'
  },
  broadside_port: {
    name: 'Broadside Port Profile',
    pos: [-270, 24, 130],
    target: [0, 22, 130],
    desc: 'Full 882ft 9in profile, four raked funnels, two pole masts, sheer curve'
  },
  broadside_starboard: {
    name: 'Broadside Starboard Profile',
    pos: [270, 24, 130],
    target: [0, 22, 130],
    desc: 'Starboard profile showing Café Parisien windows and A-deck weather screen'
  },
  stern_propellers: {
    name: 'Stern Counter & Three Screws',
    pos: [28, 4.0, -22],
    target: [0, 5.5, 8],
    desc: 'Cruiser counter, 15.5m rudder, wing propellers (23.5ft) and centre propeller (16.5ft)'
  },
  aerial_three_quarter: {
    name: 'Aerial High Three-Quarter',
    pos: [180, 130, 260],
    target: [0, 25, 120],
    desc: 'Bird\'s eye view of Boat Deck, 20 lifeboats, funnel tops, and Marconi aerial'
  },
  waterline_low: {
    name: 'Waterline Low Angle',
    pos: [-55, 13, 270],
    target: [0, 19, 210],
    desc: 'Looming perspective from waterline showing 34ft 7in draught and bow flare'
  },

  // Superstructure & Deck Equipment
  bridge_navigating: {
    name: 'Navigating Bridge & Wheelhouse',
    pos: [0, 29.5, 186],
    target: [0, 28.8, 195],
    desc: 'Bridge wings, Chadburn engine telegraphs, telemotor helm, binnacle'
  },
  boat_deck_davits: {
    name: 'Boat Deck & Welin Davits',
    pos: [14.2, 29.2, 162],
    target: [12.0, 28.5, 184],
    desc: 'Welin double-acting quadrant davits, Class A lifeboats, white enamel houses'
  },
  funnels_rigging: {
    name: 'Funnels & Marconi Rigging',
    pos: [28, 42, 155],
    target: [0, 40, 132],
    desc: '1:12 rake, White Star buff casing, Willett-Bruce whistles, guy stays'
  },
  crows_nest: {
    name: 'Lookout Crow\'s Nest (Foremast)',
    pos: [0, 41.5, 218],
    target: [0, 25, 260],
    desc: '95ft above waterline vantage looking forward over the bow stem'
  },

  // Major Interiors & Passenger Spaces
  grand_staircase_dome: {
    name: 'Forward Grand Staircase & Glass Dome',
    pos: [0, 21.0, 161.0],
    target: [0, 27.2, 166.0],
    desc: 'Wrought iron glass dome, 50-light chandelier, Louis XIV oak paneling'
  },
  grand_staircase_clock: {
    name: 'Honour and Glory Crowning Time Clock',
    pos: [3.4, 25.2, 164.0],
    target: [0, 24.8, 171.85],
    desc: 'Carved allegorical clock on A-Deck landing, gilt bronze balustrades'
  },
  dining_saloon_1st: {
    name: 'First Class Dining Saloon',
    pos: [-9.0, 16.8, 126.0],
    target: [0, 16.0, 140.0],
    desc: '112ft Jacobean white carved paneling, multipane leaded windows, round tables'
  },
  smoking_room_1st: {
    name: 'First Class Smoking Room',
    pos: [0, 25.6, 88.0],
    target: [0, 25.4, 73.5],
    desc: 'Honduras mahogany boiserie, mother-of-pearl inlay, Wilkinson fireplace'
  },
  turkish_baths_pool: {
    name: 'Turkish Baths & Swimming Bath',
    pos: [6.0, 12.0, 146.0],
    target: [0, 10.5, 156.0],
    desc: 'Moorish arabesque ceramic tiles, teak loungers, heated saltwater pool'
  },
  gymnasium_boat_deck: {
    name: 'Gymnasium & Exercisers',
    pos: [4.0, 29.8, 157.0],
    target: [7.5, 29.5, 164.0],
    desc: 'Electric horse, camel, cycling machines with dials, rowing machine'
  },

  // Propulsion Engineering Plant
  boiler_room_6: {
    name: 'Boiler Room No. 6 (Stokehold)',
    pos: [0, 4.2, 186.0],
    target: [0, 3.8, 177.0],
    desc: 'Scotch marine double-ended boilers (15ft 9in dia), glowing furnaces, coal bunkers'
  },
  reciprocating_engine_room: {
    name: 'Reciprocating Engine Room',
    pos: [-5.5, 7.5, 52.0],
    target: [0, 6.0, 64.0],
    desc: 'Twin 4-crank triple expansion engines, 75in stroke, Stephenson link motion'
  },
  turbine_room: {
    name: 'Parsons Reaction Turbine Room',
    pos: [0, 5.0, 35.0],
    target: [0, 3.5, 43.5],
    desc: '16,000 SHP LP turbine, twin overhead copper steam trunks, surface condensers'
  },
  dynamo_room: {
    name: 'Electric Dynamo Room',
    pos: [0, 4.2, 18.0],
    target: [0, 3.2, 27.5],
    desc: 'Four 400 kW 100V DC steam dynamos, main switchboard distribution panels'
  },

  // Structural & Watertight Cutaways
  watertight_doors_cutaway: {
    name: 'Watertight Bulkheads & Lower Doors',
    pos: [18.0, 4.2, 78],
    target: [0, 3.5, 75],
    desc: 'Bulkhead K vertical sliding drop door, friction cataract, stiffeners'
  },
  longitudinal_cutaway: {
    name: 'Longitudinal Interior Cutaway',
    pos: [160, 22, 130],
    target: [0, 16, 130],
    desc: 'Internal view revealing all 10 deck levels, 15 bulkheads, and machinery spaces'
  },

  // Extreme Close-Ups
  closeup_welin_davit: {
    name: 'Extreme Close-Up: Welin Davit Gear',
    pos: [14.0, 29.2, 167.2],
    target: [12.6, 29.0, 167.8],
    desc: 'Quadrant quadrant gear teeth, brass screw spindle, steel pivot pins'
  },
  closeup_engine_valve_gear: {
    name: 'Extreme Close-Up: Stephenson Link Motion',
    pos: [-3.6, 4.2, 63.8],
    target: [-4.8, 4.5, 63.5],
    desc: 'Curved expansion link, eccentric rods, brass oil cups, polished steel slipper'
  }
};
