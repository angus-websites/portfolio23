// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/color-mode', '@nuxtjs/strapi'],
  css: ['~/assets/css/main.css'],
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
