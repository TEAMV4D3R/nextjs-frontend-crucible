/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'color-main': 'rgb(248,250,252)', //light slate
        'color-main-dark': '#1A0315', //Dark Plum
        'color-highlight': '#BB3365', //Pink Highlight
        'color-highlight-dark': '#75A52D', //Electric Lime Highlight
        'color-bright': '#67AECA', //Bright Blue
        'color-bright-dark': '#CFCFCF', //Light Grey
        'color-shadow': '#675682', //header/footer Dull Purple Amethyst
        'color-shadow-dark': '#6E3667', //header/footer "Bright" Violet
        'color-contrast': '#5F0F4E', //Deep Purple
        'color-contrast-dark': '#535353', //Deep Grey
        'color-darkgrey': 'rgb(64,64,64)'

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};