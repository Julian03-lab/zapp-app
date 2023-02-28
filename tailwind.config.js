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
        LibreFranklinRegular: 'LibreFranklin_400Regular',
        LibreFranklinMedium: 'LibreFranklin_500Medium',
        LibreFranklinSemiBold: 'LibreFranklin_600SemiBold',
        LibreFranklinBold: 'LibreFranklin_700Bold',
        LibreFranklinExtraBold: 'LibreFranklin_800ExtraBold',
        SignikaNegativeRegular: 'SignikaNegative_400Regular',
        SignikaNegativeMedium: 'SignikaNegative_500Medium',
        SignikaNegativeSemiBold: 'SignikaNegative_600SemiBold',
        SignikaNegativeBold: 'SignikaNegative_700Bold'
      }
    }
  },
  plugins: []
}
