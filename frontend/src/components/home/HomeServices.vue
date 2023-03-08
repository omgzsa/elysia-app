<script setup>
import { useGetImageUrl } from "../../composables/getImageUrl";

defineProps({
  services: { type: Array, required: true },
  title: { type: String },
  description: { type: String },
});
</script>

<template>
  <div class="max-w-screen-xl mx-auto">
    <div class="grid grid-cols-1 gap-y-6 text-center mx-auto px-2 max-w-4xl">
      <span class="text-xs md:text-base tracking-wider uppercase text-gray-500"
        >elysia laser clinic</span
      >
      <slot name="title"
        ><h2>{{ title }}</h2></slot
      >
      <p class="mb-8">
        <slot name="description" />
      </p>
    </div>
    <ul
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 xl:grid-cols-5 gap-8 xl:gap-2 px-2 items-center"
    >
      <li v-for="service in services" :key="service.id">
        <div class="flex flex-col items-center gap-4">
          <img
            class="h-32 md:h-full"
            :src="useGetImageUrl(service.img)"
            alt=""
          />
          <p class="font-bold">{{ service.title }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
