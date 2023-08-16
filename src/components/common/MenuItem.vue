<template>
  <v-list density="compact" nav>
    <v-list-subheader>{{ props['subTitle'] }}</v-list-subheader>
    <v-list-item
      v-for="(item, i) in props['menuList']"
      :key="i"
      :value="item"
      :title="item.title"
      :active="item.isActive"
    ></v-list-item>
  </v-list>
</template>

<script lang="ts" setup>
interface Props {
  subTitle: string
  menuList: { title: string; icon?: string; isActive?: boolean }[]
}

const props = defineProps<Props>()
</script>
