/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#F8F5EF',
          200: '#EFE8DD',
          300: '#E2D8C7',
          400: '#D1C2AB',
        },
        terracotta: {
          50: '#FDF4EC',
          100: '#FCE7D6',
          400: '#EA7A38',
          500: '#D85A16', // Burnt orange primary
          600: '#C84A0A', // Deep orange
          700: '#A93B07',
          800: '#842F09',
          900: '#521D05',
        },
        luxury: {
          black: '#111111',
          charcoal: '#1A1A1A',
          dark: '#101010',
          muted: '#6B655E',
          subtle: '#9A9289',
          border: '#E5DED3',
          card: '#F5EFE6',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(17, 17, 17, 0.07)',
        'luxury-hover': '0 25px 50px -12px rgba(17, 17, 17, 0.12)',
        'soft-glow': '0 10px 30px -5px rgba(216, 90, 22, 0.25)',
      }
    },
  },
  plugins: [],
}
