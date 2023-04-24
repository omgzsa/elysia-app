<script setup>
import blogsData from "@/assets/blogs.json";
import BlogListItem from "./BlogListItem.vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <section class="max-w-screen-xl site-padding space-y-12">
    <div class="space-y-4 mb-4 text-center">
      <span class="subheading">blog</span>
      <h2>{{ title }}</h2>
    </div>
    <div
      class="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      <BlogListItem
        v-for="blog in blogsData"
        :key="blog.id"
        :blog="blog"
        class="mx-auto"
      />
    </div>
  </section>
</template>
