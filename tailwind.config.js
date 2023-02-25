/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        accent: '#8BC34A',
        'dark-gray': '#333333',
        'light-gray': '#F5F5F5',
        white: '#FFFFFF',
        black: '#222222'
      },
      fontFamily: {
        'Libre-Franklin': ['Libre Franklin', 'sans-serif'],
        'Signika-Negative': ['Signika Negative', 'sans-serif']
      }
    }
  },
  plugins: []
}
