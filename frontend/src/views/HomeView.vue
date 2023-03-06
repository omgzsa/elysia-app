<script setup>
import { ref } from "vue";
import HomeHero from "../components/home/HomeHero.vue";

const slides = ref([
  {
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet consectetur. Magna faucibus sed est facilisis.",
    img: "woman_hero_1.webp",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur. Magna faucibus sed est facilisis elementum. Mauris enim fringilla diam ultricies suspendisse purus elit.",
    img: "woman_hero_2.webp",
  },
  {
    title: "Lorem ipsum dolor",
    text: "Lorem ipsum dolor sit amet consectetur. Magna faucibus sed est facilisis elementum. Mauris enim fringilla diam.",
    img: "woman_hero_3.webp",
  },
]);
</script>

<template>
  <section>
    <HomeHero :slides="slides" />
  </section>
</template>
