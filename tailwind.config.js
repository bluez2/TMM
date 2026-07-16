/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        parchment: '#F6EFE0',
        parchmentDeep: '#EDE2CC',
        ink: '#2A2118',
        forest: '#1E4635',
        forestDeep: '#12291F',
        gold: '#C99A2E',
        goldSoft: '#E0B94D',
        wine: '#7A2331',
        clay: '#A85C32',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Work Sans"', 'sans-serif'],
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 1px 1px, rgba(42,33,24,0.06) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
}
