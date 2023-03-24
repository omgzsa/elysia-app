<script setup>
import { ref } from "vue";
import { Carousel, Slide, Pagination } from "vue3-carousel";
import { useGetImageUrl } from "../../composables/getImageUrl";

import "vue3-carousel/dist/carousel.css";

defineProps({
  title: { type: String },
});

const images = [
  {
    name: "rendelo 1",
    img: "galeria_2.webp",
  },
  {
    name: "rendelo 2",
    img: "galeria_3.webp",
  },
  {
    name: "rendelo 3",
    img: "galeria_5.webp",
  },
];

const settings = ref({
  itemsToShow: 1,
  snapAlign: "center",
});

const breakpoints = ref({
  320: {
    itemsToShow: 1,
    snapAlign: "center",
  },
  640: {
    itemsToShow: 2.5,
  },
  960: {
    itemsToShow: 3.75,
  },
  1280: {
    itemsToShow: 5.75,
  },
});
</script>

<template>
  <div class="text-center">
    <span class="text-xs md:text-base tracking-wider uppercase text-gray-500"
      >elysia laser clinic</span
    >
    <h2 class="py-4 lg:mb-10">{{ title }}</h2>
    <Carousel
      aria-label="galéria képek"
      :settings="settings"
      :breakpoints="breakpoints"
      :wrap-around="true"
      :transition="500"
      class=""
    >
      <Slide v-for="(image, index) in images" :key="index">
        <img :src="useGetImageUrl(image.img)" :alt="image.name" />
      </Slide>

      <template #addons>
        <pagination />
      </template>
    </Carousel>
  </div>
</template>

<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: scale(0.8);
}

.carousel__slide--active ~ .carousel__slide {
  transform: scale(0.8);
}

.carousel__slide--prev {
  opacity: 1;
  transform: scale(0.8);
}

.carousel__slide--next {
  opacity: 1;
  transform: scale(0.8);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>
