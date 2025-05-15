import Link from 'next/link';
import { Package, Github } from 'lucide-react';

type FeaturedPackageProps = {
  url: string;
  title: string;
  description: string;
  githubUrl: string;
  version: string;
};

const FeaturedPackage = ({ url, title, description, githubUrl, version }: FeaturedPackageProps) => (
  <div className='flex items-center gap-4 py-4'>
    <div className='w-16 h-16 flex items-center justify-center rounded border border-gray-800 bg-gray-900'>
      <Package className='h-8 w-8 text-gray-400' />
    </div>
    <div>
      <div className='flex items-center gap-2'>
        <a href={url} className='font-medium text-base hover:underline'>
          {title}
        </a>
        <span className='text-xs text-gray-500'>v{version}</span>
      </div>
      <p className='text-gray-400 text-sm'>{description}</p>
      <div className='flex gap-4 mt-1'>
        <a href={url} className='text-gray-400 text-xs hover:underline'>
          NPM
        </a>
        <a href={githubUrl} className='text-gray-400 text-xs hover:underline flex items-center gap-1'>
          <Github className='h-3 w-3' /> GitHub
        </a>
      </div>
    </div>
  </div>
);

// @ts-expect-error
function PackageIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m7.5 4.27 9 5.15' />
      <path d='M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z' />
      <path d='m3.3 7 8.7 5 8.7-5' />
      <path d='M12 22V12' />
    </svg>
  );
}

export default FeaturedPackage;
