import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const OUTPUT_DIR = path.resolve('report_screenshots');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function run() {
  console.log('Launching Chrome from:', CHROME_PATH);
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 }); // High DPI for report print quality

  console.log('Navigating to http://127.0.0.1:5173/ ...');
  await page.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 2000)); // Allow animations and layout to settle

  // 1. Hero Section (Desktop)
  console.log('Capturing 01_Hero_Section.png ...');
  const heroEl = await page.$('#hero');
  if (heroEl) {
    await heroEl.screenshot({ path: path.join(OUTPUT_DIR, '01_Hero_Section.png') });
  }

  // 2. Overview & Baseline (Desktop)
  console.log('Capturing 02_Monument_Overview.png ...');
  const overviewEl = await page.$('#overview');
  if (overviewEl) {
    await overviewEl.screenshot({ path: path.join(OUTPUT_DIR, '02_Monument_Overview.png') });
  }

  // 3. Historical Chronology
  console.log('Capturing 03_Historical_Chronology.png ...');
  const chronoEl = await page.$('#chronology');
  if (chronoEl) {
    await chronoEl.screenshot({ path: path.join(OUTPUT_DIR, '03_Historical_Chronology.png') });
  }

  // 4. Excavation & Archival Diagram
  console.log('Capturing 04_Excavation_Archival_Analysis.png ...');
  const excavationEl = await page.$('#excavation');
  if (excavationEl) {
    await excavationEl.screenshot({ path: path.join(OUTPUT_DIR, '04_Excavation_Archival_Analysis.png') });
  }

  // 5. Architectural & Sculptural Documentation
  console.log('Capturing 05_Architectural_Documentation.png ...');
  const archEl = await page.$('#architecture');
  if (archEl) {
    await archEl.screenshot({ path: path.join(OUTPUT_DIR, '05_Architectural_Documentation.png') });
  }

  // 6. Relic Assemblage Catalogue
  console.log('Capturing 06_Relic_Assemblage.png ...');
  const relicEl = await page.$('#relics');
  if (relicEl) {
    await relicEl.screenshot({ path: path.join(OUTPUT_DIR, '06_Relic_Assemblage.png') });
  }

  // 7. Archaeometric Science
  console.log('Capturing 07_Archaeometric_Science.png ...');
  const matEl = await page.$('#materials');
  if (matEl) {
    await matEl.screenshot({ path: path.join(OUTPUT_DIR, '07_Archaeometric_Science.png') });
  }

  // 8. Curated Visual Gallery
  console.log('Capturing 08_Curated_Visual_Gallery.png ...');
  const galEl = await page.$('#gallery');
  if (galEl) {
    await galEl.screenshot({ path: path.join(OUTPUT_DIR, '08_Curated_Visual_Gallery.png') });
  }

  // 9. Mobile Responsive View (iPhone 14/15 size: 390x844)
  console.log('Capturing 09_Mobile_Viewport_Hero.png ...');
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  await page.goto('http://127.0.0.1:5173/#hero', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(OUTPUT_DIR, '09_Mobile_Viewport_Hero.png') });

  // 10. Mobile Navigation Drawer Open
  console.log('Capturing 10_Mobile_Navigation_Drawer.png ...');
  const menuBtn = await page.$('header button[aria-label="Open navigation menu"]');
  if (menuBtn) {
    await menuBtn.click();
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: path.join(OUTPUT_DIR, '10_Mobile_Navigation_Drawer.png') });
  }

  await browser.close();
  console.log('All report screenshots successfully generated in:', OUTPUT_DIR);
}

run().catch(err => {
  console.error('Error during screenshot generation:', err);
  process.exit(1);
});
