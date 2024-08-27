import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Nav from '@/components/nav';
import { Link, Twitter, Github, Linkedin } from 'lucide-react';

export const metadata = {
  title: 'Will Holmes - Developer',
  description: 'A full stack developer based in the UK with a passion for all things software dev.',
  icon: '/favicon.ico',
};

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={cn('', fontSans.variable)}>{children}</body>
    </html>
  );
}
