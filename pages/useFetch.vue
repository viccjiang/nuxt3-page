<script setup>
const { data, refresh } = useFetch('https://randomuser.me/api/');

// 透過 refresh 觸發 API 資料更新
const refreshData = () => {
  refresh();
};
</script>

<template>
  <div>
    <hr />
    <h2>使用 key 搭配 refresh() 觸發資料更新</h2>

    <!-- 使用 v-if 檢查資料是否存在 -->
    <div v-if="data?.results && data.results.length > 0">
      <img
        :src="data.results[0].picture?.large"
        :alt="`${data.results[0].name?.first} ${data.results[0].name?.last}`"
      />
      <h1>{{ data.results[0].name?.first }} {{ data.results[0].name?.last }}</h1>
      <h3>Email: {{ data.results[0].email }}</h3>
    </div>

    <!-- 加入提示文字，當資料尚未載入時顯示 -->
    <div v-else>
      <p>資料載入中...</p>
    </div>

    <button @click="refreshData">更新資料</button>
  </div>
</template>
