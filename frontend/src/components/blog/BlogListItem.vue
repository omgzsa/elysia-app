<script setup>
import { useGetImageUrl } from "../../composables/getImageUrl";

defineProps({
  blog: {
    type: Object,
    required: true,
  },
  // image: {
  //   type: String,
  //   required: true,
  // },
});
</script>
<template>
  <a
    rel="noopener noreferrer"
    href="#"
    class="max-w-xs sm:max-w-sm mx-auto group hover:no-underline focus:no-underline border border-gray-400 rounded-xl"
  >
    <img
      role="presentation"
      class="object-cover w-full rounded-t-xl h-44 dark:bg-gray-500"
      :src="useGetImageUrl(blog.image)"
    />
    <div class="p-6 space-y-2">
      <h3
        class="text-2xl font-semibold group-hover:underline group-focus:underline"
      >
        {{ blog.title }}
      </h3>
      <span class="text-xs text-accent-100 tracking-wide"
        >January 21, 2021</span
      >
      <p>{{ blog.text.slice(0, 120) }}..</p>
    </div>
  </a>
</template>
