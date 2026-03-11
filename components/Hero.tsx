import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-bleed background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen hero-surface"
      />

      {/* Centered content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-[1.35fr_1fr] gap-12 md:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-neutral-500">
              Builder's Journal
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
              <span className="text-gradient">Reimagining Innovation</span>
            </h1>

            <p className="mt-5 text-lg md:text-xl text-neutral-700 max-w-2xl leading-relaxed">
              Amplify the power of ideas through the implementation of discipline, structure,
              and time‑tested methodologies.
            </p>

            <p className="mt-5 text-neutral-600 max-w-2xl leading-relaxed">
              I'm Shekhar Yadav — founder, product tinkerer, and chronic experimenter. Essays,
              projects, and tools for people who build.
            </p>

          </div>

          {/* Right: Image — blended, no frame */}
          <div className="flex md:justify-end">
            <div className="relative w-full max-w-[440px] md:max-w-[540px] mx-auto md:mx-0">
              {/* Soft glow behind image (no hard ring) */}
              <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-cyan-300/20 via-indigo-300/15 to-emerald-300/20 blur-2xl opacity-60" />
              
              {/* Image with subtle fade at edges */}
              <div className="relative aspect-square rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                <Image
                  src="/media/avatar.png"
                  alt="Shekhar Yadav"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 540px"
                />
                {/* Subtle fade overlay to blend edges */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20 h-px bg-neutral-200/60" />
      </div>
    </section>
  );
}
