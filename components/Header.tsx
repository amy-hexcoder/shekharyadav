'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="container-tight px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">
            SY • Builder
          </Link>

          <button
            className="md:hidden p-2 rounded hover:bg-neutral-100"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <div className="w-5 h-0.5 bg-fg mb-1" />
            <div className="w-5 h-0.5 bg-fg mb-1" />
            <div className="w-5 h-0.5 bg-fg" />
          </button>

          <nav className="hidden md:flex items-center gap-7">
            <Link href="#essays" className="nav-link">Essays</Link>
            <Link href="#projects" className="nav-link">Projects</Link>
            <Link href="#about" className="nav-link">About</Link>
            <Link href="#subscribe" className="btn-accent">
              Subscribe
            </Link>
          </nav>
        </div>

        {open && (
          <nav className="md:hidden mt-3 flex flex-col gap-1.5 text-sm">
            <Link href="#essays" onClick={() => setOpen(false)} className="py-2">Essays</Link>
            <Link href="#projects" onClick={() => setOpen(false)} className="py-2">Projects</Link>
            <Link href="#about" onClick={() => setOpen(false)} className="py-2">About</Link>
            <Link href="#subscribe" onClick={() => setOpen(false)} className="py-2">
              <span className="btn-accent">Subscribe</span>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
