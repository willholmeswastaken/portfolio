import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { formatPostMeta } from '@/lib/blog-post';
import { cn } from '@/lib/utils';

type BlogPostRowProps = {
  title: string;
  description: string;
  url: string;
  publishedAt?: string;
  source?: 'hashnode' | 'devto' | 'local';
  featured?: boolean;
};

const rowClassName =
  'group -mx-4 flex flex-col gap-2 rounded-lg px-4 py-6 transition-colors duration-200 hover:bg-white/[0.02] sm:py-8';

export function BlogPostRow({
  title,
  description,
  url,
  publishedAt,
  source,
  featured,
}: BlogPostRowProps) {
  const meta = formatPostMeta(publishedAt, source);
  const isInternal = source === 'local' || url.startsWith('/');

  const content = (
    <>
      <div className='flex items-start justify-between gap-4'>
        {meta ? (
          <p className='text-[12px] text-muted-foreground'>{meta}</p>
        ) : (
          <span />
        )}
        <ArrowUpRight className='h-3.5 w-3.5 shrink-0 text-muted-foreground transition-[color,transform] duration-200 group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-white' />
      </div>

      <h3
        className={cn(
          'font-display font-semibold tracking-tight text-white transition-colors duration-200 group-hover:text-white/90',
          featured
            ? 'text-2xl leading-[1.15] text-balance sm:text-[1.75rem]'
            : 'text-[17px] leading-snug',
        )}
      >
        {title}
      </h3>

      <p
        className={cn(
          'leading-relaxed text-muted-foreground text-pretty',
          featured ? 'line-clamp-3 text-[15px]' : 'line-clamp-2 text-[13px]',
        )}
      >
        {description}
      </p>
    </>
  );

  if (isInternal) {
    return (
      <Link href={url} className={rowClassName}>
        {content}
      </Link>
    );
  }

  return (
    <a href={url} target='_blank' rel='noopener noreferrer' className={rowClassName}>
      {content}
    </a>
  );
}

export default BlogPostRow;
