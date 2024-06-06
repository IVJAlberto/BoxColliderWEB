/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js,jsx}",
            './app/**/*.{js,ts,jsx,tsx}',
           ],
  theme: {
    extend: {
      screens: {
        'ss': '375px',
        'xs': '475px',
        ...defaultTheme.screens,
      }
    },
  },
  plugins: [],
}
