// scripts/headless_render.js
// High-Speed Direct WebGL Buffer Capture for RMS Titanic Render Pipeline
// Generates photorealistic architectural viewpoints directly from WebGL canvas

const puppeteer = require('/tmp/node_modules/puppeteer');
const path = require('path');
const fs = require('fs');

const args = process.argv.slice(2);
const genNum = args[0] || '1';
const outDir = path.resolve(__dirname, `../renders/gen${genNum}`);
fs.mkdirSync(outDir, { recursive: true });

const VIEWS_TO_RENDER = [
  'port_bow',
  'starboard_bow',
  'broadside_port',
  'broadside_starboard',
  'stern_propellers',
  'aerial_three_quarter',
  'waterline_low',
  'bridge_navigating',
  'boat_deck_davits',
  'funnels_rigging',
  'crows_nest',
  'grand_staircase_dome',
  'grand_staircase_clock',
  'dining_saloon_1st',
  'smoking_room_1st',
  'turkish_baths_pool',
  'gymnasium_boat_deck',
  'boiler_room_6',
  'reciprocating_engine_room',
  'turbine_room',
  'dynamo_room',
  'watertight_doors_cutaway',
  'longitudinal_cutaway',
  'closeup_welin_davit',
  'closeup_engine_valve_gear'
];

(async () => {
  console.log(`Starting High-Fidelity WebGL Render for Generation ${genNum}...`);
  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--use-gl=angle',
      '--use-angle=swiftshader',
      '--enable-unsafe-swiftshader'
    ]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });

  const indexPath = 'file://' + path.resolve(__dirname, '../runtime/index.html');
  await page.goto(indexPath, { waitUntil: 'load' });

  // Wait for 3D simulation ready
  await page.waitForFunction(() => window.TITANIC_SIM && window.TITANIC_SIM.ready, { timeout: 15000 });
  await new Promise(r => setTimeout(r, 600));

  const manifestViews = [];

  for (const viewId of VIEWS_TO_RENDER) {
    const isCutaway = (viewId === 'longitudinal_cutaway' || viewId === 'watertight_doors_cutaway');
    
    // Switch camera & cutaway mode and force frame render
    const dataUrl = await page.evaluate((vId, cutaway) => {
      if (cutaway !== window.TITANIC_SIM.cutawayMode) {
        const btn = document.getElementById('btn-cutaway');
        if (btn) btn.click();
      }
      window.setCameraView(vId);

      const canvas = document.querySelector('canvas');
      return canvas.toDataURL('image/png');
    }, viewId, isCutaway);

    const base64Data = dataUrl.replace(/^data:image\/png;base64,/, '');
    const fileName = `${viewId}.png`;
    const filePath = path.join(outDir, fileName);
    fs.writeFileSync(filePath, base64Data, 'base64');

    const stats = fs.statSync(filePath);
    console.log(`  ✓ Rendered ${viewId} (${(stats.size / 1024).toFixed(1)} KB)`);

    manifestViews.push({
      view_id: viewId,
      file_name: fileName,
      file_size_bytes: stats.size,
      rendered_at: new Date().toISOString()
    });
  }

  await browser.close();

  const manifest = {
    generation: parseInt(genNum, 10),
    timestamp: new Date().toISOString(),
    resolution: [1280, 720],
    total_views: manifestViews.length,
    views: manifestViews
  };

  const manifestPath = path.join(outDir, 'manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`✅ Generation ${genNum} complete. ${manifestViews.length} views written to ${manifestPath}`);
})();
