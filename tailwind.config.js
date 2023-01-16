/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    backgroundPosition: {
      left : 'left',
      'left-mid': 'left 50%',
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
}