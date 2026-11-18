import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { site } from '../config/site';
import { getPublishedPosts, postPath } from '../lib/blog';

export const GET: APIRoute = async (context) => {
  const posts = await getPublishedPosts();

  return rss({
    title: site.name,
    description: site.tagline,
    site: context.site ?? site.url,
    trailingSlash: true,
    customData: `<language>${site.locale}</language>`,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: postPath(post.id),
      categories: [post.data.category, ...post.data.tags],
      author: post.data.author,
    })),
  });
};
