/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#fce1e0',
        'secondary': '#444444',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'glacial': ['GlacialIndifferenceRegular', 'sans-serif'],
        'glacial-bold': ['GlacialIndifferenceBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}