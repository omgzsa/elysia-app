<script setup>
import { Carousel, Slide } from "vue3-carousel";
import { useGetImageUrl } from "../../composables/getImageUrl";

import "vue3-carousel/dist/carousel.css";

const images = [
  "bioderma_logo.webp",
  "cerave_logo.webp",
  "la_roche-posay_logo.webp",
  "thalgo_logo.webp",
  "vichy_logo.webp",
  "zo-skin-health_logo.webp",
];
</script>
<template>
  <Carousel
    :items-to-show="3.5"
    :wrap-around="true"
    :autoplay="3000"
    class="bg-primary-100 py-16"
  >
    <Slide v-for="(image, index) in images" :key="index">
      <img :src="useGetImageUrl(image)" />
    </Slide>
  </Carousel>
</template>
