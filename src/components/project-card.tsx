import Image from 'next/image';
import { ArrowUpRight, Github } from 'lucide-react';
import { getProjectScreenshotUrl } from '@/lib/screenshot';

type ProjectCardProps = {
  name: string;
  description: string;
  url: string;
  githubUrl: string;
  tech?: Array<string>;
};

export function ProjectCard({ name, description, url, githubUrl, tech }: ProjectCardProps) {
  const screenshot = getProjectScreenshotUrl(url);

  return (
    <article className='surface-card group flex h-full flex-col overflow-hidden'>
      <a
        href={url}
        target='_blank'
        rel='noreferrer'
        aria-label={`View ${name}`}
        className='relative block aspect-[16/10] w-full overflow-hidden border-b border-white/[0.04]'
      >
        <Image
          src={screenshot}
          alt={`${name} screenshot`}
          fill
          unoptimized
          sizes='(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw'
          className='object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]'
        />
        <div
          aria-hidden
          className='absolute inset-0 bg-gradient-to-t from-[hsl(var(--card))] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100'
        />
      </a>

      <div className='flex flex-1 flex-col gap-3 p-5'>
        <div className='flex items-start justify-between gap-3'>
          <h3 className='font-display text-[15px] font-semibold tracking-tight text-white'>
            {name}
          </h3>
          <a
            href={githubUrl}
            target='_blank'
            rel='noreferrer'
            aria-label={`${name} on GitHub`}
            className='flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-white/[0.05] hover:text-white'
          >
            <Github className='h-3.5 w-3.5' />
          </a>
        </div>

        <p className='text-sm leading-relaxed text-muted-foreground text-pretty line-clamp-2'>
          {description}
        </p>

        {tech && tech.length > 0 && (
          <ul className='flex flex-wrap gap-1.5'>
            {tech.map(t => (
              <li
                key={t}
                className='rounded-md bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.05em] text-muted-foreground'
              >
                {t}
              </li>
            ))}
          </ul>
        )}

        <a
          href={url}
          target='_blank'
          rel='noreferrer'
          className='mt-auto inline-flex w-fit items-center gap-1 text-sm text-muted-foreground transition-colors duration-200 group-hover:text-white'
        >
          Open project
          <ArrowUpRight className='h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px' />
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
