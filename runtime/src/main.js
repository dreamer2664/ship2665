// runtime/src/main.js
// Interactive 3D Explorable Simulation for RMS Titanic (Harland & Wolff Yard No. 401)
// Project SHIP2665 — Completed Maiden Voyage Configuration (10 April 1912)

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { createTitanicMaterials } from './materials.js';
import { buildTitanicShip } from './ship_geometry.js';
import { createOceanSystem } from './ocean_system.js';
import { createSmokeSystem } from './smoke_system.js';
import { TitanicAudioEngine } from './audio_system.js';
import { CAMERA_VIEWS } from './camera_views.js';

// Global Simulation State
window.TITANIC_SIM = {
  order: 'FULL_AHEAD',
  speedKts: 21.5,
  boilerFiring: 0.95,
  boilerPressure: 215.0,
  recipRPM: 75.0,
  turbineRPM: 165.0,
  crankAngle: 0.0,
  watertightClosed: false,
  cutawayMode: false,
  lightingMode: 'day',
  // Steering Telemotor & Rudder Mechanics
  targetRudderDeg: 0.0,
  currentRudderDeg: 0.0,
  // Passenger Elevator
  elevatorDeckIndex: 5, // 0: E, 1: D, 2: C, 3: B, 4: A, 5: Boat Deck
  elevatorTargetY: 14.9,
  elevatorCurrentY: 14.9,
  // Stateroom Doors
  cabinDoorsOpen: true,
  cabinDoorAngle: Math.PI / 2,
  ready: false
};

const ELEVATOR_DECKS = [
  { name: 'E Deck', y: 0.0 },
  { name: 'D Deck', y: 2.9 },
  { name: 'C Deck', y: 6.1 },
  { name: 'B Deck', y: 9.25 },
  { name: 'A Deck', y: 12.0 },
  { name: 'Boat Deck', y: 14.9 }
];

const app = {
  scene: null,
  camera: null,
  renderer: null,
  controls: null,
  materials: null,
  ship: null,
  ocean: null,
  smoke: null,
  audio: null,
  dirLight: null,
  hemiLight: null,
  steamJets: [],
  clock: new THREE.Clock()
};

function init() {
  const container = document.getElementById('canvas-container');

  // 1. Scene & Camera
  app.scene = new THREE.Scene();
  app.scene.background = new THREE.Color(0xb0d4ec); // Crisp April midday sky
  app.scene.fog = new THREE.FogExp2(0xb0d4ec, 0.0012);

  app.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.5, 4000);
  // Default to Port Bow Quarter view
  app.camera.position.set(-145, 28, 310);

  // 2. Renderer with PBR tone mapping and preserved drawing buffer for capture
  app.renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true, powerPreference: 'high-performance' });
  app.renderer.setSize(window.innerWidth, window.innerHeight);
  app.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2.0));
  app.renderer.toneMapping = THREE.ACESFilmicToneMapping;
  app.renderer.toneMappingExposure = 1.15;
  app.renderer.shadowMap.enabled = true;
  app.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(app.renderer.domElement);

  // 3. Orbit Controls
  app.controls = new OrbitControls(app.camera, app.renderer.domElement);
  app.controls.enableDamping = true;
  app.controls.dampingFactor = 0.05;
  app.controls.maxDistance = 1500;
  app.controls.minDistance = 2;
  app.controls.target.set(0, 18, 230);
  app.controls.update();

  // 4. Lighting & Environment
  app.hemiLight = new THREE.HemisphereLight(0xffffff, 0x1e3a50, 0.85);
  app.scene.add(app.hemiLight);

  app.dirLight = new THREE.DirectionalLight(0xfffaed, 2.4);
  app.dirLight.position.set(120, 180, 160);
  app.dirLight.castShadow = true;
  app.dirLight.shadow.mapSize.width = 2048;
  app.dirLight.shadow.mapSize.height = 2048;
  app.dirLight.shadow.camera.near = 10;
  app.dirLight.shadow.camera.far = 1000;
  const d = 250;
  app.dirLight.shadow.camera.left = -d;
  app.dirLight.shadow.camera.right = d;
  app.dirLight.shadow.camera.top = d;
  app.dirLight.shadow.camera.bottom = -d;
  app.scene.add(app.dirLight);

  // Interior warm point lights
  const interiorLightG = new THREE.Group();
  const stairLight = new THREE.PointLight(0xffeedd, 3.5, 45);
  stairLight.position.set(0, 24, 166);
  interiorLightG.add(stairLight);

  const dinLight = new THREE.PointLight(0xffe8cc, 3.0, 50);
  dinLight.position.set(0, 17, 139);
  interiorLightG.add(dinLight);

  const boilerLight = new THREE.PointLight(0xff4500, 4.0, 40);
  boilerLight.position.set(0, 4, 177);
  interiorLightG.add(boilerLight);

  const engineLight = new THREE.PointLight(0xffd8a8, 3.5, 40);
  engineLight.position.set(0, 6, 63.5);
  interiorLightG.add(engineLight);
  app.scene.add(interiorLightG);

  // 5. Materials & Ship Construction
  app.materials = createTitanicMaterials();
  app.ship = buildTitanicShip(app.materials);
  app.scene.add(app.ship.shipGroup);

  // 6. Multiscale Ocean System
  app.ocean = createOceanSystem(app.scene);

  // 7. Volumetric Smoke System
  app.smoke = createSmokeSystem(app.scene);

  // 8. Procedural Audio Engine
  app.audio = new TitanicAudioEngine();

  // 9. Whistle Steam Jets
  initSteamJets();

  // 10. Setup UI HUD & Listeners
  setupUI();
  setupKeyboardControls();

  window.addEventListener('resize', onWindowResize);

  window.TITANIC_SIM.ready = true;
  window.renderReady = true;

  // Animation Loop
  animate();
}

