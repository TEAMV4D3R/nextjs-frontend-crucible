/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'color-main':'#EFDCCE', //Creme
        'color-main-dark':'#1A0315', //Dark Plum
        'color-highlight':'#E52A6F', //Pink Highlight
        'color-highlight-dark':'#88D317', //Electric Lime Highlight
        'color-bright':'#67AECA', //Bright Blue
        'color-bright-dark':'#F5F5F5', //Light Grey
        'color-shadow':'#675682', //Dull Purple Amethyst
        'color-shadow-dark':'#6E3667', //"Bright" Violet
        'color-contrast':'#5F0F4E', //Deep Purple
        'color-contrast-dark':'#535353', //Deep Grey
        
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};