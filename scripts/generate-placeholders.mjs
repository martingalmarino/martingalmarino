import { mkdir } from 'node:fs/promises';
import sharp from 'sharp';

await mkdir('src/content/blog', { recursive: true });
await mkdir('src/assets', { recursive: true });
await mkdir('public', { recursive: true });

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

await sharp(Buffer.from(hero(470, 1280))).png().toFile('src/content/blog/que-es-el-geo.png');
await sharp(Buffer.from(hero(360, 1180))).png().toFile('src/content/blog/busquedas.png');
console.log('placeholders de las notas listos');
