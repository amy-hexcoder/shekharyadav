import Link from 'next/link';
import { recentPosts, recentProjects } from '@/lib/data';

export default function RecentWork() {
  return (
    <section id="projects" className="section">
      <div className="container-tight px-4">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Recent work</h2>
          <Link href="/blog" className="text-sm text-muted link-underline">View all</Link>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="eyebrow">Articles</div>
            <div className="mt-4 space-y-4">
              {recentPosts.map((p) => (
                <Link key={p.id} href={p.href} className="block card p-5 bg-white hover:shadow-float">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-semibold">{p.title}</h4>
                      <p className="mt-1 text-muted">{p.description}</p>
                    </div>
                    <span className="text-xs text-neutral-500 whitespace-nowrap">{p.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="eyebrow">Projects</div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {recentProjects.map((x) => (
                <Link key={x.id} href={x.href} className="card p-5 bg-white hover:shadow-float">
                  <div className="pill text-accent">{x.tag}</div>
                  <h4 className="mt-3 font-semibold">{x.title}</h4>
                  <p className="mt-1 text-muted">{x.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
