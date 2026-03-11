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
    <html lang="en" className="scroll-smooth overflow-x-clip">
      <body className={`${inter.className} bg-white text-neutral-900 antialiased`}>
        <Header />     {/* Header internally centers its content */}
        <main>{children}</main>  {/* Sections decide if they’re full-bleed or constrained */}
        <Newsletter />
        <Footer />     {/* Footer internally centers its content */}
      </body>
    </html>
  );
}
