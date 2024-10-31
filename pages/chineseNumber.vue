<template>
  <div>
    資本額：<input v-model="capital" type="number" @input="handleChineseNumber" />
    {{ handleChineseNumber(capital) }}
  </div>
</template>

<script setup>
const capital = ref(2200000);
</script>
