/* eslint-env node */

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      // custom: "86em",
    },
    extend: {
      fontFamily: {
        base: ["Ubuntu", "sans"],
      },
      colors: {
        primary: {
          100: "#D0CFBB",
          200: "#D0CFBB30",
          300: "#F0DEC2",
          400: "#deded0",
        },
        secondary: {
          100: "#E7C899",
          200: "#FDFBEE",
        },
        accent: {
          100: "#586C63",
        },
      },
    },
  },
  plugins: [],
};
