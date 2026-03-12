'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/80 bg-white/90 border-b border-neutral-200/60">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-4 md:py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-[15px] font-semibold tracking-tight text-neutral-900">
            SY • Builder
          </Link>

          <button
            className="md:hidden p-2.5 rounded-lg hover:bg-neutral-100 transition"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sr-only">Menu</span>
            <div className="w-5 h-0.5 bg-neutral-900 mb-1.5" />
            <div className="w-5 h-0.5 bg-neutral-900 mb-1.5" />
            <div className="w-5 h-0.5 bg-neutral-900" />
          </button>

          <nav className="hidden md:flex gap-8 text-[15px] items-center">
            <Link href="/blog" className="link-underline text-neutral-700 hover:text-neutral-900">
              Blog
            </Link>
            <Link href="https://23v.co" target="_blank" className="link-underline text-neutral-700 hover:text-neutral-900">
              23 Ventures Website
            </Link>
          
        
          </nav>
        </div>

        {open && (
          <nav className="md:hidden mt-4 pt-4 border-t border-neutral-200 flex flex-col gap-3 text-[15px]">
          
            <Link href="/projects" onClick={() => setOpen(false)} className="py-2.5 text-neutral-700">
              Projects
            </Link>
            <Link href="/blog" onClick={() => setOpen(false)} className="py-2.5 text-neutral-700">
              Blog
            </Link>
          
          </nav>
        )}
      </div>
    </header>
  );
}
