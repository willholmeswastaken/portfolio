import Link from 'next/link';
import Image from 'next/image';

type FeaturedBlogPostProps = {
  title: string;
  description: string;
  url: string;
  likes: number;
  views?: number;
  coverImage?: string;
};

const FeaturedBlogPost = ({ title, description, url, coverImage }: FeaturedBlogPostProps) => (
  <div className='flex items-center gap-4 py-4'>
    {coverImage && (
      <Image src={coverImage} alt={title} width={64} height={64} className='w-16 h-16 object-cover rounded border border-gray-800' />
    )}
    <div>
      <a href={url} className='font-medium text-base hover:underline'>
        {title}
      </a>
      <p className='text-gray-400 text-sm'>{description}</p>
    </div>
  </div>
);

export default FeaturedBlogPost;
