<script setup lang="ts"></script>
<template>
  <div class="d-flex h-100 justify-center align-center w-100 flex-column">
    <h1>
      <span>4</span>
      <span>0</span>
      <span>4</span>
    </h1>
    <p>페이지를 찾을수 없습니다.</p>
    <RouterLink to="/">메인으로 이동하기</RouterLink>
  </div>
</template>

<style scoped>
h1 {
  font-size: 150px;
  font-weight: 800;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: -10px;
  margin-left: -20px;
}
h1 > span {
  text-shadow: -8px 0 0 #262626;
}

a,
p {
  color: #fff;
  letter-spacing: -1px;
}
</style>
