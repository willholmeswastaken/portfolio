import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Github } from 'lucide-react';
import { Button } from './ui/button';

type FeaturedProjectProps = {
  name: string;
  description: string;
  url: string;
  githubUrl: string;
};

const FeatureProjectPost = ({ name, description, url, githubUrl }: FeaturedProjectProps) => (
  <Card className='flex flex-col group hover:shadow-lg transition-shadow duration-300'>
    <div className='relative aspect-[2/1]'>
      <Image
        unoptimized
        src={`${process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : 'http://localhost:3000'}/image?
&url=${url}
&dimension=1024x768`}
        alt='DevOps Dashboard screenshot'
        fill
        className='object-cover'
      />
      <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
      <div className='absolute bottom-4 left-4 right-4'>
        <h3 className='text-2xl font-bold text-white mb-2'>{name}</h3>
        <p className='text-gray-200'>{description}</p>
      </div>
    </div>
    <div className='p-6 mt-auto'>
      <div className='flex justify-between items-center'>
        <Button asChild>
          <Link href={url}>View Project</Link>
        </Button>
        <Button variant='outline' asChild>
          <Link href={githubUrl}>
            <Github className='mr-2 h-4 w-4' />
            GitHub
          </Link>
        </Button>
      </div>
    </div>
  </Card>
);

export default FeatureProjectPost;
