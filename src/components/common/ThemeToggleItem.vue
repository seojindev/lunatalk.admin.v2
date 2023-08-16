<template>
  <v-btn width="50" @click="toggleTheme" :icon="icon" variant="text"></v-btn>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify'
const theme = useTheme()
const icon = computed(() =>
  theme.global.current.value.dark ? 'mdi-moon-waning-crescent' : 'mdi-white-balance-sunny'
)

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<style scoped></style>
