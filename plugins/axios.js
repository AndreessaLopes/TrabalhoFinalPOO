import axios from 'axios';

export default defineNuxtPlugin(nuxtApp => {

  let api = axios.create({
    baseURL: useRuntimeConfig().public.apiBase,
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
    return response
  }, error => {
    return Promise.reject(error.response)
  })
  
  return {
    provide: {
      api: api,
    },
  };
});