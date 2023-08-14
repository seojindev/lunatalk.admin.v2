<script lang="ts" setup>
import { ref } from 'vue'

const id = ref('')
const password = ref('')
</script>

<template>
  <v-container class="d-flex align-center flex-column h-100 justify-center">
    <v-row class="w-100 align-center" justify="center">
      <v-col xl="4" sm="12" xs="12" lg="10" md="12">
        <v-card variant="plain">
          <v-card-item>
            <v-card-title>Welcome to 루나톡!</v-card-title>

            <v-card-subtitle
              >Please sign-in to your account and start the adventure</v-card-subtitle
            >
          </v-card-item>

          <v-card-text>
            <v-form @submit.prevent>
              <v-text-field v-model="id" label="id"></v-text-field>
              <v-text-field v-model="password" label="password" type="password"></v-text-field>
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
</style>
