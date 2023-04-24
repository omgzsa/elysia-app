<script setup>
import { Carousel, Slide, Pagination } from "vue3-carousel";
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
      class="w-full bg-contain lg:bg-cover xl:bg-top min-h-[580px] xl:min-h-[900px] bg-no-repeat bg-bottom"
      :style="{ backgroundImage: `url(${useGetImageUrl(slide.img)})` }"
      :class="slide.color"
      v-motion-slide-bottom
      :delay="300"
    >
      <div
        class="max-w-screen-xl site-padding flex flex-col space-y-6"
        :class="slide.id === 2 ? 'items-start' && 'text-left' : 'items-center'"
      >
        <h1 class="max-w-xl" v-motion-slide-bottom :delay="500">
          {{ slide.title }}
        </h1>
        <p class="max-w-lg" v-motion-slide-bottom :delay="700">
          {{ slide.text }}
        </p>

        <AppLink :to="{ name: 'services' }">
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
        </AppLink>
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
