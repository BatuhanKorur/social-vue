/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector'],
  content: [],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontSize: {
        sm: '0.875rem',
        base: '0.94rem',
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
          DEFAULT: 'hs(var(--muted))',
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

