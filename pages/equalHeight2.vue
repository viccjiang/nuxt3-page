<template>
  <div class="mb-4 flex flex-wrap gap-4">
    <!-- 職務經歷圓餅分析圖 -->
    <div class="flex min-w-[calc(50%-8px)] flex-1 flex-col rounded bg-white p-4 shadow">
      <h3 class="mb-2 text-lg font-semibold">職務經歷</h3>
      <div class="flex h-32 flex-1 items-center justify-center">
        <p class="h-[60px] w-[60px]">圖表</p>
      </div>
      <p class="mt-2 text-center">{{ competitorAnalysisData.job.relatedNames }}</p>
    </div>

    <!-- 產業經歷圓餅分析圖 -->
    <div class="flex min-w-[calc(50%-8px)] flex-1 flex-col rounded bg-white p-4 shadow">
      <h3 class="mb-2 text-lg font-semibold">產業經歷</h3>
      <div class="flex h-32 flex-1 items-center justify-center">
        <p class="h-[60px] w-[60px]">圖表</p>
      </div>
      <p class="mt-2 text-center">{{ competitorAnalysisData.industry.relatedNames }}</p>
      <p class="mt-2 text-center">{{ competitorAnalysisData.industry.relatedNames }}</p>
      <p class="mt-2 text-center">{{ competitorAnalysisData.industry.relatedNames }}</p>
      <p class="mt-2 text-center">{{ competitorAnalysisData.industry.relatedNames }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// 模擬數據
const competitorAnalysisData = {
  job: {
    experiencePercent: ref(70),
    relatedNames: ref('軟體工程師, 全端開發')
  },
  industry: {
    experiencePercent: ref(50),
    relatedNames: ref('資訊科技, 金融')
  }
};

// 在 ONmOUNTED 時才把資料綁上去
onMounted(() => {
  competitorAnalysisData.job.experiencePercent.value = 70;
  competitorAnalysisData.job.relatedNames.value = '軟體工程師, 全端開發';

  competitorAnalysisData.industry.experiencePercent.value = 50;
  competitorAnalysisData.industry.relatedNames.value = '資訊科技, 金融';
});
</script>

<style scoped>
/* 自定義樣式 */
</style>
