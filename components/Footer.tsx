import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-border">
      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="text-sm text-neutral-600">© {new Date().getFullYear()} Shekhar Yadav</div>
        <div className="flex gap-4">
          <Link aria-label="Blog" href="/blog" className="link-underline text-sm">Blog</Link>
          <Link aria-label="LinkedIn" href="https://linkedin.com/in/shekharyadav" className="link-underline text-sm">LinkedIn</Link>
          <Link aria-label="GitHub" href="https://github.com/shekharyadav" className="link-underline text-sm">GitHub</Link>
        </div>
      </div>
    </footer>
  );
}
