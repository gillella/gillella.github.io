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
        midnight: '#2b1b1f',
        iris: '#431e9a',
        magenta: '#cf3cff',
        cyan: '#4fd8ff',
        gold: '#ffb347',
        slate: '#cfd3dd',
        surface: '#331f25',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #f0b8c6, #d18ca6, #a86c8b)',
        'grid-surface': 'radial-gradient(circle at center, rgba(231,174,189,0.14) 0, rgba(43,27,31,0) 70%)',
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
