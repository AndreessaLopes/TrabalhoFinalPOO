
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'


export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    ssr: true,
    theme: {
      defaultTheme: 'lightUfa',
      themes: {
        lightUfa: {
          dark: false,
          colors: {
            background: '#F5F5F5',
            surface: '#FFFFFF',
            primary: '#A06AFF',
            'primary-darken-1': '#6432C9',
            secondary: '#F7C892',
            'secondary-darken-1': '#FF6434',
            error: '#B00020',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FB8C00',
          }
        }
      }
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})