<template>
  <div>
    <button class="rounded bg-blue-500 p-2 text-white" @click="toggleContent">切換顯示/隱藏</button>
    <div
      ref="content"
      :class="[
        'overflow-hidden transition-all duration-500',
        isVisible ? 'max-h-[100px] opacity-100' : 'max-h-0 opacity-0'
      ]"
      class="mt-4 bg-gray-200 p-4"
    >
      這是要顯示/隱藏的內容
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isVisible = ref(false);
const content = ref(null);

const toggleContent = () => {
  isVisible.value = !isVisible.value;
};
</script>
