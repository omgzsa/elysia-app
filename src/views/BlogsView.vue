<script setup>
import { ref, onMounted, inject } from "vue";
import { useHead } from "@vueuse/head";
import BlogListItem from "@/components/blog/BlogListItem.vue";

const directus = inject('$directus');

const loading = ref(false);
const blogs = ref([]);
const error = ref(null);

async function fetchBlogs() {
  loading.value = true;
  try {
    const response = await directus.getBlogs({
      sort: "-datum",
    });
    blogs.value = response;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    error.value = error;
  } finally {
    loading.value = false;
  }
};

onMounted(async () => {
  await fetchBlogs();
});

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
      <div v-if="loading" class="flex items-center mx-auto">
        Blog betöltése ...
      </div>
      <BlogListItem v-else v-for="blog in blogs" :key="blog.id" :blog="blog" />
    </div>
  </div>
</template>
