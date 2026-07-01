/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        leaf: {
          50: '#f2f8f4',
          100: '#e1efe6',
          200: '#c5dfcd',
          300: '#9bc8a9',
          400: '#6ca87e',
          500: '#4eba6f', // Active emerald
          600: '#388e51',
          700: '#2b7040',
          800: '#1e3f27', // Dark leaf
          900: '#0c1a10', // Deep forest black
          950: '#060d08',
        },
        mint: {
          300: '#a3f5b8', // Neon mint
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['Syne', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
