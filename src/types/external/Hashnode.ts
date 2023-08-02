export type UserResponse = {
  data: Data;
};

export type Data = {
  user: User;
};

export type User = {
  publication: Publication;
};

export type Publication = {
  posts: Post[];
};

export type Post = {
  slug: string;
  title: string;
  brief: string;
  coverImage: string;
  views: number;
  totalReactions: number;
  dateAdded: string;
  dateFeatured?: any;
};
