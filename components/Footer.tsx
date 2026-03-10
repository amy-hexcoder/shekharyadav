import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-border">
      <div className="container-tight px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-neutral-600">© {new Date().getFullYear()} Shekhar Yadav</div>
        <nav className="flex gap-5 text-sm">
          <Link href="/blog" className="link-underline">Blog</Link>
          <Link href="#" className="link-underline">Projects</Link>
          <Link href="https://linkedin.com/in/shekharyadav" className="link-underline">About</Link>
          <Link href="#" className="link-underline">Contact</Link>
        </nav>
        <div className="flex gap-4">
          <Link aria-label="LinkedIn" href="https://linkedin.com/in/shekharyadav" className="link-underline text-sm">LinkedIn</Link>
          <Link aria-label="GitHub" href="https://github.com/shekharyadav" className="link-underline text-sm">GitHub</Link>
        </div>
      </div>
    </footer>
  );
}
