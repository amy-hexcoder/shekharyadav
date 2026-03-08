import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '2rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'SF Pro Text', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        // Semantic tokens (feel free to tweak)
        bg: '#ffffff',
        fg: '#0a0a0a',
        muted: '#6b7280',
        border: '#e5e7eb',
        accent: {
          DEFAULT: '#0ea5e9', // cyan-500 vibe
          600: '#0891b2',
          700: '#0e7490',
        },
      },
      boxShadow: {
        subtle: '0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)',
        float: '0 10px 30px rgba(0,0,0,0.10)',
        pill: '0 1px 2px rgba(0,0,0,0.06)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.7' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp .5s ease both',
        pulseSoft: 'pulseSoft 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
