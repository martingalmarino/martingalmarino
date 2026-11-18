import { mkdir } from 'node:fs/promises';
import sharp from 'sharp';

await mkdir('src/content/blog', { recursive: true });
await mkdir('src/assets', { recursive: true });
await mkdir('public', { recursive: true });

const portrait = `
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
  <rect width="800" height="800" fill="#e7edf5"/>
  <circle cx="400" cy="300" r="110" fill="#c5d0e0"/>
  <rect x="230" y="450" width="340" height="220" rx="110" fill="#c5d0e0"/>
  <text x="400" y="720" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="42" fill="#5c6570">Foto pendiente</text>
</svg>`;

const hero = (a, b) => `
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
  <rect width="1600" height="900" fill="#f3f7fd"/>
  <circle cx="280" cy="220" r="140" fill="#d7e4fa"/>
  <rect x="430" y="180" width="780" height="160" rx="36" fill="#ffffff"/>
  <rect x="470" y="230" width="420" height="22" rx="11" fill="#1a56db"/>
  <rect x="470" y="272" width="280" height="16" rx="8" fill="#c5d4ee"/>
  <rect x="250" y="430" width="980" height="280" rx="40" fill="#e8f0fc"/>
  <circle cx="${a}" cy="570" r="46" fill="#1a56db"/>
  <rect x="520" y="520" width="560" height="18" rx="9" fill="#1444ad"/>
  <rect x="520" y="560" width="420" height="16" rx="8" fill="#8eabdf"/>
  <rect x="520" y="600" width="300" height="16" rx="8" fill="#8eabdf"/>
  <circle cx="${b}" cy="160" r="70" fill="#d7e4fa"/>
</svg>`;

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#f5f7fa"/>
  <rect x="0" y="0" width="18" height="630" fill="#1a56db"/>
  <text x="80" y="250" font-family="DejaVu Sans, sans-serif" font-size="64" font-weight="700" fill="#1b1f24">Martín Galmarino</text>
  <text x="80" y="340" font-family="DejaVu Sans, sans-serif" font-size="36" fill="#5c6570">SEO, GEO y AEO para empresas</text>
  <text x="80" y="520" font-family="DejaVu Sans, sans-serif" font-size="28" fill="#1a56db">martingalmarino.com</text>
</svg>`;

await sharp(Buffer.from(portrait)).png().toFile('src/assets/martin-galmarino.png');
await sharp(Buffer.from(hero(470, 1280))).png().toFile('src/content/blog/que-es-el-geo.png');
await sharp(Buffer.from(hero(360, 1180))).png().toFile('src/content/blog/busquedas.png');
await sharp(Buffer.from(og)).png().toFile('public/og.png');
console.log('placeholders listos');
