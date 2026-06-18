import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const stories = [
  { name: 'button-all-colors',    url: 'http://localhost:6006/iframe.html?id=hulib-button--all-colors&viewMode=story' },
  { name: 'button-all-variants',  url: 'http://localhost:6006/iframe.html?id=hulib-button--all-variants&viewMode=story' },
  { name: 'alert-all-variants',   url: 'http://localhost:6006/iframe.html?id=hulib-alert--all-variants&viewMode=story' },
  { name: 'accordion-multiple',   url: 'http://localhost:6006/iframe.html?id=hulib-accordion--multiple&viewMode=story' },
  { name: 'card-with-cta',        url: 'http://localhost:6006/iframe.html?id=hulib-card--with-cta&viewMode=story' },
  { name: 'badge-all-variants',   url: 'http://localhost:6006/iframe.html?id=hulib-badge--all-variants&viewMode=story' },
  { name: 'tabs-default',         url: 'http://localhost:6006/iframe.html?id=hulib-tabs--default&viewMode=story' },
  { name: 'form-checkbox',        url: 'http://localhost:6006/iframe.html?id=hulib-form-elements--checkbox-story&viewMode=story' },
  { name: 'form-radio',           url: 'http://localhost:6006/iframe.html?id=hulib-form-elements--radio-group-story&viewMode=story' },
  { name: 'form-switch',          url: 'http://localhost:6006/iframe.html?id=hulib-form-elements--switch-story&viewMode=story' },
  { name: 'form-slider',          url: 'http://localhost:6006/iframe.html?id=hulib-form-elements--slider-story&viewMode=story' },
  { name: 'form-progress',        url: 'http://localhost:6006/iframe.html?id=hulib-form-elements--progress-story&viewMode=story' },
  { name: 'form-select',          url: 'http://localhost:6006/iframe.html?id=hulib-form-elements--select-story&viewMode=story' },
  { name: 'form-textarea',        url: 'http://localhost:6006/iframe.html?id=hulib-form-elements--textarea-story&viewMode=story' },
  { name: 'input-with-icon',      url: 'http://localhost:6006/iframe.html?id=hulib-input--with-icon&viewMode=story' },
  { name: 'input-passcode',       url: 'http://localhost:6006/iframe.html?id=hulib-input--passcode&viewMode=story' },
  { name: 'avatar-sizes',         url: 'http://localhost:6006/iframe.html?id=hulib-avatar--sizes&viewMode=story' },
  { name: 'table-default',        url: 'http://localhost:6006/iframe.html?id=hulib-table--default&viewMode=story' },
  { name: 'misc-typography',      url: 'http://localhost:6006/iframe.html?id=hulib-miscellaneous--typography&viewMode=story' },
  { name: 'misc-skeleton',        url: 'http://localhost:6006/iframe.html?id=hulib-miscellaneous--skeleton-loader&viewMode=story' },
];

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 900, height: 600 });

for (const story of stories) {
  await page.goto(story.url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  const outPath = path.join(__dirname, `screenshots/${story.name}.png`);
  await page.screenshot({ path: outPath, fullPage: false });
  console.log(`✓ ${story.name}`);
}

await browser.close();
console.log('Done!');
