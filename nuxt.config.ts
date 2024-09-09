// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  imports: {
    dirs: ['stores']
  },
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/nuxt3-page/' : '/',
    buildAssetsDir: '/static/'
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
});
