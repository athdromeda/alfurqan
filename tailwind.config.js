/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js, jsx, ts, tsx}',
    './components/**/*.{js, jsx, ts, tsx}',
],
  theme: {
    extend: {
      fontFamily: {
        'arabic': ['Amiri', 'serif'],
        'playfair' : ['Playfair Display', 'serif'],
        'nunito' : ['Nunito Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
