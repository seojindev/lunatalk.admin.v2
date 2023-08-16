import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import Dashboard from '@/views/DashboardView.vue'
import NotFound from '@/views/NotFound.vue'
import { useUserStore } from '@/stores/user'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import BadgeView from '@/views/product/BadgeView.vue'
import CategoryView from '@/views/product/CategoryView.vue'
import ProductView from '@/views/product/ProductView.vue'
import ReviewView from '@/views/product/ReviewView.vue'
import OrderView from '@/views/order/OrderView.vue'
import UserView from '@/views/user/UserView.vue'
import MainSlideView from '@/views/page/MainSlideView.vue'
import NoticeView from '@/views/site/NoticeView.vue'
import ServiceNoticeView from '@/views/site/ServiceNoticeView.vue'

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
      component: Dashboard,
      meta: { layout: AdminLayout }
    },
    {
      path: '/product/badge',
      name: 'product/badge',
      component: BadgeView,
      meta: { layout: AdminLayout }
    },
    {
      path: '/product/category',
      name: 'product/category',
      component: CategoryView,
      meta: { layout: AdminLayout }
    },
    {
      path: '/product/product',
      name: 'product/product',
      component: ProductView,
      meta: { layout: AdminLayout }
    },
    {
      path: '/product/review',
      name: 'product/review',
      component: ReviewView,
      meta: { layout: AdminLayout }
    },
    {
      path: '/order/list',
      name: 'order/list',
      component: OrderView,
      meta: { layout: AdminLayout }
    },
    {
      path: '/user/list',
      name: 'user/list',
      component: UserView,
      meta: { layout: AdminLayout }
    },
    {
      path: '/page/main-slide',
      name: 'page/main-slide',
      component: MainSlideView,
      meta: { layout: AdminLayout }
    },
    {
      path: '/site/site-notice',
      name: 'page/site-notice',
      component: NoticeView,
      meta: { layout: AdminLayout }
    },
    {
      path: '/site/service-notice',
      name: 'site/service-notice',
      component: ServiceNoticeView,
      meta: { layout: AdminLayout }
    },
    {
      path: '/404',
      name: 'notFound',
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
