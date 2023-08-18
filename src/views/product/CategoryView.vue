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
        <th>액션</th>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.uuid">
          <td class="text-center">{{ item.uuid }}</td>
          <td class="text-center">{{ item.name }}</td>
          <td class="text-center">{{ item.products_count }}</td>
          <td class="d-flex justify-center align-center">
            <ModalItem
              btn-name="삭제"
              :is-open="deleteModal"
              :content="`${item.name} 을 삭제하시겠습니까?`"
              @action="deleteCategoryHandler(item.uuid)"
            ></ModalItem>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-layout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getCategoryList, deleteCategory } from '../../utils/api/product'
import { useRouter } from 'vue-router'
import ModalItem from '@/components/common/ModalItem.vue'
import { toast } from 'vue3-toastify'

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

const getList = async () => {
  const response = await getCategoryList()
  if (response.status === 200) {
    list.value = response.data.result
  }
}

const deleteCategoryHandler = async (uuid: string) => {
  const response = await deleteCategory(uuid)
  console.log(1, response)
  if (response.status === 200) {
    toast.success(response.data.message, { position: toast.POSITION.BOTTOM_CENTER })
    getList()
  } else {
    toast.error('서버 장애가 발생하였습니다.')
  }
}

onMounted(() => {
  getList()
})
</script>
