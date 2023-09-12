/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'styled': ['sofia', 'sans-serif'],
        'header': ['serif', 'sans-serif'],
        'poppins':['poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}

