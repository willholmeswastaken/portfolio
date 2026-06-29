import { ArrowUpRight } from 'lucide-react';
import BlogPostRow from '@/components/blog-post-row';
import { getAllBlogPosts } from '@/data';

export async function WritingSection() {
  const blogPosts = await getAllBlogPosts();

  return (
    <>
      {blogPosts.length > 0 ? (
        <div className='divide-y divide-white/[0.06]'>
          {blogPosts.map((post, index) => (
            <BlogPostRow
              key={post.id}
              title={post.title}
              description={post.description}
              url={post.url}
              publishedAt={post.publishedAt}
              source={post.source}
              featured={index === 0}
            />
          ))}
        </div>
      ) : (
        <p className='text-sm text-muted-foreground'>No posts to show right now.</p>
      )}

      <a
        href='https://willholmes.hashnode.dev'
        target='_blank'
        rel='noreferrer'
        className='link-accent mt-8 sm:mt-12'
      >
        All posts
        <ArrowUpRight className='h-3.5 w-3.5' />
      </a>
    </>
  );
}

export function WritingSkeleton() {
  return (
    <div className='divide-y divide-white/[0.06]'>
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className='flex flex-col gap-2 px-4 py-6 sm:py-8'>
          <div className='h-3 w-32 animate-pulse rounded bg-white/5' />
          <div
            className={`animate-pulse rounded bg-white/5 ${i === 0 ? 'h-7 w-3/4' : 'h-5 w-full'}`}
          />
          <div className='h-10 w-full animate-pulse rounded bg-white/5' />
        </div>
      ))}
    </div>
  );
}

export default WritingSection;
