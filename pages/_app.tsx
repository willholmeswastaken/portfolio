import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Nav from '../components/Nav';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-black bg-opacity-95 text-white min-h-screen'>
      <Head>
        <title>Will Holmes - Developer</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className="flex flex-col justify-center px-8">
        <Nav />
      </div>

      <main className="flex flex-col justify-center px-8">
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-700 mx-auto pb-16">
          <Component {...pageProps} />
        </div>
        <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
          <hr className="w-full border-1 border-gray-800 mb-8" />
        </footer>
      </main>
    </div>

  );
  // return (
  //   <div className='w-screen h-screen flex flex-col items-center bg-black bg-opacity-95'>
  //     <Head>
  //       <title>Will Holmes - Developer</title>
  //       <meta name='description' content='Generated by create next app' />
  //       <link rel='icon' href='/favicon.ico' />
  //     </Head>

  //     <main className='flex flex-col flex-1'>
  //       <Nav />

  //       <Component {...pageProps} />
  //     </main>
  //   </div>
  // );
}

export default MyApp;
