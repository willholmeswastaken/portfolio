import { Inter as FontSans } from "next/font/google"
import { cn } from '@/lib/utils';
import './globals.css';
import { ThemeProvider } from "@/components/theme-provider";
import Nav from "@/components/nav";

export const metadata = {
    title: 'Will Holmes - Developer',
    description: 'A full stack developer based in the UK with a passion for all things software dev.',
    icon: '/favicon.ico',
}

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={cn(
                "min-h-screen bg-background font-sans antialiased",
                fontSans.variable
            )}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <main className='text-white min-h-screen'>
                        <div className="flex flex-col justify-center px-8">
                            <Nav />
                        </div>

                        <div className="flex flex-col justify-center px-8">
                            <div className="flex flex-col justify-center items-start border-gray-700 mx-auto pb-16">
                                {children}
                            </div>
                            <footer className="flex flex-col justify-center items-start mx-auto w-full mb-8">
                                <hr className="w-full border-1 border-gray-800 mb-8" />
                            </footer>
                        </div>
                    </main>
                </ThemeProvider>
            </body>
        </html>
    )
}