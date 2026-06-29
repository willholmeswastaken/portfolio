import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { formatPostDate } from '@/lib/blog-post';
import { getAllPostSlugs, getMdxPostBySlug } from '@/lib/mdx-posts';
import { mdxComponents } from '@/components/mdx-components';

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPostSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getMdxPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} — Will Holmes`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getMdxPostBySlug(slug);
  if (!post) notFound();

  const formattedDate = formatPostDate(post.publishedAt);

  return (
    <article className='max-w-2xl'>
      <header className='mb-10 flex flex-col gap-3 sm:mb-12'>
        {formattedDate && (
          <time dateTime={post.publishedAt} className='text-[12px] text-muted-foreground'>
            {formattedDate}
          </time>
        )}
        <h1 className='font-display text-3xl font-semibold tracking-tight text-white text-balance sm:text-4xl'>
          {post.title}
        </h1>
        <p className='text-[15px] leading-relaxed text-muted-foreground text-pretty'>
          {post.description}
        </p>
      </header>

      <div className='blog-prose'>
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>
    </article>
  );
}
