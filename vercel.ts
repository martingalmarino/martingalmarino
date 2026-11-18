import { routes, type VercelConfig } from '@vercel/config/v1';
import { site } from './src/config/site';

const host = new URL(site.url).host;

export const config: VercelConfig = {
  framework: 'astro',
  trailingSlash: true,
  redirects: [
    {
      source: '/:path*',
      destination: `${site.url}/:path*`,
      permanent: true,
      has: [{ type: 'host', value: `www.${host}` }],
    },
  ],
  headers: [
    routes.header('/(.*)', [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
    ]),
    routes.cacheControl('/_astro/(.*)', {
      public: true,
      maxAge: '1year',
      immutable: true,
    }),
  ],
};
