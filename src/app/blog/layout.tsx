import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import SiteNav from '@/components/site-nav';
import SiteFooter from '@/components/site-footer';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative min-h-screen bg-[hsl(var(--bg))] text-white'>
      <SiteNav />
      <main className='pb-10 pt-24 sm:pb-28 sm:pt-28'>
        <div className='page-container'>
          <Link
            href='/'
            className='link-quiet mb-8 inline-flex items-center gap-1.5 text-sm'
          >
            <ArrowLeft className='h-3.5 w-3.5' />
            Home
          </Link>
          {children}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
