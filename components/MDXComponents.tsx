// components/MDXComponents.tsx
import React from 'react';

type Props = { components?: Record<string, React.ComponentType<any>>; children: React.ReactNode };

export default function MDXComponents({ children }: Props) {
  return <div className="prose prose-neutral max-w-none">{children}</div>;
}
