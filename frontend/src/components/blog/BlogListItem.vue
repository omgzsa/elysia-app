<script setup>
defineProps({
  blog: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="flex flex-col justify-center items-center gap-4">
    <h2 class="text-2xl font-bold text-center">{{ blog.title }}</h2>
    <p class="text-center">{{ blog.text }}</p>
  </div>
</template>
