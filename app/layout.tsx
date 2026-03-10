// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shekhar Yadav — Builder',
  description:
    'Building things. Breaking things. Learning out loud. Essays, projects, and resources for fellow builders.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-neutral-900 antialiased`}>
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <Header />
        <main>{children}</main>
        <Footer />
        </div>
      </body>
    </html>
  );
}
