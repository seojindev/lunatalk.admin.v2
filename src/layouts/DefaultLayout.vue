<template>
  <v-app theme="dark" class="wrap">
    <slot />
    <v-footer class="pa-4">©{{ new Date().getFullYear() }} - Created by Theo</v-footer>
  </v-app>
</template>

<style scoped>
.wrap {
  height: inherit;
}
</style>
