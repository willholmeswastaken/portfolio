import FeaturedBlogPost from '@/components/featured-blog-post';
import FeaturedPackage from '@/components/featured-package';
import FeaturedProject from '@/components/featured-project';
import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import { HomeData } from '@/HomeData';
import { Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default async function Component() {
  const { getBlogPosts, getPackages, projects, getHashnodePosts } = new HomeData();
  const [devToBlogPosts, packages, hashnodePosts] = await Promise.all([getBlogPosts(), getPackages(), getHashnodePosts()]);
  const blogPosts = hashnodePosts.concat(devToBlogPosts).filter(post => post.coverImage);
  return (
    <div className='flex flex-col min-h-screen bg-white dark:bg-gray-900'>
      <Header />
      <main className='flex-1'>
        <section className='w-full py-8 md:py-12 lg:py-16 bg-gray-100 dark:bg-inherit' id='about'>
          <div className='container px-4 md:px-6 mx-auto'>
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 text-center sm:text-left'>
              <Image
                src='https://avatars.githubusercontent.com/u/13040458'
                alt='Photo of Will on top of Snowdon'
                width={80}
                height={80}
                className='rounded-full border-2 border-white dark:border-gray-800 shadow-lg'
              />
              <div>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-2'>Will Holmes</h1>
                <p className='max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400'>
                  A software engineer with a passion for building things and sharing knowledge.
                </p>
              </div>
            </div>
            {/* Come back to this */}
            {/*<div className='flex justify-center mt-6'>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Button asChild size='sm'>
                  <Link href='#contact'>Get in Touch</Link>
                </Button>
                <Button asChild variant='outline' size='sm'>
                  <Link href='/resume.pdf'>Download Resume</Link>
                </Button>
              </div>
            </div> */}
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32' id='blog'>
          <div className='container px-4 md:px-6 mx-auto'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center'>Latest Blog Posts</h2>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {blogPosts.map(post => (
                <FeaturedBlogPost
                  key={post.id}
                  title={post.title}
                  description={post.description}
                  url={post.url}
                  likes={post.likes}
                  views={post.views}
                  coverImage={post.coverImage}
                />
              ))}
            </div>
            <div className='mt-12 text-center'>
              <Button asChild size='lg'>
                <Link href='https://willholmes.hashnode.dev'>View All Posts</Link>
              </Button>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800' id='projects'>
          <div className='container px-4 md:px-6 mx-auto'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center'>Projects & Packages</h2>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {packages.map(pkg => (
                <FeaturedPackage
                  key={pkg.title}
                  title={pkg.title}
                  description={pkg.description}
                  url={pkg.url}
                  githubUrl={pkg.githubUrl}
                  version={pkg.version}
                />
              ))}
              {projects.map(project => (
                <FeaturedProject
                  key={project.name}
                  name={project.name}
                  description={project.description}
                  url={project.url}
                  githubUrl={project.githubUrl}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className='w-full py-6 bg-gray-100 dark:bg-gray-800'>
        <div className='container px-4 md:px-6 mx-auto'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <p className='text-sm text-gray-500 dark:text-gray-400'>© {new Date().getFullYear()} Will Holmes. All rights reserved.</p>
            <nav className='flex gap-4'>
              <Link className='text-gray-500 hover:text-primary transition-colors' href='https://github.com/willholmeswastaken'>
                <Github className='h-5 w-5' />
                <span className='sr-only'>GitHub</span>
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
