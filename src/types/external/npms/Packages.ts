export interface Links {
  npm: string;
  homepage: string;
  repository: string;
  bugs: string;
}

export interface Author {
  name: string;
}

export interface Publisher {
  username: string;
  email: string;
}

export interface Maintainer {
  username: string;
  email: string;
}

export interface Package {
  name: string;
  scope: string;
  version: string;
  description: string;
  keywords: string[];
  date: Date;
  links: Links;
  author: Author;
  publisher: Publisher;
  maintainers: Maintainer[];
}

export interface Detail {
  quality: number;
  popularity: number;
  maintenance: number;
}

export interface Score {
  final: number;
  detail: Detail;
}

export interface Result {
  package: Package;
  score: Score;
  searchScore: number;
}

export interface PackagesResponse {
  total: number;
  objects: Result[];
}
