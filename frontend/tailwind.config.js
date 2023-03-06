/* eslint-env node */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      base: ["Ubuntu", "sans"],
    },
    extend: {
      colors: {
        primary: {
          100: "#D0CFBB",
          200: "#D0CFBB20",
        },
        secondary: {
          100: "#E7C899",
        },
        accent: {
          100: "#586C63",
        },
      },
    },
  },
  plugins: [],
};
