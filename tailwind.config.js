/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0faf0',
          100: '#ddf4dd',
          200: '#bae8ba',
          300: '#86d486',
          400: '#4db84d',
          500: '#2d9b2d',
          600: '#1e7e1e',
          700: '#196519',
          800: '#174f17',
          900: '#143f14',
          950: '#0a240a',
        },
        gold: {
          300: '#fcd96a',
          400: '#f9c932',
          500: '#e6b800',
          600: '#c49b00',
        },
        cream: '#fdfaf4',
        parchment: '#f5efe2',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'scale-in': 'scaleIn 0.4s ease forwards',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0,0,0,0.07)',
        'card-hover': '0 12px 48px rgba(0,0,0,0.13)',
        'gold': '0 4px 20px rgba(230,184,0,0.25)',
      }
    },
  },
  plugins: [],
}
