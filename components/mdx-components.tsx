// mdx-components.tsx
import type { MDXComponents } from 'mdx/types'
import { Callout } from '@/components/Callout'

import NextImage, { ImageProps } from 'next/image'

function Image(props: ImageProps) {
  return <NextImage {...props} />
}

const components: MDXComponents = {
  Callout,
  Image,
}

export function useMDXComponents(): MDXComponents {
  return components
}
