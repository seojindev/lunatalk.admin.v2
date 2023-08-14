import { defineStore } from 'pinia'
import { reactive } from 'vue'

import { useRouter } from 'vue-router'
import axios from 'axios'

export const useUserStore = defineStore(
  'user',
  () => {
    const user = reactive({ isLogin: false, accessToken: '', refreshToken: '' })
    const router = useRouter()

    async function login(id: string, password: string) {
      try {
        const response = await axios.post(
          'https://service.lunatalk.co.kr/api/admin-front/v1/auth/login',
          { login_id: id, login_password: password },
          {
            headers: {
              'Request-Client-Type': '0100040'
            }
          }
        )
        if (response.status === 200) {
          user.isLogin = true
          user.accessToken = response.data.result.access_token
          user.refreshToken = response.data.result.refresh_token

          router.push('/dashboard')
        }
      } catch (e) {
        console.log(e)
      }
    }

    function logout() {
      user.isLogin = false
      user.accessToken = ''
      user.refreshToken = ''
      router.push('/')
    }
    return { user, login, logout }
  },
  { persist: true }
)
