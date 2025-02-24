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
        'glacial': ['Glacial Indifference', 'sans-serif'],
        'glacial-bold': ['Glacial Indifference Bold', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}