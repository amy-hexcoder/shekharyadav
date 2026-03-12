// app/blog/page.tsx
import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';

const POSTS_PER_PAGE = 7; // 1 featured + 6 grid

function byDateDesc(a: any, b: any) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

export const metadata = {
  title: 'Blog — Shekhar Yadav',
  description: 'Essays on product, startups, and building things.',
};

type Props = {
  searchParams: { page?: string };
};

export default function BlogPage({ searchParams }: Props) {
  const currentPage = Number(searchParams.page) || 1;

  const publishedPosts = allPosts
    .filter((p) => p.published !== false)
    .sort(byDateDesc);

  const totalPages = Math.ceil(publishedPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedPosts = publishedPosts.slice(startIndex, endIndex);

  const [featuredPost, ...gridPosts] = paginatedPosts;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      {/* Header */}
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Essays</h1>
        <p className="mt-4 text-lg text-neutral-600">
          Honest notes on building products, leading teams, and tinkering with new ideas.
        </p>
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <article className="mt-12 group">
          <Link
            href={featuredPost.url}
            className="block rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div className="p-8 md:p-12 bg-gradient-to-br from-neutral-50 to-white">
              <div className="flex items-center gap-3 text-sm text-neutral-500">
                <time>
                  {new Date(featuredPost.date).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                {featuredPost.tags?.length ? (
                  <>
                    <span aria-hidden>•</span>
                    <span className="text-cyan-700 font-medium">Featured</span>
                  </>
                ) : null}
              </div>

              <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight group-hover:text-cyan-700 transition-colors">
                {featuredPost.title}
              </h2>

              <p className="mt-4 text-lg text-neutral-700 max-w-3xl">
                {featuredPost.summary}
              </p>

              {featuredPost.tags?.length ? (
                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm rounded-full bg-white border border-neutral-200 px-3 py-1 text-neutral-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}

              <div className="mt-6 inline-flex items-center gap-2 text-cyan-700 font-medium group-hover:gap-3 transition-all">
                Read article
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </article>
      )}

      {/* Grid Posts */}
      {gridPosts.length > 0 && (
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridPosts.map((post) => (
            <article key={post.slug} className="group">
              <Link
                href={post.url}
                className="block h-full rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md hover:border-neutral-300 transition-all duration-300"
              >
                <div className="p-6 bg-white h-full flex flex-col">
                  <time className="text-sm text-neutral-500">
                    {new Date(post.date).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </time>

                  <h3 className="mt-3 text-xl font-semibold tracking-tight group-hover:text-cyan-700 transition-colors">
                    {post.title}
                  </h3>

                  <p className="mt-3 text-neutral-600 flex-1 line-clamp-3">
                    {post.summary}
                  </p>

                  {post.tags?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs rounded-full border border-neutral-200 px-2 py-1 text-neutral-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="mt-16 flex items-center justify-center gap-2" aria-label="Pagination">
          {/* Previous */}
          {currentPage > 1 ? (
            <Link
              href={`/blog?page=${currentPage - 1}`}
              className="rounded-lg border border-neutral-200 px-4 py-2 hover:bg-neutral-50 transition"
            >
              ← Previous
            </Link>
          ) : (
            <span className="rounded-lg border border-neutral-200 px-4 py-2 text-neutral-400 cursor-not-allowed">
              ← Previous
            </span>
          )}

          {/* Page numbers */}
          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              const isCurrent = page === currentPage;
              return (
                <Link
                  key={page}
                  href={`/blog?page=${page}`}
                  className={`rounded-lg px-4 py-2 transition ${
                    isCurrent
                      ? 'bg-cyan-600 text-white font-medium'
                      : 'border border-neutral-200 hover:bg-neutral-50'
                  }`}
                  aria-current={isCurrent ? 'page' : undefined}
                >
                  {page}
                </Link>
              );
            })}
          </div>

          {/* Next */}
          {currentPage < totalPages ? (
            <Link
              href={`/blog?page=${currentPage + 1}`}
              className="rounded-lg border border-neutral-200 px-4 py-2 hover:bg-neutral-50 transition"
            >
              Next →
            </Link>
          ) : (
            <span className="rounded-lg border border-neutral-200 px-4 py-2 text-neutral-400 cursor-not-allowed">
              Next →
            </span>
          )}
        </nav>
      )}

      {/* Empty state */}
      {publishedPosts.length === 0 && (
        <div className="mt-12 text-center text-neutral-500">
          <p>No posts yet. Check back soon.</p>
        </div>
      )}
    </div>
  );
}
