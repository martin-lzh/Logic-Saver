// Tailwind CSS configuration — Claude style guide design tokens
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory:  { light: '#faf9f5', DEFAULT: '#f5f4ed', medium: '#f0eee6', dark: '#e8e6dc' },
        slate:  { dark: '#141413', medium: '#3d3d3a', light: '#5e5d59' },
        cloud:  { light: '#d1cfc5', DEFAULT: '#b0aea5', dark: '#87867f' },
        warm:   { 50: '#faf9f5', 100: '#f5f4ed', 150: '#f0eee6', 200: '#e8e6dc', 300: '#d1cfc5', 400: '#b0aea5', 450: '#9c9a92', 500: '#87867f', 600: '#5e5d59', 700: '#3d3d3a', 750: '#30302e', 800: '#262624', 900: '#1a1918', 950: '#141413' },
        clay:   { DEFAULT: '#d97757', hover: '#c96442' },
      },
      fontFamily: {
        sans:  ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', '"Times New Roman"', 'serif'],
        mono:  ['ui-monospace', 'monospace'],
      },
      borderRadius: {
        sm: '0.5rem',
        DEFAULT: '0.75rem',
        lg: '1rem',
      },
      typography: () => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': 'var(--text-primary)',
            '--tw-prose-headings': 'var(--text-primary)',
            '--tw-prose-links': 'var(--text-primary)',
            '--tw-prose-bold': 'var(--text-primary)',
            '--tw-prose-counters': 'var(--text-secondary)',
            '--tw-prose-bullets': 'var(--text-muted)',
            '--tw-prose-hr': 'var(--border-default)',
            '--tw-prose-quotes': 'var(--text-secondary)',
            '--tw-prose-quote-borders': 'var(--border-default)',
            '--tw-prose-code': 'var(--text-primary)',
            '--tw-prose-pre-bg': 'var(--bg-elevated)',
            '--tw-prose-th-borders': 'var(--border-default)',
            '--tw-prose-td-borders': 'var(--border-subtle)',
            'h1, h2, h3, h4, h5, h6': {
              fontFamily: '"Source Serif 4", Georgia, ui-serif, serif',
            },
            'p, li, td, th, blockquote, span': {
              fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
              lineHeight: '1.75',
            },
            maxWidth: 'none',
          },
        },
        invert: {
          css: {
            '--tw-prose-body': 'var(--text-primary)',
            '--tw-prose-headings': 'var(--text-primary)',
            '--tw-prose-links': 'var(--text-primary)',
            '--tw-prose-bold': 'var(--text-primary)',
            '--tw-prose-counters': 'var(--text-secondary)',
            '--tw-prose-bullets': 'var(--text-muted)',
            '--tw-prose-hr': 'var(--border-default)',
            '--tw-prose-quotes': 'var(--text-secondary)',
            '--tw-prose-quote-borders': 'var(--border-default)',
            '--tw-prose-code': 'var(--text-primary)',
            '--tw-prose-pre-bg': 'var(--bg-elevated)',
            '--tw-prose-th-borders': 'var(--border-default)',
            '--tw-prose-td-borders': 'var(--border-subtle)',
          },
        },
      }),
    },
  },
  plugins: [typography],
}
