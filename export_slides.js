const puppeteer = require('puppeteer');
const path = require('path');

const TOTAL_SLIDES = 25;
const OUTPUT_PATH = path.join(__dirname, 'presentation_export.pdf');

// Map of slide index → number of extra ArrowRight presses needed to reach the last beat
// before we capture AND before we move to the next slide
const extraBeatsMap = {
  2: 4,  // Slide02: 5 beats, need 4 extra presses to reach last beat
  20: 1, // Slide19: 2 beats, need 1 extra press to reach last beat
};

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720, deviceScaleFactor: 2 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000));

  const screenshots = [];

  for (let i = 0; i < TOTAL_SLIDES; i++) {
    // If this slide has extra beats, advance to the last beat first
    const extraPresses = extraBeatsMap[i] || 0;
    if (extraPresses > 0) {
      console.log(`  → Advancing ${extraPresses} beats on slide ${i + 1}...`);
      for (let b = 0; b < extraPresses; b++) {
        await page.keyboard.press('ArrowRight');
        await new Promise(r => setTimeout(r, 500));
      }
    }

    // Wait for animations to settle, then capture
    await new Promise(r => setTimeout(r, 800));
    console.log(`Capturing slide ${i + 1}/${TOTAL_SLIDES}...`);
    const buf = await page.screenshot({ type: 'png', clip: { x: 0, y: 0, width: 1280, height: 720 } });
    screenshots.push(buf.toString('base64'));

    // Navigate to next slide (unless it's the last one)
    if (i < TOTAL_SLIDES - 1) {
      await page.keyboard.press('ArrowRight');
      await new Promise(r => setTimeout(r, 300));
    }
  }

  await browser.close();

  // Assemble PDF from screenshots
  const browser2 = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const pdfPage = await browser2.newPage();

  const imgs = screenshots
    .map(b64 => `<div class="page"><img src="data:image/png;base64,${b64}" /></div>`)
    .join('');

  const html = `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body { background:#000; }
  .page { width:297mm; height:167.0625mm; page-break-after:always; overflow:hidden; }
  .page img { width:297mm; height:167.0625mm; display:block; }
  @page { size: 297mm 167.0625mm; margin:0; }
</style></head><body>${imgs}</body></html>`;

  await pdfPage.setContent(html, { waitUntil: 'networkidle0' });
  await pdfPage.pdf({
    path: OUTPUT_PATH,
    width: '297mm',
    height: '167.0625mm',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await browser2.close();
  console.log(`\n✅ PDF saved to: ${OUTPUT_PATH}`);
})();
