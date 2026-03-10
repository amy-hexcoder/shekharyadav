// app/blog/page.tsx
import Link from 'next/link';
import { allPosts } from '@/.contentlayer/generated';

function byDateDesc(a: any, b: any) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

export const metadata = {
  title: 'Blog — Shekhar Yadav',
  description: 'Essays on product, startups, and building things.',
};

export default function BlogPage() {
  const posts = allPosts
    .filter((p) => p.published !== false)
    .sort(byDateDesc);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Essays</h1>
      <p className="mt-3 text-neutral-600">
        Honest notes on building products, leading teams, and tinkering with new ideas.
      </p>

      <div className="mt-8 space-y-6">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-xl border border-neutral-200 p-5 hover:bg-neutral-50 transition">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">
                <Link href={post.url} className="link-underline">
                  {post.title}
                </Link>
              </h2>
              <time className="text-sm text-neutral-500">
                {new Date(post.date).toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: 'short',
                  day: '2-digit',
                })}
              </time>
            </div>
            <p className="mt-2 text-neutral-700">{post.summary}</p>
            {post.tags?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full border border-neutral-200 px-2 py-0.5 text-neutral-600">
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}
