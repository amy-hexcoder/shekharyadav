// components/mdx-components.client.tsx
'use client';

import type { MDXComponents } from 'mdx/types';
import { Callout } from '@/components/Callout';
import NextImage, { ImageProps } from 'next/image'

function Image(props: ImageProps) {
  return <NextImage {...props} />
}


export const mdxComponents: MDXComponents = {
  Callout,
  Image
};
