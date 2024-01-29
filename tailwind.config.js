/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './src/App.js'
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        rubik: ['Rubik Doodle Shadow', 'system-ui']
      },
      width: {
        '128': '32rem',
        '144': '36rem',
      },
      height: {
        '128': '32rem',
        '144': '36rem',
      }
    },
  },
  plugins: [],
}

