<script setup>
import { useGetImageUrl } from "../../composables/getImageUrl";

defineProps({
  services: { type: Array, required: true },
  title: { type: String },
  description: { type: String },
});
</script>

<template>
  <div class="max-w-screen-xl mx-auto px-2 md:px-4">
    <div class="grid grid-cols-1 gap-y-6 text-center mx-auto max-w-3xl">
      <span class="subheading" v-motion-slide-visible-once-bottom
        >elysia laser clinic</span
      >
      <slot name="title"
        ><h2 v-motion-slide-visible-once-bottom>
          {{ title }}
        </h2></slot
      >
      <p class="mb-8 sm:mb-12" v-motion-slide-visible-once-bottom>
        <slot name="description" />
      </p>
    </div>
    <ul
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-5 gap-y-8 lg:gap-y-12 px-2 items-center"
      name="list"
    >
      <li
        v-for="service in services"
        :key="service.id"
        class="list-item"
        v-motion-slide-visible-once-bottom
      >
        <div class="flex flex-col items-center gap-4">
          <img
            class="h-24 sm:h-32 md:h-full"
            :src="useGetImageUrl(service.img)"
            alt=""
          />
          <p class="font-bold text-xs sm:text-base">
            {{ service.title }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
