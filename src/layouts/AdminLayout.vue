<template>
  <v-app id="inspire" theme="dark">
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item
          prepend-avatar="https://lunatalk.co.kr/_next/image?url=http%3A%2F%2Fadmin.lunatalk.co.kr%2Fstatic%2Fmedia%2Flogo.e0e49014f4ed6f070031.jpg&w=640&q=75"
          title="Lunatalk"
          subtitle="관리자"
        >
          <template v-slot:append>
            <v-btn size="small" variant="text" icon="mdi-menu-down"></v-btn>
          </template>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <nav v-for="(menu, i) in list" :key="i">
        <menu-item :sub-title="menu.title" :menu-list="menu.list"></menu-item>
      </nav>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer" color="#fff"></v-app-bar-nav-icon>

      <v-app-bar-title>{{ name }}</v-app-bar-title>
    </v-app-bar>

    <v-main class="h-100">
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
const route = useRoute()
const name = route.name || ''

console.log(route.name)

const drawer = ref(true)

const list = {
  dashboard: {
    title: '대시보드',
    list: [{ title: '대시보드', icon: 'mdi-view-dashboard', isActive: name === 'dashboard' }]
  },
  products: {
    title: '상품관리',
    list: [
      { title: '카테고리', icon: 'mdi-file-outline' },
      { title: '배지', icon: 'mdi-file-outline' },
      { title: '상품', icon: 'mdi-file-outline' },
      { title: '리뷰', icon: 'mdi-file-outline' }
    ]
  },
  users: {
    title: '유저관리',
    list: [{ title: '회원', icon: '' }]
  },
  orders: {
    title: '주문관리',
    list: [{ title: '주문목록' }]
  },
  pages: {
    title: '페이지관리',
    list: [{ title: '메인 슬라이드' }]
  },
  sites: {
    title: '사이트관리',
    list: [{ title: '사이트 공지사항' }, { title: '서비스 공지사항' }]
  }
}
</script>
