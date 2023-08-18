import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import Dashboard from '@/views/DashboardView.vue'
import NotFound from '@/views/NotFound.vue'
import { useUserStore } from '@/stores/user'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import BadgeView from '@/views/product/BadgeView.vue'
import CategoryView from '@/views/product/category/IndexView.vue'
import ProductView from '@/views/product/ProductView.vue'
import ReviewView from '@/views/product/ReviewView.vue'
import OrderView from '@/views/order/OrderView.vue'
import UserView from '@/views/user/UserView.vue'
import MainSlideView from '@/views/page/MainSlideView.vue'
import NoticeView from '@/views/site/NoticeView.vue'
import ServiceNoticeView from '@/views/site/ServiceNoticeView.vue'
import CategoryAddView from '@/views/product/category/AddView.vue'

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
      name: '대시보드',
      component: Dashboard,
      meta: { layout: AdminLayout }
    },
    {
      path: '/product/badge',
      name: '배지 관리',
      component: BadgeView,
      meta: { layout: AdminLayout }
    },
    {
      path: '/product/category',
      name: '카테고리 관리',
      component: CategoryView,
      meta: { layout: AdminLayout }
    },
    {
      path: '/product/category/create',
      name: '카테고리 생성',
      component: CategoryAddView,
      meta: { layout: AdminLayout }
    },
    {
      path: '/product/product',
      name: '상품 관리',
      component: ProductView,
      meta: { layout: AdminLayout }
    },
    {
      path: '/product/review',
      name: '리뷰 관리',
      component: ReviewView,
      meta: { layout: AdminLayout }
    },
    {
      path: '/order/list',
      name: '주문 목록',
      component: OrderView,
      meta: { layout: AdminLayout }
    },
    {
      path: '/user/list',
      name: '유저 목록',
      component: UserView,
      meta: { layout: AdminLayout }
    },
    {
      path: '/page/main-slide',
      name: '메인 슬라이드 목록',
      component: MainSlideView,
      meta: { layout: AdminLayout }
    },
    {
      path: '/site/site-notice',
      name: '사이트 공지사항 목록',
      component: NoticeView,
      meta: { layout: AdminLayout }
    },
    {
      path: '/site/service-notice',
      name: '서비스 공지사항 목록',
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
    return next('/dashboard')
  }

  if (to.name !== 'login' && !userStore.user.isLogin) {
    return next('/')
  }

  return next()
})
export default router
