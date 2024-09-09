<script setup>
const store = useHomeStore();

const title = ref('首頁');
</script>

<template>
  <div class="font-600 text-6xl text-gray-700">
    <div>{{ title }}</div>
    <div>{{ store.count }}</div>
    <button class="border" @click="store.add">add</button>
  </div>
</template>

<style scoped></style>
