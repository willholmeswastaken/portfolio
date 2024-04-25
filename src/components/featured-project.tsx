import Link from 'next/link';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

type FeaturedProjectProps = {
    name: string;
    description: string;
    url: string;
}

const FeatureProjectPost = ({ name, description, url }: FeaturedProjectProps) => (
    <Card className='hover:scale-105 transition-transform duration-300'>
        <Link href={url}>
            <CardHeader>
                <h3 className="text-xl md:text-2xl font-bold mb-2">{name}</h3>
            </CardHeader>
            <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {description}
                </p>
                <span className="text-blue-500 hover:text-blue-600">
                    View Website
                </span>
            </CardContent>
        </Link>
    </Card>
);

export default FeatureProjectPost;
