<template>
  <div>
    <!-- 初始内容 -->
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestias, doloribus
        illum qui repellendus sit cumque. Reprehenderit temporibus animi consequuntur beatae
        architecto fugiat inventore error excepturi maxime quidem quo sequi ipsum et, numquam nobis
        repudiandae voluptatibus nihil doloribus suscipit. Tempore voluptatibus velit hic rerum
        porro explicabo nobis quaerat beatae quod ab repudiandae quia fuga obcaecati quos a atque
        nam, quibusdam magni quas delectus in inventore iure? Veniam sed nisi labore quas in atque
        quis nostrum corporis distinctio, sunt maiores praesentium harum, cum tempora molestias at
        eum! Commodi reprehenderit id harum laudantium autem, voluptatibus recusandae magni
        possimus? Ratione beatae, voluptates aperiam id non molestiae velit? Commodi nemo velit,
        magnam voluptates dolor vel porro cum, qui vitae ab maxime incidunt tempore ea, voluptas
        consequuntur quo? Facilis soluta possimus quas sapiente sequi dignissimos saepe vel, fugit
        ut qui, facere amet debitis repellat mollitia! Quod aliquam iusto soluta, corrupti saepe
        pariatur quis placeat alias, nulla, hic ab molestiae reprehenderit? Voluptate, dolorum rem!
        Beatae sit sequi reprehenderit ipsam consequatur sapiente laudantium ipsa vitae doloremque
        modi cumque, alias inventore sed dolor qui sint ipsum et eveniet, autem quis. Quibusdam
        consequatur, sint quaerat magni aperiam porro non est vel nam voluptates perspiciatis odio
        in inventore itaque debitis minus dicta. Quam aperiam, ipsa temporibus minus voluptas
        sapiente numquam assumenda officiis? Autem itaque consectetur maiores corporis iste unde
        quo, laboriosam, porro reiciendis molestiae accusantium sequi vitae dignissimos quod
        voluptate doloremque rem voluptas eos neque, nobis velit sapiente tempore repellendus
        praesentium. Mollitia nesciunt officiis aliquam veniam iste voluptatem ducimus? Nobis iste
        sint eius earum eum praesentium deserunt voluptates beatae rem aspernatur et quisquam ex
        impedit esse possimus optio consequuntur, dicta autem odit. Enim ratione eos quasi
        blanditiis quos. Quos dignissimos dolorum non repellendus. Tenetur delectus animi commodi,
        et impedit odio enim iure ad pariatur quaerat itaque veritatis error minima veniam
        accusantium? Beatae, et eius! Eos illo ea, architecto atque voluptate natus eveniet quos
        officia alias numquam provident nobis deserunt unde ab, sequi vero nulla suscipit molestiae
        ullam quasi nisi ratione modi commodi. Eius obcaecati eos laborum, esse dolor architecto
        officia accusantium magni rem nobis, repellat saepe voluptates quas mollitia fugit sed sunt,
        suscipit numquam ut earum explicabo et laboriosam nulla. Et rerum beatae sequi sapiente
        saepe mollitia eaque quidem maiores obcaecati. Ut eaque qui corporis itaque vel magni ea,
        veritatis reiciendis mollitia blanditiis vitae voluptas assumenda sit atque unde magnam
        sapiente accusantium distinctio amet et laboriosam. Optio quasi quisquam rem voluptates quae
        ut rerum dignissimos provident vero eos vel quam adipisci, quo quod hic. Laborum consequatur
        repudiandae quaerat doloribus quisquam? Officiis eveniet distinctio natus quas voluptates
        libero eius, mollitia dolore. Error et accusamus dicta? Nobis iusto neque sit unde quas
        molestias expedita magni impedit praesentium beatae placeat repellat, sed maiores suscipit!
        Quasi quidem cupiditate maiores, fugit omnis, laudantium eaque perspiciatis quia ullam
        labore asperiores nihil saepe aut nulla doloremque consequatur aspernatur consequuntur
        architecto illum nemo alias voluptas! Eos nulla perspiciatis excepturi nemo accusantium
        saepe quam quaerat repudiandae deleniti similique. Fugit beatae quo eaque exercitationem
        dicta vitae cumque itaque necessitatibus distinctio.
      </p>
      <!-- 更多内容 -->
    </div>

    <!-- 导航栏 -->
    <nav class="sticky top-0 z-10 w-full bg-white shadow">
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

    <!-- 内容区块 -->
    <div>
      <section
        v-for="section in sections"
        :id="section.id"
        :key="section.id"
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
import { ref, onMounted, onBeforeUnmount } from 'vue';

const sections = ref([
  { id: 'section1', title: '区块一' },
  { id: 'section2', title: '区块二' },
  { id: 'section3', title: '区块三' }
]);

const activeSection = ref('');
let observer = null;

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: 'smooth' });
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
/* 如有需要，可以在这里添加自定义样式 */
</style>
