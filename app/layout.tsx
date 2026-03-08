import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shekhar Yadav — Builder',
  description:
    'Building things. Breaking things. Learning out loud. Essays, projects, and resources for fellow builders.',
  openGraph: {
    title: 'Shekhar Yadav — Builder',
    description:
      'Essays, projects, and resources for fellow builders. MIT Media Lab curiosity meets Apple-level polish.',
    url: 'https://example.com',
    siteName: 'Shekhar Yadav — Builder',
    images: [],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shekhar Yadav — Builder',
    description:
      'Essays, projects, and resources for fellow builders. MIT Media Lab curiosity meets Apple-level polish.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-neutral-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
