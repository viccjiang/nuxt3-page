<script setup>
const dayjs = useDayjs(); // 使用封裝的 dayjs
const title = ref('首頁');
const date = ref('');

onMounted(() => {
  date.value = dayjs(new Date()).utc().format('YYYY-MM-DD HH:mm:ss');
});
</script>

<template>
  <div class="font-600 text-6xl text-gray-700">
    <div>
      <p>{{ date }}</p>
    </div>
    <div>{{ title }}</div>
  </div>
</template>
