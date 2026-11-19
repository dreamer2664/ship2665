// runtime/src/smoke_system.js
// Volumetric Funnel Smoke Simulation for RMS Titanic (Yard No. 401)
// Enforces the historical dummy rule: Funnels 1, 2, 3 emit coal smoke; Funnel 4 emits ZERO coal smoke!

import * as THREE from 'three';

export function createSmokeSystem(scene) {
  const particlesPerFunnel = 90;
  const funnels = [
    { id: 1, z: 175.5, isDummy: false },
    { id: 2, z: 148.0, isDummy: false },
    { id: 3, z: 120.5, isDummy: false },
    { id: 4, z: 93.0,  isDummy: true } // HISTORICAL DUMMY RULE: Zero coal smoke!
  ];

  const smokeGroups = [];

  funnels.forEach((fn) => {
    const pGeom = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesPerFunnel * 3);
    const scales = new Float32Array(particlesPerFunnel);
    const opacities = new Float32Array(particlesPerFunnel);
    const particleData = [];

    const topY = 53.34; // 175 ft above keel
    const rakeAft = (topY - 27.5) * (1.0 / 12.0);
    const funnelZ = fn.z - rakeAft;

    for (let i = 0; i < particlesPerFunnel; i++) {
      // Initialize lifecycle
      const life = Math.random();
      particleData.push({
        life: life,
        speed: 4.5 + Math.random() * 3.5,
        baseScale: fn.isDummy ? 1.5 : (3.5 + Math.random() * 2.5),
        offset: new THREE.Vector3((Math.random() - 0.5) * 1.5, 0, (Math.random() - 0.5) * 1.5)
      });

      positions[i * 3 + 0] = 0;
      positions[i * 3 + 1] = topY;
      positions[i * 3 + 2] = funnelZ;
      scales[i] = 1.0;
      opacities[i] = 0.0;
    }

    pGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pGeom.setAttribute('scale', new THREE.BufferAttribute(scales, 1));
    pGeom.setAttribute('opacity', new THREE.BufferAttribute(opacities, 1));

    // Custom Particle Material with softening and wind drift
    const pMat = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: fn.isDummy ? new THREE.Color(0xf0f5ff) : new THREE.Color(0x383430) }
      },
      vertexShader: `
        attribute float scale;
        attribute float opacity;
        varying float vOpacity;
        void main() {
          vOpacity = opacity;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = scale * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        varying float vOpacity;
        void main() {
          // Circular soft particle sprite
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          float alpha = smoothstep(0.5, 0.0, dist) * vOpacity;
          gl_FragColor = vec4(uColor, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: fn.isDummy ? THREE.NormalBlending : THREE.NormalBlending
    });

    const points = new THREE.Points(pGeom, pMat);
    scene.add(points);

    smokeGroups.push({
      funnel: fn,
      points,
      geom: pGeom,
      material: pMat,
      particleData,
      positions,
      scales,
      opacities,
      topY,
      funnelZ
    });
  });

  function update(dt, engineState, shipSpeedKts) {
    const firingRate = engineState ? engineState.boiler_firing_rate : 0.6;
    const wash = Math.max(0.2, Math.abs(shipSpeedKts) / 21.5);
    const windSpeedZ = -12.0 * wash; // Drift aft over stern

    smokeGroups.forEach((sg) => {
      const isDummy = sg.funnel.isDummy;
      const count = particlesPerFunnel;
      const pos = sg.positions;
      const sc = sg.scales;
      const op = sg.opacities;

      for (let i = 0; i < count; i++) {
        const p = sg.particleData[i];
        p.life += dt * 0.22;
        if (p.life > 1.0) {
          p.life = 0.0;
        }

        const t = p.life;
        const riseDist = t * (p.speed * (isDummy ? 0.3 : 1.2) * (0.5 + firingRate * 0.8) * 12.0);
        const driftDist = t * windSpeedZ * 15.0;
        const spread = t * (isDummy ? 2.0 : 8.0);

        pos[i * 3 + 0] = p.offset.x * (1.0 + spread);
        pos[i * 3 + 1] = sg.topY + riseDist;
        pos[i * 3 + 2] = sg.funnelZ + driftDist + p.offset.z * (1.0 + spread);

        sc[i] = p.baseScale * (1.0 + spread * 1.8);

        // Opacity: rise quickly, fade out as smoke dissipates
        if (isDummy) {
          // Subtle faint steam wisps only from Galley / Turbine casing vents!
          op[i] = Math.sin(t * Math.PI) * 0.06;
        } else {
          // Rich volumetric coal smoke from Boilers 1-6
          const baseOp = 0.15 + 0.65 * firingRate;
          op[i] = Math.sin(t * Math.PI) * baseOp;
        }
      }

      sg.geom.attributes.position.needsUpdate = true;
      sg.geom.attributes.scale.needsUpdate = true;
      sg.geom.attributes.opacity.needsUpdate = true;
    });
  }

  return { smokeGroups, update };
}
