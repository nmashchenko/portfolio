import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://mashchenko.tech'),

  title: 'Nikita Mashchenko',
  authors: {
    name: 'nmashchenko',
  },

  description:
    "Based in Chicago, I'm a software engineer passionate about building a modern web application that users love.",
  openGraph: {
    title: 'Nikita Mashchenko',
    description:
      "Based in Chicago, I'm a software engineer passionate about building a modern web application that users love.",
    url: 'https://mashchenko.tech',
    siteName: 'Nikita Mashchenko',
    // images: '/og.png',
    type: 'website',
  },
  keywords: ['web coding', 'nmashchenko', 'react', 'developer', 'ts', 'nextjs', 'tailwind'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
