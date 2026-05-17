/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#111415',
          dim: '#0c0f10',
          bright: '#373a3b',
          container: '#1d2021',
          variant: '#323536',
        },
        primary: {
          DEFAULT: '#6d28d9',
          light: '#d3bbff',
          fixed: '#ebddff',
        },
        secondary: {
          DEFAULT: '#fde047',
          dim: '#e9c349',
          container: '#af8d11',
        },
        on: {
          surface: '#ffffff',
          'surface-variant': '#a1a1aa',
          primary: '#3f008d',
        },
        border: 'rgba(255, 255, 255, 0.1)',
      },
      fontSize: {
        'display-lg': ['64px', { lineHeight: '1.1', letterSpacing: '0' }],
        'display-lg-mobile': ['40px', { lineHeight: '1.2', letterSpacing: '0' }],
        'headline-lg': ['32px', { lineHeight: '1.3', letterSpacing: '0' }],
        'headline-md': ['24px', { lineHeight: '1.4', letterSpacing: '0' }],
        'body-lg': ['18px', { lineHeight: '1.6', letterSpacing: '0' }],
        'body-md': ['16px', { lineHeight: '1.6', letterSpacing: '0' }],
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Manrope', '"Inter"', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
      spacing: {
        'gutter': '32px',
        'margin-mobile': '20px',
        'margin-desktop': '64px',
        'stack-sm': '12px',
        'stack-md': '32px',
        'stack-lg': '80px',
      },
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.5rem',
        '2xl': '1rem', // Match DESIGN.md 16px
        'full': '9999px',
      },
      backgroundImage: {
        'gradient-cosmic': 'linear-gradient(to bottom right, #111415, #0c0f10)',
        'gradient-primary': 'linear-gradient(to right, #6d28d9, #d3bbff)',
      }
    },
  },
  plugins: [],
}
