import { ProjectViewModel, BlogPostViewModel, PackageViewModel } from './types/ViewModels';
import { BlogPost } from './types/external/dev-to/BlogPost';
import { UserResponse } from './types/external/Hashnode';
import { PackagesResponse } from './types/external/npms/Packages';

export class HomeData {
  constructor() {}
  readonly projects: Array<ProjectViewModel> = [
    {
      name: 'WillTransfer',
      description: 'A simple and lightweight version of WeTransfer, built with NextJs + TS',
      url: 'https://willtransfer.vercel.app/',
    },
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
      description: x.description,
      url: x.url,
      likes: x.positive_reactions_count,
      coverImage: x.cover_image,
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
    try {
      const posts = await fetch('https://gql.hashnode.com', {
        body: '{\"query\":\"query Publication{\\n  publication(\\n    host: \\\"willholmes.hashnode.dev\\\"\\n  ) {\\n    posts(first: 3) {\\n      edges {\\n        node {\\n          title\\n          brief\\n          slug\\n          views\\n          reactionCount\\n          coverImage {\\n            url\\n          }\\n        }\\n      }\\n      totalDocuments\\n    }\\n  } \\n}\",\"operationName\":\"Publication\"}',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        next: { revalidate: 3600 },
      });
      const postsParsed = (await posts.json()) as UserResponse;
      return postsParsed.data.publication.posts.edges.map(
        x =>
          ({
            id: x.node.slug,
            title: x.node.title,
            description: x.node.brief,
            url: `https://willholmes.hashnode.dev/${x.node.slug}`,
            likes: x.node.reactionCount,
            views: x.node.views,
            coverImage: x.node.coverImage.url,
          } as BlogPostViewModel)
      );
    } catch (e) {
      console.warn(e);
      return [];
    }
  }
}
