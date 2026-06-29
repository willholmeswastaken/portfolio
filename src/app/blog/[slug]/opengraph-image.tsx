import { notFound } from 'next/navigation';
import { formatPostDate } from '@/lib/blog-post';
import { createPostOgImage, ogContentType, ogSize } from '@/lib/og-image';
import { getMdxPostBySlug } from '@/lib/mdx-posts';

export const size = ogSize;
export const contentType = ogContentType;

type OgImageProps = {
  params: Promise<{ slug: string }>;
};

export default async function OgImage({ params }: OgImageProps) {
  const { slug } = await params;
  const post = getMdxPostBySlug(slug);

  if (!post) notFound();

  return createPostOgImage({
    title: post.title,
    description: post.description,
    date: formatPostDate(post.publishedAt),
  });
}
