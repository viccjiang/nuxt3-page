<template>
  <div id="page-container" class="min-h-screen bg-gray-500">
    <!-- 固定的 Header 區塊，綁定 ref -->
    <header
      ref="headerRef"
      class="sticky top-0 z-10 mx-auto flex items-center justify-center bg-black shadow-md transition-all duration-300"
      :class="{
        'h-20 w-full': isScrolledDown,
        'container h-16': !isScrolledDown
      }"
    >
      <nav class="space-x-4">
        <button class="btn" @click="scrollToSection('section1')">Section 1</button>
        <button class="btn" @click="scrollToSection('section2')">Section 2</button>
        <button class="btn" @click="scrollToSection('section3')">Section 3</button>
        <button class="btn" @click="scrollToSection('section4')">Section 4</button>
      </nav>
    </header>

    <article class="container mx-auto">
      <!-- 內容區塊 -->
      <section id="section1" class="section bg-blue-100">Section 1 Content</section>
      <section id="section2" class="section bg-green-100">Section 2 Content</section>
      <section id="section3" class="section bg-yellow-100">Section 3 Content</section>
      <section id="section4" class="section bg-red-100">Section 4 Content</section>
    </article>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { scrollToElementById } from '@/utils/scrollToElementById';

const headerRef = ref(null);
const headerHeight = ref(0);
const isScrolledDown = ref(false);

const updateHeaderHeight = () => {
  if (headerRef.value) {
    headerHeight.value = headerRef.value.clientHeight;
  }
};

const onScroll = () => {
  // 如果滾動超過 100px，就認為是向下滾動，改變 header 的大小
  if (window.scrollY > 100) {
    isScrolledDown.value = true;
  } else {
    isScrolledDown.value = false;
  }
  updateHeaderHeight(); // 更新 header 高度
};

onMounted(() => {
  updateHeaderHeight(); // 初始 header 高度
  window.addEventListener('scroll', onScroll); // 監聽滾動事件
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll); // 移除滾動事件監聽
});

const scrollToSection = (sectionId) => {
  scrollToElementById(sectionId, headerHeight.value); // 使用最新的 header 高度滾動
};
</script>

<style scoped>
/* 添加過渡效果的樣式 */
header {
  transition:
    height 0.3s ease-in-out,
    width 0.3s ease-in-out;
}
</style>
