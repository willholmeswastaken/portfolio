import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { cache } from 'react';
import type { BlogPostViewModel } from '@/types/ViewModels';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export type MdxPostFrontmatter = {
  title: string;
  description: string;
  publishedAt: string;
};

export type MdxPost = MdxPostFrontmatter & {
  slug: string;
  content: string;
};

export function isValidSlug(slug: string): boolean {
  return SLUG_PATTERN.test(slug);
}

function resolvePostPath(slug: string): string | null {
  if (!isValidSlug(slug)) return null;

  const filePath = path.resolve(BLOG_DIR, `${slug}.mdx`);
  const blogDir = path.resolve(BLOG_DIR);

  if (!filePath.startsWith(`${blogDir}${path.sep}`)) return null;

  return filePath;
}

function readMdxFile(slug: string): MdxPost | null {
  const filePath = resolvePostPath(slug);
  if (!filePath || !fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);

  if (!data.title || !data.description || !data.publishedAt) {
    console.warn(`MDX post "${slug}" is missing required frontmatter fields`);
    return null;
  }

  return {
    slug,
    title: String(data.title),
    description: String(data.description),
    publishedAt: String(data.publishedAt),
    content,
  };
}

export function getAllPostSlugs(): Array<string> {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter(file => file.endsWith('.mdx'))
    .map(file => file.replace(/\.mdx$/, ''))
    .filter(isValidSlug);
}

export const getAllMdxPosts = cache((): Array<MdxPost> => {
  return getAllPostSlugs()
    .map(slug => readMdxFile(slug))
    .filter((post): post is MdxPost => post !== null)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
});

export const getMdxPostBySlug = cache((slug: string): MdxPost | null => {
  return readMdxFile(slug);
});

export function mdxPostToViewModel(post: MdxPost): BlogPostViewModel {
  return {
    id: post.slug,
    slug: post.slug,
    title: post.title,
    description: post.description,
    url: `/blog/${post.slug}`,
    likes: 0,
    publishedAt: post.publishedAt,
    source: 'local',
  };
}

export const getLocalBlogPosts = cache((): Array<BlogPostViewModel> => {
  return getAllMdxPosts().map(mdxPostToViewModel);
});
