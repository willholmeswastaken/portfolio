import { Code } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='px-4 lg:px-6 h-14 flex items-center backdrop-blur-sm bg-white/30 dark:bg-gray-900/30 sticky top-0 z-50'>
      <Link className='flex items-center justify-center' href='#'>
        <Code className='h-6 w-6 text-primary' />
        <span className='sr-only'>Jane Doe</span>
      </Link>
      <nav className='ml-auto flex gap-4 sm:gap-6'>
        {['about', 'blog', 'projects'].map(item => (
          <Link key={item} className='text-sm font-medium hover:text-primary transition-colors' href={`#${item}`}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        ))}
      </nav>
    </header>
  );
}