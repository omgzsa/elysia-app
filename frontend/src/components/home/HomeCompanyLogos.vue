<script setup>
import { ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import { useGetPartnerLogosUrl } from "../../composables/getPartnerLogosUrl";

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
  {
    name: "DEKA",
    logo: "deka-logo.webp",
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
    aria-label="Partnercégek logói"
    :settings="settings"
    :breakpoints="breakpoints"
    :wrap-around="true"
    :autoplay="3000"
    class="bg-primary-100 py-16"
  >
    <Slide v-for="(image, index) in images" :key="index">
      <img
        :src="useGetPartnerLogosUrl(image.logo)"
        :alt="image.name"
        width="180"
        height="38"
        class="h-12 md:h-16 object-contain object-center"
      />
    </Slide>
  </Carousel>
</template>
