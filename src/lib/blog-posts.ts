import type { BlogPostViewModel } from '@/types/ViewModels';

export function postTimestamp(post: BlogPostViewModel): number {
  if (!post.publishedAt) return 0;
  const time = new Date(post.publishedAt).getTime();
  return Number.isNaN(time) ? 0 : time;
}

export function sortPostsByDate(posts: Array<BlogPostViewModel>): Array<BlogPostViewModel> {
  return [...posts].sort((a, b) => postTimestamp(b) - postTimestamp(a));
}

export function isRssFeed(body: string): boolean {
  return /<\s*rss[\s>]/i.test(body);
}
