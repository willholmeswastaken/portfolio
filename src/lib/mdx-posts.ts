import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { cache } from 'react';
import type { BlogPostViewModel } from '@/types/ViewModels';
import { sortPostsByDate } from '@/lib/blog-posts';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export type MdxPostFrontmatter = {
  title: string;
  description: string;
  publishedAt: string;
};

export type MdxPost = MdxPostFrontmatter & {
  slug: string;
  content: string;
};

function readMdxFile(slug: string): MdxPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

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
    .map(file => file.replace(/\.mdx$/, ''));
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
  return sortPostsByDate(getAllMdxPosts().map(mdxPostToViewModel));
});
