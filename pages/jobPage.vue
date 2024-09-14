<template>
  <div>
    <!-- Intersection Observer to track scrolling -->
    <IntersectionObserver v-model:intersecting="isContentIntersecting" />

    <!-- 頁面內容 -->
    <div class="container mx-auto" :class="{ 'mt-[278px]': !isContentIntersecting }">
      <div class="flex flex-col md:flex-row md:gap-x-6">
        <div class="flex-1 md:min-w-[767px]">
          <!-- Tab 選單 -->
          <ul
            class="scrollbar-hide overflow-x-scroll whitespace-nowrap rounded-none border-b-[1px] border-solid border-b-[#E9ECEF] bg-white pt-[10px] sm:rounded-t-[16px]"
            :class="{
              hidden: !isContentIntersecting
            }"
          >
            <li
              v-for="tab in TAB_OPTIONS"
              :key="tab.key"
              class="hover:text-main inline-block cursor-pointer px-[18px]"
            >
              <NuxtLink
                class="underline-link inline-block py-3"
                :class="{
                  'text-main active font-bold': selectedTab === tab.key
                }"
                @click.prevent="handleScrollToElementById(tab.key)"
              >
                {{ tab.label }}
              </NuxtLink>
            </li>
          </ul>

          <!-- 工作內容 -->
          <section id="WORK_CONTENT" class="mb-8 bg-white p-6 md:p-6 lg:p-12">
            <h2
              class="text-main before:bg-main relative mb-4 pl-3 text-xl font-medium before:absolute before:bottom-0 before:left-0 before:top-1/2 before:h-[18px] before:w-1 before:-translate-y-1/2 before:content-['']"
            >
              工作內容
            </h2>
            <div class="flex flex-col gap-[10px]">
              <div v-if="jobData.description.responsibilities.length" class="content">
                <p class="me-9 flex-shrink-0 font-medium">職缺描述</p>
                <ExpandableContent
                  v-model="jobData.description.responsibilities"
                  type="jobDescription"
                  class="leading-6"
                />
              </div>
            </div>
          </section>

          <!-- 要求條件 -->
          <section id="REQUIREMENTS" class="section">
            <h2
              class="text-main before:bg-main relative mb-4 pl-3 text-xl font-medium before:absolute before:bottom-0 before:left-0 before:top-1/2 before:h-[18px] before:w-1 before:-translate-y-1/2 before:content-['']"
            >
              要求條件
            </h2>
            <div class="grid gap-3">
              <div v-if="jobData.requirement.education.qualifications.length" class="content">
                <p class="me-9 flex-shrink-0 font-medium">學歷要求</p>
                <ul class="flex">
                  <li v-for="type in jobData.requirement.education.qualifications" :key="type.key">
                    {{ type.name }}
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <!-- 福利資訊 -->
          <section id="BENEFITS" class="section">
            <h2
              class="text-main before:bg-main relative mb-4 pl-3 text-xl font-medium before:absolute before:bottom-0 before:left-0 before:top-1/2 before:h-[18px] before:w-1 before:-translate-y-1/2 before:content-['']"
            >
              福利資訊
            </h2>
            <div class="border-b border-solid border-[#E9ECEF] pb-6">
              <div class="content mb-[10px]">
                <p class="me-9 flex-shrink-0 font-medium">公司名稱</p>
                <p>{{ jobData.company.name }}</p>
              </div>
            </div>
          </section>
        </div>

        <!-- 右側欄位 -->
        <div class="hidden flex-1 md:hidden md:max-w-[240px] lg:block">
          <PageJobPageSideCard v-model="jobData" />
          <div class="mb-6">
            <ImageLoader
              :image-config="{ src: ADImage, alt: '每37秒就有一人 在1111找到好工作' }"
              :class-list="['h-60', 'w-60', 'object-contain']"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 定義資料
const isContentIntersecting = ref(true);

// 定義 jobData
const jobData = ref({
  description: {
    responsibilities: '負責網頁前後端開發',
    salary: {
      hideSalary: true
    },
    positionCategories: [{ code: 'dev', name: '前端工程師' }],
    jobTypes: [{ key: 'fulltime', name: '全職' }],
    shiftType: [{ key: 'day', name: '日班' }],
    vacationPolicy: ['依公司規定'],
    location: {
      workCityAddress: '台北市信義區'
    },
    vision: '公司有遠大的發展目標',
    achievements: '技術升級'
  },
  requirement: {
    education: { qualifications: [{ key: 'university', name: '大學' }] },
    experience: { value: 2 },
    languages: [
      {
        language: '英文',
        proficiencies: { listen: '精通', speak: '流利', read: '精通', write: '流利' }
      }
    ],
    computerSkills: [{ code: 'js', name: 'JavaScript' }]
  },
  company: {
    name: '科技公司',
    industries: [{ name: '資訊業' }],
    benefits: [{ code: 'health', name: '健康保險', children: [{ name: '勞健保' }] }],
    legalBenefits: []
  },
  application: {
    interviewDays: ['週一', '週三'],
    interviewNoteFile: '注意事項.pdf',
    otherRecruitment: '更多資訊請詳見公司網站'
  }
});

// 定義 TAB_OPTIONS
const TAB_OPTIONS = [
  { key: 'WORK_CONTENT', label: '工作內容' },
  { key: 'REQUIREMENTS', label: '要求條件' },
  { key: 'BENEFITS', label: '福利資訊' }
];

const selectedTab = ref < string > 'WORK_CONTENT';

// 滾動到對應元素
const handleScrollToElementById = (id) => {
  // 獲取固定在頂部的 header 高度（如果沒有則使用預設值 55px）
  const headerHeight = document.querySelector('.sticky.top-0')?.clientHeight || 55;

  // 根據傳入的 id 獲取對應的元素
  const element = document.getElementById(id);

  if (element) {
    // 計算滾動目標位置（考慮 header 高度）
    const targetPosition = element.offsetTop - headerHeight;

    // 平滑滾動到該位置
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  } else {
    console.error(`Element with id "${id}" not found.`);
  }
};
</script>

<style lang="scss" scoped>
// 針對 Tab 的樣式
.underline-link {
  position: relative;
}

.underline-link::after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  width: 100%;
  height: 0;
  background-color: #2066ec; /* 主色 */
  transition: height 0.3s ease;
  border-radius: 10px 10px 0 0; /* 上方圓角 */
}

.underline-link.active::after {
  height: 4px; /* 底線高度 */
  width: 56px;
}

.scrollbar-hide {
  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
