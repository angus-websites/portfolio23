/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: ['class', '.dark-mode'],
  theme: {
    screens: {
      'xxs': '375px',
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      colors:{
        'evening-sea': {
          '50': '#ebfef7',
          '100': '#cefdea',
          '200': '#a1f9da',
          '300': '#64f1c7',
          '400': '#27e0af',
          '500': '#02c79a',
          '600': '#00a27e',
          '700': '#008268',
          '800': '#006653',
          '900': '#004f42',
          '950': '#003029',
          'bg': '#00362C',
          'bg-2': '#082A20',
        },

      }
    },
  },
  plugins: [],
}

