import Link from 'next/link';
import Image from 'next/image';
import { getLatestComic } from '@/lib/data';

export default function ComicStrip() {
  const comic = getLatestComic();

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:py-20">
      <div className="rounded-2xl bg-neutral-50 border border-neutral-200 p-6 md:p-10">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Tech Humor
            </h2>
            <p className="mt-2 text-neutral-600">
              Because building things should also be fun.
            </p>
          </div>
          <Link
            href="/comics"
            className="text-sm text-neutral-600 link-underline hidden sm:block"
          >
            View Archive →
          </Link>
        </div>

        <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full">
            <Image
              src={comic.imageUrl}
              alt={comic.altText}
             // fill
              className="object-contain p-4 md:p-8"
              //sizes="(max-width: 768px) 100vw, 1200px"
              priority
            />
          </div>
          
          <div className="p-4 md:p-6 border-t border-neutral-200">
            <h3 className="font-semibold text-lg">{comic.title}</h3>
            {comic.caption && (
              <p className="mt-1 text-neutral-600 italic">{comic.caption}</p>
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

        <Link
          href="/comics"
          className="mt-4 text-sm text-neutral-600 link-underline sm:hidden inline-block"
        >
          View Archive →
        </Link>
      </div>
    </section>
  );
}
