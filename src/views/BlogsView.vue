<script setup>
import { ref } from "vue";
import { useHead } from "@vueuse/head";
import blogsData from "@/assets/blogs.json";
import BlogListItem from "@/components/blog/BlogListItem.vue";

const pageTitle = ref("Blog — Elysia Laser Clinic");
const pageDescription = ref(
  "Böngésszen a legfrissebb bejegyzéseink között, és ismerje meg a legújabb esztétikai és egészségügyi trendeket.",
);

useHead({
  title: pageTitle.value,
  meta: [
    {
      name: "description",
      content: pageDescription.value,
    },
    {
      property: "og:title",
      content: pageTitle.value,
    },
    {
      property: "og:description",
      content: pageDescription.value,
    },
    {
      property: "og:url",
      content: "https://elysia.hu/blog/",
    },
  ],
});
</script>

<template>
  <div class="blog">
    <div class="flex flex-col mx-auto space-y-8">
      <AppHeader>
        <template #subtitle> elysia laser clinic </template>
        <template #title> Blog </template>
      </AppHeader>
    </div>
    <div
      class="grid justify-center max-w-screen-xl grid-cols-1 gap-6 py-12 mx-auto sm:grid-cols-2 lg:grid-cols-3 site-padding"
    >
      <BlogListItem v-for="blog in blogsData" :key="blog.slug" :blog="blog" />
    </div>
  </div>
</template>
