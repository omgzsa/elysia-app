/* eslint-env node */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: [],
      display: [],
    },
    extend: {
      colors: {
        primary: {},
        secondary: {},
        accent: {},
      },
    },
  },
  plugins: [],
};
