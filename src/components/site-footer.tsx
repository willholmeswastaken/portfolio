const links = [
  { label: 'GitHub', href: 'https://github.com/willholmeswastaken' },
  { label: 'Hashnode', href: 'https://willholmes.hashnode.dev' },
  { label: 'dev.to', href: 'https://dev.to/willholmes' },
  { label: 'npm', href: 'https://www.npmjs.com/~devwillholmes' },
];

export function SiteFooter() {
  return (
    <footer className='border-t border-white/[0.04]'>
      <div className='page-container flex flex-col gap-8 py-12 sm:py-16'>
        <div className='flex flex-col justify-between gap-6 sm:flex-row sm:items-center'>
          <div className='flex flex-col gap-1'>
            <span className='font-display text-sm font-medium text-white'>Will Holmes</span>
            <span className='text-sm text-muted-foreground'>Software engineer · UK</span>
          </div>

          <nav className='flex flex-wrap gap-x-5 gap-y-2'>
            {links.map(link => (
              <a
                key={link.label}
                href={link.href}
                target='_blank'
                rel='noreferrer'
                className='link-quiet text-sm'
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <p className='text-xs text-muted-foreground'>
          © {new Date().getFullYear()} Will Holmes
        </p>
      </div>
    </footer>
  );
}

export default SiteFooter;
