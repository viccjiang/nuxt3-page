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
        stroke-dashoffset="0"
        stroke="currentColor"
        fill="transparent"
        :style="{ strokeDashoffset: circumference - (percentage / 100) * circumference }"
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
const percentage = defineModel({ type: Number, default: 0 }); // 這裡可以綁定到 props 或 data 以動態更改
const circumference = 2 * Math.PI * 16;
</script>
