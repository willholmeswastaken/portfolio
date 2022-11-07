import type { NextPage } from 'next';
import Image from 'next/image';

const Projects: NextPage = () => (
    <>
        <div className="flex flex-col sm:flex-row items-start w-full">
            <div className="flex flex-col pr-8">
                <h1 className='text-5xl text-white font-bold mb-2'>Will Holmes</h1>
                <div className="flex flex-row">
                    <p className='text-white'>
                        Full Stack Developer based in the&nbsp;
                    </p>
                    <p className="text-white font-semibold">UK</p>
                </div>
                <p className='text-gray-500'>Developing full stack applications built mainly with react, typescript and (dotnet or node).</p>
            </div>
            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
                <Image
                    alt=''
                    src='https://avatars.githubusercontent.com/u/13040458'
                    width='125'
                    height='125'
                    className='rounded-full object-cover'
                />
            </div>
        </div>
    </>
);

export default Projects;
