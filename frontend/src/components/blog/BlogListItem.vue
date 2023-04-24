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
  <div
    class="max-w-xs sm:max-w-sm mx-auto group hover:no-underline focus:no-underline border rounded-xl"
  >
    <img
      role="presentation"
      class="object-cover w-full rounded-t-xl h-44"
      width="128"
      height="32"
      :src="useGetBlogImageUrl(blog.image)"
    />
    <div class="p-4 space-y-2">
      <AppLink :to="{ name: 'blog.single', params: { slug: blog.slug } }">
        <h3
          class="text-xl font-bold group-hover:underline group-focus:underline"
        >
          {{ blog.title }}
        </h3>
      </AppLink>
      <span class="text-xs text-accent-100 tracking-wide">{{
        blog.createdAt
      }}</span>
      <p>{{ blog.content.text1.slice(0, 120) }}..</p>
    </div>
  </div>
</template>
