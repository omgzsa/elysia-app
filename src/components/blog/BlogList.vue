<script setup>
import { computed } from "vue";
import blogsData from "@/assets/blogs.json";
import BlogListItem from "./BlogListItem.vue";

const lastThreeBlogs = computed(() => {
  return blogsData.slice(0, 3);
});

defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <section class="grid max-w-screen-xl space-y-12 site-padding">
    <div class="mb-4 space-y-4 text-center">
      <span class="subheading">blog</span>
      <h2>{{ title }}</h2>
    </div>
    <div
      class="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      <BlogListItem
        v-for="blog in lastThreeBlogs"
        :key="blog.id"
        :blog="blog"
      />
    </div>
    <div class="mx-auto">

      <AppLink to="/blog">
        <button
          class="relative px-8 py-2 overflow-hidden font-medium text-white border rounded-md cursor-pointer fo group bg-accent-100 border-accent-100"
        >
          <span
            class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"
          ></span>
          <span
            class="relative flex flex-row items-center gap-2 font-bold text-white transition duration-300 group-hover:text-accent-100 ease"
            >További cikkeink</span
          >
        </button>
      </AppLink>
    </div>
  </section>
</template>
