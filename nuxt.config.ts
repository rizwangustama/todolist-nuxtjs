// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  plugins: [
      '@/plugins/pinia'
  ],

  css: [
    '@/assets/style/global.scss'  // Path to your global SCSS file
  ],

  modules: ['@ant-design-vue/nuxt']
})
