const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://www.haxball.com/headless');
  // Aquí puedes inyectar scripts para configurar el host
  console.log('Haxball Headless Host iniciado');
})();