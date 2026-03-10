// components/Callout.tsx
import { ReactNode } from 'react';

interface CalloutProps {
  type?: 'quote' | 'highlight' | 'info' | 'warning' | 'success';
  author?: string;
  children: ReactNode;
}

export function Callout({ type = 'info', author, children }: CalloutProps) {
  const styles = {
    quote: 'border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20',
    highlight: 'border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20',
    info: 'border-l-4 border-gray-500 bg-gray-50 dark:bg-gray-900/20',
    warning: 'border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20',
    success: 'border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20',
  };

  return (
    <div className={`my-6 p-4 rounded-r-lg ${styles[type]}`}>
      <div className="flex flex-col">
        {type === 'quote' && (
          <svg 
            className="w-8 h-8 text-gray-400 mb-2" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        )}
        <div className="prose dark:prose-invert max-w-none">
          {children}
        </div>
        {author && (
          <div className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            — {author}
          </div>
        )}
      </div>
    </div>
  );
}
