<script setup>
import { computed } from 'vue';

const btnType = defineModel({
  btnType: {
    type: String,
    default: 'preview'
  }
});

const buttonTypeClass = computed(() => {
  let buttonTypeClassContent = 'border border-solid border-yellow bg-yellow/10 ';
  switch (btnType.value) {
    case 'edit':
      buttonTypeClassContent =
        'border border-solid border-blue-500 bg-blue/10 hover:bg-blue/500 hover:border-blue-50/10 hover:text-white';
      break;
    case 'del':
      buttonTypeClassContent =
        'border border-solid border-red-500 bg-red hover:bg-red hover:border-red-500/10 hover:text-white';
      break;
    default: // default primary
      buttonTypeClassContent =
        'border border-solid border-yellow-500 bg-yellow/10 hover:bg-yellow hover:border-yellow/10 hover:text-white';
      break;
  }
  return buttonTypeClassContent;
});
</script>

<template>
  <button
    :class="buttonTypeClass"
    class="select-none rounded-full px-4 py-1 text-base duration-300"
  >
    <slot></slot>
  </button>
</template>
