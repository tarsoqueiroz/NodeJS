const puppeteer = require('puppeteer');

(async() => {
  const browser = await puppeteer.launch();
  console.log(await browser.version());
  await browser.close();
})();

(async() => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.com', {
    waitUntil: 'networkidle2'
  });
  await page.pdf({
    path: 'page.pdf',
    format: 'A4'
  });
  
  await browser.close();
})();

(async() => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.com', {
    waitUntil: 'networkidle2'
  });
  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1,
  });
  await page.screenshot({path: 'page.png'});
  
  await browser.close();
})();

(async() => {
  const browser = await puppeteer.launch({
    headless: true
  });
  const page = await browser.newPage();
  await page.goto('https://www.google.com', {
    waitUntil: 'networkidle2'
  });
  await page.click('input.gLFyf');
  await page.keyboard.type("hello");
  await page.keyboard.press("Enter");
  await page.waitFor(2000);
  await page.pdf({
    path: 'pageForHello.pdf',
    format: 'A4'
  });
  
  await browser.close();
})();
