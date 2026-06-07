import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

const config: Config = {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Public Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        black: '900',
        extrabold: '800',
        bold: '700',
        semibold: '600',
        medium: '500',
        normal: '400',
      },
      colors: {
        // Hulib brand palette
        hulib: {
          purple: '#9900ff',
          'purple-dark': '#6a00b1',
          blue: '#0066ff',
          'blue-dark': '#0044bb',
          green: '#00cc55',
          'green-dark': '#009940',
          orange: '#ff8800',
          'orange-dark': '#cc6600',
          'sky-blue': '#38b6ff',
          'sky-blue-dark': '#0088cc',
          // alert semantic
          'info-bg': '#98d4ff',
          'info-light': '#def1ff',
          'success-bg': '#98ffb2',
          'success-light': '#e4ffde',
          'warning-bg': '#ffe098',
          'warning-light': '#fffede',
          'error-bg': '#ff9898',
          'error-light': '#ffdede',
        },
        // shadcn CSS-variable driven colors
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
      borderWidth: {
        '3': '3px',
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
}

export default config
