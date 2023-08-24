<template>
  <div class="text-center d-flex align-center justify-center">
    <v-btn color="primary" @click="open"> {{ props.btnName }} </v-btn>

    <v-dialog v-model="dialog" width="500">
      <v-card class="pa-3">
        <v-card-title class="text-h5">
          {{ props.btnName }}
        </v-card-title>
        <v-card-text> {{ props.content }} </v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn color="primary" @click="confirm">확인</v-btn>
          <v-btn color="primary" @click="close">취소</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ isOpen: boolean; btnName: string; content: string }>()
const emit = defineEmits(['action'])

const dialog = ref(props.isOpen)

const open = () => {
  dialog.value = true
}

const close = () => {
  dialog.value = false
}

const confirm = () => {
  emit('action')
  close()
}
</script>
