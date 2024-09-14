<template>
  <div>
    <!-- 導航標籤 -->
    <nav class="fixed top-0 z-10 w-full bg-white shadow">
      <ul class="flex justify-around">
        <li v-for="section in sections" :key="section.id">
          <a
            :href="'#' + section.id"
            :class="{ 'font-bold text-blue-500': activeSection === section.id }"
            class="block py-4"
            @click.prevent="scrollToSection(section.id)"
          >
            {{ section.title }}
          </a>
        </li>
      </ul>
    </nav>

    <!-- 內容區塊 -->
    <div class="pt-16">
      <section
        v-for="section in sections"
        :id="section.id"
        :key="section.id"
        class="min-h-screen px-4"
      >
        <h2 class="mb-4 text-3xl">{{ section.title }}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <!-- 其他內容 -->
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const sections = ref([
  { id: 'section1', title: '區塊一' },
  { id: 'section2', title: '區塊二' },
  { id: 'section3', title: '區塊三' }
]);

const activeSection = ref('');
let observer = null;

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  const yOffset = -64; // 導航欄的高度（根據實際情況調整）
  const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
};

const handleIntersect = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      activeSection.value = entry.target.id;
    }
  });
};

onMounted(() => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6
  };

  observer = new IntersectionObserver(handleIntersect, options);
  sections.value.forEach((section) => {
    const element = document.getElementById(section.id);
    if (element) {
      observer.observe(element);
    }
  });
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
/* 如有需要，可以在這裡添加自定義樣式 */
</style>
