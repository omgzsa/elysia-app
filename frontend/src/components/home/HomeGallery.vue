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
    alt: "rendelo 1",
    img: "galeria-1.webp",
  },
  {
    alt: "rendelo 2",
    img: "galeria-2.webp",
  },
  {
    alt: "rendelo 3",
    img: "galeria-3.webp",
  },
  {
    alt: "rendelo 3",
    img: "galeria-4.webp",
  },
  {
    alt: "rendelo 3",
    img: "galeria-5.webp",
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
    itemsToShow: 1.5,
  },
  960: {
    itemsToShow: 2.5,
  },
  1280: {
    itemsToShow: 3.5,
  },
});
</script>

<template>
  <div class="text-center">
    <span class="subheading">elysia laser clinic</span>
    <h2 class="py-4 mb-4 lg:mb-10">
      {{ title }}
    </h2>
    <Carousel
      aria-label="galéria képek"
      v-bind="settings"
      :breakpoints="breakpoints"
      :wrap-around="true"
      :transition="500"
    >
      <Slide v-for="(image, index) in images" :key="index">
        <img
          :src="useGetImageUrl(image.img)"
          :alt="image.alt"
          height="250"
          width="400"
          class="w-full rounded-xl"
        />
      </Slide>

      <template #addons>
        <pagination />
      </template>
    </Carousel>
  </div>
</template>

<style scoped>
.carousel > * {
  overflow: hidden;
}
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
  opacity: 0.5;
  transform: scale(0.8);
}

.carousel__slide--active ~ .carousel__slide {
  transform: scale(0.8);
}

.carousel__slide--prev {
  opacity: 0.5;
  transform: scale(0.8);
}

.carousel__slide--next {
  opacity: 0.5;
  transform: scale(0.8);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1);
}
</style>
