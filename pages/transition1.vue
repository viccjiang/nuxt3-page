<template>
  <div class="flex flex-col items-center">
    <button id="trigger" class="rounded bg-blue-500 px-4 py-2 text-white" @click="toggleImage">
      图片显示与隐藏
    </button>
    <transition name="fade">
      <img
        v-if="isVisible"
        id="target"
        :src="'https://images.unsplash.com/photo-1724525647096-116d4bacbd5f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
        class="mt-4 h-16 w-16 object-contain"
        alt="Example Image"
      />
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isVisible = ref(true);

const toggleImage = () => {
  isVisible.value = !isVisible.value;
};
</script>

<style></style>
