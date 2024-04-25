import { StarIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

type FeaturedPackageProps = {
  url: string;
  title: string;
  description: string;
}

const FeaturedPackage = ({
  url,
  title,
  description,
}: FeaturedPackageProps) => (
  <Card className='hover:scale-105 transition-transform duration-300'>
    <Link href={url}>
      <CardHeader>
        <div className="bg-gray-200 dark:bg-gray-700 rounded-t-lg py-8 px-6">
          <PackageIcon className="h-8 w-8 text-gray-600 dark:text-gray-400" />
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {description}
        </p>
        <div className="flex items-center space-x-4">
          <span className="text-blue-500 hover:text-blue-600">
            View on npm
          </span>
        </div>
      </CardContent>
    </Link>
  </Card>
);

// @ts-expect-error
function PackageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}

export default FeaturedPackage;
