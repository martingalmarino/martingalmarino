import type { APIRoute } from 'astro';
import { absoluteUrl, guides, services, site } from '../config/site';
import { getPublishedPosts, postPath } from '../lib/blog';

export const GET: APIRoute = async () => {
  const posts = await getPublishedPosts();
  const pages: Array<[string, string]> = [
    ['/', 'Inicio. Tu empresa, visible en todos los lugares donde hoy se busca.'],
    ['/servicios/', 'Servicios de SEO, GEO y AEO. Elegí por el síntoma, no por la sigla.'],
    ...services.map((item) => [item.href, `${item.name}. ${item.line}`] as [string, string]),
    ['/guia/', 'Qué cambió en la búsqueda. Explicado para quien decide.'],
    ...guides.map((item) => [item.href, `${item.name}. ${item.line}`] as [string, string]),
    ['/blog/', 'Blog.'],
    [site.author.path, 'Martín Galmarino. 19 años en buscadores, SEO desde 2010 y co-founder de Onmarc. Trabajo directo conmigo.'],
    ['/diagnostico/', 'Diagnóstico gratis: 10 preguntas reales de tu rubro en Google, ChatGPT, Gemini y Perplexity.'],
    ['/glosario/', 'Glosario: SEO, GEO, AEO y LLMO (sinónimo de GEO).'],
    ['/privacidad/', 'Política de privacidad.'],
  ];

  const lines = [
    `# ${site.name}`,
    `> ${site.tagline}`,
    '',
    site.description,
    '',
    '## Páginas',
    ...pages.map(([path, text]) => `- [${text}](${absoluteUrl(path)})`),
    '',
    '## Artículos',
  ];

  if (posts.length === 0) {
    lines.push('Todavía no hay artículos publicados.');
  } else {
    for (const post of posts) {
      lines.push(`- [${post.data.title}](${absoluteUrl(postPath(post.id))}): ${post.data.description}`);
    }
  }

  lines.push('');

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
