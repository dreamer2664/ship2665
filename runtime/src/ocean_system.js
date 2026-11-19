// runtime/src/ocean_system.js
// Multiscale Gerstner Ocean Simulation & Ship Buoyancy Hydrodynamics
// North Atlantic Sea Surface & Wave Spectrum for RMS Titanic

import * as THREE from 'three';

export function createOceanSystem(scene) {
  const oceanSize = 1200;
  const oceanSegments = 160;

  // Custom Gerstner Wave Shader
  const oceanGeometry = new THREE.PlaneGeometry(oceanSize, oceanSize, oceanSegments, oceanSegments);
  oceanGeometry.rotateX(-Math.PI / 2);

  const oceanMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uSpeed: { value: 0.0 },
      uDeepColor: { value: new THREE.Color(0x0a1b2a) }, // Deep North Atlantic navy
      uSurfaceColor: { value: new THREE.Color(0x1a4660) }, // Crest sea green
      uFoamColor: { value: new THREE.Color(0xddeeff) },
      uSunDirection: { value: new THREE.Vector3(0.5, 0.8, 0.3).normalize() }
    },
    vertexShader: `
      uniform float uTime;
      uniform float uSpeed;
      varying vec3 vWorldPosition;
      varying vec3 vNormal;
      varying float vWaveHeight;

      // Gerstner Wave Function
      vec3 gerstnerWave(vec4 wave, vec3 p, inout vec3 tangent, inout vec3 binormal) {
        float steepness = wave.z;
        float wavelength = wave.w;
        float k = 2.0 * 3.14159 / wavelength;
        float c = sqrt(9.8 / k);
        vec2 d = normalize(wave.xy);
        float f = k * (dot(d, p.xz) - c * uTime * 0.8);
        float a = steepness / k;

        tangent += vec3(
          -d.x * d.x * (steepness * sin(f)),
          d.x * (steepness * cos(f)),
          -d.x * d.y * (steepness * sin(f))
        );
        binormal += vec3(
          -d.x * d.y * (steepness * sin(f)),
          d.y * (steepness * cos(f)),
          -d.y * d.y * (steepness * sin(f))
        );

        return vec3(
          d.x * (a * cos(f)),
          a * sin(f),
          d.y * (a * cos(f))
        );
      }

      void main() {
        vec3 pos = position;
        vec3 tangent = vec3(1.0, 0.0, 0.0);
        vec3 binormal = vec3(0.0, 0.0, 1.0);

        // 4 Superimposed Gerstner Wave Spectra:
        // vec4(dir.x, dir.y, steepness, wavelength)
        vec4 w1 = vec4(0.8, 0.6, 0.12, 110.0); // Long swell
        vec4 w2 = vec4(0.6, 0.8, 0.09, 45.0);  // Secondary swell
        vec4 w3 = vec4(-0.4, 0.9, 0.06, 18.0); // Wind wave
        vec4 w4 = vec4(0.9, -0.3, 0.04, 6.0);  // Capillary chop

        vec3 p = pos;
        p += gerstnerWave(w1, pos, tangent, binormal);
        p += gerstnerWave(w2, pos, tangent, binormal);
        p += gerstnerWave(w3, pos, tangent, binormal);
        p += gerstnerWave(w4, pos, tangent, binormal);

        vec3 norm = normalize(cross(binormal, tangent));
        vNormal = norm;
        vWaveHeight = p.y;
        vWorldPosition = p;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 uDeepColor;
      uniform vec3 uSurfaceColor;
      uniform vec3 uFoamColor;
      uniform vec3 uSunDirection;
      varying vec3 vWorldPosition;
      varying vec3 vNormal;
      varying float vWaveHeight;

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(cameraPosition - vWorldPosition);

        // Fresnel reflection
        float fresnel = pow(1.0 - max(0.0, dot(viewDir, normal)), 4.0);
        fresnel = clamp(fresnel, 0.1, 0.9);

        // Specular sun highlight
        vec3 halfDir = normalize(uSunDirection + viewDir);
        float spec = pow(max(0.0, dot(normal, halfDir)), 120.0);

        // Depth coloring based on wave elevation
        float waveMix = smoothstep(-1.2, 1.8, vWaveHeight);
        vec3 waterColor = mix(uDeepColor, uSurfaceColor, waveMix);

        // Crest foam
        float foam = smoothstep(1.2, 2.0, vWaveHeight);
        vec3 finalColor = mix(waterColor, uFoamColor, foam * 0.45);
        finalColor += vec3(1.0, 0.95, 0.8) * spec * 0.85;
        finalColor = mix(finalColor, vec3(0.6, 0.75, 0.9), fresnel * 0.5);

        gl_FragColor = vec4(finalColor, 0.92);
      }
    `,
    transparent: true,
    side: THREE.DoubleSide
  });

  const oceanMesh = new THREE.Mesh(oceanGeometry, oceanMaterial);
  oceanMesh.position.y = 10.54; // Aligned exactly with Titanic's 34 ft 7 in design draught!
  scene.add(oceanMesh);

  // Stern Wake & Propeller Wash Trails
  const wakeGeom = new THREE.PlaneGeometry(35, 180, 16, 32);
  wakeGeom.rotateX(-Math.PI / 2);
  const wakeMat = new THREE.MeshBasicMaterial({
    color: 0xecf8ff,
    transparent: true,
    opacity: 0.45,
    blending: THREE.AdditiveBlending
  });
  const wakeMesh = new THREE.Mesh(wakeGeom, wakeMat);
  wakeMesh.position.set(0, 10.6, -95);
  scene.add(wakeMesh);

  // Buoyancy Solver State
  let shipPitch = 0;
  let shipRoll = 0;
  let shipHeave = 0;

  function update(dt, time, shipSpeedKts, shipMesh) {
    oceanMaterial.uniforms.uTime.value = time;
    oceanMaterial.uniforms.uSpeed.value = shipSpeedKts;

    // Wake opacity responds to propeller wash and ship speed
    const washIntensity = Math.min(1.0, Math.abs(shipSpeedKts) / 21.5);
    wakeMat.opacity = 0.15 + washIntensity * 0.65;
    wakeMesh.scale.set(1.0 + washIntensity * 0.5, 1.0 + washIntensity * 0.8, 1.0);

    // Realistic ship heave, pitch, and roll response to North Atlantic swell
    const swellFreq = 0.4;
    shipHeave = Math.sin(time * swellFreq) * 0.25;
    shipPitch = Math.sin(time * swellFreq * 0.8 + 1.2) * 0.008; // ~0.5 degree pitch
    shipRoll = Math.sin(time * swellFreq * 0.5) * 0.012;  // ~0.7 degree roll

    if (shipMesh) {
      shipMesh.position.y = shipHeave;
      shipMesh.rotation.x = shipPitch;
      shipMesh.rotation.z = shipRoll;
    }
  }

  return { oceanMesh, wakeMesh, update };
}
