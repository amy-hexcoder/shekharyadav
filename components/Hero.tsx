import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
              Building things. Breaking things. Learning out loud.
            </h1>
            <p className="mt-5 text-lg text-neutral-600 max-w-2xl">
              I’m Shekhar Yadav — serial startup founder, product tinkerer, and chronic experimenter.
              This is my digital workshop: essays, projects, and tools for fellow builders.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link
                href="#essays"
                className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-white px-5 py-3 hover:bg-neutral-800 transition"
              >
                Read the Latest
              </Link>
              <Link
                href="#subscribe"
                className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-5 py-3 hover:bg-neutral-50 transition"
              >
                Subscribe for weekly insights
              </Link>
            </div>
          </div>

          <div className="flex md:justify-end">
            <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
              <Image
                src="/avatar.jpg"
                alt="Shekhar Yadav"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 160px, 224px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
