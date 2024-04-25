export type BlogPostViewModel = {
  id: number | string;
  title: string;
  description: string;
  likes: number;
  url: string;
  views?: number;
  coverImage?: string;
};

export type PackageViewModel = {
  url: string;
  title: string;
  description: string;
};

export type ProjectViewModel = {
  name: string;
  description: string;
  url: string;
};
