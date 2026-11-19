# Dimensional Discrepancies and Convention Resolution
## RMS Titanic (H&W Yard 401) — Maiden Voyage Configuration

### 1. Principal Dimensions: Registered vs. Physical Overall Dimensions

A fundamental pitfall in historical naval architectural modeling is conflating British Board of Trade **Registered Dimensions** with actual **Physical Moulded / Overall Dimensions**.

| Dimension | Documented Value | Source | Architectural Meaning & Engineering Convention |
| :--- | :--- | :--- | :--- |
| **Length Overall (LOA)** | **882 ft 9 in (269.06 m)** | Harland & Wolff Yard Spec & Builder's Certificate | The extreme physical distance from the foremost point of the stemhead to the rearmost extremity of the cruiser-counter taffrail on Poop Deck. **Used for 3D coordinate model.** |
| **Registered Length (LBP / B.o.T.)** | **852.5 ft (852 ft 6 in / 259.84 m)** | 1912 British Inquiry Report (botRepTitanic.php) | Measured from the fore side of the stem at the waterline to the after side of the rudder stock. This was the statutory Board of Trade legal tonnage length. |
| **Length Between Perpendiculars (LPP)** | **850 ft 0 in (259.08 m)** | Harland & Wolff General Arrangement Drawing | Standard naval architectural station baseline: Station 0 at after perpendicular (rudder post), Station 10 / 20 at forward perpendicular. |
| **Extreme Breadth (Beam)** | **92 ft 6 in (92.5 ft / 28.19 m)** | H&W Lines Plan & Inquiry Report | Extreme breadth over the rub-strakes / sheer strake doubler plating at midships. |
| **Moulded Breadth** | **92 ft 0 in (28.04 m)** | H&W Midship Section Scantling Plan | Inside width of frames at midship section. |
| **Moulded Depth (to C Deck)** | **64 ft 9 in (19.74 m)** | 1912 British Inquiry Report | Measured from the top of keel plate to the top of the C Deck beam at lowest point of sheer amidships. |
| **Depth of Hold** | **59.58 ft (59 ft 7 in / 18.16 m)** | 1912 British Inquiry Report | Tonnage measurement from the double bottom tank top to the underside of the tonnage deck. |
| **Design Waterline Draught** | **34 ft 7 in (10.54 m)** | 1912 British Inquiry Report & H&W Displacement Curve | Standard loaded sea-going draught on departure. Corresponds to full load displacement. |
| **Full Load Displacement** | **52,310 Imperial Long Tons (53,150 metric tonnes)** | 1912 British Inquiry Report (botRepTitanic.php) | Actual physical weight of the ship and all contents displacing North Atlantic seawater (density 1.025 t/m³). |
| **Gross Register Tonnage (GRT)** | **46,328 Register Tons (1 register ton = 100 cu. ft.)** | Board of Trade Certificate / Inquiry Report | Measure of internal enclosed cubic volume (4,632,800 cu. ft.), NOT a weight measurement. 1,004 tons larger than Olympic (45,324 GRT) due to enclosed A-deck promenade screen and B-deck staterooms. |
| **Net Register Tonnage (NRT)** | **21,831 Register Tons** | Board of Trade Certificate | Revenue-earning enclosed volume after crew, machinery and fuel deduction. |

---

### 2. Olympic vs. Titanic Structural & Visible Distinctions (April 1912)

A critical instruction of Project SHIP2665 is to **never substitute Olympic or Britannic features onto Titanic**. Titanic had numerous unique features as completed for her maiden voyage:

1. **A Deck Forward Promenade Screen**:
   - *Titanic*: Enclosed with a 192-foot steel weather screen on port and starboard sides, fitted with 42 sliding glass windows to shield first-class passengers from North Atlantic sea spray.
   - *Olympic*: Remained fully open along the entire length of A Deck throughout 1911–1912.
2. **B Deck Arrangement & Staterooms**:
   - *Titanic*: Did away with the little-used continuous B-deck promenade. Instead, staterooms were extended outwards flush with the hull sides (97 first-class staterooms), and two lavish Parlour Suites (B51/53/55 and B52/54/56) were fitted with private 50-foot enclosed promenade decks. Added the *Café Parisien* on B Deck starboard aft and expanded the *À la Carte Restaurant*.
   - *Olympic (1911)*: Had an open promenade extending along the B-deck superstructure sides with narrow windows; no Café Parisien until her late 1912/1913 refit.
3. **C Deck Forward Well Deck Screen Bulwarks**:
   - *Titanic*: Different plating seams and bulwark coamings at the forward well deck.
4. **Bridge Wing Cabins & Wheelhouse Windows**:
   - *Titanic*: Wheelhouse had curved front windows; bridge wings projected 2 feet beyond the hull beam on each side to give unobstructed views fore and aft along the ship's side.
5. **Propeller Configuration (Centre Screw)**:
   - *Titanic*: 3-bladed wing propellers (23 ft 6 in diameter, cast bronze) and a 3-bladed bronze centre propeller (16 ft 6 in diameter, manganese bronze, 9-ft pitch) as documented in Harland & Wolff engineering log book calculations for Hull 401. (Some earlier sister drawings referenced 4 blades; Hull 401 logbook confirmed 3 blades tested for superior fuel efficiency with the low-pressure turbine).

---

### 3. Coordinate System Standard for 3D Geometry

To eliminate discrepancies between exterior naval architecture and interior decks, the project uses an absolute SI metric coordinate system internally, with exact conversion from 1912 Imperial shipbuilding feet/inches:

* **Origin (0, 0, 0)**:
  * **X = 0**: Ship Centerline (Midship longitudinal line, starboard = +X, port = -X).
  * **Y = 0**: Base Line / Top of Keel Plate (Keel flat bottom).
  * **Z = 0**: After Perpendicular (A.P., centreline of the rudder stock).
* **Length Orientation**:
  * Forward = +Z direction.
  * Aft = -Z direction.
  * Rudder Stock (A.P.) is at Z = 0 m.
  * Forward Perpendicular (F.P.) is at Z = +259.08 m (850.0 ft).
  * Stemhead extremity is at Z = +263.85 m.
  * Stern counter extremity is at Z = -5.21 m.
  * Total Length = 269.06 m (882 ft 9 in).
* **Vertical Deck Elevations (Y above Keel Line amidships)**:
  * Keel / Outer Bottom: Y = 0.00 m
  * Tank Top (Inner Bottom): Y = +1.60 m (63 inches / 5 ft 3 in; 78 in = 1.98 m in engine spaces)
  * Orlop Deck: Y = +4.50 m
  * G Deck (Lower Deck): Y = +7.20 m
  * F Deck (Middle Deck): Y = +9.80 m
  * E Deck (Upper Deck): Y = +12.40 m
  * D Deck (Saloon Deck): Y = +15.30 m
  * C Deck (Shelter Deck): Y = +18.50 m (64 ft 9 in = 19.74 m at sheer minimum)
  * B Deck (Bridge Deck): Y = +21.65 m
  * A Deck (Promenade Deck): Y = +24.40 m
  * Boat Deck: Y = +27.30 m (89.5 - 92.5 ft above keel)
  * Funnel Tops: Y = +53.34 m (175 ft above keel)
  * Mast Trucks: Fore mast Y = +63.40 m (208 ft), Main mast Y = +61.57 m (202 ft)
* **Waterline**:
  * Loaded Design Draught: Y = +10.54 m (34 ft 7 in).
  * Freeboard to C Deck: ~9.20 m; Freeboard to Boat Deck: ~18.44 m (60 ft 6 in amidships).
