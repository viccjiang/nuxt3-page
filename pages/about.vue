<script setup>
definePageMeta({
  middleware: (to, from) => {
    console.log('address=>', { to, from });
  }
});
</script>

<template>
  <div>
    Page: about

    <div class="flex flex-col">
      <div
        v-for="network in ['facebook', 'line', 'email', 'copy_link']"
        :key="network"
        class="flex cursor-pointer items-center px-5 py-2 hover:bg-[#E9ECEF]"
      >
        <!-- 對於非 'copy_link' 的網絡，將圖標和文字分開 -->
        <template v-if="network !== 'copy_link'">
          <div class="flex items-center rounded-lg p-1">
            <SocialShare
              :network="network"
              :styled="false"
              :label="true"
              class="flex items-center rounded-lg p-1"
            >
              <!-- icon -->
              <template #icon>
                <!-- <IconJobFacebook v-if="network === 'facebook'" class="svg-icon-4" filled />
                <IconJobLine v-else-if="network === 'line'" class="svg-icon-4" filled />
                <IconJobEmail v-else-if="network === 'email'" class="svg-icon-4" filled /> -->
              </template>

              <!-- text -->
              <template #label>
                <p class="ml-2 w-[160px] text-[#495057]">分享至 {{ network }}</p>
                <!-- <div class="ml-2 w-10 text-[#495057]">
                  <p v-if="network === 'email'">發送至 {{ toUpperCase(network) }}</p>
                  <p v-else>分享至 {{ toUpperCase(network) }}</p>
                </div> -->
              </template>
            </SocialShare>
          </div>
        </template>

        <!-- 對於 'copy_link'，保持原樣 -->
        <template v-else>
          <div class="flex items-center rounded-lg p-1" @click="copyToClipboard">
            <!-- <IconJobCopyLink class="svg-icon-6 rounded-lg p-1" filled /> -->
            <span class="ml-2 text-[#495057]">
              <p>複製連結</p>
            </span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
