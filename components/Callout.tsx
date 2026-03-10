// components/Callout.tsx
'use client';

import { ReactNode } from 'react';
import { InformationCircleIcon, ExclamationTriangleIcon, CheckCircleIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

type Kind = 'quote' | 'highlight' | 'info' | 'warning' | 'success';
type Props = {
  children: ReactNode;
};

const variants: Record<Kind, string> = {
  quote: 'bg-blue-50 text-blue-900 ring-1 ring-blue-200 dark:bg-blue-900/15 dark:text-blue-100 dark:ring-blue-800/40',
  highlight: 'bg-yellow-50 text-yellow-900 ring-1 ring-yellow-200 dark:bg-yellow-900/15 dark:text-yellow-100 dark:ring-yellow-800/40',
  info: 'bg-slate-50 text-slate-900 ring-1 ring-slate-200 dark:bg-slate-900/40 dark:text-slate-100 dark:ring-slate-800/60',
  warning: 'bg-orange-50 text-orange-900 ring-1 ring-orange-200 dark:bg-orange-900/15 dark:text-orange-100 dark:ring-orange-800/40',
  success: 'bg-emerald-50 text-emerald-900 ring-1 ring-emerald-200 dark:bg-emerald-900/15 dark:text-emerald-100 dark:ring-emerald-800/40',
};

const icons: Record<Kind, JSX.Element> = {
  quote: <ChatBubbleLeftRightIcon className="h-5 w-5" />,
  highlight: <InformationCircleIcon className="h-5 w-5" />,
  info: <InformationCircleIcon className="h-5 w-5" />,
  warning: <ExclamationTriangleIcon className="h-5 w-5" />,
  success: <CheckCircleIcon className="h-5 w-5" />,
};

export function Callout({
  type = 'info',
  author,
  children,
}: {
  type?: Kind;
  author?: string;
  children: ReactNode;
}) {
  return (
    <div className={`my-6 rounded-lg p-4 sm:p-5 ${variants[type]}`}>
      <div className="flex items-start gap-3">
        <div className="mt-0.5 opacity-80">{icons[type]}</div>
        <div className="min-w-0">
          <div className="prose dark:prose-invert max-w-none">
            {children}
          </div>
          {author && (
            <div className="mt-2 text-sm font-medium opacity-70">— {author}</div>
          )}
        </div>
      </div>
    </div>
  );
}
