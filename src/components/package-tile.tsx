import Image from 'next/image';
import { AUTHOR_AVATAR, AUTHOR_NAME } from '@/lib/blog-post';

type PackageTileProps = {
  title: string;
  description: string;
  url: string;
  version: string;
};

export function PackageTile({ title, description, url, version }: PackageTileProps) {
  return (
    <a
      href={url}
      target='_blank'
      rel='noreferrer'
      className='group flex h-full min-h-[168px] flex-col rounded-lg bg-[hsl(var(--card))] p-5 transition-colors duration-200 hover:bg-[hsl(var(--surface))] sm:min-h-[176px] sm:p-6'
    >
      <p className='text-[13px] text-muted-foreground'>
        v{version} · npm
      </p>

      <h3 className='mt-3 font-display text-[17px] font-medium leading-snug tracking-tight text-white transition-colors duration-200 group-hover:text-white/90'>
        {title}
      </h3>

      <div className='mt-auto flex items-center gap-2.5 pt-5'>
        <Image
          src={AUTHOR_AVATAR}
          alt={AUTHOR_NAME}
          width={20}
          height={20}
          className='h-5 w-5 shrink-0 rounded-full ring-1 ring-white/10'
        />
        <span className='text-[13px] leading-snug text-muted-foreground line-clamp-2'>
          {description}
        </span>
      </div>
    </a>
  );
}

export default PackageTile;
