<script setup>
defineProps({
  text: {
    type: String,
    default: "Error...",
  },
});
</script>

<template>
  <div
    class="container mx-auto py-10 grid place-content-center place-items-center"
  >
    <div class="flex flex-col items-center gap-2">
      <p class="text-2xl">{{ text }}</p>
    </div>
  </div>
</template>
