// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/color-mode", "nuxt-simple-sitemap", 'nuxt-simple-robots'],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      // To override, set the environment variable NUXT_PUBLIC_API_BASE_URL
      apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:1337/api',
      hostUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    }
  },
  sitemap: {
    sources: [
      '/api/__sitemap__/project-urls',
    ]
  }
});
