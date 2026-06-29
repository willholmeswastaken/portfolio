import { describe, expect, it } from 'vitest';
import {
  getAllMdxPosts,
  getAllPostSlugs,
  getMdxPostBySlug,
  isValidSlug,
  mdxPostToViewModel,
} from './mdx-posts';

describe('isValidSlug', () => {
  it('accepts kebab-case slugs', () => {
    expect(isValidSlug('writing-on-my-own-site')).toBe(true);
    expect(isValidSlug('post-2')).toBe(true);
  });

  it('rejects traversal and invalid characters', () => {
    expect(isValidSlug('../../package.json')).toBe(false);
    expect(isValidSlug('..')).toBe(false);
    expect(isValidSlug('foo/bar')).toBe(false);
    expect(isValidSlug('UPPER')).toBe(false);
    expect(isValidSlug('')).toBe(false);
  });
});

describe('mdx-posts', () => {
  it('lists slugs from content/blog', () => {
    expect(getAllPostSlugs()).toContain('writing-on-my-own-site');
  });

  it('reads a valid post', () => {
    const post = getMdxPostBySlug('writing-on-my-own-site');
    expect(post?.title).toBe('Writing on my own site');
    expect(post?.content).toContain('platform lock-in');
  });

  it('returns null for unknown slug', () => {
    expect(getMdxPostBySlug('does-not-exist')).toBeNull();
  });

  it('rejects path traversal slugs', () => {
    expect(getMdxPostBySlug('../../package.json')).toBeNull();
    expect(getMdxPostBySlug('..')).toBeNull();
    expect(getMdxPostBySlug('foo/bar')).toBeNull();
  });

  it('sorts posts newest first', () => {
    const posts = getAllMdxPosts();
    for (let i = 1; i < posts.length; i++) {
      const prev = new Date(posts[i - 1]!.publishedAt).getTime();
      const curr = new Date(posts[i]!.publishedAt).getTime();
      expect(prev).toBeGreaterThanOrEqual(curr);
    }
  });

  it('maps to view model with local source', () => {
    const post = getMdxPostBySlug('writing-on-my-own-site');
    if (!post) throw new Error('post missing');
    const vm = mdxPostToViewModel(post);
    expect(vm.source).toBe('local');
    expect(vm.url).toBe('/blog/writing-on-my-own-site');
  });
});
