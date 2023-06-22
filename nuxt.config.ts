export default defineNuxtConfig({
    runtimeConfig: {
      public: {
        apiBase: '',
      }
    },
    css: [
      'vuetify/lib/styles/main.sass',
      '@/assets/main.css',
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
})
