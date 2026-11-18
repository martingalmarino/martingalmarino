import type { APIRoute } from 'astro';
import { absoluteUrl, aiTrainingCrawlers } from '../config/site';

const training = aiTrainingCrawlers === 'permitir' ? 'Allow: /' : 'Disallow: /';

const body = [
  'User-agent: *',
  'Allow: /',
  '',
  'User-agent: Googlebot',
  'Allow: /',
  '',
  'User-agent: Bingbot',
  'Allow: /',
  '',
  'User-agent: OAI-SearchBot',
  'Allow: /',
  '',
  'User-agent: PerplexityBot',
  'Allow: /',
  '',
  'User-agent: Claude-SearchBot',
  'Allow: /',
  '',
  'User-agent: GPTBot',
  training,
  '',
  'User-agent: Google-Extended',
  training,
  '',
  `Sitemap: ${absoluteUrl('/sitemap-index.xml')}`,
  '',
].join('\n');

export const GET: APIRoute = () =>
  new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
