<script setup>
import { formatDate } from "../../utils/utils";

const getDirectusImg = (imageId) => {
  return `${import.meta.env.VITE_ELYSIA_API_URL}/assets/${imageId}?width=600&height=300&format=webp`;
};

defineProps({
  blog: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="max-w-xs mx-auto border sm:max-w-sm group hover:no-underline focus:no-underline rounded-xl"
  >
    <img
      role="presentation"
      class="object-cover w-full rounded-t-xl h-44"
      width="128"
      height="32"
      :src="getDirectusImg(blog.kep)"
    />
    <div class="p-4 space-y-2">
      <AppLink :to="{ name: 'blog.single', params: { id: blog?.id, slug: blog?.slug } }">
        <h3
          class="text-xl font-bold group-hover:underline group-focus:underline"
        >
          {{ blog?.cim }}
        </h3>
      </AppLink>
      <span class="text-xs tracking-wide text-accent-100">{{
        formatDate(blog?.datum, 'hu-HU')
      }}</span>
      <p>{{ blog?.leiras.slice(0, 120) }}..</p>
    </div>
  </div>
</template>
