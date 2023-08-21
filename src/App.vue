<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheLayout from '@/layouts/TheLayout.vue'
import { useBaseStore } from '@/stores/base'
import { onMounted } from 'vue'
import { watch } from 'vue'

const baseStore = useBaseStore()

onMounted(() => {
  baseStore.getBaseData()
})
watch(baseStore.base, (n, o) => {
  console.log(n, o)
})
</script>

<template>
  <TheLayout>
    <RouterView />
  </TheLayout>
</template>

<style scoped></style>
