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
          '50': '#faf5f9',
          '100': '#f7ecf3',
          '200': '#f1d9ea',
          '300': '#e7bad7',
          '400': '#d690bd',
          '500': '#c15f9b',
          '600': '#b25088',
          '700': '#983e6e',
          '800': '#7e365c',
          '900': '#6b304f',
          '950': '#3f182c',
        },

        'spindle': {
          '50': '#f1f7fd',
          '100': '#dfedfa',
          '200': '#c6e0f7',
          '300': '#a3cef1',
          '400': '#72b0e8',
          '500': '#5192e0',
          '600': '#3c78d4',
          '700': '#3364c2',
          '800': '#2f529e',
          '900': '#2b477d',
          '950': '#1e2d4d',
        },


      },
    },
  },
  plugins: [],
};
