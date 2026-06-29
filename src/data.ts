import { cache } from 'react';
import type { ProjectViewModel, BlogPostViewModel, PackageViewModel } from './types/ViewModels';
import type { BlogPost } from './types/external/dev-to/BlogPost';
import { parseHashnodeRss } from './lib/hashnode-rss';
import type { PackagesResponse } from './types/external/npms/Packages';

export const projects: Array<ProjectViewModel> = [
  {
    slug: 'wub',
    name: 'Wub',
    description: 'A tracker-free URL shortener inspired by dub.co.',
    url: 'https://wub-one.vercel.app/',
    githubUrl: 'https://github.com/willholmeswastaken/wub',
    tech: ['Next.js', 'TypeScript'],
  },
  {
    slug: 'holidaymaker',
    name: 'HolidayMaker',
    description: 'Pin the places you have been and see them on a world map.',
    url: 'https://holidaymaker.vercel.app/',
    githubUrl: 'https://github.com/willholmeswastaken/holidaymaker',
    tech: ['Next.js', 'TypeScript'],
  },
  {
    slug: 'rekindled',
    name: 'Rekindled',
    description: 'Upload your Kindle highlights and get a daily email of them.',
    url: 'https://daily-kindle-highlights.vercel.app/',
    githubUrl: 'https://github.com/willholmeswastaken/daily-kindle-highlights',
    tech: ['Next.js', 'TypeScript'],
  },
  {
    slug: 'linklist',
    name: 'LinkList',
    description: 'An open-source alternative to Linktree.',
    url: 'https://linklist-sigma.vercel.app/',
    githubUrl: 'https://github.com/willholmeswastaken/linklist',
    tech: ['Next.js', 'TypeScript'],
  },
  {
    slug: 'willtransfer',
    name: 'WillTransfer',
    description: 'A simple, lightweight file transfer service.',
    url: 'https://willtransfer.vercel.app/',
    githubUrl: 'https://github.com/willholmeswastaken/wetransfer',
    tech: ['Next.js', 'TypeScript'],
  },
  {
    slug: 'profile-generator',
    name: 'Profile Generator',
    description: 'Generate a personal bio from a few prompts, powered by AI.',
    url: 'https://personal-profile-generator.vercel.app/',
    githubUrl: 'https://github.com/willholmeswastaken/personal-profile-generator',
    tech: ['Next.js', 'TypeScript', 'AI'],
  },
  {
    slug: 'skrt',
    name: 'Skrt',
    description: 'A minimal, no-frills URL shortener.',
    url: 'https://skrt.vercel.app',
    githubUrl: 'https://github.com/willholmeswastaken/skrt',
    tech: ['Next.js', 'TypeScript'],
  },
  {
    slug: 'tweet-thread',
    name: 'Tweet Thread',
    description: 'Compose and publish Twitter threads with zero fuss.',
    url: 'https://tweet-thread.vercel.app',
    githubUrl: 'https://github.com/willholmeswastaken/tweet-thread',
    tech: ['Next.js', 'TypeScript'],
  },
  {
    slug: 'random-cat',
    name: 'Random Cat',
    description: 'Your daily dose of serotonin — random cat photos on demand.',
    url: 'https://random-cat-eta.vercel.app/',
    githubUrl: 'https://github.com/willholmeswastaken/random-cat',
    tech: ['Astro', 'TypeScript'],
  },
];

const POST_LIMIT = 3;
const POST_FETCH_LIMIT = 6;

export const getDevToPosts = cache(async (): Promise<Array<BlogPostViewModel>> => {
  try {
    const res = await fetch('https://dev.to/api/articles?username=willholmes', {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];

    const parsed: unknown = await res.json();
    if (!Array.isArray(parsed)) return [];

    return (parsed as Array<BlogPost>).slice(0, POST_FETCH_LIMIT).map(x => ({
      id: x.id,
      title: x.title,
      description: x.description,
      url: x.url,
      likes: x.positive_reactions_count,
      publishedAt: String(x.published_at),
      source: 'devto' as const,
    }));
  } catch (e) {
    console.warn(e);
    return [];
  }
});

export const getPackages = cache(async (): Promise<Array<PackageViewModel>> => {
  try {
    const res = await fetch('https://registry.npmjs.org/-/v1/search?text=maintainer:devwillholmes', {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];

    const parsed: unknown = await res.json();
    if (!parsed || typeof parsed !== 'object' || !('objects' in parsed) || !Array.isArray(parsed.objects)) {
      return [];
    }

    return (parsed as PackagesResponse).objects.map(x => ({
      url: x.package.links.npm,
      title: x.package.name,
      description: x.package.description,
      githubUrl: x.package.links.repository,
      version: x.package.version,
    }));
  } catch (e) {
    console.warn(e);
    return [];
  }
});

export const getHashnodePosts = cache(async (): Promise<Array<BlogPostViewModel>> => {
  try {
    const res = await fetch('https://willholmes.hashnode.dev/rss.xml', {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];

    const items = parseHashnodeRss(await res.text()).slice(0, POST_FETCH_LIMIT);
    return items.map(item => {
      const slug = item.link.split('/').pop() ?? item.link;

      return {
        id: slug,
        title: item.title,
        description: item.description,
        url: item.link,
        likes: 0,
        publishedAt: item.pubDate,
        source: 'hashnode' as const,
      };
    });
  } catch (e) {
    console.warn(e);
    return [];
  }
});

function postTimestamp(post: BlogPostViewModel): number {
  if (!post.publishedAt) return 0;
  const time = new Date(post.publishedAt).getTime();
  return Number.isNaN(time) ? 0 : time;
}

export const getAllBlogPosts = cache(async () => {
  const [devto, hashnode] = await Promise.all([getDevToPosts(), getHashnodePosts()]);
  const merged = hashnode
    .concat(devto)
    .sort((a, b) => postTimestamp(b) - postTimestamp(a));

  const seen = new Set<string>();
  return merged.filter(p => {
    const key = p.title.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, POST_LIMIT);
});
