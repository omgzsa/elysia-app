<script setup>
import { ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import { useGetImageUrl } from "../../composables/getImageUrl";

import "vue3-carousel/dist/carousel.css";

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
    itemsToShow: 3,
  },
  1280: {
    itemsToShow: 5,
  },
});
</script>

<template>
  <Carousel
    aria-label="galéria képek"
    :settings="settings"
    :breakpoints="breakpoints"
    :wrap-around="true"
    :transition="500"
    class="p-4"
  >
    <Slide v-for="(image, index) in images" :key="index">
      <div class="carousel__item">
        <img :src="useGetImageUrl(image.img)" :alt="image.name" />
      </div>
    </Slide>
  </Carousel>
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
