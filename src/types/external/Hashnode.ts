export type UserResponse = {
  data: Data;
};

export type Data = {
  publication: Publication;
};

export type Publication = {
  posts: Posts;
};

export type Posts = {
  edges: Edge[];
  totalDocuments: number;
};

export type PostNode = {
  title: string;
  slug: string;
  views: number;
  reactionCount: number;
}

export type Edge = {
  node: PostNode;
};
