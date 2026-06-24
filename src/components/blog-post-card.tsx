import Image from 'next/image';
import { AUTHOR_AVATAR, AUTHOR_NAME, formatPostMeta } from '@/lib/blog-post';

type BlogPostCardProps = {
  title: string;
  description: string;
  url: string;
  coverImage?: string;
  publishedAt?: string;
  source?: 'hashnode' | 'devto';
};

export function BlogPostCard({
  title,
  description,
  url,
  coverImage,
  publishedAt,
  source,
}: BlogPostCardProps) {
  const meta = formatPostMeta(publishedAt, source);

  return (
    <a
      href={url}
      target='_blank'
      rel='noreferrer'
      className='group flex flex-col gap-3.5'
    >
      {coverImage && (
        <div className='image-well relative aspect-[16/10] w-full overflow-hidden rounded-xl'>
          <Image
            src={coverImage}
            alt={title}
            fill
            sizes='(min-width: 1024px) 360px, 100vw'
            className='object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]'
          />
        </div>
      )}

      <div className='flex flex-col gap-2'>
        {meta && (
          <p className='text-[12px] text-muted-foreground'>{meta}</p>
        )}
        <h3 className='font-display text-[15px] font-semibold leading-snug tracking-tight text-white line-clamp-2 transition-colors duration-200 group-hover:text-white/90'>
          {title}
        </h3>
        <p className='text-[13px] leading-relaxed text-muted-foreground line-clamp-2'>
          {description}
        </p>

        <div className='flex items-center gap-2 pt-0.5'>
          <Image
            src={AUTHOR_AVATAR}
            alt={AUTHOR_NAME}
            width={18}
            height={18}
            className='h-[18px] w-[18px] rounded-full ring-1 ring-white/10'
          />
          <span className='text-[12px] text-muted-foreground'>{AUTHOR_NAME}</span>
        </div>
      </div>
    </a>
  );
}

export default BlogPostCard;
