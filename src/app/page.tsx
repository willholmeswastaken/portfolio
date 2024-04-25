import Image from 'next/image';
import { HomeData } from '../HomeData';
import FeaturedBlogPost from '../components/FeaturedBlogPost';
import FeaturedProject from '../components/FeaturedProject';
import FeaturedPackage from '../components/FeaturedPackage';
import Hero from '@/components/hero';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default async function Home() {
    const { getBlogPosts, getPackages, projects, getHashnodePosts } = new HomeData();
    const devToBlogPosts = await getBlogPosts();
    const packages = await getPackages();
    const hashnodePosts = await getHashnodePosts();
    var blogPosts = hashnodePosts.concat(devToBlogPosts).filter((post) => post.coverImage);
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <main className="flex-1">
                    <Hero />
                    <section className="py-12 md:py-16 lg:py-20" id="blog">
                        <div className="container mx-auto px-4 md:px-6 lg:px-8">
                            <div className="mb-8 md:mb-12 lg:mb-16">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">Latest Blog Posts</h2>
                                <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl lg:text-2xl">
                                    Check out my latest blog posts on web development and design.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
                                {
                                    blogPosts.map((post) => (
                                        <FeaturedBlogPost
                                            key={post.id}
                                            title={post.title}
                                            description={post.description}
                                            url={post.url}
                                            likes={post.likes}
                                            views={post.views}
                                            coverImage={post.coverImage}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </section>
                    <section className="py-12" id="packages">
                        <div className="container mx-auto px-4 md:px-6 lg:px-8">
                            <div className="mb-8 md:mb-12 lg:mb-16">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">My Open-Source Packages</h2>
                                <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl lg:text-2xl">
                                    Check out the open-source packages I've contributed to.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
                                <FeaturedPackage description="A modern and responsive website for a fictional company." title="Acme Inc" url="#" />
                            </div>
                        </div>
                    </section>
                    <section className="py-12" id="websites">
                        <div className="container mx-auto px-4 md:px-6 lg:px-8">
                            <div className="mb-8 md:mb-12 lg:mb-16">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">My Deployed Websites</h2>
                                <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl lg:text-2xl">
                                    Check out some of the websites I've deployed.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
                                <Card>
                                    <CardHeader>
                                        <h3 className="text-xl md:text-2xl font-bold mb-2">Acme Inc</h3>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                                            A modern and responsive website for a fictional company.
                                        </p>
                                        <Link className="text-blue-500 hover:text-blue-600" href="#">
                                            View Website
                                        </Link>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <h3 className="text-xl md:text-2xl font-bold mb-2">Acme Inc</h3>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                                            A modern and responsive website for a fictional company.
                                        </p>
                                        <Link className="text-blue-500 hover:text-blue-600" href="#">
                                            View Website
                                        </Link>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <h3 className="text-xl md:text-2xl font-bold mb-2">Acme Inc</h3>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                                            A modern and responsive website for a fictional company.
                                        </p>
                                        <Link className="text-blue-500 hover:text-blue-600" href="#">
                                            View Website
                                        </Link>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}