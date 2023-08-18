<template>
  <v-container>
    <v-card>
      <v-card-title>카테고리 생성</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="onSubmit">
          <v-text-field
            v-model="name"
            :rules="rules"
            class="mb-4"
            label="카테고리 명"
          ></v-text-field>
          <v-btn type="submit" color="primary" block>저장</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { createCategory } from '@/utils/api/product'
import { ref } from 'vue'
import { toast } from 'vue3-toastify'
import { useRouter } from 'vue-router'
const router = useRouter()

const name = ref('')

const rules = [(value: string) => !!value || '카테고리명을 입력해주세요.']

const onSubmit = async () => {
  try {
    if (!name.value) return
    const response = await createCategory(name.value)

    if (response.status === 201) {
      router.push('/product/category')
      toast.success(response.data.message)
    } else {
      toast.warn(response.data.message || '중복 카테고리 명 이거나 에러가 발생하였습니다.')
    }
  } catch (e: any) {
    console.error(e.response.data)
    toast.error('에러가 발생하였습니다.')
  }
}
</script>
