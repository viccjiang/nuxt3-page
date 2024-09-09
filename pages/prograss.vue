<template>
  <div>
    <CircularProgress v-model="percentage" />
    <EducationView
      v-model:highestEducationPercent="highestEducationPercent"
      v-model:wantPercent="wantPercent"
      v-model:jobExperiencePercent="jobExperiencePercent"
    />
    <div class="max-w-[784px] rounded-xl bg-white">
      <div class="mb-4 flex flex-col justify-between gap-4 md:flex-row">
        <div class="w-full rounded-xl border border-solid border-gray-100 p-4 md:w-1/2">
          <p class="mb-3 text-lg font-semibold">職務經歷</p>
          <div class="flex items-center justify-center gap-4">
            <!-- 透過 v-model 雙向綁定 percentage -->
            <PieChart v-model:percentage="jobExperiencePercent" />
            <div class="mt-4 text-start">
              <p class="text-sm text-gray-500">
                曾有<span class="text-blue-600 underline">網頁設計</span>工作經歷的求職者佔
                {{ jobExperiencePercent }}%
              </p>
              <div class="mt-2 flex-col justify-center text-sm">
                <div class="mr-4 flex items-center">
                  <div class="mr-1 h-3 w-3 rounded bg-blue-500"></div>
                  有相同經歷 {{ jobExperiencePercent }}%
                </div>
                <div class="flex items-center">
                  <div class="mr-1 h-3 w-3 rounded bg-gray-100"></div>
                  無相同經歷 {{ 100 - jobExperiencePercent }}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CircularProgress from '@/components/CirclePrograss.vue';
import PieChart from '@/components/CirclePrograssSVG.vue';

const percentage = ref(53);
const jobExperiencePercent = ref(76);

const wantPercent = ref(30);
const highestEducationPercent = ref(30);
</script>
