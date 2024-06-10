/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
const defaultTheme = require('tailwindcss/defaultTheme')
// eslint-disable-next-line no-undef
const {colors: defaultColors } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js,jsx}",
            './app/**/*.{js,ts,jsx,tsx}',
           ],
  theme: {
    extend: {
      colors: {
        ...defaultColors,
        ...{
          primary: "#4E9BF8",
          secondary: "#f05b72",
          "text-base": "white",
          "azul-0m": "#2c3c44",
        }
      },
      keyframes: {
       
      },
      animation: {
        
      },
      fontFamily: {
        thefontbold: ["TheFontBold", "serif"],
        montserratregular: ["MontserratRegular", "serif"],
      },
      screens: {
        'ss': '375px',
        'xs': '475px',
        ...defaultTheme.screens,
      }
    },
  },
  plugins: [],
}
