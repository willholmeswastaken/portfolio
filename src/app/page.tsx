import { Suspense } from 'react';
import SiteNav from '@/components/site-nav';
import SiteFooter from '@/components/site-footer';
import WorkSection from '@/components/sections/work-section';
import { WritingSection, WritingSkeleton } from '@/components/sections/writing-section';
import { PackagesSection, PackagesSkeleton } from '@/components/sections/packages-section';

export default function HomePage() {
  return (
    <div className='relative min-h-screen bg-[hsl(var(--bg))] text-white'>
      <SiteNav />

      <main>
        <section id='writing' className='scroll-mt-20 pb-20 pt-24 sm:pb-28 sm:pt-28'>
          <div id='top' className='page-container'>
            <Suspense fallback={<WritingSkeleton />}>
              <WritingSection />
            </Suspense>
          </div>
        </section>

        <WorkSection />

        <section id='packages' className='section-pad scroll-mt-20 border-t border-white/[0.04]'>
          <div className='page-container'>
            <Suspense fallback={<PackagesSkeleton />}>
              <PackagesSection />
            </Suspense>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}
