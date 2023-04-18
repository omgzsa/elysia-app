<script setup>
import { ref } from "vue";
import BlogListItem from "./BlogListItem.vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
});

const blogs = ref([
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    image: "blog-img-1.webp",
    text: "Lorem ipsum dolor sit amet consectetur. Magna faucibus sed est facilisis elementum.",
  },
  {
    id: 2,
    title: "Lorem ipsum ",
    image: "blog-img-2.webp",
    text: "Lorem ipsum dolor sit amet consectetur. Magna faucibus sed est facilisis elementum. Mauris enim fringilla diam ultricies suspendisse purus elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    image: "blog-img-3.webp",
    text: "Lorem ipsum dolor sit amet consectetur. Magna faucibus sed est facilisis elementum. Mauris enim fringilla diam ultricies suspendisse purus elit. Lorem ipsum dolor sit amet consectetur.",
  },
]);
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
        v-for="blog in blogs"
        :key="blog.id"
        :blog="blog"
        class="mx-auto"
      />
    </div>
  </section>
</template>
