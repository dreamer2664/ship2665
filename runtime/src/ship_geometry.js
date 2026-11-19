// runtime/src/ship_geometry.js
// 3D Geometric Reconstructor for RMS Titanic (Harland & Wolff Yard No. 401)
// Maiden Voyage Configuration — April 1912

import * as THREE from 'three';

export function buildTitanicShip(materials) {
  const shipGroup = new THREE.Group();
  shipGroup.name = 'RMS_Titanic_Yard_401';

  const hullGroup = new THREE.Group(); hullGroup.name = 'Hull_Structure';
  const decksGroup = new THREE.Group(); decksGroup.name = 'Decks_Superstructure';
  const funnelsGroup = new THREE.Group(); funnelsGroup.name = 'Funnels_Rigging';
  const machineryGroup = new THREE.Group(); machineryGroup.name = 'Machinery_Engineering';
  const interiorsGroup = new THREE.Group(); interiorsGroup.name = 'Interiors_Accommodation';
  const fittingsGroup = new THREE.Group(); fittingsGroup.name = 'Fittings_Lifeboats';

  shipGroup.add(hullGroup);
  shipGroup.add(decksGroup);
  shipGroup.add(funnelsGroup);
  shipGroup.add(machineryGroup);
  shipGroup.add(interiorsGroup);
  shipGroup.add(fittingsGroup);

  function getSheer(z) {
    const dz = z - 130.0;
    if (dz > 0) return 2.80 * Math.pow(dz / (263.85 - 130.0), 2.1);
    return 1.40 * Math.pow((-dz) / (130.0 - (-5.21)), 2.0);
  }

  function getHalfBreadth(z, y) {
    if (z < -5.21 || z > 263.85 || y < 0) return 0;
    const maxB = 14.02;
    let longFactor = 1.0;
    if (z > 165.0) {
      const t = (z - 165.0) / (263.85 - 165.0);
      longFactor = Math.max(0, 1.0 - (1.1 * t * t - 0.1 * t * t * t));
    } else if (z < 95.0) {
      const t = (95.0 - z) / (95.0 - (-5.21));
      longFactor = Math.max(0, 1.0 - (1.05 * Math.pow(t, 1.8) - 0.05 * t * t * t));
    }
    const bSec = maxB * Math.sqrt(Math.max(0, Math.min(1.0, longFactor)));
    if (y <= 0.2) return Math.min(bSec, 0.45 * (y / 0.2));
    let vFactor = 1.0;
    if (y < 3.5) vFactor = Math.pow(y / 3.5, 0.35);
    else if (y > 18.5) vFactor = 1.0 - 0.015 * ((y - 18.5) / 10.0);

    if (z > 220.0 && y > 10.54) {
      const flareT = (z - 220.0) / (263.85 - 220.0);
      const flareY = (y - 10.54) / 15.0;
      return Math.min(maxB, bSec * vFactor + 1.8 * flareT * Math.max(0, flareY));
    }
    if (z < 10.0 && y < 6.0) return bSec * Math.max(0.1, y / 6.0) * 0.4;
    return Math.max(0, bSec * vFactor);
  }

  // -------------------------------------------------------------
  // 1. CONTINUOUS SOLID HULL SHELL PLATING
  // -------------------------------------------------------------
  const stations = 50;
  const waterlines = 20;
  const zList = [];
  for (let i = 0; i <= stations; i++) {
    const t = i / stations;
    zList.push(-5.21 + (263.85 - (-5.21)) * (0.5 - 0.5 * Math.cos(t * Math.PI)));
  }

  const redVerts = [], redNorms = [], redUvs = [];
  const blackVerts = [], blackNorms = [], blackUvs = [];

  for (let s = 0; s < stations; s++) {
    const z1 = zList[s], z2 = zList[s + 1];
    const sheer1 = getSheer(z1), sheer2 = getSheer(z2);

    let topY1 = 18.5 + sheer1;
    let topY2 = 18.5 + sheer2;
    if (z1 >= 30 && z1 <= 198) topY1 = 21.65 + sheer1 * 0.2;
    if (z2 >= 30 && z2 <= 198) topY2 = 21.65 + sheer2 * 0.2;
    if (z1 > 225) topY1 = 22.85 + sheer1;
    if (z2 > 225) topY2 = 22.85 + sheer2;
    if (z1 < 26) topY1 = 22.85 + sheer1;
    if (z2 < 26) topY2 = 22.85 + sheer2;

    for (let w = 0; w < waterlines; w++) {
      const t1 = w / waterlines, t2 = (w + 1) / waterlines;
      const y11 = t1 * topY1, y12 = t2 * topY1;
      const y21 = t1 * topY2, y22 = t2 * topY2;
      const b11 = getHalfBreadth(z1, y11), b12 = getHalfBreadth(z1, y12);
      const b21 = getHalfBreadth(z2, y21), b22 = getHalfBreadth(z2, y22);

      const avgY = (y11 + y12 + y21 + y22) / 4.0;
      const targetV = avgY < 10.54 ? redVerts : blackVerts;
      const targetN = avgY < 10.54 ? redNorms : blackNorms;
      const targetU = avgY < 10.54 ? redUvs : blackUvs;

      // Starboard quad
      targetV.push(b11, y11, z1,   b21, y21, z2,   b22, y22, z2);
      targetV.push(b11, y11, z1,   b22, y22, z2,   b12, y12, z1);
      targetN.push(1, 0, 0,  1, 0, 0,  1, 0, 0);
      targetN.push(1, 0, 0,  1, 0, 0,  1, 0, 0);
      targetU.push(t1, z1/270,  t1, z2/270,  t2, z2/270);
      targetU.push(t1, z1/270,  t2, z2/270,  t2, z1/270);

      // Port quad
      targetV.push(-b11, y11, z1,  -b12, y12, z1,  -b22, y22, z2);
      targetV.push(-b11, y11, z1,  -b22, y22, z2,  -b21, y21, z2);
      targetN.push(-1, 0, 0,  -1, 0, 0,  -1, 0, 0);
      targetN.push(-1, 0, 0,  -1, 0, 0,  -1, 0, 0);
      targetU.push(t1, z1/270,  t2, z1/270,  t2, z2/270);
      targetU.push(t1, z1/270,  t2, z2/270,  t1, z2/270);
    }
  }

  const redGeom = new THREE.BufferGeometry();
  redGeom.setAttribute('position', new THREE.Float32BufferAttribute(redVerts, 3));
  redGeom.setAttribute('normal', new THREE.Float32BufferAttribute(redNorms, 3));
  redGeom.setAttribute('uv', new THREE.Float32BufferAttribute(redUvs, 2));
  redGeom.computeVertexNormals();

  const blackGeom = new THREE.BufferGeometry();
  blackGeom.setAttribute('position', new THREE.Float32BufferAttribute(blackVerts, 3));
  blackGeom.setAttribute('normal', new THREE.Float32BufferAttribute(blackNorms, 3));
  blackGeom.setAttribute('uv', new THREE.Float32BufferAttribute(blackUvs, 2));
  blackGeom.computeVertexNormals();

  const redMesh = new THREE.Mesh(redGeom, materials.hullRed);
  const blackMesh = new THREE.Mesh(blackGeom, materials.hullBlack);
  hullGroup.add(redMesh);
  hullGroup.add(blackMesh);

  // Sheer Strake White Line
  for (let side of [-1, 1]) {
    const sheerLine = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.45, 260), materials.sheerStrakeWhite);
    sheerLine.position.set(side * 13.95, 18.8, 128);
    hullGroup.add(sheerLine);
  }

  // Bilge Keels (300 ft = 91.4 m)
  for (let side of [-1, 1]) {
    const bk = new THREE.Mesh(new THREE.BoxGeometry(0.64, 0.1, 91.4), materials.castIron);
    bk.position.set(side * 13.2, 2.2, 130);
    bk.rotation.z = side * (Math.PI / 4);
    hullGroup.add(bk);
  }

  // Keel Plate
  const keelMesh = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.4, 258), materials.castIron);
  keelMesh.position.set(0, 0.2, 126);
  hullGroup.add(keelMesh);

  // Steerable Rudder
  const rudderGroup = new THREE.Group();
  rudderGroup.position.set(0, 8.2, -0.5);
  const rudderMesh = new THREE.Mesh(new THREE.BoxGeometry(0.8, 15.5, 4.5), materials.castIron);
  rudderMesh.position.set(0, 0, -2.25);
  rudderGroup.add(rudderMesh);
  hullGroup.add(rudderGroup);

  // 3 Manganese Bronze Propellers
  const centrePropGroup = new THREE.Group();
  centrePropGroup.position.set(0, 3.6, 4.5);
  const cpBoss = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 1.8, 16), materials.manganeseBronze);
  cpBoss.rotation.x = Math.PI / 2;
  centrePropGroup.add(cpBoss);
  for (let b = 0; b < 3; b++) {
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.2, 2.2, 0.8), materials.manganeseBronze);
    blade.position.y = 1.3;
    blade.rotation.x = 0.4;
    const bladePivot = new THREE.Group();
    bladePivot.rotation.z = (b * 2 * Math.PI) / 3;
    bladePivot.add(blade);
    centrePropGroup.add(bladePivot);
  }
  hullGroup.add(centrePropGroup);

  function createWingProp(isStarboard) {
    const propG = new THREE.Group();
    const xPos = isStarboard ? 8.8 : -8.8;
    propG.position.set(xPos, 4.5, 14.5);
    const boss = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 2.2, 16), materials.manganeseBronze);
    boss.rotation.x = Math.PI / 2;
    propG.add(boss);
    for (let b = 0; b < 3; b++) {
      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.25, 3.2, 1.1), materials.manganeseBronze);
      blade.position.y = 1.8;
      blade.rotation.x = isStarboard ? 0.45 : -0.45;
      const pivot = new THREE.Group();
      pivot.rotation.z = (b * 2 * Math.PI) / 3;
      pivot.add(blade);
      propG.add(pivot);
    }
    const strutMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 6.0, 12), materials.castIron);
    strutMesh.position.set(isStarboard ? -2.2 : 2.2, 1.8, 1.0);
    strutMesh.rotation.z = isStarboard ? -0.5 : 0.5;
    propG.add(strutMesh);
    return propG;
  }
  const stbdPropGroup = createWingProp(true);
  const portPropGroup = createWingProp(false);
  hullGroup.add(stbdPropGroup);
  hullGroup.add(portPropGroup);

  // -------------------------------------------------------------
  // 2. BULKHEADS & 12 LOWER SLIDING WATERTIGHT DOORS
  // -------------------------------------------------------------
  const bulkheadsData = [
    { id: 'A', z: 245.0, top: 18.5, hasDoor: false },
    { id: 'B', z: 228.0, top: 15.3, hasDoor: false },
    { id: 'C', z: 207.0, top: 12.4, hasDoor: false },
    { id: 'D', z: 186.0, top: 12.4, hasDoor: true },
    { id: 'E', z: 168.0, top: 12.4, hasDoor: true },
    { id: 'F', z: 149.0, top: 12.4, hasDoor: true },
    { id: 'G', z: 130.0, top: 12.4, hasDoor: true },
    { id: 'H', z: 111.0, top: 12.4, hasDoor: true },
    { id: 'J', z: 92.0,  top: 12.4, hasDoor: true },
    { id: 'K', z: 75.0,  top: 15.3, hasDoor: true },
    { id: 'L', z: 52.0,  top: 15.3, hasDoor: true },
    { id: 'M', z: 35.0,  top: 15.3, hasDoor: true },
    { id: 'N', z: 20.0,  top: 15.3, hasDoor: true },
    { id: 'O', z: 8.0,   top: 15.3, hasDoor: true },
    { id: 'P', z: -2.0,  top: 15.3, hasDoor: false }
  ];

  const animatedDoors = [];

  bulkheadsData.forEach((bh) => {
    const width = Math.min(27.5, getHalfBreadth(bh.z, 8.0) * 2.0);
    const height = bh.top - 1.6;
    const bhMesh = new THREE.Mesh(new THREE.BoxGeometry(width, height, 0.4), materials.boilerSteel);
    bhMesh.position.set(0, 1.6 + height / 2.0, bh.z);
    hullGroup.add(bhMesh);

    if (bh.hasDoor) {
      const frameMesh = new THREE.Mesh(new THREE.BoxGeometry(2.4, 2.8, 0.5), materials.castIron);
      frameMesh.position.set(0, 1.6 + 1.4, bh.z);
      hullGroup.add(frameMesh);

      const doorPlateMesh = new THREE.Mesh(new THREE.BoxGeometry(1.8, 2.4, 0.15), materials.castIron);
      doorPlateMesh.position.set(0, 1.6 + 1.2, bh.z);
      hullGroup.add(doorPlateMesh);

      const cataractMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 1.2, 8), materials.polishedBrass);
      cataractMesh.position.set(0.6, 1.6 + 3.2, bh.z + 0.2);
      hullGroup.add(cataractMesh);

      animatedDoors.push({
        id: `WTD-${bh.id}`,
        bulkhead: bh.id,
        mesh: doorPlateMesh,
        openY: 1.6 + 1.2,
        closedY: 1.6 - 1.0,
        position: 1.0
      });
    }
  });

  const tankTopMesh = new THREE.Mesh(new THREE.BoxGeometry(26.5, 0.3, 230), materials.castIron);
  tankTopMesh.position.set(0, 1.6, 124);
  hullGroup.add(tankTopMesh);

  // -------------------------------------------------------------
  // 3. CONTINUOUS DECKS & SUPERSTRUCTURE WALLS
  // -------------------------------------------------------------
  const cDeckMesh = new THREE.Mesh(new THREE.BoxGeometry(27.8, 0.4, 260), materials.teakDeck);
  cDeckMesh.position.set(0, 18.5, 126);
  decksGroup.add(cDeckMesh);

  const fcMesh = new THREE.Mesh(new THREE.BoxGeometry(19.0, 0.4, 38.0), materials.teakDeck);
  fcMesh.position.set(0, 21.65, 244);
  decksGroup.add(fcMesh);

  // Forecastle Breakwater (V-shaped wave deflector)
  for (let s of [-1, 1]) {
    const bw = new THREE.Mesh(new THREE.BoxGeometry(0.3, 1.2, 9.0), materials.boilerSteel);
    bw.position.set(s * 4.5, 22.25, 236);
    bw.rotation.y = s * 0.6;
    decksGroup.add(bw);
  }

  const poopMesh = new THREE.Mesh(new THREE.BoxGeometry(21.0, 0.4, 31.0), materials.teakDeck);
  poopMesh.position.set(0, 21.65, 10);
  decksGroup.add(poopMesh);

  // B Deck Bridge Deck Floor
  const bDeckMesh = new THREE.Mesh(new THREE.BoxGeometry(27.0, 0.4, 168), materials.teakDeck);
  bDeckMesh.position.set(0, 21.65, 114);
  decksGroup.add(bDeckMesh);

  // B Deck Superstructure Outer Walls with stateroom windows
  for (let side of [-1, 1]) {
    const bWallMesh = new THREE.Mesh(new THREE.BoxGeometry(0.3, 2.75, 168), materials.deckhouseWhite);
    bWallMesh.position.set(side * 13.35, 23.02, 114);
    decksGroup.add(bWallMesh);

    for (let wz = 35; wz < 195; wz += 3.2) {
      const winMesh = new THREE.Mesh(new THREE.BoxGeometry(0.4, 1.1, 1.3), materials.stainedGlass);
      winMesh.position.set(side * 13.35, 23.3, wz);
      decksGroup.add(winMesh);
    }
  }

  // A Deck Promenade Floor
  const aDeckMesh = new THREE.Mesh(new THREE.BoxGeometry(26.2, 0.4, 152), materials.teakDeck);
  aDeckMesh.position.set(0, 24.4, 118);
  decksGroup.add(aDeckMesh);

  // A Deck Inner Superstructure Walls
  for (let side of [-1, 1]) {
    const aWallMesh = new THREE.Mesh(new THREE.BoxGeometry(0.3, 2.7, 145), materials.deckhouseWhite);
    aWallMesh.position.set(side * 10.2, 25.75, 116);
    decksGroup.add(aWallMesh);
  }

  // Forward A-Deck Enclosed Weather Screen (192 ft = 58.5 m long) with 42 sliding windows
  for (let side of [-1, 1]) {
    const screenMesh = new THREE.Mesh(new THREE.BoxGeometry(0.25, 2.7, 58.5), materials.deckhouseWhite);
    screenMesh.position.set(side * 12.95, 25.75, 164);
    decksGroup.add(screenMesh);

    for (let wz = 136; wz < 192; wz += 2.8) {
      const win = new THREE.Mesh(new THREE.BoxGeometry(0.35, 1.4, 1.6), materials.glass);
      win.position.set(side * 12.95, 26.1, wz);
      decksGroup.add(win);
    }
  }

  // Boat Deck Floor
  const boatDeckMesh = new THREE.Mesh(new THREE.BoxGeometry(25.0, 0.4, 150), materials.teakDeck);
  boatDeckMesh.position.set(0, 27.3, 120);
  decksGroup.add(boatDeckMesh);

  // Navigating Bridge & Wheelhouse
  const bridgeFloorMesh = new THREE.Mesh(new THREE.BoxGeometry(29.4, 0.3, 8.0), materials.teakDeck);
  bridgeFloorMesh.position.set(0, 27.45, 194);
  decksGroup.add(bridgeFloorMesh);

  const wheelhouseMesh = new THREE.Mesh(new THREE.BoxGeometry(8.0, 3.0, 7.0), materials.deckhouseWhite);
  wheelhouseMesh.position.set(0, 28.9, 193.5);
  decksGroup.add(wheelhouseMesh);

  // Officers' Quarters deckhouse
  const officersHouseMesh = new THREE.Mesh(new THREE.BoxGeometry(16.0, 2.8, 22.0), materials.deckhouseWhite);
  officersHouseMesh.position.set(0, 28.7, 179);
  decksGroup.add(officersHouseMesh);

  // Gymnasium on Boat Deck Starboard
  const gymMesh = new THREE.Mesh(new THREE.BoxGeometry(8.0, 2.8, 12.0), materials.deckhouseWhite);
  gymMesh.position.set(7.5, 28.7, 164);
  decksGroup.add(gymMesh);

  // Raised Compass Platform
  const compMesh = new THREE.Mesh(new THREE.BoxGeometry(5.0, 0.2, 5.0), materials.teakDeck);
  compMesh.position.set(0, 30.5, 134);
  decksGroup.add(compMesh);
  const binnacleMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.4, 1.2, 12), materials.polishedBrass);
  binnacleMesh.position.set(0, 31.2, 134);
  decksGroup.add(binnacleMesh);

  // -------------------------------------------------------------
  // 4. FOUR FUNNELS & RIGGING
  // -------------------------------------------------------------
  const funnelSpecs = [
    { z: 175.5, dummy: false },
    { z: 148.0, dummy: false },
    { z: 120.5, dummy: false },
    { z: 93.0,  dummy: true  } // Dummy ventilation casing
  ];

  funnelSpecs.forEach((spec, idx) => {
    const fGroup = new THREE.Group();
    fGroup.position.set(0, 27.5, spec.z);
    fGroup.rotation.x = Math.atan(1.0 / 12.0); // 1:12 rake aft

    const buffGeom = new THREE.CylinderGeometry(2.9, 2.9, 19.5, 24);
    buffGeom.scale(1.0, 1.0, 1.28);
    const buffMesh = new THREE.Mesh(buffGeom, materials.funnelBuff);
    buffMesh.position.y = 9.75;
    fGroup.add(buffMesh);

    const blackTopGeom = new THREE.CylinderGeometry(2.88, 2.88, 6.5, 24);
    blackTopGeom.scale(1.0, 1.0, 1.28);
    const blackTopMesh = new THREE.Mesh(blackTopGeom, materials.funnelBlack);
    blackTopMesh.position.y = 22.75;
    fGroup.add(blackTopMesh);

    const pipeMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 25.0, 8), materials.copperPipe);
    pipeMesh.position.set(1.6, 12.5, 3.4);
    fGroup.add(pipeMesh);

    if (idx < 2) {
      const whistleMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.15, 1.8, 8), materials.polishedBrass);
      whistleMesh.position.set(0, 20.0, 3.8);
      fGroup.add(whistleMesh);
    }

    for (let side of [-1, 1]) {
      const wireMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 28, 6), materials.steelWire);
      wireMesh.position.set(side * 8.5, 12.0, 0);
      wireMesh.rotation.z = side * 0.45;
      fGroup.add(wireMesh);
    }

    funnelsGroup.add(fGroup);
  });

  // Masts
  const foreMastGroup = new THREE.Group();
  foreMastGroup.position.set(0, 18.5, 215);
  foreMastGroup.rotation.x = 0.07;
  const fmSteel = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.6, 32, 16), materials.mastSteel);
  fmSteel.position.y = 16.0;
  foreMastGroup.add(fmSteel);
  const fmTeak = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.4, 18, 12), materials.mastTeakPole);
  fmTeak.position.y = 41.0;
  foreMastGroup.add(fmTeak);
  const crowsNestMesh = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 0.8, 1.6, 12), materials.boilerSteel);
  crowsNestMesh.position.set(0, 21.0, 0.6);
  foreMastGroup.add(crowsNestMesh);
  funnelsGroup.add(foreMastGroup);

  const mainMastGroup = new THREE.Group();
  mainMastGroup.position.set(0, 18.5, 32);
  mainMastGroup.rotation.x = 0.07;
  const mmSteel = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.58, 30, 16), materials.mastSteel);
  mmSteel.position.y = 15.0;
  mainMastGroup.add(mmSteel);
  const mmTeak = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.38, 18, 12), materials.mastTeakPole);
  mmTeak.position.y = 39.0;
  mainMastGroup.add(mmTeak);
  funnelsGroup.add(mainMastGroup);

  const aerialMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 180, 4), materials.steelWire);
  aerialMesh.position.set(0, 58.0, 124);
  aerialMesh.rotation.x = Math.PI / 2;
  funnelsGroup.add(aerialMesh);

  // -------------------------------------------------------------
  // 5. LIFEBOATS & DAVITS
  // -------------------------------------------------------------
  const boatZPositions = [
    { z: 195.0, type: 'cutter', swungOut: true },
    { z: 180.0, type: 'standard' },
    { z: 168.0, type: 'standard' },
    { z: 156.0, type: 'standard' },
    { z: 105.0, type: 'standard' },
    { z: 93.0,  type: 'standard' },
    { z: 81.0,  type: 'standard' },
    { z: 69.0,  type: 'standard' }
  ];

  boatZPositions.forEach((bp) => {
    for (let side of [-1, 1]) {
      const bGroup = new THREE.Group();
      const xPos = side * (bp.swungOut ? 14.8 : 11.8);
      bGroup.position.set(xPos, 28.5, bp.z);

      const bLen = bp.type === 'cutter' ? 7.6 : 9.14;
      const bMesh = new THREE.Mesh(new THREE.BoxGeometry(2.7, 1.3, bLen), materials.lifeboatWood);
      bGroup.add(bMesh);

      const coverMesh = new THREE.Mesh(new THREE.BoxGeometry(2.65, 0.4, bLen - 0.2), materials.canvasCover);
      coverMesh.position.y = 0.7;
      bGroup.add(coverMesh);

      for (let dz of [-bLen/2 - 0.4, bLen/2 + 0.4]) {
        const davitArm = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 3.2, 8), materials.welinDavitSteel);
        davitArm.position.set(-side * 0.8, 0.4, dz);
        davitArm.rotation.z = side * (bp.swungOut ? -0.5 : -0.2);
        bGroup.add(davitArm);
      }
      fittingsGroup.add(bGroup);
    }
  });

  // Engelhardt Collapsibles C & D
  for (let side of [-1, 1]) {
    const colMesh = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.6, 8.3), materials.canvasCover);
    colMesh.position.set(side * 8.8, 27.8, 190);
    fittingsGroup.add(colMesh);
  }
  // Collapsibles A & B on Officers Roof
  for (let side of [-1, 1]) {
    const colRoof = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.6, 8.3), materials.canvasCover);
    colRoof.position.set(side * 5.5, 30.2, 185);
    fittingsGroup.add(colRoof);
  }

  // Anchors
  for (let side of [-1, 1]) {
    const bower = new THREE.Mesh(new THREE.BoxGeometry(0.8, 2.5, 1.4), materials.castIron);
    bower.position.set(side * 4.2, 17.5, 256);
    fittingsGroup.add(bower);
  }
  const centreAnchor = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.2, 3.8), materials.castIron);
  centreAnchor.position.set(0, 22.4, 252);
  fittingsGroup.add(centreAnchor);

  // -------------------------------------------------------------
  // 6. HOLLOW, NAVIGABLE, DETAILED INTERIORS
  // -------------------------------------------------------------
  // A. Forward Grand Staircase (Hollow 3-deck stairwell, Z=160 to 172)
  const fwdStairGroup = new THREE.Group();
  fwdStairGroup.position.set(0, 18.5, 166);

  // Walls
  const stairNorthWall = new THREE.Mesh(new THREE.PlaneGeometry(16.0, 9.5), materials.englishOak);
  stairNorthWall.position.set(0, 4.75, -6.0);
  fwdStairGroup.add(stairNorthWall);

  const stairSouthWall = new THREE.Mesh(new THREE.PlaneGeometry(16.0, 9.5), materials.englishOak);
  stairSouthWall.position.set(0, 4.75, 6.0);
  stairSouthWall.rotation.y = Math.PI;
  fwdStairGroup.add(stairSouthWall);

  const stairEastWall = new THREE.Mesh(new THREE.PlaneGeometry(12.0, 9.5), materials.englishOak);
  stairEastWall.position.set(8.0, 4.75, 0);
  stairEastWall.rotation.y = -Math.PI / 2;
  fwdStairGroup.add(stairEastWall);

  const stairWestWall = new THREE.Mesh(new THREE.PlaneGeometry(12.0, 9.5), materials.englishOak);
  stairWestWall.position.set(-8.0, 4.75, 0);
  stairWestWall.rotation.y = Math.PI / 2;
  fwdStairGroup.add(stairWestWall);

  // Landings
  for (let lvl of [0, 3.15, 5.9]) {
    const landingMesh = new THREE.Mesh(new THREE.BoxGeometry(15.8, 0.2, 2.5), materials.englishOak);
    landingMesh.position.set(0, lvl, 4.75);
    fwdStairGroup.add(landingMesh);
  }

  // Sweeping Double Oak Staircases
  for (let s = -1; s <= 1; s += 2) {
    const stairFlight = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.2, 5.2), materials.englishOak);
    stairFlight.position.set(s * 4.2, 1.6, 0.5);
    stairFlight.rotation.x = -0.52;
    stairFlight.rotation.y = s * 0.15;
    fwdStairGroup.add(stairFlight);

    const balMesh = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.9, 5.2), materials.wroughtIron);
    balMesh.position.set(s * (4.2 - 1.1), 2.1, 0.5);
    balMesh.rotation.x = -0.52;
    fwdStairGroup.add(balMesh);
  }

  // "Honour and Glory Crowning Time" Carved Oak Clock Panel on A-Deck Landing
  const clockPanel = new THREE.Mesh(new THREE.BoxGeometry(4.2, 2.8, 0.35), materials.englishOak);
  clockPanel.position.set(0, 6.2, 5.8);
  fwdStairGroup.add(clockPanel);

  // Carved Oak Arch Pediment over Clock
  const archGeom = new THREE.CylinderGeometry(1.6, 1.6, 0.35, 16, 1, false, 0, Math.PI);
  const archMesh = new THREE.Mesh(archGeom, materials.englishOak);
  archMesh.rotation.z = Math.PI / 2;
  archMesh.rotation.y = Math.PI / 2;
  archMesh.position.set(0, 7.6, 5.8);
  fwdStairGroup.add(archMesh);

  // Brass clock face
  const clockFace = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 0.1, 24), materials.polishedBrass);
  clockFace.rotation.x = Math.PI / 2;
  clockFace.position.set(0, 6.4, 5.6);
  fwdStairGroup.add(clockFace);

  // Classical sculpted figures (Honour & Glory) flanking the clock
  for (let f of [-1.15, 1.15]) {
    const fig = new THREE.Mesh(new THREE.BoxGeometry(0.7, 1.6, 0.25), materials.giltBronze);
    fig.position.set(f, 6.2, 5.65);
    fwdStairGroup.add(fig);
  }

  // Glass Dome
  const domeMesh = new THREE.Mesh(new THREE.SphereGeometry(4.8, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2), materials.stainedGlass);
  domeMesh.position.set(0, 9.2, 0);
  fwdStairGroup.add(domeMesh);

  // Chandelier hanging high under the dome
  const chandelier = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 1.2, 1.2, 12), materials.giltBronze);
  chandelier.position.set(0, 8.4, 0);
  fwdStairGroup.add(chandelier);

  const domeLight = new THREE.PointLight(0xffeedd, 3.8, 25);
  domeLight.position.set(0, 8.2, 0);
  fwdStairGroup.add(domeLight);

  interiorsGroup.add(fwdStairGroup);

  // B. First Class Dining Saloon (D Deck, Z=122 to 156)
  const dinSaloonGroup = new THREE.Group();
  dinSaloonGroup.position.set(0, 15.3, 139);

  const dinFloor = new THREE.Mesh(new THREE.PlaneGeometry(26.0, 32.0), materials.teakDeck);
  dinFloor.rotation.x = -Math.PI / 2;
  dinSaloonGroup.add(dinFloor);

  const dinCeil = new THREE.Mesh(new THREE.PlaneGeometry(26.0, 32.0), materials.jacobeanWhite);
  dinCeil.position.y = 3.0;
  dinCeil.rotation.x = Math.PI / 2;
  dinSaloonGroup.add(dinCeil);

  for (let side of [-1, 1]) {
    const wall = new THREE.Mesh(new THREE.PlaneGeometry(32.0, 3.0), materials.jacobeanWhite);
    wall.position.set(side * 13.0, 1.5, 0);
    wall.rotation.y = side * (-Math.PI / 2);
    dinSaloonGroup.add(wall);

    for (let wz = -12; wz <= 12; wz += 4.5) {
      const win = new THREE.Mesh(new THREE.BoxGeometry(0.2, 1.4, 2.0), materials.stainedGlass);
      win.position.set(side * 12.9, 1.6, wz);
      dinSaloonGroup.add(win);
    }
  }

  for (let px of [-6, 6]) {
    for (let pz of [-10, -3, 4, 11]) {
      const col = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.35, 3.0, 12), materials.jacobeanWhite);
      col.position.set(px, 1.5, pz);
      dinSaloonGroup.add(col);
    }
  }

  for (let tx of [-8, 0, 8]) {
    for (let tz of [-9, 0, 9]) {
      const table = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 0.75, 16), materials.jacobeanWhite);
      table.position.set(tx, 0.38, tz);
      dinSaloonGroup.add(table);

      for (let ca = 0; ca < 4; ca++) {
        const chair = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.85, 0.5), materials.greenVelvet);
        const ang = (ca * Math.PI) / 2;
        chair.position.set(tx + 1.5 * Math.cos(ang), 0.45, tz + 1.5 * Math.sin(ang));
        dinSaloonGroup.add(chair);
      }
    }
  }

  // Forward & Aft Enclosing Walls for Saloon
  for (let ez of [-15.0, 15.0]) {
    const endWall = new THREE.Mesh(new THREE.PlaneGeometry(26.0, 3.0), materials.jacobeanWhite);
    endWall.position.set(0, 1.5, ez);
    if (ez > 0) endWall.rotation.y = Math.PI;
    dinSaloonGroup.add(endWall);
  }

  for (let lz of [-10, -3, 4, 11]) {
    const dLight = new THREE.PointLight(0xfffaed, 3.2, 22);
    dLight.position.set(0, 2.5, lz);
    dinSaloonGroup.add(dLight);
  }

  interiorsGroup.add(dinSaloonGroup);

  // C. First Class Smoking Room (A Deck Aft, Z=72 to 92)
  const smokeRoomGroup = new THREE.Group();
  smokeRoomGroup.position.set(0, 24.4, 82);

  const smFloor = new THREE.Mesh(new THREE.PlaneGeometry(18.0, 18.0), materials.hondurasMahogany);
  smFloor.rotation.x = -Math.PI / 2;
  smokeRoomGroup.add(smFloor);

  const smCeil = new THREE.Mesh(new THREE.PlaneGeometry(18.0, 18.0), materials.hondurasMahogany);
  smCeil.position.y = 2.8;
  smCeil.rotation.x = Math.PI / 2;
  smokeRoomGroup.add(smCeil);

  for (let side of [-1, 1]) {
    const smWall = new THREE.Mesh(new THREE.PlaneGeometry(18.0, 2.8), materials.hondurasMahogany);
    smWall.position.set(side * 9.0, 1.4, 0);
    smWall.rotation.y = side * (-Math.PI / 2);
    smokeRoomGroup.add(smWall);
  }

  const smAftWall = new THREE.Mesh(new THREE.PlaneGeometry(18.0, 2.8), materials.hondurasMahogany);
  smAftWall.position.set(0, 1.4, -9.0);
  smokeRoomGroup.add(smAftWall);

  const smFwdWall = new THREE.Mesh(new THREE.PlaneGeometry(18.0, 2.8), materials.hondurasMahogany);
  smFwdWall.position.set(0, 1.4, 9.0);
  smFwdWall.rotation.y = Math.PI;
  smokeRoomGroup.add(smFwdWall);

  for (let lz of [-5, 2]) {
    const sLight = new THREE.PointLight(0xffd8a8, 3.2, 18);
    sLight.position.set(0, 2.2, lz);
    smokeRoomGroup.add(sLight);
  }

  // White Carrara Marble Fireplace
  const fireplace = new THREE.Mesh(new THREE.BoxGeometry(3.2, 2.1, 0.8), materials.marbleWhite);
  fireplace.position.set(0, 1.05, -8.5);
  smokeRoomGroup.add(fireplace);

  // Glowing Fireplace hearth
  const hearthGlow = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.6, 0.5), materials.glowingCoal);
  hearthGlow.position.set(0, 0.35, -8.3);
  smokeRoomGroup.add(hearthGlow);

  // Norman Wilkinson Oil Painting "Plymouth Harbour"
  const painting = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.4, 0.1), materials.giltBronze);
  painting.position.set(0, 2.1, -8.05);
  smokeRoomGroup.add(painting);

  for (let sx of [-4.5, 4.5]) {
    const couch = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.8, 1.1), materials.leatherBurgundy);
    couch.position.set(sx, 0.4, -3.0);
    smokeRoomGroup.add(couch);
  }

  const smokeLight = new THREE.PointLight(0xffd8a8, 3.2, 25);
  smokeLight.position.set(0, 2.4, -2.0);
  smokeRoomGroup.add(smokeLight);

  interiorsGroup.add(smokeRoomGroup);

  // D. Turkish Baths Cooling Room & Heated Saltwater Swimming Bath (F Deck, Z=145 to 168)
  const turkishGroup = new THREE.Group();
  turkishGroup.position.set(6.5, 9.8, 156);

  const tFloor = new THREE.Mesh(new THREE.PlaneGeometry(16.0, 16.0), materials.turkishTile);
  tFloor.rotation.x = -Math.PI / 2;
  turkishGroup.add(tFloor);

  const tCeil = new THREE.Mesh(new THREE.PlaneGeometry(16.0, 16.0), materials.jacobeanWhite);
  tCeil.position.y = 2.6;
  tCeil.rotation.x = Math.PI / 2;
  turkishGroup.add(tCeil);

  const tWallEast = new THREE.Mesh(new THREE.PlaneGeometry(16.0, 2.6), materials.turkishTile);
  tWallEast.position.set(7.5, 1.3, 0);
  tWallEast.rotation.y = -Math.PI / 2;
  turkishGroup.add(tWallEast);

  const tWallWest = new THREE.Mesh(new THREE.PlaneGeometry(16.0, 2.6), materials.turkishTile);
  tWallWest.position.set(-7.5, 1.3, 0);
  tWallWest.rotation.y = Math.PI / 2;
  turkishGroup.add(tWallWest);

  for (let z of [-8.0, 8.0]) {
    const endWall = new THREE.Mesh(new THREE.PlaneGeometry(15.0, 2.6), materials.turkishTile);
    endWall.position.set(0, 1.3, z);
    if (z > 0) endWall.rotation.y = Math.PI;
    turkishGroup.add(endWall);
  }

  // Swimming Pool (30 ft x 14 ft = 9.1m x 4.2m)
  const poolBasin = new THREE.Mesh(new THREE.BoxGeometry(4.2, 1.8, 9.1), materials.poolTurquoiseTile);
  poolBasin.position.set(-2.0, -0.6, 0);
  turkishGroup.add(poolBasin);

  const poolWater = new THREE.Mesh(new THREE.BoxGeometry(4.0, 0.1, 8.9), materials.glass);
  poolWater.position.set(-2.0, 0.1, 0);
  turkishGroup.add(poolWater);

  const poolLight = new THREE.PointLight(0x22beba, 4.2, 25);
  poolLight.position.set(-2.0, 2.0, 0);
  turkishGroup.add(poolLight);

  const turkishRoomLight = new THREE.PointLight(0xffe8a0, 4.5, 22);
  turkishRoomLight.position.set(2.5, 2.2, 0);
  turkishGroup.add(turkishRoomLight);

  interiorsGroup.add(turkishGroup);

  // E. Café Parisien & Verandah Café (B Deck Aft, Starboard, Z=68, X=8.5)
  const cafeParisienGroup = new THREE.Group();
  cafeParisienGroup.position.set(8.5, 21.65, 68);

  // Floor with parquet/tile
  const cpFloor = new THREE.Mesh(new THREE.PlaneGeometry(8.0, 18.0), materials.linoleumTile);
  cpFloor.rotation.x = -Math.PI / 2;
  cafeParisienGroup.add(cpFloor);

  // Ceiling
  const cpCeil = new THREE.Mesh(new THREE.PlaneGeometry(8.0, 18.0), materials.deckhouseWhite);
  cpCeil.position.y = 2.75;
  cpCeil.rotation.x = Math.PI / 2;
  cafeParisienGroup.add(cpCeil);

  // Inboard Trellis Wall with green ivy climbing pattern
  const cpTrellisWall = new THREE.Mesh(new THREE.PlaneGeometry(18.0, 2.75), materials.trellisGreen);
  cpTrellisWall.position.set(-4.0, 1.375, 0);
  cpTrellisWall.rotation.y = Math.PI / 2;
  cafeParisienGroup.add(cpTrellisWall);

  // Wooden lattice trellis battens
  for (let tz = -8.0; tz <= 8.0; tz += 1.2) {
    const battenV = new THREE.Mesh(new THREE.BoxGeometry(0.04, 2.7, 0.04), materials.deckhouseWhite);
    battenV.position.set(-3.95, 1.35, tz);
    cafeParisienGroup.add(battenV);
  }
  for (let ty = 0.35; ty <= 2.65; ty += 0.45) {
    const battenH = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 17.5), materials.deckhouseWhite);
    battenH.position.set(-3.95, ty, 0);
    cafeParisienGroup.add(battenH);
  }

  // Forward & Aft Enclosing Walls
  for (let ez of [-9.0, 9.0]) {
    const endWall = new THREE.Mesh(new THREE.PlaneGeometry(8.0, 2.75), materials.deckhouseWhite);
    endWall.position.set(0, 1.375, ez);
    if (ez > 0) endWall.rotation.y = Math.PI;
    cafeParisienGroup.add(endWall);
  }

  // Outboard Observation Windows looking out over Atlantic
  for (let wz = -7.5; wz <= 7.5; wz += 2.5) {
    const cpWin = new THREE.Mesh(new THREE.BoxGeometry(0.2, 1.8, 1.6), materials.glass);
    cpWin.position.set(3.9, 1.5, wz);
    cafeParisienGroup.add(cpWin);

    const cpFrame = new THREE.Mesh(new THREE.BoxGeometry(0.25, 1.9, 1.7), materials.deckhouseWhite);
    cpFrame.position.set(3.9, 1.5, wz);
    cafeParisienGroup.add(cpFrame);
  }

  // Wicker bistro chairs and round café tables
  for (let tz = -6.0; tz <= 6.0; tz += 3.0) {
    const table = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.72, 16), materials.wickerChair);
    table.position.set(0, 0.36, tz);
    cafeParisienGroup.add(table);

    // 4 Wicker chairs per table with proper backs & legs
    for (let c = 0; c < 4; c++) {
      const chairG = new THREE.Group();
      const ang = (c * Math.PI) / 2;
      chairG.position.set(1.0 * Math.cos(ang), 0, tz + 1.0 * Math.sin(ang));
      chairG.rotation.y = -ang - Math.PI / 2;

      const seat = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.05, 0.38), materials.wickerChair);
      seat.position.y = 0.42;
      chairG.add(seat);

      const back = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.45, 0.05), materials.wickerChair);
      back.position.set(0, 0.65, -0.16);
      chairG.add(back);

      for (let lx of [-0.16, 0.16]) {
        for (let lz of [-0.14, 0.14]) {
          const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.42, 8), materials.wickerChair);
          leg.position.set(lx, 0.21, lz);
          chairG.add(leg);
        }
      }
      cafeParisienGroup.add(chairG);
    }
  }

  for (let lz of [-5, 0, 5]) {
    const cpLight = new THREE.PointLight(0xfff5e6, 3.2, 16);
    cpLight.position.set(-1.0, 2.3, lz);
    cafeParisienGroup.add(cpLight);
  }

  interiorsGroup.add(cafeParisienGroup);

  // F. Gymnasium (Boat Deck Starboard, Z=142, X=9.0, Y=27.3)
  const gymGroup = new THREE.Group();
  gymGroup.position.set(9.0, 27.3, 142);

  const gymFloor = new THREE.Mesh(new THREE.PlaneGeometry(7.5, 12.0), materials.teakDeck);
  gymFloor.rotation.x = -Math.PI / 2;
  gymGroup.add(gymFloor);

  const gymCeil = new THREE.Mesh(new THREE.PlaneGeometry(7.5, 12.0), materials.deckhouseWhite);
  gymCeil.position.y = 2.9;
  gymCeil.rotation.x = Math.PI / 2;
  gymGroup.add(gymCeil);

  // Inboard Wall with Swedish wall bars (ribstalls)
  const ribWall = new THREE.Mesh(new THREE.PlaneGeometry(12.0, 2.9), materials.deckhouseWhite);
  ribWall.position.set(-3.75, 1.45, 0);
  ribWall.rotation.y = Math.PI / 2;
  gymGroup.add(ribWall);

  for (let r = 0.3; r <= 2.6; r += 0.25) {
    const ribBar = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 6.0, 8), materials.teakHandrail);
    ribBar.rotation.z = Math.PI / 2;
    ribBar.position.set(-3.65, r, -2.0);
    gymGroup.add(ribBar);
  }

  // Stationary cycling machines with large brass distance/speed dials
  for (let cz of [1.5, 3.2]) {
    const bikeG = new THREE.Group();
    bikeG.position.set(1.5, 0, cz);

    const frame = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.9, 8), materials.castIron);
    frame.position.y = 0.45;
    bikeG.add(frame);

    const saddle = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.1, 0.25), materials.leatherBlack);
    saddle.position.set(0, 0.85, 0);
    bikeG.add(saddle);

    // Large brass distance meter dial
    const dial = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.08, 16), materials.polishedBrass);
    dial.rotation.x = Math.PI / 2;
    dial.position.set(0, 1.15, 0.4);
    bikeG.add(dial);

    gymGroup.add(bikeG);
  }

  // Mechanical Rowing Machine with sliding seat
  const rowG = new THREE.Group();
  rowG.position.set(-1.0, 0, -2.5);
  const rowTrack = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.12, 2.4), materials.castIron);
  rowTrack.position.y = 0.06;
  rowG.add(rowTrack);
  const rowSeat = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.1, 0.35), materials.teakHandrail);
  rowSeat.position.set(0, 0.18, 0);
  rowG.add(rowSeat);
  gymGroup.add(rowG);

  // Electric Camel and Horse with leather saddles on articulated arms
  const camelG = new THREE.Group();
  camelG.position.set(1.5, 0, -2.5);
  const camelBody = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.8, 1.3), materials.castIron);
  camelBody.position.y = 0.6;
  camelG.add(camelBody);
  const camelSaddle = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.25, 0.6), materials.leatherBlack);
  camelSaddle.position.set(0, 1.1, 0);
  camelG.add(camelSaddle);
  gymGroup.add(camelG);

  // Suspended Punching Bag
  const bagMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.9, 12), materials.leatherBurgundy);
  bagMesh.position.set(-1.5, 1.8, 2.5);
  gymGroup.add(bagMesh);

  const gymLight = new THREE.PointLight(0xfffaf0, 3.8, 20);
  gymLight.position.set(0, 2.6, 0);
  gymGroup.add(gymLight);

  interiorsGroup.add(gymGroup);

  // G. Marconi Wireless Telegraphy Station & Silent Room (Boat Deck Officers' House, Z=157, X=-3.5, Y=27.3)
  const marconiGroup = new THREE.Group();
  marconiGroup.position.set(-3.5, 27.3, 157);

  const mFloor = new THREE.Mesh(new THREE.PlaneGeometry(6.5, 7.5), materials.teakDeck);
  mFloor.rotation.x = -Math.PI / 2;
  marconiGroup.add(mFloor);

  // Operator's Bench
  const desk = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.76, 3.2), materials.hondurasMahogany);
  desk.position.set(-2.0, 0.38, 0);
  marconiGroup.add(desk);

  // Twin Brass Morse Keys
  for (let mz of [-0.6, 0.6]) {
    const keyBase = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.04, 0.22), materials.castIron);
    keyBase.position.set(-2.0, 0.78, mz);
    marconiGroup.add(keyBase);
    const keyArm = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.03, 0.18), materials.morseBrass);
    keyArm.position.set(-2.0, 0.81, mz);
    marconiGroup.add(keyArm);
  }

  // Marconi Magnetic Detector (iron wire band over twin pulleys)
  const magDet = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.28, 0.6), materials.hondurasMahogany);
  magDet.position.set(-2.0, 0.9, 0);
  marconiGroup.add(magDet);
  for (let pz of [-0.18, 0.18]) {
    const pulley = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.04, 16), materials.morseBrass);
    pulley.rotation.z = Math.PI / 2;
    pulley.position.set(-1.82, 0.92, pz);
    marconiGroup.add(pulley);
  }

  // Multiple 100-jar Leyden Jar capacitor racks
  const leydenRack = new THREE.Mesh(new THREE.BoxGeometry(0.6, 1.4, 2.2), materials.teakHandrail);
  leydenRack.position.set(-2.0, 1.2, 2.2);
  marconiGroup.add(leydenRack);

  // Silent Room acoustic cork wall enclosure
  const corkWall = new THREE.Mesh(new THREE.BoxGeometry(3.0, 2.8, 0.2), materials.corkWall);
  corkWall.position.set(1.5, 1.4, 0);
  marconiGroup.add(corkWall);

  // 5 kW Motor-Generator & Rotary Spark Discharger inside Silent Room
  const motorGen = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 1.2, 16), materials.castIron);
  motorGen.rotation.x = Math.PI / 2;
  motorGen.position.set(2.2, 0.5, 0);
  marconiGroup.add(motorGen);

  const sparkCasing = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.35, 16), materials.morseBrass);
  sparkCasing.rotation.z = Math.PI / 2;
  sparkCasing.position.set(2.2, 0.5, 1.0);
  marconiGroup.add(sparkCasing);

  const marconiLight = new THREE.PointLight(0xffe4b5, 3.2, 18);
  marconiLight.position.set(-1.0, 2.5, 0);
  marconiGroup.add(marconiLight);

  interiorsGroup.add(marconiGroup);

  // H. Navigating Bridge Wheelhouse & Chart Room (Boat Deck Forward, Z=204, Y=27.3)
  const bridgeWheelhouseGroup = new THREE.Group();
  bridgeWheelhouseGroup.position.set(0, 27.3, 204);

  const brWhFloor = new THREE.Mesh(new THREE.PlaneGeometry(12.0, 7.0), materials.teakDeck);
  brWhFloor.rotation.x = -Math.PI / 2;
  bridgeWheelhouseGroup.add(brWhFloor);

  // Brown's Telemotor Hydraulic Steering Column
  const telemotorColumn = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.26, 1.15, 16), materials.polishedBrass);
  telemotorColumn.position.set(0, 0.58, 1.5);
  bridgeWheelhouseGroup.add(telemotorColumn);

  // 5-foot Spoked Teak and Brass Ship's Wheel (Steering Pivot)
  const wheelPivot = new THREE.Group();
  wheelPivot.position.set(0, 1.1, 1.32);
  const wheelRim = new THREE.Mesh(new THREE.TorusGeometry(0.75, 0.05, 8, 24), materials.teakHandrail);
  wheelPivot.add(wheelRim);
  const wheelHub = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.08, 12), materials.polishedBrass);
  wheelHub.rotation.x = Math.PI / 2;
  wheelPivot.add(wheelHub);
  for (let sp = 0; sp < 8; sp++) {
    const spoke = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 1.5, 8), materials.teakHandrail);
    spoke.rotation.z = (sp * Math.PI) / 4;
    wheelPivot.add(spoke);
  }
  bridgeWheelhouseGroup.add(wheelPivot);

  // Lord Kelvin Dry-Card Standard Magnetic Compass Binnacle
  const binnacle = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.35, 1.25, 16), materials.teakHandrail);
  binnacle.position.set(0, 0.62, 2.6);
  bridgeWheelhouseGroup.add(binnacle);
  const compassTop = new THREE.Mesh(new THREE.SphereGeometry(0.28, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), materials.polishedBrass);
  compassTop.position.set(0, 1.25, 2.6);
  bridgeWheelhouseGroup.add(compassTop);
  // Port & Starboard Soft Iron Corrector Spheres
  for (let s of [-1, 1]) {
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.14, 12, 12), materials.castIron);
    sphere.position.set(s * 0.45, 1.1, 2.6);
    bridgeWheelhouseGroup.add(sphere);
  }

  // Broad Oak Chart Table with Rolled Navigation Charts
  const chartTable = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.85, 1.2), materials.hondurasMahogany);
  chartTable.position.set(0, 0.42, -2.0);
  bridgeWheelhouseGroup.add(chartTable);

  const bridgeLight = new THREE.PointLight(0xfff0dd, 3.5, 20);
  bridgeLight.position.set(0, 2.6, 0);
  bridgeWheelhouseGroup.add(bridgeLight);

  interiorsGroup.add(bridgeWheelhouseGroup);

  // I. Third Class (Steerage) Dining Saloon (F Deck Forward, Z=198, Y=9.8)
  const steerageGroup = new THREE.Group();
  steerageGroup.position.set(0, 9.8, 198);

  const steerFloor = new THREE.Mesh(new THREE.PlaneGeometry(16.0, 16.0), materials.linoleumTile);
  steerFloor.rotation.x = -Math.PI / 2;
  steerageGroup.add(steerFloor);

  // White enamel painted iron bulkheads
  for (let s of [-1, 1]) {
    const wall = new THREE.Mesh(new THREE.PlaneGeometry(16.0, 2.6), materials.enamelIron);
    wall.position.set(s * 8.0, 1.3, 0);
    wall.rotation.y = s * (-Math.PI / 2);
    steerageGroup.add(wall);
  }

  // Long Pine Trestle Dining Tables and Fixed Continuous Benches
  for (let tx of [-5.0, 0, 5.0]) {
    for (let tz of [-4.5, 4.5]) {
      const table = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.74, 5.5), materials.steeragePine);
      table.position.set(tx, 0.37, tz);
      steerageGroup.add(table);

      // Benches along both sides
      for (let bx of [-0.65, 0.65]) {
        const bench = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.45, 5.5), materials.steeragePine);
        bench.position.set(tx + bx, 0.22, tz);
        steerageGroup.add(bench);
      }
    }
  }

  // Upright Piano in General Room
  const piano = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.2, 0.6), materials.hondurasMahogany);
  piano.position.set(-6.5, 0.6, -6.5);
  steerageGroup.add(piano);

  const steerLight1 = new THREE.PointLight(0xfffaea, 3.2, 22);
  steerLight1.position.set(0, 2.4, -4.0);
  steerageGroup.add(steerLight1);
  const steerLight2 = new THREE.PointLight(0xfffaea, 3.2, 22);
  steerLight2.position.set(0, 2.4, 4.0);
  steerageGroup.add(steerLight2);

  interiorsGroup.add(steerageGroup);

  // J. Scotland Road Working Passage (E Deck Port Side, X=-2.8, running Z=85 to 180, Y=12.4)
  const scotlandRoadGroup = new THREE.Group();
  scotlandRoadGroup.position.set(-2.8, 12.4, 132.5);

  const srFloor = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 95.0), materials.castIron);
  srFloor.rotation.x = -Math.PI / 2;
  scotlandRoadGroup.add(srFloor);

  const srCeil = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 95.0), materials.enamelIron);
  srCeil.position.y = 2.9;
  srCeil.rotation.x = Math.PI / 2;
  scotlandRoadGroup.add(srCeil);

  // Corridor Side Walls (Port & Starboard)
  for (let sx of [-1.3, 1.3]) {
    const srWall = new THREE.Mesh(new THREE.PlaneGeometry(95.0, 2.9), materials.enamelIron);
    srWall.position.set(sx, 1.45, 0);
    srWall.rotation.y = sx > 0 ? -Math.PI / 2 : Math.PI / 2;
    scotlandRoadGroup.add(srWall);
  }

  // Watertight Bulkhead Archways and Sliding Doors along passage
  for (let bz = -35; bz <= 35; bz += 17.5) {
    const arch = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.4, 0.25), materials.castIron);
    arch.position.set(0, 2.7, bz);
    scotlandRoadGroup.add(arch);

    const doorFrame = new THREE.Mesh(new THREE.BoxGeometry(0.2, 2.5, 0.25), materials.castIron);
    doorFrame.position.set(1.2, 1.25, bz);
    scotlandRoadGroup.add(doorFrame);
  }

  // Overhead pipe racks (insulated steam pipes, freshwater, electrical conduits)
  for (let px of [-0.8, -0.3, 0.3, 0.8]) {
    const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 95.0, 8), materials.copperPipe);
    pipe.position.set(px, 2.65, 0);
    pipe.rotation.x = Math.PI / 2;
    scotlandRoadGroup.add(pipe);
  }

  for (let lz = -40; lz <= 40; lz += 15) {
    const sLight = new THREE.PointLight(0xffeedd, 3.2, 18);
    sLight.position.set(0, 2.4, lz);
    scotlandRoadGroup.add(sLight);
  }

  interiorsGroup.add(scotlandRoadGroup);

  // K. Triple First Class Passenger Lifts (Elevator Shafts & Moving Car)
  // Located forward of Grand Staircase in the forward entrance foyer (Z=176.5)
  const liftGroup = new THREE.Group();
  liftGroup.position.set(-1.5, 12.4, 176.5); // Between E Deck (12.4) and Boat Deck (27.3)

  // 3 Vertical Shaft Casings with Wrought Iron Scrollwork
  for (let sx of [-1.8, 0, 1.8]) {
    const shaftFrame = new THREE.Mesh(new THREE.BoxGeometry(1.6, 15.0, 1.6), materials.wroughtIron);
    shaftFrame.position.set(sx, 7.5, 0);
    liftGroup.add(shaftFrame);
  }

  // Interactive Elevator Car (moves vertically between Y=0 and Y=14.9 relative to liftGroup)
  const elevatorCar = new THREE.Group();
  elevatorCar.position.set(0, 0, 0);

  const carFloor = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.1, 1.5), materials.hondurasMahogany);
  elevatorCar.add(carFloor);
  const carCeil = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.1, 1.5), materials.jacobeanWhite);
  carCeil.position.y = 2.4;
  elevatorCar.add(carCeil);
  const carCage = new THREE.Mesh(new THREE.BoxGeometry(1.5, 2.4, 1.5), materials.wroughtIron);
  carCage.position.y = 1.2;
  elevatorCar.add(carCage);

  const carLight = new THREE.PointLight(0xfffaec, 2.5, 8);
  carLight.position.set(0, 2.2, 0);
  elevatorCar.add(carLight);

  liftGroup.add(elevatorCar);
  interiorsGroup.add(liftGroup);

  // L. Steering Gear Room & Tiller Flat (D Deck Aft, Z=14, Y=15.3)
  const steeringRoomGroup = new THREE.Group();
  steeringRoomGroup.position.set(0, 15.3, 14.0);

  // Solid Forged Steel Rudder Stock (23.5-inch diameter)
  const rudderStock = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 3.2, 16), materials.castIron);
  rudderStock.position.set(0, 1.6, -1.5);
  steeringRoomGroup.add(rudderStock);

  // Massive Spring-Cushioned Quadrant Tiller with heavy spiral springs
  const quadrantTiller = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 1.8, 0.35, 16, 1, false, -Math.PI / 3, (2 * Math.PI) / 3), materials.castIron);
  quadrantTiller.rotation.x = Math.PI / 2;
  quadrantTiller.position.set(0, 2.2, -1.5);
  steeringRoomGroup.add(quadrantTiller);

  // Twin Harland & Wolff Steam Steering Engines
  for (let s of [-1, 1]) {
    const stEng = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.8, 2.2), materials.castIron);
    stEng.position.set(s * 2.8, 0.9, 0.5);
    steeringRoomGroup.add(stEng);
  }

  const stLight = new THREE.PointLight(0xffe2b8, 3.0, 18);
  stLight.position.set(0, 2.6, 0);
  steeringRoomGroup.add(stLight);

  interiorsGroup.add(steeringRoomGroup);

  // -------------------------------------------------------------
  // 7. PROPULSION ENGINEERING PLANT
  // -------------------------------------------------------------
  // A. Boiler Room No. 6
  const br6Group = new THREE.Group();
  br6Group.position.set(0, 1.6, 177);

  const brFloor = new THREE.Mesh(new THREE.PlaneGeometry(24.0, 18.0), materials.castIron);
  brFloor.rotation.x = -Math.PI / 2;
  br6Group.add(brFloor);

  for (let b = 0; b < 4; b++) {
    const xPos = (b - 1.5) * 5.4;
    const boilerG = new THREE.Group();
    boilerG.position.set(xPos, 2.6, 0);

    const bShell = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.4, 6.1, 16), materials.boilerSteel);
    bShell.rotation.x = Math.PI / 2;
    boilerG.add(bShell);

    // 6 Corrugated Furnaces with cast iron frames
    for (let fz of [-3.1, 3.1]) {
      for (let fx of [-1.2, 0.0, 1.2]) {
        // Cast iron furnace frame
        const frame = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.65, 0.15, 12), materials.castIron);
        frame.rotation.x = Math.PI / 2;
        frame.position.set(fx, -1.0, fz);
        boilerG.add(frame);

        // Glowing firebed
        const fire = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.48, 0.08, 12), materials.glowingCoal);
        fire.rotation.x = Math.PI / 2;
        fire.position.set(fx, -1.0, fz + (fz > 0 ? 0.05 : -0.05));
        boilerG.add(fire);
      }
    }
    br6Group.add(boilerG);
  }

  const furnaceLight = new THREE.PointLight(0xff4500, 4.5, 30);
  furnaceLight.position.set(0, 3.2, 0);
  br6Group.add(furnaceLight);

  machineryGroup.add(br6Group);

  // B. Reciprocating Engine Room
  const recipEnginePivots = { portCrank: null, stbdCrank: null };

  function buildRecipEngine(isStarboard) {
    const engG = new THREE.Group();
    const xPos = isStarboard ? 4.8 : -4.8;
    engG.position.set(xPos, 1.98, 63.5);

    const bedplate = new THREE.Mesh(new THREE.BoxGeometry(6.2, 1.2, 18.0), materials.castIron);
    bedplate.position.y = 0.6;
    engG.add(bedplate);

    const crankShaft = new THREE.Group();
    crankShaft.position.set(0, 1.4, 0);
    const shaftCore = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 17.5, 16), materials.polishedSteel);
    shaftCore.rotation.x = Math.PI / 2;
    crankShaft.add(shaftCore);
    engG.add(crankShaft);

    if (isStarboard) recipEnginePivots.stbdCrank = crankShaft;
    else recipEnginePivots.portCrank = crankShaft;

    const cyls = [
      { name: 'HP', dia: 1.37, z: 6.0 },
      { name: 'IP', dia: 2.13, z: 2.0 },
      { name: 'LP1', dia: 2.46, z: -2.0 },
      { name: 'LP2', dia: 2.46, z: -6.0 }
    ];

    cyls.forEach((c) => {
      const cylMesh = new THREE.Mesh(new THREE.CylinderGeometry(c.dia/2, c.dia/2, 2.5, 16), materials.castIron);
      cylMesh.position.set(0, 10.5, c.z);
      engG.add(cylMesh);

      for (let cx of [-2.2, 2.2]) {
        const colMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.35, 8.5, 10), materials.castIron);
        colMesh.position.set(cx, 5.5, c.z);
        engG.add(colMesh);
      }

      const rodMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 6.5, 8), materials.polishedSteel);
      rodMesh.position.set(0, 5.5, c.z);
      engG.add(rodMesh);

      // Polished brass oil cups and lubrication manifold
      const oilBox = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.4, 0.3), materials.polishedBrass);
      oilBox.position.set(0, 8.2, c.z + (isStarboard ? -1.1 : 1.1));
      engG.add(oilBox);
    });

    return engG;
  }

  const stbdEng = buildRecipEngine(true);
  const portEng = buildRecipEngine(false);
  machineryGroup.add(stbdEng);
  machineryGroup.add(portEng);

  // Catwalk grating platform between port & starboard engines
  const catwalk = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.12, 17.5), materials.castIron);
  catwalk.position.set(0, 5.4, 63.5);
  machineryGroup.add(catwalk);

  for (let sx of [-1.05, 1.05]) {
    const rail = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 17.5, 8), materials.polishedBrass);
    rail.position.set(sx, 6.4, 63.5);
    rail.rotation.x = Math.PI / 2;
    machineryGroup.add(rail);
  }

  // Dual-level Engine Room Floodlights
  const engLight1 = new THREE.PointLight(0xfffaed, 4.5, 45);
  engLight1.position.set(0, 11.5, 63.5);
  machineryGroup.add(engLight1);

  const engLight2 = new THREE.PointLight(0xffecd0, 4.0, 35);
  engLight2.position.set(0, 5.2, 63.5);
  machineryGroup.add(engLight2);

  // C. Parsons Turbine Engine Room
  const turbineGroup = new THREE.Group();
  turbineGroup.position.set(0, 1.6, 43.5);

  const turbCasing = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.4, 9.5, 20), materials.castIron);
  turbCasing.rotation.x = Math.PI / 2;
  turbCasing.position.y = 2.6;
  turbineGroup.add(turbCasing);

  for (let side of [-1, 1]) {
    const steamPipe = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.85, 8.0, 12), materials.copperPipe);
    steamPipe.position.set(side * 2.8, 5.2, 5.0);
    steamPipe.rotation.x = 0.5;
    turbineGroup.add(steamPipe);

    const condMesh = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 1.8, 7.5, 16), materials.boilerSteel);
    condMesh.rotation.x = Math.PI / 2;
    condMesh.position.set(side * 7.5, 2.4, 0);
    turbineGroup.add(condMesh);
  }
  machineryGroup.add(turbineGroup);

  // D. Electric Dynamo Room (4x 400 kW Dynamos)
  const dynamoGroup = new THREE.Group();
  dynamoGroup.position.set(0, 1.6, 27.5);

  for (let d = 0; d < 4; d++) {
    const dG = new THREE.Group();
    dG.position.set((d - 1.5) * 4.2, 0, 0);

    const eng = new THREE.Mesh(new THREE.BoxGeometry(1.8, 3.2, 2.2), materials.castIron);
    eng.position.y = 1.6;
    dG.add(eng);

    const dyn = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 2.0, 16), materials.castIron);
    dyn.rotation.x = Math.PI / 2;
    dyn.position.set(0, 1.4, 2.0);
    dG.add(dyn);

    dynamoGroup.add(dG);
  }

  const swBoard = new THREE.Mesh(new THREE.BoxGeometry(14.0, 2.8, 0.4), materials.castIron);
  swBoard.position.set(0, 2.2, -5.5);
  dynamoGroup.add(swBoard);
  machineryGroup.add(dynamoGroup);

  return {
    shipGroup,
    hullGroup,
    decksGroup,
    funnelsGroup,
    machineryGroup,
    interiorsGroup,
    fittingsGroup,
    animatedDoors,
    centrePropGroup,
    portPropGroup,
    stbdPropGroup,
    recipEnginePivots,
    rudderGroup,
    wheelPivot,
    elevatorCar,
    quadrantTiller
  };
}
