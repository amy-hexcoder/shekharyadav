import Link from 'next/link';
import { recentPosts, recentProjects } from '@/lib/data';

export default function RecentWork() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-14 md:py-20">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Recent work</h2>
        <Link href="#" className="text-sm text-neutral-600 link-underline">View all</Link>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-sm uppercase tracking-wide text-neutral-500">Articles</h3>
          <div className="mt-4 space-y-4">
            {recentPosts.map((p) => (
              <Link
                key={p.id}
                href={p.href}
                className="block rounded-xl border border-neutral-200 p-5 hover:bg-neutral-50 transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-semibold">{p.title}</h4>
                    <p className="mt-1 text-neutral-600">{p.description}</p>
                  </div>
                  <span className="text-xs text-neutral-500 whitespace-nowrap">{p.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-wide text-neutral-500">Projects</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {recentProjects.map((x) => (
              <Link
                key={x.id}
                href={x.href}
                className="rounded-xl border border-neutral-200 p-5 hover:shadow-sm transition bg-white"
              >
                <div className="text-xs text-cyan-700 font-medium">{x.tag}</div>
                <h4 className="mt-2 font-semibold">{x.title}</h4>
                <p className="mt-1 text-neutral-600">{x.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
