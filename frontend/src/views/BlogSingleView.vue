<script setup>
import { ref, computed } from "vue";
import { useGetBlogImageUrl } from "@/composables/getBlogImageUrl";
import { useGetImageUrl } from "@/composables/getImageUrl";
import blogsData from "@/assets/blogs.json";

import { useHead } from "@vueuse/head";

const blog = computed(() => {
  return blogsData.find((blog) => blog.slug === props.slug);
});

const pageTitle = ref(blog.value.title + " — Elysia Laser Clinic");
const pageDescription = ref(blog.value.content.text1);

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
    {
      property: "og:author",
      content: blog.value.author,
    },
  ],
});

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <section>
    <div class="flex flex-col space-y-8 mx-auto">
      <span
        aria-label="háttérkép az elysia felnagyított logójával"
        role="img"
        class="pt-20 pb-10 text-center lg:pt-32 lg:pb-16 bg-right lg:text-left md:bg-cover md:bg-center bg-no-repeat"
        :style="{
          backgroundImage: `url(${useGetImageUrl(
            'szolgaltatas-header-bg.webp'
          )})`,
        }"
      >
        <div
          class="flex flex-col space-y-1 max-w-screen-md mx-auto site-padding"
        >
          <span class="subheading">blog</span>
          <h2>{{ blog.title }}</h2>
        </div>
      </span>
    </div>
    <div class="max-w-screen-md site-padding mx-auto py-10 space-y-6">
      <p>{{ blog.content.text1 }}</p>
      <h3>{{ blog.content.header1 }}</h3>
      <p>{{ blog.content.text2 }}</p>
      <blockquote
        class="max-w-md mx-auto italic tracking-wide text-base sm:text-lg px-9 py-10 bg-primary-200 rounded-xl"
      >
        {{ blog.content.blockQuote }}
      </blockquote>
      <h3>{{ blog.content.header2 }}</h3>
      <p>{{ blog.content.text3 }}</p>
      <h3>{{ blog.content.header3 }}</h3>
      <img :src="useGetBlogImageUrl(blog.image)" alt="" />
      <p>{{ blog.content.text4 }}</p>
      <h3>{{ blog.content.header4 }}</h3>
      <p>{{ blog.content.text5 }}</p>
      <h3>{{ blog.content.header5 }}</h3>
      <p>{{ blog.content.text6 }}</p>
      <div>
        <h3>{{ blog.content.bulletPointsTitle }}</h3>
        <ul>
          <li v-for="point in blog.content.bulletPoints" :key="point.id">
            {{ point.text }}
          </li>
        </ul>
      </div>
      <div
        class="flex flex-col sm:flex-row sm:items-center sm:gap-x-2 pt-6 text-xs sm:text-sm italic"
      >
        <span class="inline">{{ blog.author }}</span> —
        <span class="inline">{{ blog.createdAt }}</span>
      </div>
    </div>
  </section>
</template>
