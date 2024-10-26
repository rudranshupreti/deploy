const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'] // Essential flags for Render
  });
  const page = await browser.newPage();
  await page.goto('https://www.google.com');

  // Take a screenshot and save it as "screenshot.png"
  await page.screenshot({ path: 'screenshot.png' });
  console.log("Screenshot taken and saved as screenshot.png");

  await browser.close();
})();