function initSteamJets() {
  // Steam jets on Funnel 1 & 2 whistles
  for (let z of [176.5, 149.0]) {
    const jetGeom = new THREE.ConeGeometry(0.6, 3.5, 12);
    const jetMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.0 });
    const jet = new THREE.Mesh(jetGeom, jetMat);
    jet.position.set(0.6, 51.5, z);
    jet.rotation.x = -Math.PI / 4;
    app.scene.add(jet);
    app.steamJets.push(jet);
  }
}

function triggerWhistle() {
  if (app.audio) {
    app.audio.init();
    app.audio.setMuted(false);
    app.audio.playSteamWhistle();
  }
  app.steamJets.forEach(jet => {
    jet.material.opacity = 0.85;
    setTimeout(() => {
      let fade = setInterval(() => {
        jet.material.opacity -= 0.08;
        if (jet.material.opacity <= 0) {
          jet.material.opacity = 0;
          clearInterval(fade);
        }
      }, 50);
    }, 1200);
  });
}

function setupUI() {
  // Telegraph buttons
  const orders = [
    { id: 'FULL_AHEAD', label: 'Full Ahead', speed: 21.5, recip: 75.0, turb: 165.0, fire: 0.95 },
    { id: 'HALF_AHEAD', label: 'Half Ahead', speed: 15.0, recip: 52.0, turb: 115.0, fire: 0.65 },
    { id: 'SLOW_AHEAD', label: 'Slow Ahead', speed: 10.0, recip: 35.0, turb: 75.0, fire: 0.40 },
    { id: 'STOP',       label: 'Stop',       speed: 0.0,  recip: 0.0,  turb: 0.0,   fire: 0.15 },
    { id: 'FULL_ASTERN',label: 'Full Astern',speed: -13.0,recip: -75.0,turb: 0.0,   fire: 0.95 }
  ];

  const telegraphContainer = document.getElementById('telegraph-controls');
  if (telegraphContainer) {
    orders.forEach((ord) => {
      const btn = document.createElement('button');
      btn.className = `btn-telegraph ${ord.id === 'FULL_AHEAD' ? 'active' : ''}`;
      btn.innerText = ord.label;
      btn.onclick = () => {
        document.querySelectorAll('.btn-telegraph').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        setEngineOrder(ord);
      };
      telegraphContainer.appendChild(btn);
    });
  }

  // Camera preset selector
  const cameraSelect = document.getElementById('camera-select');
  if (cameraSelect) {
    for (const [key, view] of Object.entries(CAMERA_VIEWS)) {
      const opt = document.createElement('option');
      opt.value = key;
      opt.innerText = view.name;
      cameraSelect.appendChild(opt);
    }
    cameraSelect.onchange = (e) => {
      setCameraView(e.target.value);
    };
  }

  // Watertight door bridge master switch
  const wtBtn = document.getElementById('btn-watertight');
  if (wtBtn) {
    wtBtn.onclick = () => {
      toggleWatertightDoors();
    };
  }

  // Cutaway X-Ray toggle
  const cutawayBtn = document.getElementById('btn-cutaway');
  if (cutawayBtn) {
    cutawayBtn.onclick = () => {
      toggleCutaway();
    };
  }

  // Steering helm buttons
  const btnPort = document.getElementById('btn-helm-port');
  if (btnPort) btnPort.onclick = () => steerRudder(-5);
  const btnMid = document.getElementById('btn-helm-mid');
  if (btnMid) btnMid.onclick = () => setRudder(0);
  const btnStbd = document.getElementById('btn-helm-stbd');
  if (btnStbd) btnStbd.onclick = () => steerRudder(5);

  // Passenger Elevator button
  const liftBtn = document.getElementById('btn-lift-call');
  if (liftBtn) {
    liftBtn.onclick = () => cycleElevatorDeck();
  }

  // Stateroom Doors toggle button
  const doorsBtn = document.getElementById('btn-doors-toggle');
  if (doorsBtn) {
    doorsBtn.onclick = () => toggleCabinDoors();
  }

  // Lighting Mode selector
  const lightSelect = document.getElementById('light-select');
  if (lightSelect) {
    lightSelect.onchange = (e) => {
      setLightingMode(e.target.value);
    };
  }

  // Whistle blast button
  const whistleBtn = document.getElementById('btn-whistle');
  if (whistleBtn) {
    whistleBtn.onclick = () => triggerWhistle();
  }

  // Audio unmute
  const muteBtn = document.getElementById('btn-sound');
  if (muteBtn) {
    muteBtn.onclick = () => {
      app.audio.init();
      const newMute = !app.audio.isMuted;
      app.audio.setMuted(newMute);
      muteBtn.innerText = newMute ? '🔊 Sound: Off' : '🔊 Sound: On';
    };
  }
}

