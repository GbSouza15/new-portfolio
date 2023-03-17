/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'roboto': 'Roboto Condensed'
    },
    colors: {
      'primaryColor': '#111424',
      'secondColor': '#236688',
      'terciaryColor': '#C499BA',

      'textColorPrimary': '#C4C4C4',
      'textColorSecondary': '#c981b6'
    },
  },

  plugins: [],
}
