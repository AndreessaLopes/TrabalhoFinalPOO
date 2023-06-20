import axios from 'axios';
import notify from '~/plugins/notify'

export default defineNuxtPlugin(nuxtApp => {

  let api = axios.create({
    baseURL: useRuntimeConfig().apiBase,
    timeout: 60000,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    withCredentials: true,
  });

  api.interceptors.request.use(async (config) => {
    let token = localStorage.getItem('token')
  
    // Configure Headers
    config.headers =  {
      Authorization: `Bearer ${token}`
    };
  
    return config
  })

  api.interceptors.response.use(response => {
    let route = response.config.url
    notify.sendSuccess(response.data.messages, route)
    return response
  }, error => {
    notify.sendError(error.response.data.messages)
    return Promise.reject(error.response)
  })
  
  return {
    provide: {
      api: api,
    },
  };
});