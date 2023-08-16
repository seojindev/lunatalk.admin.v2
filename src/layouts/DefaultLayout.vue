<template>
  <v-app class="wrap">
    <div class="d-flex justify-space-between pa-4">
      <RouterLink to="/" class="brand-logo">
        <v-img
          :width="100"
          aspect-ratio="16/9"
          cover
          src="https://lunatalk.co.kr/_next/image?url=http%3A%2F%2Fadmin.lunatalk.co.kr%2Fstatic%2Fmedia%2Flogo.e0e49014f4ed6f070031.jpg&w=640&q=75"
        />
      </RouterLink>
      <ThemeToggleItem />
    </div>
    <slot />
    <v-footer class="pa-4">©{{ new Date().getFullYear() }} - Created by Theo</v-footer>
  </v-app>
</template>

<style scoped>
.wrap {
  height: inherit;
}
footer {
  letter-spacing: -0.5px;
}

.brand-logo {
  border-radius: 10%;
  overflow: hidden;
}
</style>
<script lang="ts" setup>
import ThemeToggleItem from '@/components/common/ThemeToggleItem.vue'
</script>
