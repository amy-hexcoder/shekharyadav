// components/MdxRenderer.tsx
'use client';

import { useMDXComponent } from 'next-contentlayer2/hooks'; // or '@contentlayer2/next/hooks'
import { mdxComponents } from '@/components/mdx-components.client';

export function MdxRenderer({
  code,
  components,
}: {
  code: string;
  components?: MDXComponents;
}) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
