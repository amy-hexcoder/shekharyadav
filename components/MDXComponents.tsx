// components/MDXComponents.tsx
'use client'

import { useMDXComponent } from 'next-contentlayer2/hooks'
import MDXComponents from '@/components/MDXComponents'

type Props = {
  code: string
}

export default function MDXContent({ code }: Props) {
  const Component = useMDXComponent(code)

  return (
    <MDXComponents>
      <Component />
    </MDXComponents>
  )
}
