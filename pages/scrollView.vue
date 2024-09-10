<template>
  <div id="page-container" class="min-h-screen bg-gray-500">
    <!-- 固定的 Header 區塊，綁定 ref -->
    <header
      ref="headerRef"
      class="container sticky top-0 z-10 mx-auto flex h-16 items-center justify-center bg-black shadow-md"
    >
      <nav class="space-x-4">
        <button class="btn" @click="scrollToSection('section1')">Section 1</button>
        <button class="btn" @click="scrollToSection('section2')">Section 2</button>
        <button class="btn" @click="scrollToSection('section3')">Section 3</button>
        <button class="btn" @click="scrollToSection('section4')">Section 4</button>
      </nav>
    </header>

    <!-- 內容區塊 -->
    <section id="section1" class="section bg-blue-100">Section 1 Content</section>
    <section id="section2" class="section bg-green-100">Section 2 Content</section>
    <section id="section3" class="section bg-yellow-100">Section 3 Content</section>
    <section id="section4" class="section bg-red-100">Section 4 Content</section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
// 引入滾動函數
import { scrollToElementById } from '@/utils/scrollToElementById';

const headerRef = ref(null);
let headerHeight = 0;

onMounted(() => {
  // 確保在元件掛載後獲取 header 的高度
  if (headerRef.value) {
    headerHeight = headerRef.value.clientHeight;
  }
});

const scrollToSection = (sectionId) => {
  scrollToElementById(sectionId, headerHeight);
};
</script>

<style scoped></style>
