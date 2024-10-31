<template>
  <div class="container mx-auto">
    <div class="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
      <!-- 圓餅分析圖範例 1 -->
      <div class="h-full w-full bg-blue-100 p-4">
        <h2 class="mb-2 text-xl font-bold">職務經歷</h2>
        <p>相關經驗百分比: {{ jobExperiencePercent }}%</p>
        <p>相關職務名稱: {{ jobCategoryExperience }}</p>
      </div>

      <!-- 圓餅分析圖範例 2 -->
      <div class="h-full w-full bg-green-100 p-4">
        <h2 class="mb-2 text-xl font-bold">產業經歷</h2>
        <p>相關經驗百分比: {{ industryExperiencePercent }}%</p>
        <p>相關職務名稱: {{ industryCategoryExperience }}</p>
        <p>相關職務名稱: {{ industryCategoryExperience }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 模擬數據
const jobExperiencePercent = ref(70);
const jobCategoryExperience = ref('軟體工程師, 全端開發');

const industryExperiencePercent = ref(50);
const industryCategoryExperience = ref('資訊科技, 金融');
</script>

<style scoped>
/* 你可以根據需要自定義樣式 */
</style>
