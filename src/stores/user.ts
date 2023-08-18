import { defineStore } from 'pinia'
import { reactive } from 'vue'

import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'
import { setlogin } from '@/utils/api/login'

export const useUserStore = defineStore(
  'user',
  () => {
    const user = reactive({ isLogin: false, accessToken: '', refreshToken: '' })
    const router = useRouter()

    async function login(id: string, password: string) {
      try {
        const response = await setlogin({ login_id: id, login_password: password })
        if (response.status === 200) {
          user.isLogin = true
          user.accessToken = response.data.result.access_token
          user.refreshToken = response.data.result.refresh_token

          router.push('/dashboard')
        }
      } catch (e: any) {
        console.log(e)
        if (e.response.status >= 400 && e.response.status < 500) {
          toast.warning('아이디와 비밀번호를 확인해주세요.', {
            position: toast.POSITION.BOTTOM_CENTER
          })
        } else {
          toast.error('서버 장애가 발생하였습니다.')
        }
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
