import { HomeData } from '../HomeData';
import FeaturedBlogPost from '../components/featured-blog-post';
import FeaturedProject from '../components/featured-project';
import FeaturedPackage from '../components/featured-package';
import Hero from '@/components/hero';

export default async function Home() {
  const { getBlogPosts, getPackages, projects, getHashnodePosts } = new HomeData();
  const [devToBlogPosts, packages, hashnodePosts] = await Promise.all([getBlogPosts(), getPackages(), getHashnodePosts()]);
  const blogPosts = hashnodePosts.concat(devToBlogPosts).filter(post => post.coverImage);
  return (
    <>
      <div className='flex flex-col min-h-screen flex-wrap'>
        <div className='flex-1'>
          <Hero />
          <section className='py-12 md:py-16 lg:py-20' id='blog'>
            <div className='container mx-auto px-4 md:px-6 lg:px-8'>
              <div className='mb-8 md:mb-12 lg:mb-16'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight'>Latest Blog Posts</h2>
                <p className='text-gray-600 dark:text-gray-400 text-lg md:text-xl lg:text-2xl'>
                  Check out my latest blog posts on web development and design.
                </p>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16'>
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
            </div>
          </section>
          <section className='py-12' id='packages'>
            <div className='container mx-auto px-4 md:px-6 lg:px-8'>
              <div className='mb-8 md:mb-12 lg:mb-16'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight'>My Open-Source Packages</h2>
                <p className='text-gray-600 dark:text-gray-400 text-lg md:text-xl lg:text-2xl'>
                  Check out the open-source packages I&apos;ve contributed to.
                </p>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16'>
                {packages.map(pkg => (
                  <FeaturedPackage key={pkg.title} title={pkg.title} description={pkg.description} url={pkg.url} />
                ))}
              </div>
            </div>
          </section>
          <section className='py-12' id='websites'>
            <div className='container mx-auto px-4 md:px-6 lg:px-8'>
              <div className='mb-8 md:mb-12 lg:mb-16'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight'>My Deployed Websites</h2>
                <p className='text-gray-600 dark:text-gray-400 text-lg md:text-xl lg:text-2xl'>
                  Check out some of the websites I&apos;ve deployed.
                </p>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16'>
                {projects.map(project => (
                  <FeaturedProject key={project.name} name={project.name} description={project.description} url={project.url} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
