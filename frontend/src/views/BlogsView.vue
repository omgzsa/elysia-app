<script setup>
// import { computed } from "vue";
import blogsData from "@/assets/blogs.json";
import BlogListItem from "../components/blog/BlogListItem.vue";

// const blog = computed(() => {
//   return blogsData.find(
//     (blog) => blog.slug === "mire-is-jo-az-intim-lezeres-kezeles"
//   );
// });

// console.log(blog.value.slug);
</script>

<template>
  <div class="blog">
    <div class="flex flex-col space-y-8 mx-auto">
      <AppHeader>
        <template #subtitle> elysia laser clinic </template>
        <template #title> Blog </template>
      </AppHeader>
    </div>
    <div
      class="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto py-12 site-padding"
    >
      <BlogListItem
        v-for="blog in blogsData"
        :key="blog.slug"
        :blog="blog"
        class="mx-auto"
      />
    </div>
  </div>
</template>
