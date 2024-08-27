import Link from 'next/link';
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Package, Github } from 'lucide-react';
import { Button } from './ui/button';

type FeaturedPackageProps = {
  url: string;
  title: string;
  description: string;
  githubUrl: string;
  version: string;
};

const FeaturedPackage = ({ url, title, description, githubUrl, version }: FeaturedPackageProps) => (
  <Card className='flex flex-col group hover:shadow-lg transition-shadow duration-300'>
    <CardHeader>
      <CardTitle className='flex items-center text-2xl'>
        <Package className='mr-2 h-5 w-5 text-primary' />
        {title}
      </CardTitle>
      <CardDescription>v{version}</CardDescription>
    </CardHeader>
    <CardContent className='flex-grow'>
      <p className='text-gray-500 dark:text-gray-400'>{description}</p>
    </CardContent>
    <div className='p-6 pt-0'>
      <div className='flex space-x-2'>
        <Button variant='outline' asChild className='flex-1'>
          <Link href={url}>NPM</Link>
        </Button>
        <Button variant='outline' asChild className='flex-1'>
          <Link href={githubUrl}>
            <Github className='mr-2 h-4 w-4' />
            GitHub
          </Link>
        </Button>
      </div>
    </div>
  </Card>
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
