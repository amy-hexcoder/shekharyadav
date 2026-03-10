// components/MDXComponents.tsx
'use client'

import type { ReactNode } from 'react'

type Props = {
  components?: Record<string, React.ComponentType<any>>
  children: ReactNode
}

export default function MDXComponents({ children }: Props) {
  return (
    <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-12 md:pt-24 md:pb-20 mdx-content">
      <article
        className="
          prose prose-slate dark:prose-invert max-w-3xl mx-auto px-4 py-8
          prose-headings:scroll-m-heading
          prose-headings:font-semibold
          prose-h1:text-4xl md:prose-h1:text-5xl prose-h1:leading-tight
          prose-h2:mt-12 prose-h2:text-2xl
          prose-p:leading-7
          prose-a:no-underline hover:prose-a:underline
          prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md
          prose-pre:shadow-lg
          prose-img:rounded-xl
        "
      >
        {children}
      </article>
    </div>
  )
}
