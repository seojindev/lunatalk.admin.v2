<script setup lang="ts">
import { useUserStore } from '../stores/user'
const userStore = useUserStore()
</script>

<template>
  <div class="d-flex justify-center align-center w-100">
    <h1 class="">dashboard</h1>
    <v-btn @click="userStore.logout">로그아웃</v-btn>
  </div>
</template>

<style></style>
