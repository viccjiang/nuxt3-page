<template>
  <div>
    <!-- 初始内容 -->
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor perspiciatis iure nobis sunt
        expedita beatae suscipit labore perferendis... Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Vel aut ab quis quibusdam ipsa libero porro soluta, placeat veritatis
        voluptatum, impedit repudiandae odit dolor nulla quod. Incidunt perferendis nulla deleniti
        excepturi quae dicta quia minus distinctio tempore omnis tenetur cumque earum molestias,
        quaerat odio temporibus optio! Voluptatum, ad dicta aliquam id odio, nemo cumque at iste, ex
        error porro sapiente cupiditate obcaecati inventore et voluptatem eius nesciunt sunt rerum
        temporibus tenetur unde esse? Quae, et pariatur at blanditiis, eveniet quas aut eius sed
        quam maxime aspernatur alias ad iste nostrum quaerat sint? Voluptates quae aliquid
        consectetur quas asperiores qui dolor dolores, nobis totam libero quod tempora voluptatum
        consequatur accusantium! Obcaecati ipsa repellat a distinctio nam saepe dolore maiores,
        similique exercitationem numquam velit cupiditate dolorum dignissimos quibusdam minus eius
        magni id quos tempore omnis quisquam. Quo ullam asperiores beatae ea accusamus reiciendis
        praesentium eveniet facilis! Possimus alias placeat nam officiis, consectetur modi sint
        soluta vitae omnis perferendis dolorem quas molestiae, quisquam totam iste facere obcaecati
        excepturi iusto repudiandae amet nemo ullam et! Maxime, molestiae! Voluptas consequatur
        quasi accusantium voluptatum, facere velit molestiae unde laudantium iusto. Neque, laborum.
        Non laborum ducimus aperiam enim obcaecati quod iste molestias, rerum et fuga. Consequatur
        voluptatibus aspernatur aut quidem quisquam corrupti esse fugiat distinctio earum incidunt
        rerum dolores explicabo, dolor assumenda? Eum, ad! Temporibus iusto assumenda consectetur
        minima quasi ea magni eius unde itaque, illum nihil numquam molestiae quis ullam
        reprehenderit molestias! Explicabo impedit in sit error fugiat inventore, temporibus
        recusandae eaque sunt ab illo incidunt, ex quasi? Quas tenetur nam ut fugiat suscipit
        facere, commodi accusamus dignissimos qui esse ipsa consectetur nihil alias delectus tempore
        vel minus ipsum pariatur itaque. Laudantium consequatur minima odit itaque, sunt sint nam
        numquam pariatur aliquid voluptatem laboriosam ipsa maxime et facilis, quasi repudiandae,
        nobis nulla unde quaerat suscipit tempora! Fugit numquam porro magnam eos eum vel id
        eligendi consectetur commodi. Minima maiores iste numquam ipsam, autem voluptates deserunt
        recusandae adipisci placeat excepturi totam minus laborum aperiam. Ut totam deserunt eaque
        a. Minima impedit amet provident soluta distinctio ducimus dolore odio incidunt molestiae,
        aliquam accusantium culpa tempore accusamus quisquam id laboriosam eveniet ullam itaque
        assumenda quod? Velit fugit cumque in numquam consequatur eligendi recusandae itaque iusto
        ad quasi expedita, nisi doloribus dignissimos ab nihil perspiciatis sed earum assumenda
        iure? Sapiente, quasi repellat placeat quos vel officia, et sint odit laborum ullam magnam,
        ex accusamus dignissimos eius fugiat sunt eos enim vero quisquam rem libero? Alias deserunt
        facilis asperiores aspernatur! Qui, repellat magni illum ratione ullam quam culpa voluptas
        quasi, delectus recusandae labore eligendi? Quasi facilis officia voluptates aliquid, minima
        dolore aut repellendus? Quos dolore quasi praesentium ipsam omnis dolor, beatae dolorem
        autem illum? Possimus accusantium et sunt, ad, temporibus dolorum officia libero labore iure
        quasi cumque adipisci, numquam quas molestias doloremque consectetur eum nam! Omnis
        reiciendis itaque iusto cumque nemo sequi officiis eius adipisci qui modi consectetur
        mollitia iste accusantium beatae id nihil labore, alias consequuntur rerum! Nesciunt ut sunt
        eum similique provident voluptatem vitae, placeat, officiis fugit accusamus nam.
      </p>
      <!-- 更多内容 -->
    </div>

    <!-- 导航栏 -->
    <nav class="sticky top-0 z-10 w-full bg-white shadow">
      <ul class="flex justify-around">
        <li v-for="section in sections" :key="section.id">
          <NuxtLink
            :class="{ 'font-bold text-blue-500': activeSection === section.id }"
            class="block cursor-pointer py-4"
            @click.prevent="scrollToSection(section.id)"
          >
            {{ section.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <!-- 内容区块 -->
    <div>
      <section
        v-for="section in sections"
        :id="section.id"
        :key="section.id"
        ref="sectionRefs"
        class="min-h-screen scroll-mt-16 px-4"
      >
        <h2 class="mb-4 text-3xl">{{ section.title }}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <!-- 其他内容 -->
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';

const sections = ref([
  { id: 'section1', title: '区块一' },
  { id: 'section2', title: '区块二' },
  { id: 'section3', title: '区块三' }
]);

const activeSection = ref('');
const sectionRefs = ref([]);
let observer = null;

const scrollToSection = (id) => {
  const element = sectionRefs.value.find((el) => el.id === id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleIntersect = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      activeSection.value = entry.target.id;
    }
  });
};

const initializeObserver = async () => {
  await nextTick(); // 确保 DOM 已更新

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6
  };

  observer = new IntersectionObserver(handleIntersect, options);

  if (sectionRefs.value) {
    sectionRefs.value.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });
  }
};

onMounted(() => {
  initializeObserver();
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
/* 如有需要，可以在这里添加自定义样式 */
</style>
