<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item
          prepend-avatar="https://lunatalk.co.kr/_next/image?url=http%3A%2F%2Fadmin.lunatalk.co.kr%2Fstatic%2Fmedia%2Flogo.e0e49014f4ed6f070031.jpg&w=640&q=75"
          title="Lunatalk"
          subtitle="관리자"
        >
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <nav v-for="(menu, i) in list" :key="i">
        <menu-item :sub-title="menu.title" :menu-list="menu.list"></menu-item>
      </nav>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn
            block
            prepend-icon="mdi-logout"
            variant="tonal"
            class="text-none"
            @click="userStore.logout"
          >
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title class="appBarTitle text-body-1">{{ name }}</v-app-bar-title>
      <ThemeToggleItem />
    </v-app-bar>

    <v-main class="d-flex h-100">
      <slot />
    </v-main>
    <v-footer>©{{ new Date().getFullYear() }} - Created by Theo</v-footer>
  </v-app>
</template>

<style scoped>
footer {
  letter-spacing: -0.5px;
}
</style>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import MenuItem from '@/components/common/MenuItem.vue'
import ThemeToggleItem from '@/components/common/ThemeToggleItem.vue'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
const route = useRoute()
const name = route.name || ''

const drawer = ref(true)

const list = {
  dashboard: {
    title: '대시보드',
    list: [
      {
        title: '대시보드',
        icon: 'mdi-view-dashboard',
        link: '/dashboard',
        isActive: route.path === '/dashboard'
      }
    ]
  },
  products: {
    title: '상품관리',
    list: [
      {
        title: '카테고리',
        icon: 'mdi-file-outline',
        link: '/product/category',
        isActive: route.path === '/product/category'
      },
      {
        title: '배지',
        icon: 'mdi-file-outline',
        link: '/product/badge',
        isActive: route.path === '/product/badge'
      },
      {
        title: '상품',
        icon: 'mdi-file-outline',
        link: '/product/product',
        isActive: route.path === '/product/product'
      },
      {
        title: '리뷰',
        icon: 'mdi-file-outline',
        link: '/product/review',
        isActive: route.path === '/product/review'
      }
    ]
  },
  users: {
    title: '유저관리',
    list: [{ title: '회원', icon: '', link: '/user/list', isActive: route.path === '/user/list' }]
  },
  orders: {
    title: '주문관리',
    list: [{ title: '주문목록', link: '/order/list', isActive: route.path === '/order/list' }]
  },
  pages: {
    title: '페이지관리',
    list: [
      {
        title: '메인 슬라이드',
        link: '/page/main-slide',
        isActive: route.path === '/page/main-slide'
      }
    ]
  },
  sites: {
    title: '사이트관리',
    list: [
      {
        title: '사이트 공지사항',
        link: '/site/site-notice',
        isActive: route.path === '/site/site-notice'
      },
      {
        title: '서비스 공지사항',
        link: '/site/service-notice',
        isActive: route.path === '/site/service-notice'
      }
    ]
  }
}
</script>

<style scoped>
main {
  height: inherit;
}
</style>
