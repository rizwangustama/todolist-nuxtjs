// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: process.env.NUXT_PORT ? parseInt(process.env.NUXT_PORT) : 3001,
    host: process.env.NUXT_HOST || 'localhost'
  },

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  plugins: [
      '@/plugins/pinia',
  ],

  css: [
    '@/assets/style/global.scss'  // Path to your global SCSS file
  ],

  runtimeConfig: {
    public: {
      axiosBaseUrl: process.env.AXIOS_BASE_URL
    }
  },

  modules: [
    '@ant-design-vue/nuxt'
  ],
})
