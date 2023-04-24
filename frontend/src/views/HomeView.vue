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
    buttonText: "Plasztikai sebészet",
    linkTo: "plasztikai-sebeszet",
    alt: "tükrözött kép egy nőről, az egyik fekete-fehér a másik színes",
    text: "Nyerje vissza önbizalmát szakembereink segítségével. Plasztikai sebészet a legmagasabb minőségben Győrben.",
    img: "hero-1.webp",
    color: "bg-primary-100",
  },
  {
    id: 2,
    title: "Élvezze gyönyörű és sima bőrét egész évben",
    buttonText: "Lézerkezelések",
    linkTo: "lezerkezelesek",
    alt: "egy nő nyújtja a lábát",
    text: "Lézeres szőrtelenítés a legújabb technológiával Győrben. Intsen búcsút a makacsul visszatérő, benőtt szőrszálaknak!",
    img: "woman_hero_2.webp",
    color: "bg-secondary-200",
  },
  {
    id: 3,
    title: "Fedezze fel bőre igazi szépségét",
    buttonText: "Bőrgyógyászat",
    linkTo: "borgyogyaszat",
    alt: "egy mosolygó fiatal nő",
    text: "Az Elysia Laser Clinic mindenki számára biztosítja a legjobb kezeléseket és szolgáltatásokat. Kezeléseink széles választéka általal a tökéletes megjelenés Ön számára is elérhető.",
    img: "hero-3-colored.webp",
    color: "bg-primary-400",
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
      <HomeServices title="Kiemelt szolgáltatások">
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
          Az Elysia Laser Clinic Győrben, Révfalu szívében elhelyezkedő,
          barátságos környezetű, magas minőséget képviselő magánklinika. Az
          esztétikus megjelenés hívei vagyunk, nem a szélsőséges
          megnyilvánulásoké. Fontos számunkra a folyamatos visszajelzés
          pácienseinktől, mert ezek adják klinikánk lelkét.<br /><br />
          A megyében egyedülálló ZO Skin Health partnerek vagyunk és talán
          joggal mondhatjuk, hogy az elsők között voltunk, akik a lézeres
          kezeléseket elindították Győrben, többek között a végleges lézeres
          szőrtelenítést, a seprűvéna kezelést, egyéb bőrnövedékek, szemölcsök
          eltávolítását valamint lézeres hüvely rejuvenációt. A rengeteg pozitív
          visszajelzés folyamatosan inspirál bennünket, hogy álljunk ki
          elképzeléseink és jövőbeni terveink mellett. Ha Ön is az Elysiaban
          jár, reméljük, hasonlóan nagyszerű tapasztalatai lesznek, bízunk a
          közös együttműködésben!<br />
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
