import { describe, expect, it } from 'vitest';
import { postTimestamp, sortPostsByDate } from './blog-posts';
import type { BlogPostViewModel } from '../types/ViewModels';

const posts: Array<BlogPostViewModel> = [
  {
    id: 'old-devto',
    title: 'Old dev.to post',
    description: 'Old',
    url: 'https://dev.to/old',
    likes: 0,
    publishedAt: '2022-11-08T12:42:26Z',
    source: 'devto',
  },
  {
    id: 'new-hashnode',
    title: 'New Hashnode post',
    description: 'New',
    url: 'https://willholmes.hashnode.dev/new',
    likes: 0,
    publishedAt: 'Tue, 28 May 2024 17:40:46 GMT',
    source: 'hashnode',
  },
];

describe('blog post sorting', () => {
  it('sorts posts newest first across mixed date formats', () => {
    const sorted = sortPostsByDate(posts);

    expect(sorted.map(post => post.id)).toEqual(['new-hashnode', 'old-devto']);
  });

  it('treats missing dates as oldest', () => {
    const withoutDate: BlogPostViewModel = {
      id: 'no-date',
      title: 'No date',
      description: 'No date',
      url: 'https://example.com',
      likes: 0,
    };

    expect(postTimestamp(withoutDate)).toBe(0);
    expect(sortPostsByDate([withoutDate, posts[1]]).map(post => post.id)).toEqual([
      'new-hashnode',
      'no-date',
    ]);
  });
});
