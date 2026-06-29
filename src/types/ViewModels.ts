export type BlogPostViewModel = {
  id: number | string;
  title: string;
  description: string;
  likes: number;
  url: string;
  views?: number;
  publishedAt?: string;
  slug?: string;
  source?: 'hashnode' | 'devto' | 'local';
};

export type PackageViewModel = {
  url: string;
  title: string;
  description: string;
  githubUrl: string;
  version: string;
};

export type ProjectViewModel = {
  slug: string;
  name: string;
  description: string;
  url: string;
  githubUrl: string;
  tech: Array<string>;
};
