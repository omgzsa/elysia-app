<script setup>
import { ref } from "vue";
import BlogListItem from "./BlogListItem.vue";

const blogs = ref([
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet consectetur. Magna faucibus sed est facilisis elementum. Mauris enim fringilla diam ultricies suspendisse purus elit. Lorem ipsum dolor sit amet consectetur. Magna faucibus sed est facilisis elementum. Mauris enim fringilla diam ultricies suspendisse purus elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur. Magna faucibus sed est facilisis elementum. Mauris enim fringilla diam ultricies suspendisse purus elit. Lorem ipsum dolor sit amet consectetur. Magna faucibus sed est facilisis elementum. Mauris enim fringilla diam ultricies suspendisse purus elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    text: "Lorem ipsum dolor sit amet consectetur. Magna faucibus sed est facilisis elementum. Mauris enim fringilla diam ultricies suspendisse purus elit. Lorem ipsum dolor sit amet consectetur. Magna faucibus sed est facilisis elementum. Mauris enim fringilla diam ultricies suspendisse purus elit.",
  },
]);
</script>
<template>
  <div>
    <BlogListItem v-for="blog in blogs" :key="blog.id" :blog="blog" />
  </div>
</template>
