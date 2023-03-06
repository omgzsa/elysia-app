<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";
import { RouterLink } from "vue-router";
import { useGetImageUrl } from "../../composables/getImageUrl";

defineProps({
  slides: {
    type: Array,
  },
});
</script>

<template>
  <carousel class="text-center py-8">
    <slide v-for="slide in slides" :key="slide.alt">
      <div
        class="carousel__item w-full flex justify-center place-items-center bg-contain bg-no-repeat bg-bottom"
        :style="{ backgroundImage: `url(${useGetImageUrl(slide.img)})` }"
      >
        <div
          class="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl"
        >
          <h1>{{ slide.title }}</h1>
          <p class="mb-8 mt-auto">{{ slide.text }}</p>
          <!-- BUTTONS -->
          <div class="flex flex-col items-center md:mx-auto md:flex-row mb-8">
            <RouterLink :to="{ name: 'services', path: '/services' }">
              <button
                class="rounded-md px-8 py-2 m-1 overflow-hidden relative group cursor-pointer font-medium text-white bg-accent-100 border border-accent-100"
              >
                <span
                  class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"
                ></span>
                <span
                  class="flex flex-row gap-2 relative text-white transition duration-300 group-hover:text-accent-100 ease"
                  >Szolgáltatások</span
                >
              </button>
            </RouterLink>
            <RouterLink :to="{ name: 'about', path: '/about' }">
              <button
                class="rounded-md px-8 py-2 m-1 overflow-hidden relative group cursor-pointer border font-medium border-accent-100 text-accent-100"
              >
                <span
                  class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-accent-100 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"
                ></span>
                <span
                  class="flex flex-row gap-2 relative text-accent-100 transition duration-300 group-hover:text-white ease"
                  >Időpontfoglalás</span
                >
              </button>
            </RouterLink>
          </div>
          <!-- <img :src="useGetImageUrl(slide.img)" :alt="slide.alt" /> -->
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

/* .carousel__item {
  min-height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(40, 207, 187);
} */

.carousel__slide {
  /* padding: 10px; */
}

/* .carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
} */
</style>
