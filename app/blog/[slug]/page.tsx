import { notFound } from 'next/navigation'
import { allPosts } from '@/.contentlayer/generated'
//import MDXContent from '@/components/MDXContent'
import { useMDXComponent } from 'next-contentlayer/hooks';

import { mdxComponents } from '@/components/mdx-components';

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Params
}) {
  const { slug } = await params
  const post = allPosts.find((p) => p.slug === slug)

  if (!post) {
    return {}
  }

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
  }
}

export default async function PostPage({
  params,
}: {
  params: Params
}) {
  const { slug } = await params
  const post = allPosts.find((p) => p.slug === slug)

  if (!post || post.published === false) {
    notFound()
  }

    const MDXContent = useMDXComponent(post.body.code);

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 md:py-16">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {post.title}
        </h1>

        <div className="mt-2 flex items-center gap-3 text-sm text-neutral-500">
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'short',
              day: '2-digit',
            })}
          </time>

          {post.tags?.length ? <span aria-hidden>•</span> : null}

          {post.tags?.length ? (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-neutral-200 px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <MDXContent code={post.body.code} components={mdxComponents} />
      </div>
    </article>
  )
}
