# Martín Galmarino

Sitio personal en [https://martingalmarino.com](https://martingalmarino.com). El dominio vive en **una sola constante**: `site.url` en `src/config/site.ts`. Astro la importa en `astro.config.ts`. No la copies en otro archivo.

Bajada: SEO, GEO y AEO para empresas.

## Requisitos

Node.js 22 o superior.

## Correr

```bash
npm install
npm run dev
```

El sitio queda en `http://localhost:4321/`.

Los artículos con `draft: true` se ven solo en `npm run dev`. En el build no se publican, no entran al sitemap, al RSS ni a `llms.txt`.

## Build

```bash
npm run build
npm run check
npm run preview
```

`npm run check` es `astro check`.

## Desplegar en Vercel

1. Importá el repo [martingalmarino/martingalmarino](https://github.com/martingalmarino/martingalmarino).
2. Framework: Astro (Vercel lo detecta). Build: `npm run build`. No hace falta un output directory a mano: el sitio es estático.
3. `vercel.json` manda headers de seguridad, cache de `/_astro/` y el redirect de `www` a `https://martingalmarino.com`.

No hay variables de entorno obligatorias en esta etapa. El formulario y Analytics quedan para la etapa 2 (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, `PUBLIC_GA_ID`).

## Foto

El retrato del hero es `src/assets/martin-galmarino.png` (alt “Martín Galmarino” en `src/pages/index.astro`). La de perfil, en escala de grises, es `src/assets/martin-galmarino-perfil.jpg` (firma de las notas y `/martin-galmarino/`).

La imagen para redes está en `public/og.png`. El JSON-LD de Person usa `public/martin-galmarino.jpg`.

## Publicar una nota

El paso a paso está en [docs/PUBLICAR-ARTICULO.md](docs/PUBLICAR-ARTICULO.md).

## Tipografía y color

Inter, self-hosted, en `src/assets/fonts/` (viene de `@fontsource/inter`, licencia SIL Open Font License). Los colores están en las variables de `src/styles/global.css`. Paleta y foto finales siguen pendientes: se cambian ahí, sin tocar el resto.

## Rastreo

`robots.txt` deja pasar a los buscadores y a los bots de IA, incluidos GPTBot y Google-Extended. El interruptor está en `aiTrainingCrawlers` dentro de `src/config/site.ts` (`permitir` o `bloquear`).
