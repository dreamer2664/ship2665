# Project SHIP2665 — Historical References Archive
## Primary Technical Sources & Documentation

This archive documents the historical source material for the reconstruction of **RMS Titanic (Harland & Wolff Yard No. 401)** in her completed maiden-voyage configuration, departing Southampton on 10 April 1912.

---

### 1. Primary Technical Sources (Highest Priority)

#### A. 1912 British Wreck Commissioner's Court of Inquiry (Lord Mersey)
* **Citation**: British Parliamentary Papers, 1912, Cd. 6352, *Report on the Loss of the "S.S. Titanic"*.
* **Digital Repositories**: 
  - Titanic Inquiry Project (TIP): https://www.titanicinquiry.org/BOTInq/BOTReport/botRep01.php
  - Project Gutenberg: https://www.gutenberg.org/cache/epub/39415/pg39415-images.html
* **Key Technical Sections**:
  - `botRepTitanic.php`: Registered dimensions (Length 852.5 ft, Breadth 92.5 ft, Depth of hold 59.58 ft, C-deck sheer depth 64 ft 9 in, displacement 52,310 tons at 34 ft 7 in draught, 46,328 GRT, 21,831 NRT).
  - `botRepWC.php`: 15 watertight bulkheads (A to P) dividing hull into 16 watertight compartments; individual bulkhead deck heights and watertight door inventory.
  - `botRepStructure.php`: Steel cellular double bottom (63 in deep, 78 in under reciprocating engines, 17 transverse divisions), web frames, sheer strakes, hydraulic riveting, bilge keel (300 ft long, 25 in deep), Harland & Wolff vertical drop watertight doors with friction cataract cylinders and magnetic bridge releases.
  - `botRepMach.php`: Combination propulsion plant:
    - Two 4-cylinder triple expansion reciprocating engines: HP 54 in, IP 84 in, two LP 97 in diameter; 75 in (6 ft 3 in) stroke; Stephenson link valve gear; Brown's steam/hydraulic reversing engines.
    - Low-pressure Parsons reaction turbine driving centre screw (ahead only).
    - 29 Scotch marine boilers (24 double-ended 15'9" x 20' with 6 furnaces each, 5 single-ended 15'9" x 11'9" with 3 furnaces each = 159 furnaces); 215 psi working pressure; natural draught assisted by stokehold fans.
    - Two pear-shaped surface condensers (50,550 sq ft cooling surface) with four 29-inch centrifugal circulating pumps.
  - `botRepElec.php`: Four 400 kW 100V DC dynamos in separate compartment abaft turbine room; two 30 kW emergency dynamos on Saloon (D) deck; 10,000 incandescent lamps (tantalum & carbon); 562 electric heaters, 153 motors, 4 electric passenger elevators (3 First Class, 1 Second Class).
  - `botRepAccomo.php`: Complete deck-by-deck arrangements: Boat Deck (92 ft 6 in above keel at lowest sheer, 500 ft long), A Deck (500 ft, 192 ft glass screen forward), B Deck (550 ft strength deck, 125 ft forecastle, 105 ft poop, 50 ft well decks), C Deck (continuous bow to stern), D Deck (Saloon Deck, height 10'6" tapered to 9'0" bow and 9'6" stern), E Deck ("Scotland Road" working passage 8.5 ft wide port side), F Deck, G Deck, Orlop, and Tank Top.
  - `botRepPumping.php`: Bilge and ballast pumping manifolds, firemen's tunnel piping, 5 ballast/bilge pumps (250 tons/hr), 3 bilge pumps (150 tons/hr).

#### B. 1912 United States Senate Inquiry (Senator William Alden Smith)
* **Citation**: United States Senate, 62nd Congress, 2nd Session, *Senate Report No. 806: "Titanic" Disaster*, 28 May 1912.
* **Digital Repositories**:
  - Senate Historical Office: https://www.senate.gov/about/resources/pdf/TitanicReport.pdf
  - TIP US Senate Transcript: https://www.titanicinquiry.org/USInq/USReport/AmInqRep01.php
* **Evidence Value**: Crew and officer testimonies regarding machinery operation, bridge controls, telegraph signals, damage progression, lifeboat loading sequence and Welin davit mechanics.

#### C. Harland & Wolff Shipbuilding Records & Original Plans
* **Citation**: Harland & Wolff Drawing Office Records, Queen's Island, Belfast, Yard No. 401.
* **Archives**:
  - National Museums NI / Ulster Transport Museum H&W Ship Plans Collection: https://www.nationalmuseumsni.org/collections/hw-archive
  - Royal Museums Greenwich (RMG): 20 March 1912 First Class Accommodation Plan (Ref: RMGC-Object-484148)
  - Titanic Museum Harland & Wolff Rigging Plans: Rigging Plan No. 401 showing mast heights (Fore 208 ft, Main 202 ft above keel), stays, wireless aerial spreaders, Welin davits, whistle piping.

#### D. The Shipbuilder (Midsummer 1911 Special Issue)
* **Citation**: *The Shipbuilder: A Quarterly Review of the Shipbuilding, Marine Engineering and Allied Industries*, Vol. 6, Midsummer Special Number 1911: "The White Star Liners 'Olympic' and 'Titanic'".
* **Evidence Value**: Longitudinal profile, general arrangement plates, midship transverse section, boiler room elevations, engine room plans, reciprocating cylinder drawings, Parsons turbine sectional views, and structural scantlings.

#### E. Contemporary Photography (1911–1912)
* **Robert John Welch Collection**: Official Harland & Wolff photographer (Belfast). Original glass plate negatives capturing hull construction, launch, fit-out in Victoria Channel, boiler installations, Grand Staircase carvings, Turkish Baths, and interior fixtures.
* **Father Frank Browne Collection**: High-resolution exterior and interior photographs taken during Titanic's run from Southampton to Cherbourg and Queenstown (10–11 April 1912), confirming maiden-voyage decorative details, passenger furniture, and A-deck promenade screen.
* **Bain Collection / Library of Congress**: Contemporary photographs of departure from Southampton and port views.

#### F. Wreck Survey & Deep-Sea Scanning Data (Structural Verification Only)
* **Woods Hole Oceanographic Institution (WHOI)**: 1985–1986 discovery imaging and 2010 acoustic bathymetric survey.
* **2022 Full-Wreck Digital Scan (Magellan / Atlantic Productions)**: 715,000 high-resolution photogrammetric images and LiDAR cloud confirming exact propeller blade geometry (wing: 3 blades; centre: 3/4 blades), rudder stock construction, boiler faces in debris field, and hull strake rivets.
* **Methodological Precaution**: Wreck data is consulted exclusively for hidden structural engineering joints and concealed mechanical details. The visual appearance target is strictly the pristine, newly delivered vessel of April 1912.
