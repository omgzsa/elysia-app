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
    <div class="flex flex-col mx-auto space-y-8">
      <span
        aria-label="háttérkép az elysia felnagyított logójával"
        role="img"
        class="pt-20 pb-10 text-center bg-right bg-no-repeat lg:pt-32 lg:pb-16 lg:text-left md:bg-cover md:bg-center"
        :style="{
          backgroundImage: `url(${useGetImageUrl(
            'szolgaltatas-header-bg.webp',
          )})`,
        }"
      >
        <div
          class="flex flex-col max-w-screen-md mx-auto space-y-1 site-padding"
        >
          <span class="subheading">blog</span>
          <h2>{{ blog.title }}</h2>
        </div>
      </span>
    </div>
    <div class="max-w-screen-md py-10 mx-auto space-y-6 site-padding">
      <p>{{ blog.content.text1 }}</p>
      <h3>{{ blog.content.header1 }}</h3>
      <p>{{ blog.content.text2 }}</p>
      <blockquote
        class="max-w-md py-10 mx-auto text-base italic tracking-wide sm:text-lg px-9 bg-primary-200 rounded-xl"
      >
        {{ blog.content.blockQuote }}
      </blockquote>
      <h3>{{ blog.content.header2 }}</h3>
      <p>{{ blog.content.text3 }}</p>
      <h3>{{ blog.content.header3 }}</h3>
      <p>{{ blog.content.text4 }}</p>
      <img :src="useGetBlogImageUrl(blog.image)" alt="" />
      <div class="space-y-6">
        <h3>{{ blog.content.bulletPointsTitle }}</h3>
        <ul class="list-disc list-inside">
          <li v-for="point in blog.content.bulletPoints" :key="point.id">
            {{ point.text }}
          </li>
        </ul>
      </div>
      <h3>{{ blog.content.header4 }}</h3>
      <p>{{ blog.content.text5 }}</p>
      <h3>{{ blog.content.header5 }}</h3>
      <p>{{ blog.content.text6 }}</p>
      <div class="space-y-6">
        <h3>{{ blog.content.bulletPointsTitle2 }}</h3>
        <ul class="list-disc list-inside">
          <li v-for="point in blog.content.bulletPoints2" :key="point.id">
            {{ point.text }}
          </li>
        </ul>
      </div>
      <h3>{{ blog.content.header6 }}</h3>
      <p>{{ blog.content.text7 }}</p>
      <h3>{{ blog.content.header7 }}</h3>
      <p>{{ blog.content.text8 }}</p>
      <h3>{{ blog.content.header8 }}</h3>
      <p>{{ blog.content.text9 }}</p>
      <div
        class="flex flex-col text-xs italic sm:flex-row sm:items-center sm:gap-x-2 sm:text-sm"
      >
        <span class="inline">{{ blog.author }}</span> —
        <span class="inline">{{ blog.createdAt }}</span>
      </div>
      <div v-if="blog.hasCrossLink">
        <AppLink v-slot="{ navigate }" :to="`/${blog.crossLink.linkName}`">
          <button
            class="relative px-8 py-2 overflow-hidden font-medium text-white border rounded-md cursor-pointer fo group bg-accent-100 border-accent-100"
            @click="navigate"
            role="link"
          >
            <span
              class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"
            ></span>
            <span
              class="relative flex flex-row items-center gap-2 font-bold text-white transition duration-300 group-hover:text-accent-100 ease"
              >{{ blog.crossLink.label }}</span
            >
          </button>
        </AppLink>
      </div>
    </div>
  </section>
</template>
