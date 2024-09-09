<template>
  <div class="relative h-32 w-32">
    <svg class="-rotate-90 transform" width="100%" height="100%" viewBox="0 0 36 36">
      <!-- 背景圓 -->
      <circle
        class="text-gray-300"
        stroke-width="3.8"
        stroke="currentColor"
        fill="transparent"
        r="16"
        cx="18"
        cy="18"
      />
      <!-- 進度圓 -->
      <circle
        class="text-blue-500"
        stroke-width="3.8"
        stroke-dasharray="100, 100"
        :stroke-dashoffset="circumference - (percentage / 100) * circumference"
        stroke="currentColor"
        fill="transparent"
        r="16"
        cx="18"
        cy="18"
      />
    </svg>
    <div
      class="absolute inset-0 flex items-center justify-center text-xl font-semibold text-blue-500"
    >
      {{ percentage }}%
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineModel } from 'vue';

const percentage = defineModel('percentage', {
  type: Number,
  default: 0 // 預設值
});

const circumference = 2 * Math.PI * 16;
</script>
