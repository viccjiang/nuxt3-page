// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/nuxt3-page/' : '/',
    buildAssetsDir: '/static/'
  }
});
