import FeaturedBlogPost from '@/components/featured-blog-post';
import FeaturedPackage from '@/components/featured-package';
import FeaturedProject from '@/components/featured-project';
import { HomeData } from '@/HomeData';
import { Github } from 'lucide-react';
import Image from 'next/image';

export default async function HomePage() {
  const { getBlogPosts, getPackages, projects, getHashnodePosts } = new HomeData();
  const [devToBlogPosts, packages, hashnodePosts] = await Promise.all([getBlogPosts(), getPackages(), getHashnodePosts()]);
  const blogPosts = hashnodePosts.concat(devToBlogPosts).filter(post => post.coverImage);
  return (
    <div className='min-h-screen bg-black text-white'>
      <main className='flex-1 flex flex-col items-center justify-center'>
        <div className='w-full max-w-2xl mx-auto px-4'>
          <header className='pt-16 pb-8 text-center'>
            <Image
              src='https://avatars.githubusercontent.com/u/13040458'
              alt='Photo of Will on top of Snowdon'
              width={72}
              height={72}
              className='mx-auto rounded-full mb-4 border border-gray-800'
            />
            <h1 className='text-2xl font-bold mb-2'>Will Holmes</h1>
            <p className='text-gray-400 mb-2'>A software engineer with a passion for building things and sharing knowledge.</p>
            <a href='https://github.com/willholmeswastaken' className='ml-2 hover:underline mx-auto w-full flex justify-center'>
              <Github className='h-4 w-4 ' />
            </a>
          </header>

          <section className='mb-12'>
            <h2 className='text-lg font-semibold mb-4'>Blog Posts</h2>
            <div className='divide-y divide-gray-800'>
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
            <div className='mt-6 text-center'>
              <a href='https://willholmes.hashnode.dev' className='text-gray-400 text-sm hover:underline'>
                View All Posts
              </a>
            </div>
          </section>

          <section className='mb-12'>
            <h2 className='text-lg font-semibold mb-4'>Projects & Packages</h2>
            <div className='divide-y divide-gray-800'>
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
          </section>

          <footer className='py-8 text-center text-gray-600 text-sm'>
            © {new Date().getFullYear()} Will Holmes ·
            <a href='https://github.com/willholmeswastaken' className='ml-2 hover:underline'>
              GitHub
            </a>
          </footer>
        </div>
      </main>
    </div>
  );
}
