// runtime/src/audio_system.js
// Procedural Web Audio Sound Synthesizer for RMS Titanic (Yard No. 401)
// Historical marine acoustics: Reciprocating steam engine chugs, turbine hum, ocean swell, telegraph bell, steam whistle

export class TitanicAudioEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = true; // Start muted until user gesture or unmuted
    this.engineGain = null;
    this.turbineGain = null;
    this.oceanGain = null;
    this.alarmGain = null;

    this.engineOsc = null;
    this.turbineOsc = null;
    this.oceanNoiseNode = null;
    this.isInitialized = false;
  }

  init() {
    if (this.isInitialized) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      this.ctx = new AudioCtx();

      // Master bus
      const master = this.ctx.createGain();
      master.gain.value = 0.8;
      master.connect(this.ctx.destination);

      // 1. Reciprocating Steam Engine Bus (Rhythmic low rumble)
      this.engineGain = this.ctx.createGain();
      this.engineGain.gain.value = 0.0;
      this.engineGain.connect(master);

      this.engineOsc = this.ctx.createOscillator();
      this.engineOsc.type = 'triangle';
      this.engineOsc.frequency.value = 35; // ~35 Hz low thrum
      this.engineOsc.connect(this.engineGain);
      this.engineOsc.start();

      // 2. Parsons Turbine Bus (High-speed smooth steam whoosh)
      this.turbineGain = this.ctx.createGain();
      this.turbineGain.gain.value = 0.0;
      this.turbineGain.connect(master);

      this.turbineOsc = this.ctx.createOscillator();
      this.turbineOsc.type = 'sine';
      this.turbineOsc.frequency.value = 165; // ~165 Hz turbine hum
      this.turbineOsc.connect(this.turbineGain);
      this.turbineOsc.start();

      // 3. Ocean Waves Bus (Filtered pink/brown noise)
      this.oceanGain = this.ctx.createGain();
      this.oceanGain.gain.value = 0.15;
      this.oceanGain.connect(master);

      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        output[i] = (lastOut + 0.02 * white) / 1.02; // Brown noise approximation
        lastOut = output[i];
      }
      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 350;

      whiteNoise.connect(filter);
      filter.connect(this.oceanGain);
      whiteNoise.start();

      // 4. Watertight Door Alarm Bell Bus
      this.alarmGain = this.ctx.createGain();
      this.alarmGain.gain.value = 0.0;
      this.alarmGain.connect(master);

      this.isInitialized = true;
    } catch (e) {
      console.warn('Web Audio not supported or blocked:', e);
    }
  }

  setMuted(muted) {
    this.isMuted = muted;
    if (!muted && this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTelegraphBell() {
    if (this.isMuted || !this.ctx) return;
    try {
      // Chadburn brass bell: two rapid high strikes (ding-ding!)
      const now = this.ctx.currentTime;
      [0, 0.14].forEach((delay) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1480, now + delay);
        gain.gain.setValueAtTime(0.4, now + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.45);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + delay);
        osc.stop(now + delay + 0.5);
      });
    } catch (e) {}
  }

  playSteamWhistle() {
    if (this.isMuted || !this.ctx) return;
    try {
      // Willett-Bruce triple-bell steam whistle: massive chord (C, E, G low pitch)
      const now = this.ctx.currentTime;
      [130.81, 164.81, 196.00].forEach((freq) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, now);
        gain.gain.setValueAtTime(0.01, now);
        gain.gain.linearRampToValueAtTime(0.25, now + 0.3);
        gain.gain.linearRampToValueAtTime(0.25, now + 2.5);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 3.8);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 4.0);
      });
    } catch (e) {}
  }

  setAlarmRinging(ringing) {
    if (!this.alarmGain || !this.ctx) return;
    if (this.isMuted) {
      this.alarmGain.gain.value = 0.0;
      return;
    }
    this.alarmGain.gain.value = ringing ? 0.3 : 0.0;
  }

  update(engineState) {
    if (!this.ctx || this.isMuted) return;
    const recipRPM = Math.abs(engineState.port_recip_rpm);
    const turbineRPM = engineState.turbine_rpm;

    if (this.engineGain && this.engineOsc) {
      const recipTargetGain = (recipRPM / 75.0) * 0.4;
      this.engineGain.gain.setTargetAtTime(recipTargetGain, this.ctx.currentTime, 0.2);
      this.engineOsc.frequency.setTargetAtTime(25 + recipRPM * 0.5, this.ctx.currentTime, 0.2);
    }

    if (this.turbineGain && this.turbineOsc) {
      const turbTargetGain = (turbineRPM / 165.0) * 0.25;
      this.turbineGain.gain.setTargetAtTime(turbTargetGain, this.ctx.currentTime, 0.2);
      this.turbineOsc.frequency.setTargetAtTime(100 + turbineRPM * 0.8, this.ctx.currentTime, 0.2);
    }
  }
}
