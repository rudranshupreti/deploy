const puppeteer = require('puppeteer');
const express=require("express");
const os=require("os");
const cpus=os.cpus().length;
console.log(cpus);

const app = express();
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

const PORT=8000;
app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}!`)});
