<script setup>
import { computed } from "vue";
import { useGetBlogImageUrl } from "@/composables/getBlogImageUrl";
import { useGetImageUrl } from "@/composables/getImageUrl";
import blogsData from "@/assets/blogs.json";

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
});

const blog = computed(() => {
  return blogsData.find((blog) => blog.slug === props.slug);
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
      <blockquote class="px-6 py-3 bg-primary-300 rounded-xl">
        {{ blog.content.blockQuote }}
      </blockquote>
      <p>{{ blog.content.text2 }}</p>
      <img :src="useGetBlogImageUrl(blog.image)" alt="" />
      <h3>{{ blog.content.header2 }}</h3>
      <p>{{ blog.content.text3 }}</p>
      <h3>{{ blog.content.header3 }}</h3>
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
    </div>
  </section>
</template>
