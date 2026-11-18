import { getCollection, type CollectionEntry } from 'astro:content';
import { categorySlug } from '../config/site';

export const PAGE_SIZE = 9;

export type Post = CollectionEntry<'blog'>;

export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || data.draft !== true);
  return posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export function readingMinutes(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('es-AR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function categoryPath(name: string): string {
  return `/blog/categoria/${categorySlug(name)}/`;
}

export function postPath(id: string): string {
  return `/blog/${id}/`;
}

export function relatedPosts(posts: Post[], current: Post, limit = 2): Post[] {
  return posts
    .filter((post) => post.id !== current.id)
    .map((post) => {
      const sameCategory = post.data.category === current.data.category ? 2 : 0;
      const sharedTags = post.data.tags.filter((tag) => current.data.tags.includes(tag)).length;
      return { post, score: sameCategory + sharedTags };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || b.post.data.pubDate.getTime() - a.post.data.pubDate.getTime())
    .slice(0, limit)
    .map((item) => item.post);
}
