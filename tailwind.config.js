/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          first: '#A7C4AC',
          second: '#f5cac2',
          green: '#A7C0AD',
        },
        dark: {
          first: '#55775C',
          second: '#F3C33F',
          third: '#153536',
        },
      },
      fontFamily: {
        opensans: ["'Open Sans'", "sans-serif"],
        lora: ["'Lora'", "serif"],
      }
    },
  },
  plugins: [],
}

