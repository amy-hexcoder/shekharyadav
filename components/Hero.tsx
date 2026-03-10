import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div className="relative container-tight px-4 pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-10 items-center">
          <div className="fade-in-up">
            <div className="eyebrow">Builder’s Journal</div>
            <h1 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight">
              Building things. Breaking things. Learning out loud.
            </h1>
            <p className="mt-5 text-lg text-muted max-w-2xl">
              I’m Shekhar Yadav — serial startup founder, product tinkerer, and chronic experimenter.
              This is my digital workshop: essays, projects, and tools for fellow builders.
            </p>
          </div>

          <div className="flex md:justify-end">
            <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-float border border-border bg-white">
              <Image
                src="/media/avatar.png"
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
