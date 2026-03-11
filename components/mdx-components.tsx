// mdx-components.tsx
import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import { Callout } from '@/components/Callout'

const components: MDXComponents = {
  Callout,
  Image,
}

export function useMDXComponents(): MDXComponents {
  return components
}
