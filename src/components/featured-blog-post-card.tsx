import Image from 'next/image';
import { AUTHOR_AVATAR, AUTHOR_NAME, formatPostMeta } from '@/lib/blog-post';

type FeaturedBlogPostCardProps = {
  title: string;
  description: string;
  url: string;
  coverImage?: string;
  publishedAt?: string;
  source?: 'hashnode' | 'devto';
  priority?: boolean;
};

export function FeaturedBlogPostCard({
  title,
  description,
  url,
  coverImage,
  publishedAt,
  source,
  priority,
}: FeaturedBlogPostCardProps) {
  const meta = formatPostMeta(publishedAt, source);

  return (
    <a
      href={url}
      target='_blank'
      rel='noreferrer'
      className='group flex h-full flex-col gap-5'
    >
      <div className='image-well relative aspect-[16/10] w-full overflow-hidden rounded-xl'>
        {coverImage && (
          <Image
            src={coverImage}
            alt={title}
            fill
            sizes='(min-width: 1024px) 720px, 100vw'
            priority={priority}
            className='object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]'
          />
        )}
      </div>

      <div className='flex flex-1 flex-col gap-3'>
        {meta && (
          <p className='text-[13px] text-muted-foreground'>{meta}</p>
        )}
        <h3 className='font-display text-2xl font-semibold leading-[1.15] tracking-tight text-white text-balance transition-colors duration-200 group-hover:text-white/90 sm:text-[1.75rem]'>
          {title}
        </h3>
        <p className='text-[15px] leading-relaxed text-muted-foreground text-pretty line-clamp-2'>
          {description}
        </p>

        <div className='mt-auto flex items-center gap-2.5 pt-1'>
          <Image
            src={AUTHOR_AVATAR}
            alt={AUTHOR_NAME}
            width={20}
            height={20}
            className='h-5 w-5 rounded-full ring-1 ring-white/10'
          />
          <span className='text-[13px] text-muted-foreground'>{AUTHOR_NAME}</span>
        </div>
      </div>
    </a>
  );
}

export default FeaturedBlogPostCard;
