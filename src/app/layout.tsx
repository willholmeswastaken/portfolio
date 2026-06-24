import { Inter as FontSans, Inter_Tight as FontDisplay, JetBrains_Mono as FontMono } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  metadataBase: new URL('https://willholmes.dev'),
  title: 'Will Holmes — Software Engineer',
  description: 'A full-stack software engineer based in the UK. Writing, open-source packages, and side projects.',
  openGraph: {
    title: 'Will Holmes — Software Engineer',
    description: 'Writing, open-source packages, and side projects from the UK.',
    type: 'website',
    url: 'https://willholmes.dev',
    siteName: 'Will Holmes',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Will Holmes — Software Engineer',
    description: 'Writing, open-source packages, and side projects from the UK.',
  },
};

export const viewport = {
  themeColor: '#0B0A09',
};

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const fontDisplay = FontDisplay({
  subsets: ['latin'],
  variable: '--font-display-family',
  display: 'swap',
  weight: ['500', '600', '700'],
});

const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='dark' style={{ colorScheme: 'dark' }}>
      <body className={cn('min-h-screen font-sans antialiased', fontSans.variable, fontDisplay.variable, fontMono.variable)}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
