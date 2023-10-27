/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: ["class", ".dark-mode"],
  theme: {
    screens: {
      xxs: "375px",
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "evening-sea": {
          50: "#ebfef7",
          100: "#cefdea",
          200: "#a1f9da",
          300: "#64f1c7",
          400: "#27e0af",
          500: "#02c79a",
          600: "#00a27e",
          700: "#008268",
          800: "#006653",
          900: "#004f42",
          950: "#003029",
          bg: "#00362C",
          "bg-2": "#082A20",
        },
        'mulberry': {
          '50': '#fcf3f9',
          '100': '#f9eaf5',
          '200': '#f5d5eb',
          '300': '#efb2da',
          '400': '#e482c0',
          '500': '#d75da7',
          '600': '#c43e89',
          '700': '#b43076',
          '800': '#8c285b',
          '900': '#75264f',
          '950': '#47102c',
        },

        'lunar': {
          '50': '#f3f6fb',
          '100': '#e5eaf4',
          '200': '#d1dbec',
          '300': '#b1c3df',
          '400': '#8ba3cf',
          '500': '#6f88c2',
          '600': '#5c70b4',
          '700': '#5160a4',
          '800': '#434c80',
          '900': '#3c456c',
          '950': '#282c43',
        },



      },
    },
  },
  plugins: [],
};
