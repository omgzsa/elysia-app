<script setup>
import { ref } from "vue";
import HomeHero from "../components/home/HomeHero.vue";

const slides = ref([
  {
    title: "Lorem ipsum dolor sit amet",
    alt: "mirrored image of the same woman, one is in black and white",
    text: "Lorem ipsum dolor sit amet consectetur. Magna faucibus sed est facilisis.",
    img: "woman_hero_1_mobile.webp",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    alt: "a woman stretching her legs",
    text: "Lorem ipsum dolor sit amet consectetur. Magna faucibus sed est facilisis elementum. Mauris enim fringilla diam ultricies suspendisse purus elit.",
    img: "woman_hero_2_mobile.webp",
  },
  {
    title: "Lorem ipsum dolor",
    alt: "a woman smiling",
    text: "Lorem ipsum dolor sit amet consectetur. Magna faucibus sed est facilisis elementum. Mauris enim fringilla diam.",
    img: "woman_hero_3_mobile.webp",
  },
]);
</script>

<template>
  <section>
    <HomeHero :slides="slides" />
  </section>
</template>