function setupKeyboardControls() {
  window.addEventListener('keydown', (e) => {
    // Ignore input if focused in text field
    if (['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

    switch (e.code) {
      case 'Digit1':
      case 'Numpad1':
        setEngineOrderByIndex(0); // Full Ahead
        break;
      case 'Digit2':
      case 'Numpad2':
        setEngineOrderByIndex(1); // Half Ahead
        break;
      case 'Digit3':
      case 'Numpad3':
        setEngineOrderByIndex(2); // Slow Ahead
        break;
      case 'Digit4':
      case 'Numpad4':
        setEngineOrderByIndex(3); // Stop
        break;
      case 'Digit5':
      case 'Numpad5':
        setEngineOrderByIndex(4); // Full Astern
        break;
      case 'ArrowLeft':
      case 'KeyA':
        steerRudder(-5);
        break;
      case 'ArrowRight':
      case 'KeyD':
        steerRudder(5);
        break;
      case 'KeyS':
        setRudder(0);
        break;
      case 'KeyW':
      case 'Space':
        triggerWhistle();
        break;
      case 'KeyL':
        cycleElevatorDeck();
        break;
      case 'KeyO':
        toggleCabinDoors();
        break;
      case 'KeyX':
        toggleCutaway();
        break;
      case 'KeyT':
        toggleWatertightDoors();
        break;
    }
  });
}

function setEngineOrderByIndex(idx) {
  const btns = document.querySelectorAll('.btn-telegraph');
  if (btns && btns[idx]) {
    btns[idx].click();
  }
}

function steerRudder(deltaDeg) {
  const newDeg = Math.max(-35, Math.min(35, window.TITANIC_SIM.targetRudderDeg + deltaDeg));
  setRudder(newDeg);
}

function setRudder(deg) {
  window.TITANIC_SIM.targetRudderDeg = deg;
  const el = document.getElementById('hud-rudder');
  if (el) {
    if (deg === 0) el.innerText = 'Rudder: Amidships';
    else if (deg < 0) el.innerText = `Rudder: ${Math.abs(deg)}° Port`;
    else el.innerText = `Rudder: ${deg}° Starboard`;
  }
}

function cycleElevatorDeck() {
  window.TITANIC_SIM.elevatorDeckIndex = (window.TITANIC_SIM.elevatorDeckIndex + 1) % ELEVATOR_DECKS.length;
  const deck = ELEVATOR_DECKS[window.TITANIC_SIM.elevatorDeckIndex];
  window.TITANIC_SIM.elevatorTargetY = deck.y;

  const el = document.getElementById('hud-lift-deck');
  if (el) el.innerText = deck.name;
}

function toggleCabinDoors() {
  window.TITANIC_SIM.cabinDoorsOpen = !window.TITANIC_SIM.cabinDoorsOpen;
  window.TITANIC_SIM.cabinDoorAngle = window.TITANIC_SIM.cabinDoorsOpen ? Math.PI / 2 : 0;
  const btn = document.getElementById('btn-doors-toggle');
  if (btn) {
    btn.innerText = window.TITANIC_SIM.cabinDoorsOpen ? '🚪 Cabins: Open' : '🚪 Cabins: Closed';
  }
}

function setEngineOrder(ord) {
  window.TITANIC_SIM.order = ord.id;
  window.TITANIC_SIM.speedKts = ord.speed;
  window.TITANIC_SIM.recipRPM = ord.recip;
  window.TITANIC_SIM.turbineRPM = ord.turb;
  window.TITANIC_SIM.boilerFiring = ord.fire;

  app.audio.init();
  app.audio.playTelegraphBell();

  // Update HUD readouts
  updateHUD();
}

function updateHUD() {
  const elSpeed = document.getElementById('hud-speed');
  const elRecip = document.getElementById('hud-recip');
  const elTurb = document.getElementById('hud-turb');
  const elPower = document.getElementById('hud-power');

  if (elSpeed) elSpeed.innerText = `${window.TITANIC_SIM.speedKts.toFixed(1)} kts`;
  if (elRecip) elRecip.innerText = `${Math.abs(window.TITANIC_SIM.recipRPM).toFixed(0)} RPM`;
  if (elTurb) elTurb.innerText = `${window.TITANIC_SIM.turbineRPM.toFixed(0)} RPM`;

  const totalHP = Math.round(30000 * Math.pow(Math.abs(window.TITANIC_SIM.recipRPM)/75, 2.8) + 
                             16000 * Math.pow(window.TITANIC_SIM.turbineRPM/165, 2.8));
  if (elPower) elPower.innerText = `${totalHP.toLocaleString()} HP`;
}

export function setCameraView(viewKey) {
  const view = CAMERA_VIEWS[viewKey];
  if (!view || !app.camera || !app.controls) return;

  app.camera.position.set(...view.pos);
  app.controls.target.set(...view.target);
  app.camera.lookAt(...view.target);
  app.controls.update();

  // Force immediate render to WebGL drawing buffer
  if (app.renderer && app.scene) {
    app.renderer.render(app.scene, app.camera);
  }

  const elDesc = document.getElementById('camera-desc');
  if (elDesc) elDesc.innerText = `${view.name}: ${view.desc}`;
}
window.setCameraView = setCameraView;

function toggleWatertightDoors() {
  window.TITANIC_SIM.watertightClosed = !window.TITANIC_SIM.watertightClosed;
  const isClosed = window.TITANIC_SIM.watertightClosed;

  app.audio.init();
  app.audio.setAlarmRinging(isClosed);

  const wtBtn = document.getElementById('btn-watertight');
  if (wtBtn) {
    wtBtn.innerText = isClosed ? '🛡️ Doors: Closing / Dropped' : '🛡️ Doors: Open (Bridge)';
    wtBtn.style.backgroundColor = isClosed ? '#991b1b' : '#1e3a5f';
  }

  // Update door status board
  const indicators = document.querySelectorAll('.bh-indicator');
  indicators.forEach(ind => {
    ind.style.backgroundColor = isClosed ? '#ef4444' : '#22c55e';
  });
}

function toggleCutaway() {
  window.TITANIC_SIM.cutawayMode = !window.TITANIC_SIM.cutawayMode;
  const isCutaway = window.TITANIC_SIM.cutawayMode;

  app.materials.hullBlack.transparent = isCutaway;
  app.materials.hullBlack.opacity = isCutaway ? 0.18 : 1.0;
  app.materials.hullRed.transparent = isCutaway;
  app.materials.hullRed.opacity = isCutaway ? 0.18 : 1.0;

  const btn = document.getElementById('btn-cutaway');
  if (btn) {
    btn.innerText = isCutaway ? '👁️ Hull: Cutaway (X-Ray)' : '👁️ Hull: Solid Plating';
    btn.style.backgroundColor = isCutaway ? '#b45309' : '#1e3a5f';
  }
}

function setLightingMode(mode) {
  window.TITANIC_SIM.lightingMode = mode;
  if (mode === 'day') {
    app.scene.background.setHex(0xb0d4ec);
    app.scene.fog.color.setHex(0xb0d4ec);
    app.dirLight.color.setHex(0xfffaed);
    app.dirLight.intensity = 2.4;
    app.hemiLight.color.setHex(0xffffff);
    app.hemiLight.groundColor.setHex(0x1e3a50);
  } else if (mode === 'sunset') {
    app.scene.background.setHex(0xeb7b52);
    app.scene.fog.color.setHex(0xeb7b52);
    app.dirLight.color.setHex(0xff8844);
    app.dirLight.intensity = 2.8;
    app.hemiLight.color.setHex(0xffaa77);
    app.hemiLight.groundColor.setHex(0x331122);
  } else if (mode === 'night') {
    app.scene.background.setHex(0x040810);
    app.scene.fog.color.setHex(0x040810);
    app.dirLight.color.setHex(0x6688cc);
    app.dirLight.intensity = 0.45; // Moonlit
    app.hemiLight.color.setHex(0x112244);
    app.hemiLight.groundColor.setHex(0x02050a);
  }
}

function onWindowResize() {
  if (!app.camera || !app.renderer) return;
  app.camera.aspect = window.innerWidth / window.innerHeight;
  app.camera.updateProjectionMatrix();
  app.renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  if (!window.isHeadless) {
    requestAnimationFrame(animate);
  }
  renderFrame();
}

function renderFrame() {
  const dt = Math.min(0.1, app.clock.getDelta());
  const elapsed = app.clock.getElapsedTime();

  // 1. Update Crankshafts and Piston kinematics
  const rpmRad = (window.TITANIC_SIM.recipRPM * 2 * Math.PI / 60.0) * dt;
  window.TITANIC_SIM.crankAngle = (window.TITANIC_SIM.crankAngle + rpmRad) % (2 * Math.PI);

  if (app.ship.recipEnginePivots.portCrank) {
    app.ship.recipEnginePivots.portCrank.rotation.z = window.TITANIC_SIM.crankAngle;
  }
  if (app.ship.recipEnginePivots.stbdCrank) {
    app.ship.recipEnginePivots.stbdCrank.rotation.z = -window.TITANIC_SIM.crankAngle;
  }

  // 2. Rotate Propellers
  if (app.ship.portPropGroup) app.ship.portPropGroup.rotation.z += rpmRad;
  if (app.ship.stbdPropGroup) app.ship.stbdPropGroup.rotation.z -= rpmRad;
  if (app.ship.centrePropGroup) {
    const turbRad = (window.TITANIC_SIM.turbineRPM * 2 * Math.PI / 60.0) * dt;
    app.ship.centrePropGroup.rotation.z += turbRad;
  }

  // 3. Update Steering Telemotor, Rudder, and Quadrant Tiller
  const rudderDiff = window.TITANIC_SIM.targetRudderDeg - window.TITANIC_SIM.currentRudderDeg;
  window.TITANIC_SIM.currentRudderDeg += rudderDiff * Math.min(1.0, dt * 2.5); // Smooth hydraulic steering response
  const rudderRad = (window.TITANIC_SIM.currentRudderDeg * Math.PI) / 180.0;

  if (app.ship.rudderGroup) {
    app.ship.rudderGroup.rotation.y = -rudderRad;
  }
  if (app.ship.wheelPivot) {
    app.ship.wheelPivot.rotation.z = -rudderRad * 4.0; // 4 turns for full 35 deg helm
  }
  if (app.ship.quadrantTiller) {
    app.ship.quadrantTiller.rotation.y = -rudderRad;
  }

  // 4. Update Passenger Elevator Car Position
  const liftDiff = window.TITANIC_SIM.elevatorTargetY - window.TITANIC_SIM.elevatorCurrentY;
  window.TITANIC_SIM.elevatorCurrentY += liftDiff * Math.min(1.0, dt * 1.8);
  if (app.ship.elevatorCar) {
    app.ship.elevatorCar.position.y = window.TITANIC_SIM.elevatorCurrentY;
  }

  // 5. Watertight Doors Gravity Drop Animation
  if (app.ship.animatedDoors) {
    const isClosing = window.TITANIC_SIM.watertightClosed;
    app.ship.animatedDoors.forEach((door) => {
      const targetPos = isClosing ? 0.0 : 1.0;
      door.position += (targetPos - door.position) * Math.min(1.0, dt * 0.35); // ~27 sec descent
      door.mesh.position.y = door.closedY + door.position * (door.openY - door.closedY);
    });
  }

  // 6. Update Ocean & Buoyancy
  if (app.ocean) {
    app.ocean.update(dt, elapsed, window.TITANIC_SIM.speedKts, app.ship.shipGroup);
  }

  // 7. Update Smoke System (Funnels 1, 2, 3 only!)
  if (app.smoke) {
    app.smoke.update(dt, { boiler_firing_rate: window.TITANIC_SIM.boilerFiring }, window.TITANIC_SIM.speedKts);
  }

  // 8. Update Audio Engine
  if (app.audio) {
    app.audio.update({
      port_recip_rpm: window.TITANIC_SIM.recipRPM,
      turbine_rpm: window.TITANIC_SIM.turbineRPM
    });
  }

  if (app.controls) app.controls.update();

  if (app.renderer && app.scene && app.camera) {
    app.renderer.render(app.scene, app.camera);
  }
}
window.renderFrame = renderFrame;

window.addEventListener('DOMContentLoaded', init);
