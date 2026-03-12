import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { comics } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tech Humor Archive — Shekhar Yadav',
  description: 'A collection of tech comics and builder humor.',
};

export default function ComicsPage() {
  return (
    <>
      <main className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div className="max-w-3xl">
          <Link href="/" className="text-sm text-neutral-600 link-underline">
            ← Back to home
          </Link>
          <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">
            Tech Humor Archive
          </h1>
          <p className="mt-3 text-neutral-600">
            A growing collection of comics about the realities of building software, leading teams, and surviving startups.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {comics.map((comic) => (
            <div
              key={comic.id}
              className="rounded-xl border border-neutral-200 bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative aspect-[16/10] w-full bg-neutral-50">
                <Image
                  src={comic.imageUrl}
                  alt={comic.altText}
                  fill
                  className="object-contain p-6"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-5 border-t border-neutral-200">
                <h2 className="font-semibold text-lg">{comic.title}</h2>
                {comic.caption && (
                  <p className="mt-1 text-neutral-600 italic text-sm">{comic.caption}</p>
                )}
                <time className="mt-2 text-xs text-neutral-500 block">
                  {new Date(comic.publishedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
              </div>
            </div>
          ))}
        </div>

        {comics.length === 0 && (
          <div className="mt-12 text-center text-neutral-500">
            <p>No comics yet. Check back soon!</p>
          </div>
        )}
      </main>
    </>
  );
}
