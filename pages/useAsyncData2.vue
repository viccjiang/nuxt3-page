<!--  對應至範例的 /pages/index.vue -->
<script setup>
// 1. 有提供 key 就可以使用 refreshNuxtData() 資料發更新
// const userData = ref({});
const { data } = await useAsyncData('getRandomuser1', () => $fetch('https://randomuser.me/api/'));

// 透過  refreshNuxtData() 請求 API
const refresh = () => {
  refreshNuxtData('getRandomuser1');
};
</script>
<template>
  <div>
    <hr />
    <h2>使用 key 搭配 refreshNuxtData() 觸發資料更新</h2>
    <img
      :src="data.results[0].picture?.large"
      :alt="`${data.results[0].name?.first} ${data.results[0].name?.last}`"
    />
    <h1>{{ data.results[0].name?.first }} {{ data.results[0].name?.last }}</h1>
    <h3>Email: {{ data.results[0].email }}</h3>

    <button @click="refresh">更新資料</button>
  </div>
</template>
