import type { Metadata } from 'next';
import BlogPostRow from '@/components/blog-post-row';
import { SectionHeading } from '@/components/section-heading';
import { getAllMdxPosts, mdxPostToViewModel } from '@/lib/mdx-posts';
import { SITE_NAME, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: `Writing — ${SITE_NAME}`,
  description: 'Blog posts on software, side projects, and whatever else is on my mind.',
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: `Writing — ${SITE_NAME}`,
    description: 'Blog posts on software, side projects, and whatever else is on my mind.',
    url: `${SITE_URL}/blog`,
    type: 'website',
    siteName: SITE_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Writing — ${SITE_NAME}`,
    description: 'Blog posts on software, side projects, and whatever else is on my mind.',
  },
};

export default function BlogIndexPage() {
  const posts = getAllMdxPosts();

  return (
    <>
      <SectionHeading
        label='Writing'
        title='Blog'
        description='Posts written in MDX — Markdown with React components when you need them.'
      />

      {posts.length > 0 ? (
        <div className='divide-y divide-white/[0.06]'>
          {posts.map((post, index) => {
            const vm = mdxPostToViewModel(post);
            return (
              <BlogPostRow
                key={post.slug}
                title={vm.title}
                description={vm.description}
                url={vm.url}
                publishedAt={vm.publishedAt}
                source={vm.source}
                featured={index === 0}
              />
            );
          })}
        </div>
      ) : (
        <p className='text-sm text-muted-foreground'>No posts yet.</p>
      )}
    </>
  );
}
