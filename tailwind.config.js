/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector'],
  content: [],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1400px',
      },
    },
    fontFamily: {
      sans: ['"Inter"', 'system-ui', 'sans-serif'],
    },
    extend: {
      fontSize: {
        xs: ['0.825rem', {
          lineHeight: '1rem',
          letterSpacing: '-0.01em',
        }],
        sm: ['0.9rem', {
          lineHeight: '1.15rem',
          letterSpacing: '-0.01em',
        }],
        base: ['0.95rem', {
          lineHeight: '1.2rem',
          letterSpacing: '-0.01em',
        }],
        md: ['1rem'],
        lg: ['1.1rem'],
        xl: ['1.2rem'],
        '2xl': ['1.3rem', {
          lineHeight: '1.5rem',
          letterSpacing: '-0.02em',
        }],
        '3xl': ['1.5rem'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        border: 'hsl(var(--border))',
        muted: 'hsl(var(--muted))',
        accent: 'hsl(var(--accent))',
        red: {
          DEFAULT: 'hsl(var(--red))'
        },
      }
    },
  },
  plugins: [],
}

