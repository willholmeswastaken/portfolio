import Link from 'next/link';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

type FeaturedProjectProps = {
    name: string;
    description: string;
    url: string;
}

const FeatureProjectPost = ({ name, description, url }: FeaturedProjectProps) => (
    <Card>
        <CardHeader>
            <h3 className="text-xl md:text-2xl font-bold mb-2">{name}</h3>
        </CardHeader>
        <CardContent>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
                {description}
            </p>
            <Link className="text-blue-500 hover:text-blue-600" href={url}>
                View Website
            </Link>
        </CardContent>
    </Card>
);

export default FeatureProjectPost;
