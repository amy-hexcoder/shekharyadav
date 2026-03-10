// components/Hero.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-bleed background layer */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen hero-surface"
      />

      {/* Centered content container */}
      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-[1.35fr_1fr] gap-10 items-center">
          {/* Left: Copy */}
          <div>
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-neutral-500">
              Builder’s Journal
            </p>

            <h1 className="mt-3 text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
              <span className="text-gradient">Reimagining Innovation</span>
            </h1>

            <p className="mt-4 text-lg md:text-xl text-neutral-700 max-w-2xl">
              Amplify the power of ideas through the implementation of discipline, structure,
              and time‑tested methodologies.
            </p>

            <p className="mt-4 text-neutral-600 max-w-2xl">
              I’m Shekhar Yadav — founder, product tinkerer, and chronic experimenter. Essays,
              projects, and tools for people who build.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-white px-5 py-3 hover:bg-neutral-800 transition"
              >
                Explore Projects
              </Link>
              <Link
                href="#subscribe"
                className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-5 py-3 hover:bg-neutral-50 transition"
              >
                Subscribe for weekly insights
              </Link>
            </div>
          </div>

          {/* Right: Image — larger, integrated */}
          <div className="flex md:justify-end">
            <div className="relative w-full max-w-[420px] md:max-w-[520px] mx-auto md:mx-0">
              <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-tr from-cyan-400/15 via-indigo-400/10 to-emerald-400/15 blur-xl" />
              <div className="relative aspect-square rounded-[28px] overflow-hidden ring-1 ring-neutral-200 shadow-[0_10px_35px_rgba(0,0,0,0.12)] md:translate-x-4">
                <Image
                  src="/media/avatar.png"
                  alt="Shekhar Yadav"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 520px"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 h-px bg-neutral-200/70" />
      </div>
    </section>
  );
}
