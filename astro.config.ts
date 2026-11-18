import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import { isNoindexPath, site } from './src/config/site';

export default defineConfig({
  site: site.url,
  output: 'static',
  adapter: vercel(),
  trailingSlash: 'always',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !isNoindexPath(new URL(page).pathname),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
