<script setup>
import { computed } from "vue";
import { useGetImageUrl } from "../../composables/getImageUrl";

import servicesData from "@/assets/services.json";

defineProps({
  title: { type: String },
  description: { type: String },
});

// computed property that returns the isFeatured services
const servicesFeatured = computed(() => {
  return servicesData.filter((service) => service.isFeatured);
});
</script>

<template>
  <div class="max-w-screen-xl mx-auto site-padding">
    <div class="grid grid-cols-1 gap-y-6 text-center mx-auto max-w-3xl">
      <span class="subheading">elysia laser clinic</span>
      <slot name="title"
        ><h2>
          {{ title }}
        </h2></slot
      >
      <p class="mb-8 sm:mb-12">
        <slot name="description" />
      </p>
    </div>
    <ul
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-8 lg:gap-y-12 px-2 items-start"
      name="list"
    >
      <li
        v-for="service in servicesFeatured"
        :key="service.id"
        class="list-item transform transition duration-300 ease-in-out hover:scale-105"
      >
        <AppLink
          class="flex flex-col items-center gap-4"
          :to="{
            name: 'services.category',
            params: { category: service.slug },
          }"
        >
          <img
            class="h-24 sm:h-32 w-full object-contain"
            :src="useGetImageUrl(service.image)"
            alt=""
          />
          <p class="font-semibold text-center text-xs sm:text-base">
            {{ service.name }}
          </p>
        </AppLink>
      </li>
    </ul>
  </div>
</template>
