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
        sans: ['"JetBrains Mono"', '"Share Tech Mono"', 'ui-monospace', 'monospace'],
        mono: ['"JetBrains Mono"', '"Share Tech Mono"', 'ui-monospace', 'monospace'],
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
        // Robogears brand palette
        robogears: {
          green: '#00FF41',
          'green-dark': '#00B82E',
          yellow: '#F9E900',
          'yellow-dark': '#C4B800',
          cyan: '#00D4FF',
          'cyan-dark': '#00A0C4',
          magenta: '#FF003C',
          'magenta-dark': '#CC002E',
          amber: '#FF8C00',
          'amber-dark': '#CC6600',
          // kept for backward compat
          violet: '#BF00FF',
          'violet-dark': '#8800BB',
          red: '#FF2244',
          'red-dark': '#BB1133',
          // status semantic
          'info-bg': 'rgba(0, 212, 255, 0.15)',
          'info-light': 'rgba(0, 212, 255, 0.05)',
          'success-bg': 'rgba(0, 255, 65, 0.15)',
          'success-light': 'rgba(0, 255, 65, 0.05)',
          'warning-bg': 'rgba(249, 233, 0, 0.15)',
          'warning-light': 'rgba(249, 233, 0, 0.05)',
          'error-bg': 'rgba(255, 0, 60, 0.15)',
          'error-light': 'rgba(255, 0, 60, 0.05)',
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
        md: 'calc(var(--radius) - 1px)',
        sm: 'calc(var(--radius) - 2px)',
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
