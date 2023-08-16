<script lang="ts" setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/user'
import LoadingItem from '../components/common/LoadingItem.vue'
const userStore = useUserStore()

const id = ref('')
const password = ref('')
const loading = ref(false)

const idRules = [(value: string) => !!value || '아이디를 입력해주세요.']

const passwordRules = [(value: string) => !!value || '비밀번호를 입력해주세요.']

const onSubmit = async () => {
  if (!id.value || !password.value) {
    return
  }
  loading.value = true
  await userStore.login(id.value, password.value)
  loading.value = false
}

const isDisabled = loading.value
</script>

<template>
  <v-container class="d-flex align-center flex-column h-100 justify-center">
    <v-row class="w-100 align-center" justify="center">
      <v-col xl="4" sm="12" xs="12" lg="10" md="12" class="pa-0">
        <v-card variant="plain">
          <v-card-item class="pa-0">
            <v-card-title tag="p">Welcome to 루나톡!</v-card-title>

            <v-card-subtitle tag="p">계정 발급은 관리자에게 문의하세요.</v-card-subtitle>
          </v-card-item>

          <v-card-text class="pa-0">
            <v-form @submit.prevent="onSubmit">
              <v-text-field
                v-model="id"
                label="id"
                :rules="idRules"
                variant="outlined"
                class="my-4"
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="password"
                type="password"
                :rules="passwordRules"
                variant="outlined"
              ></v-text-field>
              <v-btn
                type="submit"
                block
                color="primary"
                class="mt-2"
                height="56px"
                :disabled="isDisabled"
              >
                <LoadingItem v-if="loading" />
                <span v-else>로그인</span>
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
p {
  overflow: visible;
  white-space: wrap;
}
</style>
