<script setup>
import { Carousel, Slide, Pagination } from "vue3-carousel";
import { RouterLink } from "vue-router";
import { useGetImageUrl } from "../../composables/getImageUrl";

import "vue3-carousel/dist/carousel.css";

defineProps({
  slides: { type: Object, required: true },
});
</script>

<template>
  <carousel>
    <slide
      v-for="slide in slides"
      :key="slide.id"
      class="grid grid-cols-1 items-center w-full bg-contain lg:bg-cover xl:bg-top min-h-[580px] xl:min-h-[900px] bg-no-repeat bg-bottom"
      :style="{ backgroundImage: `url(${useGetImageUrl(slide.img)})` }"
      :class="slide.color"
      v-motion-slide-bottom
      :delay="100"
    >
      <div class="max-w-screen-xl px-2 md:px-4 mx-auto flex flex-col gap-y-8">
        <h1 class="max-w-lg mx-auto" v-motion-slide-bottom :delay="300">
          {{ slide.title }}
        </h1>
        <p class="max-w-md mx-auto" v-motion-slide-bottom :delay="200">
          {{ slide.text }}
        </p>

        <div class="flex flex-col justify-between">
          <RouterLink :to="{ name: 'services' }">
            <button
              class="rounded-md px-8 py-2 m-1 overflow-hidden relative group cursor-pointer font-medium text-white bg-accent-100 border border-accent-100"
            >
              <span
                class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"
              ></span>
              <span
                class="font-bold flex flex-row gap-2 relative text-white transition duration-300 group-hover:text-accent-100 ease"
                >Szolgáltatások</span
              >
            </button>
          </RouterLink>
          <!-- <RouterLink :to="{ name: 'about', path: '/about' }">
            <button
              class="rounded-md px-8 py-2 m-1 overflow-hidden relative group cursor-pointer border font-medium border-accent-100 text-accent-100"
            >
              <span
                class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-accent-100 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"
              ></span>
              <span
                class="font-bold flex flex-row gap-2 relative text-accent-100 transition duration-300 group-hover:text-white ease"
                >Időpontfoglalás</span
              >
            </button>
          </RouterLink> -->
        </div>
      </div>
    </slide>

    <template #addons>
      <!-- <navigation /> -->
      <pagination />
    </template>
  </carousel>
</template>

<style>
.carousel {
  padding-left: 0px;
}

.carousel__pagination-button::after {
  background-color: lightgray;
}

.carousel__pagination-button:hover::after,
.carousel__pagination-button--active::after {
  background-color: #586c63;
}
</style>
