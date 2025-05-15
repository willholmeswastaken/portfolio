import Link from 'next/link';
import Image from 'next/image';
import { Github } from 'lucide-react';

type FeaturedProjectProps = {
  name: string;
  description: string;
  url: string;
  githubUrl: string;
};

const FeaturedProject = ({ name, description, url, githubUrl }: FeaturedProjectProps) => (
  <div className='flex items-center gap-4 py-4'>
    <Image
      src={`${
        process.env.VERCEL_PROJECT_PRODUCTION_URL ? 'https://' + process.env.VERCEL_PROJECT_PRODUCTION_URL : 'http://localhost:3000'
      }/image?&url=${url}&dimension=1024x768`}
      alt={name}
      width={64}
      height={64}
      className='w-16 h-16 object-cover rounded border border-gray-800'
    />
    <div>
      <a href={url} className='font-medium text-base hover:underline'>
        {name}
      </a>
      <p className='text-gray-400 text-sm'>{description}</p>
      <div className='flex gap-4 mt-1'>
        <a href={url} className='text-gray-400 text-xs hover:underline'>
          View Project
        </a>
        <a href={githubUrl} className='text-gray-400 text-xs hover:underline flex items-center gap-1'>
          <Github className='h-3 w-3' /> GitHub
        </a>
      </div>
    </div>
  </div>
);

export default FeaturedProject;
