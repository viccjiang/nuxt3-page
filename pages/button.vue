<template>
  <!-- 傳入按鈕行為 -->
  <CustomButton :model-value="currentBtnType" @click="handleClick"> 按鈕文字 </CustomButton>
</template>

<script setup>
import { ref } from 'vue';
import CustomButton from '@/components/custom/buttonView.vue';

const currentBtnType = ref('preview'); // 預設按鈕類型

function handleClick() {
  currentBtnType.value = 'del'; // 點擊時改變按鈕類型
}
</script>
