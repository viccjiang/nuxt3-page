<template>
  <!-- 下部分的學經歷分析 -->
  <div class="mb-4 rounded-xl border border-solid border-gray-100 p-4">
    <p class="mb-[10px] text-lg font-semibold">職務經歷</p>
    <div class="flex flex-col justify-around md:flex-row">
      <div class="flex flex-col items-start gap-4 md:flex-row md:justify-center">
        <div class="flex items-center justify-center">
          <div class="relative me-4">
            <div
              class="flex h-[60px] w-[60px] items-center justify-center rounded-full border-4 border-blue-300 bg-[#E9F0FD]"
            >
              <span class="font-bold text-blue-500">{{ jobExperiencePercent }}%</span>
            </div>
          </div>
          <p>有工作經驗</p>
        </div>
        <div class="flex items-center justify-center">
          <div class="relative me-4">
            <div
              class="flex h-[60px] w-[60px] items-center justify-center rounded-full border-4 border-blue-300 bg-[#E9F0FD]"
            >
              <span class="font-bold text-blue-500">{{ wantPercent }}%</span>
            </div>
          </div>
          <p>為欲轉職的求職者</p>
        </div>
        <div class="flex items-center justify-center">
          <div class="relative me-4">
            <div
              class="flex h-[60px] w-[60px] items-center justify-center rounded-full border-4 border-blue-300 bg-[#E9F0FD]"
            >
              <span class="font-bold text-blue-500">{{ highestEducationPercent }}%</span>
            </div>
          </div>
          <p>占比最高的學歷</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineModel } from 'vue';

const jobExperiencePercent = defineModel('jobExperiencePercent', {
  type: Number,
  default: 0 // 預設值
});

const highestEducationPercent = defineModel('highestEducationPercent', {
  type: Number,
  default: 0 // 預設值
});

const wantPercent = defineModel('wantPercent', {
  type: Number,
  default: 0 // 預設值
});
</script>
