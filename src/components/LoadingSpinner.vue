<script setup>
import { defineProps } from "vue";

defineProps({
  text: {
    type: String,
    default: "Loading...",
  },
});
</script>

<template>
  <div
    class="container mx-auto py-10 grid place-content-center place-items-center"
  >
    <div class="flex flex-col items-center gap-2">
      <p>{{ text }}</p>
      <span class="loader"></span>
    </div>
  </div>
</template>

<style scoped>
.loader {
  width: 36px;
  height: 36px;
  border: 3px solid;
  border-color: #e7c899 transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
