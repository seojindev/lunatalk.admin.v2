<script lang="ts" setup>
import { ref, watch } from 'vue'

const id = ref('')
const password = ref('')

const idRules = [(value: string) => !!value || '아이디를 입력해주세요.']

const passwordRules = [(value: string) => !!value || '비밀번호를 입력해주세요.']
</script>

<template>
  <v-container class="d-flex align-center flex-column h-100 justify-center">
    <v-row class="w-100 align-center" justify="center">
      <RouterLink to="/" class="brand-logo">
        <v-img
          :width="100"
          aspect-ratio="16/9"
          cover
          src="https://lunatalk.co.kr/_next/image?url=http%3A%2F%2Fadmin.lunatalk.co.kr%2Fstatic%2Fmedia%2Flogo.e0e49014f4ed6f070031.jpg&w=640&q=75"
        />
      </RouterLink>
      <v-col xl="4" sm="12" xs="12" lg="10" md="12">
        <v-card variant="plain">
          <v-card-item>
            <v-card-title tag="p">Welcome to 루나톡!</v-card-title>

            <v-card-subtitle tag="p"
              >Please sign-in to your account and start the adventure</v-card-subtitle
            >
          </v-card-item>

          <v-card-text>
            <v-form @submit.prevent>
              <v-text-field v-model="id" label="id" :rules="idRules"></v-text-field>
              <v-text-field
                v-model="password"
                label="password"
                type="password"
                :rules="passwordRules"
              ></v-text-field>
              <v-btn type="submit" block class="mt-2">로그인</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
* {
  color: #fff;
}
p {
  overflow: visible;
  white-space: wrap;
}
.brand-logo {
  position: absolute;
  top: 15px;
  left: 15px;
  border-radius: 10%;
  overflow: hidden;
}
</style>
