import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '@/components/section-heading';
import PackageTile from '@/components/package-tile';
import { getPackages } from '@/data';

export async function PackagesSection() {
  const packages = await getPackages();

  return (
    <>
      <SectionHeading
        label='Packages'
        title='On npm'
        description="Open-source packages I've published."
      />

      {packages.length > 0 ? (
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {packages.map(pkg => (
            <PackageTile
              key={pkg.title}
              title={pkg.title}
              description={pkg.description}
              url={pkg.url}
              version={pkg.version}
            />
          ))}
        </div>
      ) : (
        <p className='text-sm text-muted-foreground'>No packages to show right now.</p>
      )}

      <a
        href='https://www.npmjs.com/~devwillholmes'
        target='_blank'
        rel='noreferrer'
        className='link-accent mt-10'
      >
        npm profile
        <ArrowUpRight className='h-3.5 w-3.5' />
      </a>
    </>
  );
}

export function PackagesSkeleton() {
  return (
    <>
      <SectionHeading label='Packages' title='On npm' description="Open-source packages I've published." />
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className='flex min-h-[168px] animate-pulse flex-col rounded-lg bg-[hsl(var(--card))] p-6'
          >
            <div className='h-3 w-20 rounded bg-white/5' />
            <div className='mt-4 h-5 w-3/4 rounded bg-white/5' />
            <div className='mt-auto flex items-center gap-2 pt-5'>
              <div className='h-5 w-5 rounded-full bg-white/5' />
              <div className='h-3 flex-1 rounded bg-white/5' />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default PackagesSection;
