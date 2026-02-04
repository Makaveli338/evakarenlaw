/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        cream: {
          DEFAULT: '#fdfbf7',
          dark: '#f7f3ed',
        },
        navy: {
          DEFAULT: '#1e293b',
          dark: '#0f172a',
        },
        'rose-gold': {
          DEFAULT: '#c9a87c',
          light: '#e8dcc8',
          dark: '#a68a5b',
        },
        champagne: {
          DEFAULT: '#d4c4a8',
          light: '#efe9dd',
        },
      }
    }
  },
  plugins: [],
}