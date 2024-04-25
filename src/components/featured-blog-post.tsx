import Link from 'next/link';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import Image from 'next/image';

type FeaturedBlogPostProps = {
  title: string;
  description: string;
  url: string;
  likes: number;
  views?: number;
  coverImage?: string;
}

const FeaturedBlogPost = ({ title, description, url, likes, views, coverImage }: FeaturedBlogPostProps) => (
  <Card>
    <CardHeader>
      {coverImage && (
        <Image
          alt={`Blog Post ${title}`}
          className="rounded-t-lg"
          height={200}
          unoptimized
          src={coverImage}
          style={{
            aspectRatio: "400/200",
            objectFit: "cover",
          }}
          width={1000}
        />

      )}
    </CardHeader>
    <CardContent>
      <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {description}
      </p>
      <Link className="text-blue-500 hover:text-blue-600" href={url}>
        Read More
      </Link>
    </CardContent>
  </Card>
);

export default FeaturedBlogPost;
