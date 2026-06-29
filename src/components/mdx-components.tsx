import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import { Callout } from '@/components/mdx/callout';

export const mdxComponents: MDXComponents = {
  Callout,
  a: ({ href, children, ...props }) => {
    const isInternal = href?.startsWith('/');
    if (isInternal && href) {
      return (
        <Link href={href} className='text-[hsl(var(--accent))] underline decoration-[hsl(var(--accent)/0.4)] underline-offset-2 transition-colors hover:decoration-[hsl(var(--accent))]'>
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target='_blank'
        rel='noreferrer'
        className='text-[hsl(var(--accent))] underline decoration-[hsl(var(--accent)/0.4)] underline-offset-2 transition-colors hover:decoration-[hsl(var(--accent))]'
        {...props}
      >
        {children}
      </a>
    );
  },
  h2: ({ children }) => (
    <h2 className='mb-4 mt-10 font-display text-xl font-semibold tracking-tight text-white sm:text-2xl'>
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className='mb-3 mt-8 font-display text-lg font-semibold tracking-tight text-white'>
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className='mb-4 text-[15px] leading-relaxed text-muted-foreground text-pretty'>
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className='mb-4 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-muted-foreground'>
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className='mb-4 list-decimal space-y-1.5 pl-5 text-[15px] leading-relaxed text-muted-foreground'>
      {children}
    </ol>
  ),
  li: ({ children }) => <li className='pl-1'>{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className='my-6 border-l-2 border-[hsl(var(--accent)/0.5)] pl-4 text-[15px] italic leading-relaxed text-muted-foreground'>
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className='rounded-md bg-white/[0.06] px-1.5 py-0.5 font-mono text-[13px] text-white/90'>
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className='my-6 overflow-x-auto rounded-xl border border-white/[0.06] bg-[hsl(var(--surface))] p-4 font-mono text-[13px] leading-relaxed text-white/90'>
      {children}
    </pre>
  ),
  hr: () => <hr className='my-10 border-white/[0.06]' />,
  strong: ({ children }) => <strong className='font-medium text-white'>{children}</strong>,
};
