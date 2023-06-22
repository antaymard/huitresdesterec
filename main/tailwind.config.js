/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontSize: {
        base: '18px'
      },
      fontFamily: {
        round: ['BioRhyme', "serif"],
        brand: ['Lobster', "cursive"],
        cursive: ['Combo', "cursive"],
      },
      borderRadius: {
        DEFAULT: "15px"
      },
      colors: {
        main: "#0d5eba",
        darkMain: "#093f7c",
      },

    },
  },
  plugins: [],
}
