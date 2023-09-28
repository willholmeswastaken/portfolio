import Nav from '../components/Nav';
import './globals.css';

export const metadata = {
    title: 'Will Holmes - Developer',
    description: 'A full stack developer based in the UK with a passion for all things software dev.',
    icon: '/favicon.ico',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <main className='text-white min-h-screen'>
                    <div className="flex flex-col justify-center px-8">
                        <Nav />
                    </div>

                    <div className="flex flex-col justify-center px-8">
                        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-700 mx-auto pb-16">
                            {children}
                        </div>
                        <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
                            <hr className="w-full border-1 border-gray-800 mb-8" />
                        </footer>
                    </div>
                </main>
            </body>
        </html>
    )
}