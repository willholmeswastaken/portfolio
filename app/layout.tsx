import '../styles/globals.css';
import Nav from '../components/Nav';
import React from 'react';

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className='bg-black bg-opacity-95 text-white min-h-screen'>
          <div className="flex flex-col justify-center px-8">
            <Nav />
          </div>

          <main className="flex flex-col justify-center px-8">
            <div className="flex flex-col justify-center items-start max-w-2xl border-gray-700 mx-auto pb-16">
              {children}
            </div>
            <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
              <hr className="w-full border-1 border-gray-800 mb-8" />
            </footer>
          </main>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
