/**
 * Única fuente del dominio y de la marca.
 * Astro, el sitemap, los canonicals, el JSON-LD, el RSS y llms.txt salen de acá.
 */
export const site = {
  name: 'Martín Galmarino',
  url: 'https://martingalmarino.com',
  tagline: 'SEO, GEO y AEO para empresas',
  locale: 'es-AR',
  ogLocale: 'es_AR',
  description:
    'Tu empresa, visible en Google y en las respuestas de ChatGPT, Gemini y Perplexity. Diagnóstico gratuito, con un informe corto. En buscadores desde 2007.',
  author: {
    name: 'Martín Galmarino',
    jobTitle: 'Co-founder y director de proyectos en buscadores',
    path: '/martin-galmarino/',
    linkedin: 'https://www.linkedin.com/in/martingalmarino/',
    organization: {
      name: 'Onmarc',
      url: 'https://onmarc.com',
    },
  },
} as const;

/** GPTBot y Google-Extended. Cambiar a 'bloquear' si más adelante se decide frenarlos. */
export const aiTrainingCrawlers: 'permitir' | 'bloquear' = 'permitir';

export const categoryNames = [
  'Novedades',
  'Conceptos',
  'Guías para empresas',
  'Datos y Argentina',
  'Opinión',
] as const;

export type CategoryName = (typeof categoryNames)[number];

export const services = [
  {
    href: '/servicios/seo/',
    name: 'SEO',
    line: 'El SEO es el trabajo para que tu empresa aparezca en los resultados de Google. Sigue siendo la base: si el buscador no te entiende, la IA tampoco.',
  },
  {
    href: '/servicios/geo/',
    name: 'GEO',
    line: 'El GEO es el trabajo para que la inteligencia artificial —ChatGPT, Gemini o Perplexity— nombre a tu empresa y la describa bien.',
  },
  {
    href: '/servicios/aeo/',
    name: 'AEO',
    line: 'El AEO es el trabajo para que tu empresa sea la respuesta directa: el recuadro, el resumen o lo que se lee en voz alta, no solo un link más en la lista.',
  },
] as const;

export const guides = [
  {
    href: '/guia/que-es-seo-geo-aeo/',
    name: 'Qué es SEO, GEO y AEO',
    line: 'Tres formas de ser visible, explicadas sin jerga: en Google, en la inteligencia artificial y como respuesta directa.',
  },
  {
    href: '/guia/evolucion-del-seo/',
    name: 'La evolución del SEO',
    line: 'Cómo pasó la búsqueda de una lista de links a las respuestas de la IA, y qué implica eso para tu empresa.',
  },
  {
    href: '/guia/por-que-estar-en-los-llms/',
    name: 'Por qué aparecer en las respuestas de la IA',
    line: 'Tus clientes ya le preguntan a ChatGPT, Gemini o Perplexity antes de comprar. Si tu empresa no aparece, pueden recomendar a otra.',
  },
] as const;

/** Stubs de la etapa 1: la navegación llega, pero no se indexan ni entran al sitemap. */
export const noindexPaths = [
  '/servicios/',
  '/servicios/seo/',
  '/servicios/geo/',
  '/servicios/aeo/',
  '/guia/',
  '/guia/que-es-seo-geo-aeo/',
  '/guia/evolucion-del-seo/',
  '/guia/por-que-estar-en-los-llms/',
  '/martin-galmarino/',
  '/diagnostico/',
  '/diagnostico/gracias/',
  '/glosario/',
  '/privacidad/',
  '/404/',
] as const;

export function categorySlug(name: string): string {
  return name
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function absoluteUrl(pathname: string): string {
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const isFile = /\/[^/]+\.[a-z0-9]+$/i.test(path);
  const normalized = isFile || path.endsWith('/') ? path : `${path}/`;
  return new URL(normalized, `${site.url}/`).href;
}

export function isNoindexPath(pathname: string): boolean {
  const path = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return (noindexPaths as readonly string[]).includes(path);
}
