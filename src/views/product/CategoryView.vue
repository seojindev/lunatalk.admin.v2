<template>
  <div v-if="!list.length">loading</div>
  <div class="w-100 pa-2 d-flex flex-column py-10" v-else>
    <div class="mb-5 d-flex justify-end" style="gap: 10px">
      <v-btn color="#5865f2" @click="onAddHandler">추가</v-btn>
    </div>
    <v-divider></v-divider>
    <v-table class="w-100 pa-3">
      <thead>
        <th>고유 번호</th>
        <th>카테고리 명</th>
        <th>상품 갯수</th>
        <th>액션</th>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.uuid" class="">
          <td class="text-center">{{ item.uuid }}</td>
          <td class="text-center">{{ item.name }}</td>
          <td class="text-center">{{ item.products_count }}</td>
          <td class="d-flex justify-center align-center">
            <v-btn color="#5865f2" variant="tonal">삭제</v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
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

const onAddHandler = () => {
  router.push('/product/category/create')
}

const getList = async () => {
  const response = await getCategoryList()
  console.log(response)
  if (response.status === 200) {
    list.value = response.data.result
  }
}

onMounted(() => {
  getList()
})
</script>
