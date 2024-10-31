<!-- /page/index.vue -->
<script setup>
const userData = ref({});

// 確定請求是在客戶端由操作者在操作時觸發，例如透過點擊事件送出請求，不是在頁面或是元件初始化時取得資料就可以使用 $fetch
const getUserData = async () => {
  const response = await $fetch('https://randomuser.me/api/');
  userData.value = response.results[0];
};
</script>

<template>
  <div>
    <template v-if="userData.name">
      <img :src="userData.picture?.large" :alt="`${userData.name?.first} ${userData.name?.last}`" />
      <h1>{{ userData.name?.first }} {{ userData.name?.last }}</h1>
      <h3>Email: {{ userData.email }}</h3>
    </template>

    <button type="button" @click="getUserData">取得 User 資料</button>
  </div>
</template>
