import { ProjectViewModel, BlogPostViewModel, PackageViewModel } from './types/ViewModels';
import { BlogPost } from './types/external/dev-to/BlogPost';
import { UserResponse } from './types/external/Hashnode';
import { PackagesResponse } from './types/external/npms/Packages';

export class HomeData {
  constructor() {}
  readonly projects: Array<ProjectViewModel> = [
    {
      name: 'HolidayMaker',
      description: 'Add places that you have been to and see them on a map, built with NextJs + TS',
      url: 'https://holidaymaker.vercel.app/',
    },
    {
      name: 'Rekindled',
      description: 'Upload kindle highlights and get a daily email of them, built with NextJs + TS',
      url: 'https://daily-kindle-highlights.vercel.app/',
    },
    {
      name: 'Profile Generator',
      description: 'Generate a personal profile about yourself with AI, built with NextJs + TS',
      url: 'https://personal-profile-generator.vercel.app/',
    },
    {
      name: 'LinkList',
      description: 'Open-source alternative to linktree, built with NextJs + TS',
      url: 'https://linklist-sigma.vercel.app/',
    },
    {
      name: 'Skrt',
      description: 'A url shortener, built with NextJs + TS',
      url: 'https://skrt.vercel.app',
    },
    {
      name: 'Tweet Thread',
      description: 'Create twitter threads and publish them easily, built with NextJs + TS',
      url: 'https://tweet-thread.vercel.app',
    },
    {
      name: 'Random Cat',
      description: 'A simple web app that finds random cat photos built with Astro + TS',
      url: 'https://random-cat-eta.vercel.app/',
    },
  ];

  async getBlogPosts(): Promise<Array<BlogPostViewModel>> {
    const blogPostsResponse = await fetch('https://dev.to/api/articles?username=willholmes', { next: { revalidate: 3600 } });
    const blogPostsParsed: Array<BlogPost> = await blogPostsResponse.json();
    const blogPosts: Array<BlogPostViewModel> = blogPostsParsed.slice(0, 3).map(x => ({
      id: x.id,
      title: x.title,
      url: x.url,
      likes: x.positive_reactions_count,
    }));
    return blogPosts;
  }

  async getPackages(): Promise<Array<PackageViewModel>> {
    const packagesResponse = await fetch('https://registry.npmjs.org/-/v1/search?text=maintainer:devwillholmes', {
      next: { revalidate: 3600 },
    });
    const packagesParsed: PackagesResponse = await packagesResponse.json();
    const packages: Array<PackageViewModel> = packagesParsed.objects.map(x => ({
      url: x.package.links.npm,
      title: x.package.name,
      description: x.package.description,
    }));
    return packages;
  }

  async getHashnodePosts(): Promise<Array<BlogPostViewModel>> {
    const posts = await fetch('https://api.hashnode.com/', {
      body: '{"query":"{\\n  user(username: \\"willholmes\\") {\\n    publication {\\n      posts(page: 0) {\\n       slug\\n       title\\n       brief\\n       coverImage\\n      views\\n        totalReactions\\n        dateAdded\\n        dateFeatured\\n      }\\n    }\\n  }\\n}\\n"}',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 },
    });
    const postsParsed = (await posts.json()) as UserResponse;
    return postsParsed.data.user.publication.posts.slice(0, 3).map(
      x =>
        ({
          id: x.slug,
          title: x.title,
          url: `https://willholmes.hashnode.dev/${x.slug}`,
          likes: x.totalReactions,
          views: x.views,
        } as BlogPostViewModel)
    );
  }
}
