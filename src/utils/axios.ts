import axios from 'axios'
import { useUserStore } from '@/stores/user'

console.log(import.meta.env)

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Request-Client-Type': '0100040'
  }
})

instance.interceptors.request.use((config) => {
  const userStore = useUserStore()
  const accessToken = userStore.user.accessToken

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})

export default instance
