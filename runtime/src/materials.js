// runtime/src/materials.js
// Physically Based Rendering (PBR) Materials for RMS Titanic (Yard No. 401)
// Authentic 1912 White Star Line Livery & Period Marine Engineering Finishes

import * as THREE from 'three';

export function createTitanicMaterials() {
  const materials = {};

  // 1. Exterior Hull Plating Materials
  materials.hullBlack = new THREE.MeshStandardMaterial({
    color: 0x121316,
    roughness: 0.38,
    metalness: 0.22,
    side: THREE.DoubleSide,
    name: 'Hull_Topsides_Black'
  });

  materials.hullRed = new THREE.MeshStandardMaterial({
    color: 0x73231a, // Authentic White Star oxide red boot-topping
    roughness: 0.62,
    metalness: 0.15,
    side: THREE.DoubleSide,
    name: 'Hull_Bottom_OxideRed'
  });

  materials.sheerStrakeWhite = new THREE.MeshStandardMaterial({
    color: 0xf5f2ec,
    roughness: 0.35,
    metalness: 0.1,
    side: THREE.DoubleSide,
    name: 'Sheer_Strake_White'
  });

  materials.goldCoveLine = new THREE.MeshStandardMaterial({
    color: 0xc9a23b,
    roughness: 0.28,
    metalness: 0.78,
    side: THREE.DoubleSide,
    name: 'Gold_Cove_Line'
  });

  // 2. Funnel Livery
  // Lower 75%: White Star Buff / Ochre. Upper 25%: Jet Black
  materials.funnelBuff = new THREE.MeshStandardMaterial({
    color: 0xd9842f, // Authentic White Star Buff / Belfast Ochre
    roughness: 0.42,
    metalness: 0.15,
    side: THREE.DoubleSide,
    name: 'Funnel_WhiteStar_Buff'
  });

  materials.funnelBlack = new THREE.MeshStandardMaterial({
    color: 0x151618,
    roughness: 0.48,
    metalness: 0.25,
    side: THREE.DoubleSide,
    name: 'Funnel_Black_Top'
  });

  // 3. Superstructure & Deckhouse Enamel
  materials.deckhouseWhite = new THREE.MeshStandardMaterial({
    color: 0xf7f5f0,
    roughness: 0.32,
    metalness: 0.08,
    side: THREE.DoubleSide,
    name: 'Deckhouse_Enamel_White'
  });

  materials.teakDeck = new THREE.MeshStandardMaterial({
    color: 0xab8758, // Weathered fine teak / Canadian pine
    roughness: 0.72,
    metalness: 0.05,
    side: THREE.DoubleSide,
    name: 'Deck_Teak_Planking'
  });

  materials.teakHandrail = new THREE.MeshStandardMaterial({
    color: 0x5a3516, // Polished teak cap rail
    roughness: 0.35,
    metalness: 0.05,
    side: THREE.DoubleSide,
    name: 'Teak_Handrail'
  });

  // 4. Masts & Rigging
  materials.mastSteel = new THREE.MeshStandardMaterial({
    color: 0xd9842f, // Lower steel masts painted White Star buff
    roughness: 0.48,
    metalness: 0.3,
    side: THREE.DoubleSide,
    name: 'Mast_Buff_Steel'
  });

  materials.mastTeakPole = new THREE.MeshStandardMaterial({
    color: 0x8b5a2b, // Upper pole mast varnished teak
    roughness: 0.58,
    metalness: 0.05,
    side: THREE.DoubleSide,
    name: 'Mast_Teak_Pole'
  });

  materials.steelWire = new THREE.MeshStandardMaterial({
    color: 0x3d3f44,
    roughness: 0.4,
    metalness: 0.85,
    side: THREE.DoubleSide,
    name: 'Rigging_Steel_Wire'
  });

  // 5. Metals & Machinery
  materials.polishedBrass = new THREE.MeshStandardMaterial({
    color: 0xd8b242,
    roughness: 0.22,
    metalness: 0.88,
    side: THREE.DoubleSide,
    name: 'Polished_Brass'
  });

  materials.manganeseBronze = new THREE.MeshStandardMaterial({
    color: 0x94723c,
    roughness: 0.3,
    metalness: 0.92,
    side: THREE.DoubleSide,
    name: 'Manganese_Bronze'
  });

  materials.castIron = new THREE.MeshStandardMaterial({
    color: 0x2d2e32,
    roughness: 0.68,
    metalness: 0.58,
    side: THREE.DoubleSide,
    name: 'Cast_Iron_Machinery'
  });

  materials.polishedSteel = new THREE.MeshStandardMaterial({
    color: 0xa4a8af,
    roughness: 0.16,
    metalness: 0.96,
    side: THREE.DoubleSide,
    name: 'Machinery_Polished_Steel'
  });

  materials.copperPipe = new THREE.MeshStandardMaterial({
    color: 0xbf603a,
    roughness: 0.28,
    metalness: 0.84,
    side: THREE.DoubleSide,
    name: 'Copper_Pipe'
  });

  materials.boilerSteel = new THREE.MeshStandardMaterial({
    color: 0x242528,
    roughness: 0.62,
    metalness: 0.62,
    side: THREE.DoubleSide,
    name: 'Boiler_Steel'
  });

  materials.glowingCoal = new THREE.MeshStandardMaterial({
    color: 0x220800,
    emissive: 0xff4000,
    emissiveIntensity: 3.2,
    roughness: 0.85,
    side: THREE.DoubleSide,
    name: 'Glowing_Coal_Fire'
  });

  // 6. Interiors & Period Woods
  materials.englishOak = new THREE.MeshStandardMaterial({
    color: 0x734d2a, // Grand Staircase antique oak boiserie
    roughness: 0.42,
    metalness: 0.05,
    side: THREE.DoubleSide,
    name: 'English_Oak_Boiserie'
  });

  materials.hondurasMahogany = new THREE.MeshStandardMaterial({
    color: 0x4d2215, // 1st Class Smoking room rich mahogany
    roughness: 0.35,
    metalness: 0.05,
    side: THREE.DoubleSide,
    name: 'Honduras_Mahogany'
  });

  materials.jacobeanWhite = new THREE.MeshStandardMaterial({
    color: 0xf2eee6, // 1st Class Dining Saloon white carved paneling
    roughness: 0.38,
    metalness: 0.05,
    side: THREE.DoubleSide,
    name: 'Jacobean_White_Paneling'
  });

  materials.giltBronze = new THREE.MeshStandardMaterial({
    color: 0xd1a538, // Grand staircase wrought iron medallions
    roughness: 0.26,
    metalness: 0.84,
    side: THREE.DoubleSide,
    name: 'Gilt_Bronze_Ornament'
  });

  materials.wroughtIron = new THREE.MeshStandardMaterial({
    color: 0x18181a, // Balustrades and dome framing
    roughness: 0.48,
    metalness: 0.72,
    side: THREE.DoubleSide,
    name: 'Wrought_Iron'
  });

  materials.marbleWhite = new THREE.MeshStandardMaterial({
    color: 0xeae8e3, // Fireplaces and swimming pool curbs
    roughness: 0.22,
    metalness: 0.05,
    side: THREE.DoubleSide,
    name: 'Carrara_White_Marble'
  });

  materials.turkishTile = new THREE.MeshStandardMaterial({
    color: 0x1d7888, // Turkish bath cooling room Moorish tile
    roughness: 0.25,
    metalness: 0.12,
    side: THREE.DoubleSide,
    name: 'Turkish_Arabesque_Tile'
  });

  materials.poolTurquoiseTile = new THREE.MeshStandardMaterial({
    color: 0x22beba, // Heated saltwater pool lining
    roughness: 0.18,
    metalness: 0.15,
    side: THREE.DoubleSide,
    name: 'Pool_Turquoise_Tile'
  });

  materials.greenVelvet = new THREE.MeshStandardMaterial({
    color: 0x1c4d2b, // 1st Class Lounge armchairs
    roughness: 0.82,
    metalness: 0.0,
    side: THREE.DoubleSide,
    name: 'Green_Wilton_Velvet'
  });

  materials.leatherBurgundy = new THREE.MeshStandardMaterial({
    color: 0x4a171a, // Smoking room Chesterfields
    roughness: 0.52,
    metalness: 0.05,
    side: THREE.DoubleSide,
    name: 'Burgundy_Chesterfield_Leather'
  });

  materials.glass = new THREE.MeshPhysicalMaterial({
    color: 0xe0f0ff,
    transparent: true,
    opacity: 0.45,
    roughness: 0.08,
    metalness: 0.1,
    transmission: 0.92,
    ior: 1.52,
    side: THREE.DoubleSide,
    name: 'Glazing_Glass'
  });

  materials.stainedGlass = new THREE.MeshStandardMaterial({
    color: 0x6699bb,
    emissive: 0x335577,
    emissiveIntensity: 0.7,
    roughness: 0.18,
    transparent: true,
    opacity: 0.88,
    side: THREE.DoubleSide,
    name: 'Stained_Glass_Window'
  });

  // 7. Lifeboats & Fittings
  materials.lifeboatWood = new THREE.MeshStandardMaterial({
    color: 0xf5f3ee, // Clinker-built wooden hull painted white
    roughness: 0.48,
    metalness: 0.05,
    side: THREE.DoubleSide,
    name: 'Lifeboat_White_Wood'
  });

  materials.canvasCover = new THREE.MeshStandardMaterial({
    color: 0xdbd1bb, // Weathered canvas tarpaulin
    roughness: 0.88,
    metalness: 0.0,
    side: THREE.DoubleSide,
    name: 'Canvas_Cover'
  });

  materials.welinDavitSteel = new THREE.MeshStandardMaterial({
    color: 0x26272a,
    roughness: 0.52,
    metalness: 0.68,
    side: THREE.DoubleSide,
    name: 'Welin_Davit_Steel'
  });

  // 8. Period Interior Specialty Materials
  materials.trellisGreen = new THREE.MeshStandardMaterial({
    color: 0x24552e, // Café Parisien ivy trellis
    roughness: 0.65,
    metalness: 0.05,
    side: THREE.DoubleSide,
    name: 'Cafe_Parisien_Trellis'
  });

  materials.wickerChair = new THREE.MeshStandardMaterial({
    color: 0xbfa36d, // Wicker bistro chairs
    roughness: 0.78,
    metalness: 0.02,
    side: THREE.DoubleSide,
    name: 'Wicker_Cane_Furniture'
  });

  materials.steeragePine = new THREE.MeshStandardMaterial({
    color: 0xc4a36b, // 3rd Class pine dining tables
    roughness: 0.68,
    metalness: 0.05,
    side: THREE.DoubleSide,
    name: 'Steerage_Pine_Wood'
  });

  materials.enamelIron = new THREE.MeshStandardMaterial({
    color: 0xdcdad5, // 3rd Class painted iron bulkheads
    roughness: 0.45,
    metalness: 0.42,
    side: THREE.DoubleSide,
    name: 'Steerage_Enamel_Iron'
  });

  materials.corkWall = new THREE.MeshStandardMaterial({
    color: 0x6e4e2e, // Marconi Silent Room acoustic cork
    roughness: 0.92,
    metalness: 0.0,
    side: THREE.DoubleSide,
    name: 'Marconi_Silent_Cork'
  });

  materials.leatherBlack = new THREE.MeshStandardMaterial({
    color: 0x18181a, // Gymnasium camel/horse saddle leather
    roughness: 0.55,
    metalness: 0.1,
    side: THREE.DoubleSide,
    name: 'Gymnasium_Saddle_Leather'
  });

  return materials;
}
