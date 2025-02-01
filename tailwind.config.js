const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: "class", // or 'media' for system-based dark mode
  theme: {
    extend: {
      fontFamily: {
        display: ['Roboto', 'Open Sans', 'sans-serif'],
      },
      colors: {
        "primary-light": "#F7F8FC",
        "secondary-light": "#FFFFFF",
        "ternary-light": "#f6f7f8",
        "primary-dark": "#0D2438",
        "secondary-dark": "#102D44",
        "ternary-dark": "#1E3851",
        "card-dark": "#32667B",
        "ash-blue": "#1E1E1E",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "8rem",
        },
      },
      fontSize: {
        xxs: ".75rem",
        xxxs: ".65rem",
        xxxxs: ".55rem",
        xxxxxs: ".35rem",
      },
      maxWidth: {
        '1/4': '14rem',
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};