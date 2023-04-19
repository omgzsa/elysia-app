<script setup>
import { ref } from "vue";
// import { useMotion } from "@vueuse/motion";
import HomeHero from "../components/home/HomeHero.vue";
import HomeServices from "../components/home/HomeServices.vue";
import HomeIntroduction from "../components/home/HomeIntroduction.vue";
import HomeCompanyLogos from "../components/home/HomeCompanyLogos.vue";
import HomeGallery from "../components/home/HomeGallery.vue";
import HomeTestimonials from "../components/home/HomeTestimonials.vue";
import HomeCallToAction from "../components/home/HomeCallToAction.vue";
import BlogList from "../components/blog/BlogList.vue";
import TheParallax from "../components/TheParallax.vue";
import TheContact from "../components/TheContact.vue";

import "vue3-carousel/dist/carousel.css";

const slides = ref([
  {
    id: 1,
    title: "Tökéletes vonalak, magabiztos megjelenés",
    alt: "tükrözött kép egy nőről, az egyik fekete-fehér a másik színes",
    text: "Nyerje vissza önbizalmát szakembereink segítségével. Plasztikai sebészet a legmagasabb minőségben Győrben.",
    img: "woman_hero_1.webp",
    color: "bg-white",
  },
  {
    id: 2,
    title: "Élvezze gyönyörű és sima bőrét egész évben",
    alt: "egy nő nyújtja a lábát",
    text: "Lézeres szőrtelenítés a legújabb technológiával Győrben. Intsen búcsút a makacsul visszatérő, benőtt szőrszálaknak!",
    img: "woman_hero_2.webp",
    color: "bg-secondary-200",
  },
  {
    id: 3,
    title: "Fedezze fel bőre igazi szépségét",
    alt: "egy mosolygó fiatal nő",
    text: "Az Elysia lézer központ mindenki számára biztosítja a legjobb kezeléseket és szolgáltatásokat. Kezeléseink széles választéka általal a tökéletes bőr Ön számára is elérhető.",
    img: "woman_hero_3.webp",
    color: "bg-accent-200",
  },
]);

const services = ref([
  {
    id: 1,
    title: "Orvosi magánrendelés",
    slug: "orvosi-maganrendeles",
    img: "orvosi_maganrendeles.webp",
  },
  {
    id: 2,
    title: "Lézerkezelések",
    slug: "lezerkezelesek",
    img: "lezerkezelesek.webp",
  },
  {
    id: 3,
    title: "Orvos esztétika",
    slug: "orvos-esztetika",
    img: "orvos_esztetika.webp",
  },
  {
    id: 4,
    title: "Plasztikai sebészet",
    slug: "plasztikai-sebeszet",
    img: "plasztikai_sebeszet.webp",
  },
  {
    id: 5,
    title: "Z0 Skin Health",
    slug: "z0-skin-health",
    img: "z0_skin_health.webp",
  },
]);

// const targetEl = ref();

// useMotion(targetEl, {
//   initial: {
//     y: 100,
//     opacity: 0,
//   },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       y: {
//         delay: 400,
//       },
//     },
//   },
// });
</script>
slug: "",

<template>
  <section>
    <HomeHero :slides="slides" />
    <section>
      <HomeServices title="Kiemelt szolgáltatások" :services="services">
        <template #description>
          Jól képzett orvosaink, magas színvonalon, csúcsminőségű készülékeink
          segítségével végzik az Ön számára leginkább megfelelő kezeléseket. Az
          Ön elégedettsége a mi motivációnk.
        </template>
      </HomeServices>
    </section>
    <section>
      <HomeIntroduction title="Komplex szolgáltatások exkluzív környezetben">
        <template #introduction>
          Az Elysia Laser Clinic orvos-esztétikai centrumot azzal a céllal
          hoztuk létre, hogy komplex szolgáltatást nyújthassunk a
          bőrgyógyászati, esztétikai, nőgyógyászati problémákkal küzdő és
          szépülni vágyó páciensek számára. <br /><br />
          Hisszük, hogy a mai rohanó, folyamatosan megújuló világunkban szükség
          van rövid várakozási idővel igénybe vehető magánszolgáltatásra, ahol
          barátságos környezetben dolgozó tapasztalt szakorvosok, modern
          kezelési technikák, innovatív lézerkészülékek állnak rendelkezésre.<br /><br />
          Az Elysia csapata azon dolgozik, hogy az Ön bőrgyógyászati, esztétikai
          és nőgyógyászati problémáin hatékonyan segítsen.
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
    <!-- parallax -->
    <TheParallax />
    <TheContact title="Foglalja le időpontját pár kattintással!" />
  </section>
</template>
