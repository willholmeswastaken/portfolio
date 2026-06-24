import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '@/components/section-heading';
import FeaturedBlogPostCard from '@/components/featured-blog-post-card';
import BlogPostCard from '@/components/blog-post-card';
import { getAllBlogPosts } from '@/data';

export async function WritingSection() {
  const blogPosts = await getAllBlogPosts();
  const [featuredPost, ...restPosts] = blogPosts;

  return (
    <>
      <SectionHeading title='Recent posts' description='Published on Hashnode and dev.to.' />

      {featuredPost ? (
        <div className='grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.7fr_1fr] lg:gap-14'>
          <FeaturedBlogPostCard
            title={featuredPost.title}
            description={featuredPost.description}
            url={featuredPost.url}
            coverImage={featuredPost.coverImage}
            publishedAt={featuredPost.publishedAt}
            source={featuredPost.source}
            priority
          />

          {restPosts.length > 0 && (
            <div className='flex flex-col gap-10 sm:gap-12'>
              {restPosts.map(post => (
                <BlogPostCard
                  key={post.id}
                  title={post.title}
                  description={post.description}
                  url={post.url}
                  coverImage={post.coverImage}
                  publishedAt={post.publishedAt}
                  source={post.source}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        <p className='text-sm text-muted-foreground'>No posts to show right now.</p>
      )}

      <a
        href='https://willholmes.hashnode.dev'
        target='_blank'
        rel='noreferrer'
        className='link-accent mt-12'
      >
        All posts
        <ArrowUpRight className='h-3.5 w-3.5' />
      </a>
    </>
  );
}

export function WritingSkeleton() {
  return (
    <>
      <SectionHeading title='Recent posts' description='Published on Hashnode and dev.to.' />
      <div className='grid grid-cols-1 gap-10 lg:grid-cols-[1.7fr_1fr] lg:gap-14'>
        <div className='flex flex-col gap-5'>
          <div className='aspect-[16/10] animate-pulse rounded-xl bg-[hsl(var(--card))]' />
          <div className='flex flex-col gap-3'>
            <div className='h-3 w-32 animate-pulse rounded bg-white/5' />
            <div className='h-7 w-3/4 animate-pulse rounded bg-white/5' />
            <div className='h-10 w-full animate-pulse rounded bg-white/5' />
          </div>
        </div>
        <div className='flex flex-col gap-10'>
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className='flex flex-col gap-3'>
              <div className='aspect-[16/10] animate-pulse rounded-xl bg-[hsl(var(--card))]' />
              <div className='h-3 w-24 animate-pulse rounded bg-white/5' />
              <div className='h-4 w-full animate-pulse rounded bg-white/5' />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default WritingSection;
