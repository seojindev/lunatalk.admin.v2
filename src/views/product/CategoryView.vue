<template>
  <div v-if="!list.length">loading</div>
  <v-layout class="w-100 pa-2 d-flex flex-column py-10" v-else>
    <div class="mb-5 d-flex justify-end" style="gap: 10px">
      <v-btn color="#5865f2" @click="onAddHandler" variant="tonal">추가</v-btn>
    </div>
    <v-divider></v-divider>
    <v-table class="w-100 pa-3">
      <thead>
        <th>고유 번호</th>
        <th>카테고리 명</th>
        <th>상품 갯수</th>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.uuid">
          <td class="text-center">{{ item.uuid }}</td>
          <td class="text-center">{{ item.name }}</td>
          <td class="text-center">{{ item.products_count }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-layout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getCategoryList } from '../../utils/api/product'
import { useRouter } from 'vue-router'

const router = useRouter()
interface CategoryList {
  id: number
  uuid: string
  name: string
  products_count: number
}

const list = ref<CategoryList[]>([])
const deleteModal = ref(false)

const onAddHandler = () => {
  router.push('/product/category/create')
}

const close = () => {
  deleteModal.value = false
}

const open = () => {
  console.log(1)
  deleteModal.value = true
}

const getList = async () => {
  const response = await getCategoryList()
  if (response.status === 200) {
    list.value = response.data.result
  }
}

onMounted(() => {
  getList()
})
</script>
