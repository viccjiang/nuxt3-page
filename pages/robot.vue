<template>
  <div class="fixed bottom-20 right-5 z-50 w-96 rounded-xl bg-white p-4 shadow-lg">
    <div class="rounded-t-xl bg-blue-500 p-4 text-white">
      <h2 class="text-lg font-semibold">Hi, 您好</h2>
    </div>
    <p>有遇到任何问题，或是想了解更多？欢迎利用以下服务</p>
    <div class="grid grid-cols-2 gap-4 p-4">
      <div
        v-for="service in services"
        :key="service.id"
        class="flex items-center space-x-2 bg-blue-100"
      >
        <img :src="service.icon" :alt="service.name" class="h-6 w-6" />
        <a
          :href="service.url"
          target="_blank"
          class="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          {{ service.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const services = [
  {
    id: 1,
    name: 'Q&A',
    url: 'https://www.1111.com.tw/QA/Index',
    icon: '/path/to/question_icon.svg'
  },
  { id: 2, name: 'LINE@', url: 'https://page.line.me/', icon: '/path/to/line_icon.svg' },
  {
    id: 3,
    name: '意见反馈',
    url: 'https://www.1111.com.tw/help/service.asp',
    icon: '/path/to/message_icon.svg'
  },
  {
    id: 4,
    name: '合作提案',
    url: 'https://www.1111.com.tw/help/alliance.asp',
    icon: '/path/to/pen_icon.svg'
  },
  {
    id: 5,
    name: '在线客服',
    url: 'https://25.cami.yesing.com/tw/service/MTExMWpvYmJhbms',
    icon: '/path/to/earphone_icon.svg'
  },
  {
    id: 6,
    name: '找工作APP',
    url: 'https://www.1111.com.tw/1111app/',
    icon: '/path/to/qrcode_icon.svg'
  }
];
</script>

<style scoped>
/* 在此添加特定的样式，如果需要 */
</style>
