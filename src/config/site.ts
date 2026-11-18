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
    'SEO, GEO y AEO para empresas argentinas en transformación digital. En buscadores desde 2007.',
  author: {
    name: 'Martín Galmarino',
    jobTitle: 'Consultor SEO',
    path: '/martin-galmarino/',
    linkedin: 'https://www.linkedin.com/in/martingalmarino/',
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
    line: 'Sigue siendo la base: si Google no te entiende, la IA tampoco.',
  },
  {
    href: '/servicios/geo/',
    name: 'GEO',
    line: 'La IA ya recomienda empresas; el GEO trabaja para que nombre a la tuya y la describa bien.',
  },
  {
    href: '/servicios/aeo/',
    name: 'AEO',
    line: 'Ser la respuesta directa, no solo un link más.',
  },
] as const;

export const guides = [
  {
    href: '/guia/que-es-seo-geo-aeo/',
    name: 'Qué es SEO, GEO y AEO',
    line: 'Tres nombres para tres lugares donde tu empresa puede aparecer.',
  },
  {
    href: '/guia/evolucion-del-seo/',
    name: 'La evolución del SEO',
    line: 'De la lista de links a las respuestas de la IA.',
  },
  {
    href: '/guia/por-que-estar-en-los-llms/',
    name: 'Por qué estar en los LLMs',
    line: 'Tus clientes ya preguntan a la IA antes de comprar; si no estás, recomienda a otro.',
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
