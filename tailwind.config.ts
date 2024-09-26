import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        'pizza-font': ['Coldsmith Pro', 'sans-serif'], // Fonte personalizada para títulos
      },
      colors: {
        'pizza-primary': {
          DEFAULT: '#FFC400',
          50: '#FFF4CC',
          100: '#FFEB99',
          200: '#FFE066',
          300: '#FFD633',
          400: '#FFCC1A',
          500: '#FFC400',
          600: '#E6B000',
          700: '#CC9D00',
          800: '#B38A00',
          900: '#806600',
        },
        'pizza-secondary': {
          DEFAULT: '#550504',
          50: '#E5B5B4',
          100: '#D18685',
          200: '#BB544F',
          300: '#A42C28',
          400: '#8E1714',
          500: '#550504',
          600: '#4D0403',
          700: '#440403',
          800: '#3C0302',
          900: '#2D0202',
        },
        'pizza-background': {
          DEFAULT: '#EDEDED',
          50: '#FFFFFF',
          100: '#FBFBFB',
          200: '#F6F6F6',
          300: '#F0F0F0',
          400: '#E9E9E9',
          500: '#EDEDED',
          600: '#D6D6D6',
          700: '#BFBFBF',
          800: '#A8A8A8',
          900: '#8C8C8C',
        },
        'pizza-text': {
          DEFAULT: '#191919',
          50: '#E5E5E5',
          100: '#BFBFBF',
          200: '#999999',
          300: '#737373',
          400: '#4C4C4C',
          500: '#191919',
          600: '#141414',
          700: '#101010',
          800: '#0C0C0C',
          900: '#080808',
        },
        'pizza-title': {
          DEFAULT: '#191919',
          50: '#E5E5E5',
          100: '#BFBFBF',
          200: '#999999',
          300: '#737373',
          400: '#4C4C4C',
          500: '#191919',
          600: '#141414',
          700: '#101010',
          800: '#0C0C0C',
          900: '#080808',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config

export default config
