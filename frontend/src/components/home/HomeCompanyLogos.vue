<script setup>
import { ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import { useGetImageUrl } from "../../composables/getImageUrl";

import "vue3-carousel/dist/carousel.css";

const images = [
  {
    name: "Bioderma Laboratorie Dermatologique",
    logo: "bioderma_logo.webp",
  },
  {
    name: "CeraVe",
    logo: "cerave_logo.webp",
  },
  {
    name: "La Roche-Posay Laboratorie Pharmaceutique",
    logo: "la_roche-posay_logo.webp",
  },
  {
    name: "THALGO - La Beute Marine",
    logo: "thalgo_logo.webp",
  },
  {
    name: "VICHY Laboratoires",
    logo: "vichy_logo.webp",
  },
  {
    name: "Z0 Skin Health",
    logo: "zo-skin-health_logo.webp",
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
});
</script>
<template>
  <Carousel
    :settings="settings"
    :breakpoints="breakpoints"
    :wrap-around="true"
    :autoplay="3000"
    class="bg-primary-100 py-16"
  >
    <Slide v-for="(image, index) in images" :key="index">
      <img :src="useGetImageUrl(image.logo)" :alt="image.name" />
    </Slide>
  </Carousel>
</template>
