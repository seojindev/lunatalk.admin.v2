import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import Dashboard from '@/views/DashboardView.vue'
import NotFound from '@/views/NotFound.vue'
import { useUserStore } from '@/stores/user'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
      meta: { layout: DefaultLayout }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Dashboard,
      meta: { layout: AdminLayout }
    },
    {
      path: '/404',
      name: 'notFound',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: NotFound,
      meta: { layout: DefaultLayout }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404'
    }
  ]
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()

  // console.log(to, userStore.user)
  console.log(to, from)

  if (to.name === 'notFound') {
    return next()
  }
  if (to.name === 'login' && !userStore.user.isLogin) {
    return next()
  }

  if (to.name === 'login' && userStore.user.isLogin) {
    return next({ name: 'dashboard' })
  }

  if (to.name !== 'login' && !userStore.user.isLogin) {
    return next({ name: 'login' })
  }

  return next()
})
export default router
