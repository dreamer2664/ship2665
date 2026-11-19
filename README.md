# RMS Titanic (Yard No. 401) — Historical 3D Reconstruction & Engineering Simulation

[![Maiden Voyage Configuration: 10 April 1912](https://img.shields.io/badge/Configuration-10_April_1912_Southampton-0a2540.svg)](evidence/evidence_ledger.md)
[![Naval Architecture: Harland & Wolff Yard 401](https://img.shields.io/badge/Yard_401-Harland_%26_Wolff_Belfast-c59b27.svg)](models/ship_specs.json)
[![Test Suite: 19 Passed](https://img.shields.io/badge/Pytest-19_Passed-brightgreen.svg)](tests/)
[![Render Pipeline: Approved Final](https://img.shields.io/badge/Renders-25_Verified_Views-blue.svg)](renders/final/manifest.json)

An authentic, museum-grade, photorealistic 3D architectural reconstruction and mechanical engineering simulation of **RMS Titanic** in her exact maiden-voyage departure configuration from Southampton on **10 April 1912**.

Every structural dimension, machinery specification, bulkhead elevation, hull curve, and interior space is rigorously derived from primary historical records—including the **1912 British Wreck Commissioner's Inquiry** (*Mersey Report*), the **1912 United States Senate Inquiry**, original **Harland & Wolff** construction plans and Yard Specification No. 401, contemporary technical documentation (*The Shipbuilder*, Midsummer 1911), and Father Francis Browne's April 1912 photographs.

---

## Table of Contents
1. [Maiden-Voyage Historical Configuration](#maiden-voyage-historical-configuration)
2. [Naval Architecture & Engineering Specifications](#naval-architecture--engineering-specifications)
3. [Historical Discrepancies & Conventions](#historical-discrepancies--conventions)
4. [Evidence Discipline & Archival Ledger](#evidence-discipline--archival-ledger)
5. [3D Simulation & Interactive WebGL Runtime](#3d-simulation--interactive-webgl-runtime)
6. [Propulsion Plant & Mechanical Systems](#propulsion-plant--mechanical-systems)
7. [Automated Multi-Generation Render Pipeline](#automated-multi-generation-render-pipeline)
8. [Visual QA & Defect Tracking Log](#visual-qa--defect-tracking-log)
9. [Automated Test Suite & Verification](#automated-test-suite--verification)
10. [Repository Structure](#repository-structure)
11. [Installation & Execution Guide](#installation--execution-guide)
12. [Primary Archival References](#primary-archival-references)

---

## Maiden-Voyage Historical Configuration

This reconstruction captures RMS Titanic at the moment of her departure from Berth 44, Southampton, at noon on Wednesday, 10 April 1912:
- **Hull & Livery:** White Star Line livery with deep charcoal-black hull topsides (`#161616`), anti-fouling red bottom plating (`#781812`), crisp white superstructure (`#f5f5f2`), varnished teak deckhouses and sheer strake (`#5a3d28`), and buff/mustard funnels (`#cb8c3e`) with black smoke bands occupying the top 1/6th of funnel height.
- **Enclosed Promenade (A Deck):** Forward 192 feet of the A-deck promenade are fitted with Harland & Wolff's newly designed steel screen with sliding glazed windows—installed in March 1912 to shield First Class passengers from Atlantic spray (readily distinguishing Titanic from sister ship RMS Olympic).
- **Expanded B Deck Staterooms:** Port and starboard B-deck forward suites are extended outboard to the hull shell, replacing Olympic's continuous open B-deck promenade and introducing the First Class À la Carte Restaurant, Café Parisien, and private promenade verandas.
- **Navigating Bridge & Forecastle:** Fitted with Kelvin magnetic compass binnacle, telegraph columns, Willett-Bruce whistle lanyard controllers, forward well deck, cargo cranes, and spare anchors.
- **Lifeboat Allocation (20 Boats Total):** Exactly 14 standard 30-foot wooden lifeboats (clinker-built, 65 persons capacity each), 2 emergency 25-foot cutters (40 persons each), and 4 Engelhardt collapsible canvas-sided boats (47 persons each), mounted on 16 sets of Welin patent double-acting quadrant davits (total certified capacity: 1,178 persons).

---

## Naval Architecture & Engineering Specifications

| Parameter | Imperial Measurement | Metric Measurement | Archival Citation |
|:---|:---|:---|:---|
| **Length Overall (LOA)** | 882 ft 9 in | 269.06 m | H&W Yard 401 Builder's Certificate |
| **Length Between Perpendiculars (LPP)**| 850 ft 0 in | 259.08 m | H&W Rigging & General Arrangement Plan |
| **Registered Length (B.o.T.)** | 852.5 ft | 259.84 m | 1912 British Inquiry (Report p. 11) |
| **Moulded Beam** | 92 ft 0 in | 28.04 m | H&W Midship Framing Section |
| **Extreme Breadth** | 92 ft 6 in | 28.19 m | 1912 British Inquiry (Report p. 11) |
| **Moulded Depth (C Deck Sheer)** | 64 ft 9 in | 19.74 m | 1912 British Inquiry (Report p. 11) |
| **Depth of Hold** | 59.58 ft (59 ft 7 in)| 18.16 m | Board of Trade Certificate |
| **Maiden Voyage Draught** | 34 ft 7 in | 10.54 m | 1912 British Inquiry (Report p. 11) |
| **Full Load Displacement** | 52,310 Imperial tons | 53,149 tonnes | 1912 British Inquiry (Report p. 11) |
| **Gross Register Tonnage (GRT)** | 46,328 Register Tons | 131,189 m³ vol. | Board of Trade Certificate |
| **Net Register Tonnage (NRT)** | 21,831 Register Tons | 61,819 m³ vol. | Board of Trade Certificate |
| **Keel to Navigating Bridge** | 92 ft 6 in | 28.19 m | H&W Profile Drawing |
| **Keel to Funnel Tops** | 175 ft 0 in | 53.34 m | H&W Profile Drawing |
| **Keel to Mastheads** | 208 ft 0 in (Fore) | 63.40 m | H&W Rigging Plan |
| **Double Bottom Depth (General)** | 5 ft 4 in (64 in) | 1.625 m | 1912 British Inquiry (Report p. 12) |
| **Double Bottom Depth (Machinery)** | 6 ft 3 in (75 in) | 1.905 m | 1912 British Inquiry (Report p. 12) |
| **Watertight Bulkheads** | 15 transverse (A to P) | 16 compartments | 1912 British Inquiry (Report p. 12–14) |
| **Main Boilers** | 24 double-ended, 5 single-ended | 159 furnaces | 1912 British Inquiry (Report p. 15) |
| **Working Steam Pressure** | 215 psi gauge | 1.48 MPa | 1912 British Inquiry (Report p. 15) |
| **Main Engines** | Twin 4-crank triple expansion + Parsons LP reaction turbine | 3 shafts | 1912 British Inquiry (Report p. 15–16) |
| **Total Registered Power** | 46,000 IHP/SHP normal | 51,000+ max | H&W Engineering Specifications |

---

## Historical Discrepancies & Conventions

### 1. Registered Length (852.5 ft) vs. Length Overall (882.75 ft)
A pervasive error across secondary literature conflates statutory Board of Trade Registered Length (852.5 ft, measured along the tonnage deck from fore part of stem head to after side of rudder post) with extreme Length Overall (882 ft 9 in / 269.06 m, measured from extreme forward tip of the stem plate to the outermost overhang of the elliptical counter stern). This model explicitly implements both standards with correct perpendicular baselines.

### 2. Displacement (52,310 tons) vs. Gross Tonnage (46,328 GRT)
Displacement is a measure of physical ship weight (equal to the mass of displaced seawater, 52,310 Imperial tons at 34 ft 7 in maiden voyage draught). Gross Register Tonnage is a volumetric measure of internal enclosed revenue-earning volume (100 cubic feet per register ton). Titanic was 1,004 GRT larger than Olympic (45,324 GRT) solely because of the enclosed A-deck forward screen and expanded B-deck suites, even though both shared identical moulded hull forms.

### 3. Funnel No. 4 Dummy Rule
The fourth funnel is non-steaming: it provided mechanical ventilation for the turbine room casing, auxiliary galleys, and the flue for the First Class Smoking Room coal fireplace. Only Funnels 1, 2, and 3 emit dark bituminous coal smoke from the 159 boiler furnaces.

### 4. Watertight Bulkhead Terminations
Contrary to popular assumption, Titanic's bulkheads were not built to the Boat Deck:
- Bulkhead A (Collision): Extends to **C Deck** (18.5 m above keel).
- Bulkhead B: Extends to **D Deck** (15.3 m above keel).
- Bulkheads C, D, E, F, G, H, J: Extend to **E Deck** (12.4 m above keel).
- Bulkheads K, L, M, N, O, P: Extend to **D Deck** (15.3 m above keel).

---

## Evidence Discipline & Archival Ledger

The repository adheres to strict historical evidence discipline. Secondary models, films, and fan art were excluded from reference. Every architectural and mechanical feature is cataloged in the structured Evidence Ledger:
- Machine-readable JSON: [`evidence/evidence_ledger.json`](evidence/evidence_ledger.json)
- Human-readable Markdown: [`evidence/evidence_ledger.md`](evidence/evidence_ledger.md)
- Complete Discrepancy & Convention Audit: [`evidence/discrepancies_and_conventions.md`](evidence/discrepancies_and_conventions.md)

Primary source materials from the 1912 British Inquiry have been preserved locally in [`references/british_inquiry/`](references/british_inquiry/).

---

## 3D Simulation & Interactive WebGL Runtime

The interactive 3D simulation is delivered via a self-contained, browser-based WebGL application built on Three.js:
- **Entry Point:** [`runtime/index.html`](runtime/index.html)
- **Production Bundle:** [`runtime/bundle.js`](runtime/bundle.js) (single-file distribution built with esbuild)
- **Modular Sources:**
  - `runtime/src/main.js`: Core simulation loop, telemetry HUD, Chadburn telegraph, watertight door controller, and camera manager.
  - `runtime/src/ship_geometry.js`: Parametric construction of the continuous hull shell, sheer strake, decks, funnels, rigging, davits, and hollow interior compartments.
  - `runtime/src/materials.js`: Physically Based Rendering (PBR) materials using historical White Star Line color formulas.
  - `runtime/src/ocean_system.js`: Multiscale Gerstner wave ocean simulation with dynamic buoyancy solver and propeller wash.
  - `runtime/src/smoke_system.js`: Particle simulation enforcing active coal smoke on Funnels 1–3 and light thermal haze on Funnel 4.
  - `runtime/src/audio_system.js`: Web Audio synthesizer providing reciprocating engine thrum, turbine hum, ocean swell, Chadburn bells, and Willett-Bruce steam whistles.
  - `runtime/src/camera_views.js`: 25 calibrated architectural, engineering, and interior inspection views.

### Keyboard & Mouse Controls
| Input | Action |
|:---|:---|
| **Left Click + Drag** | Orbit / inspect view around focal target |
| **Right Click + Drag** | Pan camera |
| **Mouse Wheel** | Zoom in / out |
| **Number Keys 1–7** | Chadburn Telegraph: `FULL ASTERN` (1) to `FULL AHEAD` (7) |
| **Key D** | Toggle Bridge Watertight Door Switch (initiates alarm and gravity closure) |
| **Key C** | Cycle Cutaway Modes (Solid Exterior $\rightarrow$ Longitudinal Cutaway $\rightarrow$ Watertight Bulkheads) |
| **Key M** | Toggle Procedural Web Audio Engine |
| **Key V** | Cycle Camera Presets (25 standardized views) |
| **Key H** | Toggle Telemetry HUD Overlay |

---

## Propulsion Plant & Mechanical Systems

Implemented in [`simulation/engine_simulation.py`](simulation/engine_simulation.py):
1. **Boiler Plant:** 29 Scotch marine boilers (24 double-ended with 6 furnaces each, 5 single-ended with 3 furnaces each = 159 furnaces) across 6 boiler rooms, operating at 215 psi.
2. **Wing Engines:** Twin inverted 4-cylinder, 4-crank, direct-acting triple-expansion steam engines (54" HP, 84" IP, two 97" LP cylinders; 75" stroke). Normal speed: 75 RPM developing ~30,000 IHP.
3. **Parsons LP Reaction Turbine:** Low-pressure exhaust turbine receiving steam at 9–10 psi absolute from the reciprocating engines, driving the centre 3-bladed propeller at 165 RPM developing 16,000 SHP.
4. **Astern Manoeuvring & Turbine Bypass:** Parsons LP turbine cannot run astern. On Chadburn command `ASTERN`, steam bypass valves divert reciprocating exhaust directly into the twin main condensers, and the centre shaft remains stationary.
5. **Electrical Generation:** Four 400 kW 100V DC steam-driven dynamo generators in the Dynamo Room aft of the turbine room, plus two 30 kW emergency dynamos on D Deck.

---

## Automated Multi-Generation Render Pipeline

The render pipeline in [`scripts/render_pipeline.py`](scripts/render_pipeline.py) and [`scripts/headless_render.js`](scripts/headless_render.js) orchestrates automated multi-view image captures using headless Puppeteer and software WebGL rendering:

### Automated Retention Cleanup Policy (Section 10)
- **Generations 1 to 9:** Retained in full (`renders/gen1/` through `renders/gen9/`).
- **Generation 10:** Triggers automated pruning of the oldest 5 generations (`gen1` through `gen5`), retaining `gen6` through `gen10`.
- **Generations > 10:** Retains strictly the newest 5 generations.
- **Safety Invariant:** `renders/final/`, source files, and test logs are **never** deleted.

### Standardized 25-View Inspection Matrix
All 25 camera views are rendered at 1920×1080 (or headless test resolution):
1. `port_bow`: Exterior three-quarter port bow showing stem, sheer, and anchors.
2. `starboard_bow`: Exterior three-quarter starboard bow.
3. `broadside_port`: Full profile port broadside showing sheer line and superstructure.
4. `broadside_starboard`: Full profile starboard broadside.
5. `stern_propellers`: Stern counter, rudder blade, and wing/centre propellers.
6. `aerial_three_quarter`: Elevated high-altitude isometric perspective.
7. `waterline_low`: Low-angle perspective looking up at the bow from waterline.
8. `bridge_navigating`: Navigating bridge, telemotor binnacle, and Chadburn telegraphs.
9. `boat_deck_davits`: Boat deck looking aft through Welin quadrant davits.
10. `funnels_rigging`: Looking up at raked funnels (1 in 12 rake) and wireless rigging.
11. `grand_staircase_dome`: Wrought-iron and glass dome over the Grand Staircase.
12. `grand_staircase_clock`: Carved oak clock wall pediment with "Honour and Glory Crowning Time".
13. `dining_saloon_1st`: First Class Reception and Dining Saloon with white paneling and tables.
14. `smoking_room_1st`: First Class Smoking Room with fireplace hearth and walnut paneling.
15. `turkish_baths_pool`: Cooling room with Moorish arches and heated swimming bath.
16. `boiler_room_6`: Boiler Room 6 forward showing double-ended boilers and furnace firebeds.
17. `reciprocating_engine_room`: Reciprocating Engine Room showing 4-cylinder engine tops and crank pits.
18. `turbine_room`: Low-pressure Parsons reaction turbine casing and condenser piping.
19. `dynamo_room`: Four 400 kW electrical dynamos generating 100V DC current.
20. `watertight_doors_cutaway`: Tank Top longitudinal slice showing all 12 lower sliding drop doors.
21. `longitudinal_cutaway`: Centerline longitudinal cutaway revealing all 16 watertight compartments.
22. `transverse_cutaway_boiler`: Transverse slice through Boiler Room 5 showing bunker arrangement.
23. `transverse_cutaway_engine`: Transverse slice through Reciprocating Engine Room.
24. `closeup_welin_davit`: Macro mechanical view of Welin quadrant worm gear and falls.
25. `closeup_engine_valve_gear`: Stephenson link motion and eccentric rods on reciprocating engine.

Approved final production renders are published to [`renders/final/`](renders/final/) with accompanied metadata manifest [`renders/final/manifest.json`](renders/final/manifest.json).

---

## Visual QA & Defect Tracking Log

A formal Visual Quality Assurance defect tracking log is maintained in [`renders/qa_log.json`](renders/qa_log.json):
- **Defect QA-001 (Resolved):** Hull shell mesh was originally generated from open rib ribbons; resolved by generating a continuous solid topside/bottom skin with authentic sheer strake band.
- **Defect QA-002 (Resolved):** Interior camera positions clipped through solid box volumes; resolved by constructing hollow inward-facing architectural panels.
- **Defect QA-003 (Resolved):** Grand Staircase chandelier blocked direct sightline to clock carving; resolved by elevating chandelier fixture to Y=8.4 m.
- **Defect QA-004 (Resolved):** Turkish Baths and 1st Class Dining Saloon lighting required warm localized fill; resolved with ambient fixtures and hearth point lights.

---

## Automated Test Suite & Verification

The repository contains 19 automated tests implemented in `pytest`:
- [`tests/test_naval_architecture.py`](tests/test_naval_architecture.py): Validates principal dimensions, watertight bulkhead heights, deck sheer equations, hull half-breadths, funnel smoke rules, and lifeboat counts.
- [`tests/test_propulsion_simulation.py`](tests/test_propulsion_simulation.py): Validates stopped state, full ahead steam kinematics, astern turbine bypass, and Stephenson link angles.
- [`tests/test_watertight_doors.py`](tests/test_watertight_doors.py): Validates 19-door inventory, 10-second warning bell, cataract hydraulic drop timing, and local bilge float trip.
- [`tests/test_render_pipeline.py`](tests/test_render_pipeline.py): Validates Section 10 retention pruning rules, manifest structure, and required camera views in `renders/final/`.
- [`tests/test_evidence_ledger.py`](tests/test_evidence_ledger.py): Validates archival evidence ledger schema, confidence ratings, and consistency with `ship_specs.json`.

Execute the test suite with:
```bash
python3 -m pytest -v
```

---

## Repository Structure

```
ship2665/
├── .gitignore                      # Git exclusion rules
├── README.md                       # Comprehensive technical and historical documentation
├── package.json                    # Node dependencies (three, puppeteer, esbuild)
├── package-lock.json
│
├── evidence/                       # Historical research and evidence audit
│   ├── discrepancies_and_conventions.md  # Architectural conventions & Olympic differences
│   ├── evidence_ledger.json        # Structured JSON evidence ledger (24 audited features)
│   └── evidence_ledger.md          # Markdown evidence table with citations
│
├── models/                         # Parametric naval architecture models & geometry
│   ├── hull_generator.py           # Procedural OBJ hull generator with sheer & tumblehome
│   ├── naval_architecture.py       # Naval architecture mathematical formulas & tables
│   ├── ship_specs.json             # Complete engineering specifications for Yard 401
│   └── titanic_model.obj           # Exported 3D Wavefront mesh model
│
├── references/                     # Primary archival source documents
│   └── british_inquiry/            # Official 1912 British Inquiry Reports (HTML)
│
├── renders/                        # Visual QA and render generation outputs
│   ├── final/                      # Production approved renders & manifest.json
│   ├── gen1/                       # Generation 1 inspection batch (25 views)
│   ├── gen2/                       # Generation 2 refined inspection batch (25 views)
│   └── qa_log.json                 # Visual QA defect tracking and resolution log
│
├── runtime/                        # Interactive WebGL 3D simulation
│   ├── index.html                  # Standalone museum-grade terminal shell
│   ├── bundle.js                   # Compiled single-file application (597 KB)
│   └── src/                        # Modular JavaScript source code
│       ├── audio_system.js         # Procedural Web Audio synthesizer
│       ├── camera_views.js         # 25 standardized camera vectors
│       ├── main.js                 # Simulation engine & telemetry HUD
│       ├── materials.js            # PBR materials & historical WSL colors
│       ├── ocean_system.js         # Gerstner ocean waves & propeller wash
│       ├── ship_geometry.js        # 3D modular geometry generator
│       └── smoke_system.js         # Particle coal smoke system
│
├── scripts/                        # Automated automation & render tooling
│   ├── headless_render.js          # Puppeteer headless direct-frame capture
│   └── render_pipeline.py          # Render orchestration & retention manager
│
├── simulation/                     # Python mechanical & hydraulic state machines
│   ├── engine_simulation.py        # 29-boiler, twin triple-expansion, LP turbine model
│   └── watertight_doors.py         # 15-bulkhead, 19-door closure state machine
│
└── tests/                          # Automated pytest test suites
    ├── test_evidence_ledger.py
    ├── test_naval_architecture.py
    ├── test_propulsion_simulation.py
    ├── test_render_pipeline.py
    └── test_watertight_doors.py
```

---

## Installation & Execution Guide

### Prerequisites
- **Python:** 3.10+ (`pytest` for automated test suites)
- **Node.js:** 18+ and `npm` (`three`, `puppeteer`, `esbuild`)
- **System Libraries (for headless rendering):** `libnss3`, `libnspr4`, `libatk1.0-0`, `libcups2`, `libdrm2`, `libxcomposite1`, `libxdamage1`, `libxrandr2`, `libgbm1`, `libasound2`

### Running the Test Suite
```bash
python3 -m pytest -v
```

### Building the Runtime Bundle
To recompile `runtime/src/` into `runtime/bundle.js`:
```bash
npx esbuild runtime/src/main.js --bundle --outfile=runtime/bundle.js --minify
```

### Launching the Interactive WebGL Simulation
Start a local HTTP server:
```bash
python3 -m http.server 8000
```
Then navigate to `http://localhost:8000/runtime/` in any modern WebGL2-compatible browser (Chrome, Firefox, Safari, Edge).

### Generating Multi-Generation Renders
To execute an automated headless render batch:
```bash
# Render Generation 3
python3 scripts/render_pipeline.py --gen 3

# Dry-run retention cleanup assessment
python3 scripts/render_pipeline.py --dry-run-cleanup

# Publish approved generation to renders/final/
python3 scripts/render_pipeline.py --publish-final 3
```

---

## Primary Archival References

1. **Board of Trade (UK):** *Report on the Loss of the S.S. Titanic*, Parliamentary Paper Cmd. 6352, His Majesty's Stationery Office, London, 30 July 1912 (The Mersey Report).
2. **United States Senate:** *Titanic Disaster: Report of the Committee on Commerce*, 62nd Congress, 2nd Session, Senate Report No. 806, Washington D.C., 28 May 1912 (The Smith Report).
3. **The Shipbuilder:** *The White Star Triple-Screw Steamers "Olympic" and "Titanic" (45,000 tons)*, Midsummer Special Number, Newcastle-on-Tyne, June 1911.
4. **Harland and Wolff, Ltd.:** *Specification of Yard Number 401: Triple Screw Steamer for the White Star Line*, Belfast, 1908–1912.
5. **Browne, Father Francis, S.J.:** *The Titanic Album of Father Browne*, Southampton–Cherbourg–Queenstown photographic plates, 10–11 April 1912.
6. **Welch, Robert John:** Official Harland & Wolff photographic record of Yard No. 400 and Yard No. 401, Public Record Office of Northern Ireland (PRONI).
7. **American Society of Naval Architects and Marine Engineers (SNAME):** *The Propulsion Plant of RMS Titanic*, Historical Engineering Transactions.
