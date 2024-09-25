<script setup>
definePageMeta({
  middleware: (to, from) => {
    console.log('address=>', { to, from });
  }
});
</script>

<template>
  <div>Page: about</div>
</template>
