import type { APIRoute } from 'astro';
import { absoluteUrl, guides, services, site } from '../config/site';
import { getPublishedPosts, postPath } from '../lib/blog';

export const GET: APIRoute = async () => {
  const posts = await getPublishedPosts();
  const pages: Array<[string, string]> = [
    ['/', 'Inicio. Tu empresa, visible en todos los lugares donde hoy se busca.'],
    ['/servicios/', 'Servicios de SEO, GEO y AEO.'],
    ...services.map((item) => [item.href, `${item.name}. ${item.line}`] as [string, string]),
    ['/guia/', 'Entender la búsqueda.'],
    ...guides.map((item) => [item.href, `${item.name}. ${item.line}`] as [string, string]),
    ['/blog/', 'Blog.'],
    [site.author.path, 'Sobre Martín Galmarino. En buscadores desde 2007.'],
    ['/diagnostico/', 'Pedido de diagnóstico gratuito.'],
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
