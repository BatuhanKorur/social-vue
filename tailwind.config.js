/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', 'class'],
  content: [],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    fontFamily: {
      sans: ['"Inter"', 'system-ui', 'sans-serif'],
    },
    extend: {
      fontSize: {
        sm: ['0.9rem', {
          lineHeight: '1.15rem',
          letterSpacing: '-0.01em',
        }],
        base: ['0.95rem', {
          lineHeight: '1.2rem',
          letterSpacing: '-0.01em',
        }],
        md: '1rem',
        lg: '1.1rem',
        xl: '1.2rem',
        '2xl': '1.35rem',
        '3xl': '1.5rem',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        border: 'hsl(var(--border))',

        muted: {
          DEFAULT: 'hsl(var(--muted))',
          background: 'hsl(var(--muted-background))',
          foreground: 'hsl(var(--muted-foreground))',
        },

        primary: {
          DEFAULT: 'hsl(var(--primary))',
          background: 'hsl(var(--primary-background))',
          foreground: 'hsl(var(--primary-foreground))',
        },

        red: {
          DEFAULT: 'hsl(var(--red))',
          background: 'hsl(var(--red-background))',
          foreground: 'hsl(var(--red-foreground))',
        }
      }
    },
  },
  plugins: [],
}

