/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#08051a',
        iris: '#431e9a',
        magenta: '#cf3cff',
        cyan: '#4fd8ff',
        gold: '#ffb347',
        slate: '#cfd3dd',
        surface: '#0d0a24',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #cf3cff, #7a4bff, #4fd8ff)',
        'grid-surface': 'radial-gradient(circle at center, rgba(79,216,255,0.12) 0, rgba(8,5,26,0) 70%)',
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out forwards',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

