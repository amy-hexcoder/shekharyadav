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
            <div className="max-w-4xl mx-auto text-center space-y-6">
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
          Hey — I'm Shekhar Yadav.
        </h1>
        
        <div className="text-xl md:text-2xl text-gray-700 leading-relaxed space-y-4 max-w-3xl mx-auto">
          <p>
            I've started companies, shipped products on day one of the App Store, 
            and learned most things the hard way.
          </p>
          
          <p>
            This is my workspace: essays on building, tools I've made, experiments in progress.
          </p>
          
          <p className="font-medium text-gray-900">
            If you're here to build something real, you're in the right place.
          </p>
        </div>
        
      </div>
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
