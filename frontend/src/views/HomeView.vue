<script setup>
import { ref } from "vue";
import HomeHero from "../components/home/HomeHero.vue";
import HomeServices from "../components/home/HomeServices.vue";
import HomeIntroduction from "../components/home/HomeIntroduction.vue";
import HomeCompanyLogos from "../components/home/HomeCompanyLogos.vue";
import HomeGallery from "../components/home/HomeGallery.vue";
import HomeTestimonials from "../components/home/HomeTestimonials.vue";
import HomeCallToAction from "../components/home/HomeCallToAction.vue";
import BlogList from "../components/blog/BlogList.vue";
import TheContact from "../components/TheContact.vue";
import TheFooter from "../components/TheFooter.vue";

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

const services = ref([
  {
    id: 1,
    title: "Orvosi magánrendelés",
    img: "orvosi_maganrendeles.webp",
  },
  {
    id: 2,
    title: "Lézerkezelések",
    img: "lezerkezelesek.webp",
  },
  {
    id: 3,
    title: "Orvosi esztétika",
    img: "orvosi_esztetika.webp",
  },
  {
    id: 4,
    title: "Plasztikai sebészet",
    img: "plasztikai_sebeszet.webp",
  },
  {
    id: 5,
    title: "Z0 Skin Health",
    img: "z0_skin_health.webp",
  },
]);
</script>

<template>
  <HomeHero :slides="slides" />
  <section>
    <HomeServices title="Kiemelt szolgáltatások" :services="services">
      <template #description>
        Lorem ipsum dolor sit amet consectetur. Pulvinar hendrerit arcu et quam
        blandit integer blandit pellentesque maecenas. Amet diam volutpat
        pellentesque a risus.
      </template>
    </HomeServices>
  </section>
  <section>
    <HomeIntroduction title="Miért mi? Kik vagyunk?">
      <template #introduction>
        Lorem ipsum dolor sit amet consectetur. Pulvinar hendrerit arcu et quam
        blandit integer blandit pellentesque maecenas. Amet diam volutpat
        pellentesque a risus.<br /><br />
        Quam et ut fusce faucibus in pretium etiam praesent. In diam amet augue
        tincidunt nec sed iaculis lobortis. Suspendisse commodo in in habitant
        aliquam sollicitudin egestas congue velit. Dignissim volutpat diam
        pulvinar mauris aliquet lectus nullam facilisi. Lorem rutrum tortor
        purus sit est sodales felis vulputate pellentesque. In fringilla a
        viverra sed facilisis. Egestas pulvinar vitae diam elit diam volutpat
        quam.
      </template>
    </HomeIntroduction>
  </section>
  <HomeCompanyLogos />
  <HomeGallery title="Galéria" />
  <HomeTestimonials title="Rólunk mondták" />
  <section>
    <HomeCallToAction />
  </section>
  <BlogList title="Tudjon meg többet szolgáltatásainkról" />
  <TheContact title="Foglalja le időpontját pár kattintással!" />
  <TheFooter />
</template>
