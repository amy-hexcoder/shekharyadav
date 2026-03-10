// tailwind.config.ts
import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  darkMode: 'selector',
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'Apple Color Emoji', 'Segoe UI Emoji'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#334155', // slate-700
            h1: { color: '#0f172a', fontWeight: '700', letterSpacing: '-0.02em' }, // slate-900
            h2: { color: '#0f172a', fontWeight: '700', letterSpacing: '-0.01em' },
            h3: { color: '#0f172a', fontWeight: '600' },
            a: {
              color: '#2563eb', // brand-600
              fontWeight: '600',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(37, 99, 235, 0.25)',
            },
            'a:hover': {
              color: '#1d4ed8', // brand-700
              borderBottomColor: 'rgba(29, 78, 216, 0.45)',
            },
            code: {
              color: '#0f172a',
              backgroundColor: '#f1f5f9', // slate-100
              padding: '0.15rem 0.35rem',
              borderRadius: '0.375rem',
              fontWeight: '500',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            pre: {
              backgroundColor: '#0b1220',
              color: '#e2e8f0',
              borderRadius: '0.75rem',
              padding: '1rem 1.25rem',
              lineHeight: '1.6',
            },
            blockquote: {
              fontStyle: 'normal',
              color: '#1f2937', // gray-800
              borderLeftColor: '#cbd5e1', // slate-300
            },
            hr: { borderColor: '#e2e8f0', marginTop: '3rem', marginBottom: '3rem' },
            img: { borderRadius: '0.5rem' },
            table: {
              width: '100%',
              tableLayout: 'fixed',
              borderCollapse: 'separate',
              borderSpacing: '0',
            },
            'th, td': {
              borderBottom: '1px solid #e5e7eb',
              padding: '0.75rem',
            },
          },
        },
        invert: {
          css: {
            color: '#cbd5e1', // slate-300
            h1: { color: '#e2e8f0' },
            h2: { color: '#e2e8f0' },
            h3: { color: '#e2e8f0' },
            a: {
              color: '#60a5fa', // brand-400
              borderBottomColor: 'rgba(96, 165, 250, 0.35)',
            },
            'a:hover': {
              color: '#93c5fd',
              borderBottomColor: 'rgba(147, 197, 253, 0.55)',
            },
            code: { backgroundColor: '#0f172a', color: '#e2e8f0' },
            pre: { backgroundColor: '#0b1220', color: '#e2e8f0' },
            blockquote: {
              color: '#cbd5e1',
              borderLeftColor: '#475569', // slate-600
            },
            hr: { borderColor: '#334155' }, // slate-700
            'th, td': { borderBottomColor: '#334155' },
          },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;
