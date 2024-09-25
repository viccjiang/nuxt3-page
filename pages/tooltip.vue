<template>
  <div>
    <!-- 點擊連結觸發 Tooltip 的顯示 -->
    <a href="#" class="text-blue-500 underline" @click.prevent="toggleTip(0)">點擊我顯示 Tooltip</a>

    <!-- 動態顯示 Tooltip 組件 -->
    <div v-for="item in 10" :key="item">
      <Tooltip ref="setTooltipRef(item)" text="這是提示文字" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Tooltip from '@/components/tooltipView.vue';

const tooltips = ref({}); // 用物件儲存多個 Tooltip ref

// 動態設定 Tooltip 的 ref
const setTooltipRef = (item) => (el) => {
  if (el) {
    tooltips.value[item] = el;
  }
};

const toggleTip = (item) => {
  const tooltip = tooltips.value[item];
  if (tooltip) {
    tooltip.toggleTip(); // 點擊後切換指定 Tooltip 的顯示狀態
  }
};
</script>
