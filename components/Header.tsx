'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight text-neutral-900">
            SY • Builder
          </Link>

          <button
            className="md:hidden p-2 rounded hover:bg-neutral-100"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sr-only">Menu</span>
            <div className="w-5 h-0.5 bg-neutral-900 mb-1" />
            <div className="w-5 h-0.5 bg-neutral-900 mb-1" />
            <div className="w-5 h-0.5 bg-neutral-900" />
          </button>

          <nav className="hidden md:flex gap-6 text-sm">
            <Link href="#essays" className="link-underline">Essays</Link>
            <Link href="#projects" className="link-underline">Projects</Link>
            <Link href="#about" className="link-underline">About</Link>
            <Link href="#subscribe" className="px-3 py-1.5 rounded-md bg-cyan-600 text-white hover:bg-cyan-700 transition">
              Subscribe
            </Link>
          </nav>
        </div>

        {open && (
          <nav className="md:hidden mt-3 flex flex-col gap-2 text-sm">
            <Link href="#essays" onClick={() => setOpen(false)} className="py-2">Essays</Link>
            <Link href="#projects" onClick={() => setOpen(false)} className="py-2">Projects</Link>
            <Link href="#about" onClick={() => setOpen(false)} className="py-2">About</Link>
            <Link
              href="#subscribe"
              onClick={() => setOpen(false)}
              className="py-2 px-3 rounded-md bg-cyan-600 text-white w-fit"
            >
              Subscribe
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
