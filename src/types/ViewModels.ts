export type BlogPostViewModel = {
  id: number | string;
  title: string;
  likes: number;
  url: string;
  views?: number;
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
