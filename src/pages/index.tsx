import Image from 'next/legacy/image';
import FeaturedBlogPost from '../components/FeaturedBlogPost';
import FeaturedPackage from '../components/FeaturedPackage';
import FeaturedProject from '../components/FeaturedProject';
import { GetServerSideProps, NextPage } from 'next';
import { BlogPostViewModel, PackageViewModel, ProjectViewModel } from '../types/ViewModels';
import { HomeData } from '../HomeData';
import Head from 'next/head';

type Props = {
  blogPosts: Array<BlogPostViewModel>;
  packages: Array<PackageViewModel>;
  projects: Array<ProjectViewModel>;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { getBlogPosts, getPackages, projects } = new HomeData();
  const blogPosts = await getBlogPosts();
  const packages = await getPackages();
  return {
    props: {
      blogPosts,
      packages,
      projects
    }
  }
};

const Home: NextPage<Props> = ({ blogPosts, packages, projects }) => {
  return (
    <>
      <Head>
        <title>Will Holmes - Developer</title>
        <meta name="description" content="A full stack developer based in the UK with a passion for all things software dev." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-row items-start">
        <div className="flex flex-col pr-8">
          <h1 className='text-4xl sm:text-5xl text-white font-bold mb-2'>Will Holmes</h1>
          <div className="flex flex-row">
            <p className='text-white'>
              Full Stack Developer based in the
              {' '}
              <span className="text-white font-semibold">UK</span>
            </p>
          </div>
          <p className='text-gray-500'>Developing full stack applications built mainly with react, typescript and (dotnet or node).</p>
        </div>
        <div className="w-[163px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
          <Image
            alt=''
            src='https://avatars.githubusercontent.com/u/13040458'
            width='125'
            height='125'
            className='rounded-full object-cover'
          />
        </div>
      </div>
      <div className="flex flex-col mt-12">
        <h2 className='text-4xl text-white font-bold mb-6'>Latest Blog Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {
            blogPosts?.map(x => (
              <FeaturedBlogPost key={x.id} title={x.title} url={x.url} likes={x.likes} />
            ))
          }
        </div>
        <a className='flex flex-row mt-6 text-gray-500 hover:text-white duration-200' href="https://dev.to/willholmes">
          Read all posts&nbsp;
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
      <div className="flex flex-col mt-12 w-full">
        <h2 className='text-4xl text-white font-bold mb-6'>Projects Deployed</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {
            projects.map(x => (
              <FeaturedProject key={x.name} name={x.name} url={x.url} description={x.description} />
            ))
          }
        </div>
      </div>
      <div className="flex flex-col mt-12 w-full">
        <h2 className='text-4xl text-white font-bold mb-6'>Packages Published</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {
            packages?.map(x => (
              <FeaturedPackage key={x.title} title={x.title} url={x.url} description={x.description} />
            ))
          }
        </div>
      </div>
    </>
  )
};

export default Home;