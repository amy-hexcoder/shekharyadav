// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer2/generated';
import { useMDXComponent } from 'next-contentlayer2/hooks';
import MDXComponents from '@/components/MDXComponents';

type Params = { slug: string };

export async function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Params }) {
  const post = allPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — Shekhar Yadav`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      url: `https://shekharyadav.com/blog/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
    },
  };
}

export default function PostPage({ params }: { params: Params }) {
  const post = allPosts.find((p) => p.slug === params.slug);

  if (!post || post.published === false) return notFound();

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 md:py-16">
      <header>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{post.title}</h1>
        <div className="mt-2 flex items-center gap-3 text-sm text-neutral-500">
          <time>
            {new Date(post.date).toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'short',
              day: '2-digit',
            })}
          </time>
          {post.tags?.length ? (
            <span aria-hidden>•</span>
          ) : null}
          {post.tags?.length ? (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span key={t} className="rounded-full border border-neutral-200 px-2 py-0.5">
                  {t}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </header>

      <div className="mt-8">
        <MDXComponents>
          <MDXContent />
        </MDXComponents>
      </div>
    </article>
  );
}
