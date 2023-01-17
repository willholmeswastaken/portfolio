import { ProjectViewModel, BlogPostViewModel, PackageViewModel } from './types/ViewModels';
import { BlogPost } from './types/external/dev-to/BlogPost';
import { PackagesResponse } from './types/external/npms/Packages';

export class HomeData {
  constructor() {}
  readonly projects: Array<ProjectViewModel> = [
    {
      name: 'Personal Profile Generator',
      description: 'Generate a personal profile about yourself with AI, built with NextJs + TS',
      url: 'https://personal-profile-generator.vercel.app/',
    },
    {
      name: 'Skrt',
      description: 'A url shortener, built with NextJs + TS',
      url: 'https://skrt.to',
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

  async getBlogPosts() {
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

  async getPackages() {
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
}
