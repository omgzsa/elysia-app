<script setup>
import { useGetBlogImageUrl } from "../../composables/getBlogImageUrl";

defineProps({
  blog: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <AppLink
    :to="{ name: 'blog.single', params: { slug: blog.slug } }"
    class="max-w-xs sm:max-w-sm mx-auto group hover:no-underline focus:no-underline border border-gray-400 rounded-xl"
  >
    <img
      role="presentation"
      class="object-cover w-full rounded-t-xl h-44 dark:bg-gray-500"
      :src="useGetBlogImageUrl(blog.image)"
    />
    <div class="p-6 space-y-2">
      <h3
        class="text-2xl font-semibold group-hover:underline group-focus:underline"
      >
        {{ blog.title }}
      </h3>
      <span class="text-xs text-accent-100 tracking-wide">{{
        blog.createdAt
      }}</span>
      <p>{{ blog.content.text1.slice(0, 120) }}..</p>
    </div>
  </AppLink>
</template>
