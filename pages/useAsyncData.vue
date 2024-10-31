<script setup>
const { data: userData } = await useFetch('https://randomuser.me/api/');

const result = userData.value?.results[0];
</script>

<template>
  <div v-if="result">
    <img :src="result.picture?.large" :alt="`${result.name.first} ${result.name?.last}`" />
    <h1>{{ result.name?.first }} {{ result.name?.last }}</h1>
    <h3>Email: {{ result.email }}</h3>
  </div>
</template>
