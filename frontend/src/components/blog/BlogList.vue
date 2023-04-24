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

    <!-- <AppLink :to="{ name: 'blogs.show' }">
      <button
        class="rounded-md px-8 py-2 m-1 overflow-hidden relative group cursor-pointer font-medium text-white bg-accent-100 border border-accent-100"
      >
        <span
          class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"
        ></span>
        <span
          class="font-bold flex flex-row gap-2 relative text-white transition duration-300 group-hover:text-accent-100 ease"
          >További bejegyzések</span
        >
      </button>
    </AppLink> -->
  </section>
</template>
