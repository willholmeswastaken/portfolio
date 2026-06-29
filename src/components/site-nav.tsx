'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Github } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type SectionId = 'writing' | 'work' | 'packages';

const NAV_LINKS: Array<{ id: SectionId; label: string }> = [
  { id: 'writing', label: 'Writing' },
  { id: 'work', label: 'Work' },
  { id: 'packages', label: 'Packages' },
];

export function SiteNav() {
  const pathname = usePathname();
  const isBlog = pathname.startsWith('/blog');
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0];
        if (top) {
          setActiveSection(top.target.id as SectionId);
        }
      },
      { rootMargin: '-42% 0px -48% 0px', threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-[border-color,background-color,backdrop-filter] duration-300',
        scrolled
          ? 'border-white/[0.06] bg-[hsl(var(--bg)/0.85)] backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      )}
    >
      <div className='page-container flex h-14 items-center justify-between sm:h-16'>
        <a href='/#top' className='flex items-center gap-2.5'>
          <span className='relative block h-7 w-7 overflow-hidden rounded-full ring-1 ring-white/10'>
            <Image
              src='https://avatars.githubusercontent.com/u/13040458'
              alt='Will Holmes'
              width={56}
              height={56}
              className='h-full w-full object-cover'
            />
          </span>
          <span className='hidden text-sm font-medium text-white sm:inline'>Will Holmes</span>
        </a>

        <nav className='absolute left-1/2 flex -translate-x-1/2 items-center gap-0.5 sm:gap-1'>
          {NAV_LINKS.map(({ id, label }) => {
            const isActive = (isBlog && id === 'writing') || activeSection === id;
            return (
              <a
                key={id}
                href={`/#${id}`}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  'rounded-full px-2.5 py-1.5 text-xs transition-colors duration-200 sm:px-3.5 sm:text-sm',
                  isActive
                    ? 'bg-white/[0.06] text-white'
                    : 'text-muted-foreground hover:text-white'
                )}
              >
                {label}
              </a>
            );
          })}
        </nav>

        <a
          href='https://github.com/willholmeswastaken'
          target='_blank'
          rel='noreferrer'
          aria-label='GitHub'
          className='link-quiet flex items-center gap-1.5 text-sm'
        >
          <Github className='h-4 w-4' />
          <span className='hidden sm:inline'>GitHub</span>
        </a>
      </div>
    </header>
  );
}

export default SiteNav;
