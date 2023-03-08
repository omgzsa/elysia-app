<script setup>
import { ref } from "vue";
import HomeHero from "../components/home/HomeHero.vue";
import HomeServices from "../components/home/HomeServices.vue";

import "vue3-carousel/dist/carousel.css";

const slides = ref([
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    alt: "mirrored image of the same woman, one is in black and white",
    text: "Lorem ipsum dolor sit amet consectetur. Magna faucibus sed est facilisis.",
    img: "woman_hero_1.webp",
    color: "bg-white",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur",
    alt: "a woman stretching her legs",
    text: "Lorem ipsum dolor sit amet consectetur. Magna faucibus sed est facilisis elementum. Mauris enim fringilla diam ultricies suspendisse purus elit.",
    img: "woman_hero_2.webp",
    color: "bg-secondary-200",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    alt: "a woman smiling",
    text: "Lorem ipsum dolor sit amet consectetur. Magna faucibus sed est facilisis elementum. Mauris enim fringilla diam.",
    img: "woman_hero_3.webp",
    color: "bg-accent-200",
  },
]);
</script>

<template>
  <section>
    <HomeHero :slides="slides" />
  </section>
  <section>
    <HomeServices />
  </section>
</template>
