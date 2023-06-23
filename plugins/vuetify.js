
import '@/assets/settings.scss'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'


export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      defaultTheme: 'dessaLight',
      themes: {
        dessaLight: {
          dark: false,
          colors: {
            background: '#F5F5F5',
            surface: '#FFFFFF',
            primary: '#ADD7F6',
            'primary-darken-1': '#5991B0',
            secondary: '#FFF17F',
            'secondary-darken-1': '#E3D71E',
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