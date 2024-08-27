import Link from 'next/link';
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

type FeaturedBlogPostProps = {
  title: string;
  description: string;
  url: string;
  likes: number;
  views?: number;
  coverImage?: string;
};

const FeaturedBlogPost = ({ title, description, url, likes, views, coverImage }: FeaturedBlogPostProps) => (
  <Card className='flex flex-col group hover:shadow-lg transition-shadow duration-300'>
    <CardHeader>
      <CardTitle className='text-2xl'>{title}</CardTitle>
      {/* Come back to this */}
      {/* <CardDescription>May 1, 2023 • 5 min read</CardDescription> */}
    </CardHeader>
    <CardContent className='flex-grow'>
      <p className='text-gray-500 dark:text-gray-400'>{description}</p>
    </CardContent>
    <div className='p-6 pt-0'>
      <Button className='w-full group-hover:translate-x-1 transition-transform' variant='ghost' asChild>
        <Link href={url}>
          Read More <ChevronRight className='ml-2 h-4 w-4' />
        </Link>
      </Button>
    </div>
  </Card>
);

export default FeaturedBlogPost;
