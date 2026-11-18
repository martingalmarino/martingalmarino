/**
 * Única fuente del dominio y de la marca.
 * Astro, el sitemap, los canonicals, el JSON-LD, el RSS y llms.txt salen de acá.
 */
export const site = {
  name: 'Martín Galmarino',
  url: 'https://martingalmarino.com',
  tagline: 'Para que tu empresa sea la respuesta: en Google y en la IA.',
  locale: 'es-AR',
  ogLocale: 'es_AR',
  description:
    '¿Qué responde la IA cuando preguntan por tu rubro? Te muestro gratis si nombra a tu empresa o a otra, en Google, ChatGPT, Gemini y Perplexity.',
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
    line: 'Que te encuentren cuando buscan lo que vendés, y que Google te entienda lo suficiente como para nombrarte.',
  },
  {
    href: '/servicios/geo/',
    name: 'GEO',
    line: 'Que te nombren, y que lo que digan de vos sea correcto: en ChatGPT, Gemini, Perplexity y los resúmenes con IA de Google.',
  },
  {
    href: '/servicios/aeo/',
    name: 'AEO',
    line: 'Las dudas de tu rubro, respondidas con tu explicación: en el recuadro, en el resumen con IA o en lo que se lee en voz alta.',
  },
] as const;

export const guides = [
  {
    href: '/guia/que-es-seo-geo-aeo/',
    name: 'SEO, GEO y AEO: qué es cada uno y cuál necesitás',
    line: 'SEO, GEO y AEO explicados en una frase cada uno, con una tabla y un test de 3 preguntas para saber por dónde empezar.',
  },
  {
    href: '/guia/evolucion-del-seo/',
    name: 'De diez links a una respuesta: cómo cambió la búsqueda',
    line: 'Los hitos de Google y la IA de 2012 a 2026, con fuente, y qué te toca hacer hoy con cada uno.',
  },
  {
    href: '/guia/por-que-estar-en-los-llms/',
    name: 'Si la IA no te nombra, nombra a otro',
    line: 'Qué hace la IA cuando preguntan por tu rubro, datos de Argentina y 5 preguntas para probar hoy qué dice de tu empresa.',
  },
] as const;

/** Páginas que siguen en preparación o no deben indexarse. */
export const noindexPaths = ['/diagnostico/gracias/', '/glosario/', '/privacidad/', '/404/'] as const;

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
