/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'inherit': ['inherit'],
    },
    extend: {
      colors: {
        'SC_background': '#beccfb',
        'SC_background2': '#f1f1f1',
        'SC_input' : '#dbdbdb',
        'SC_button' : '#5c6bb8',
        'SC_button_hover' : '#4d5899',
      }
    },
  },
  plugins: [],
}
