import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
// @ts-ignore - internal util import per instructions
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f49bd',
        'background-light': '#f6f6f8',
        'background-dark': '#101622',
        'text-light': '#0d121b',
        'text-dark': '#f8f9fc',
        'subtext-light': '#4c669a',
        'subtext-dark': '#a0aec0',
        'color-1': 'hsl(var(--color-1))',
        'color-2': 'hsl(var(--color-2))',
        'color-3': 'hsl(var(--color-3))',
        'color-4': 'hsl(var(--color-4))',
        'color-5': 'hsl(var(--color-5))'
      },
      animation: {
        rainbow: 'rainbow var(--speed, 2s) infinite linear'
      },
      keyframes: {
        rainbow: {
          '0%': { 'background-position': '0%' },
          '100%': { 'background-position': '200%' }
        }
      },
      borderRadius: { DEFAULT: '0.5rem', lg: '1rem', xl: '1.5rem', full: '9999px' }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    function addVariablesForColors({ addBase, theme }: any) {
      const allColors = flattenColorPalette(theme('colors')) as Record<string, string>
      const newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      )
      addBase({ ':root': newVars })
    }
  ]
} satisfies Config


