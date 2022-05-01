const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.js',
    './lib/**/*.js'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        gray: colors.neutral
      }
    }
  },
  plugins: []
}
