import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: '',
    }
  },

  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
        vuetify()
      ))
    },
  ],

  css: [
    'vuetify/lib/styles/main.sass',
    '@/assets/global.scss',
    '@mdi/font/css/materialdesignicons.min.css'
  ],

  build: {
      transpile: ['vuetify'],
  },

  vite: {
      define: {
          'process.env.DEBUG': false,
      },
  },

  devtools: {
    enabled: true,
  },
})
