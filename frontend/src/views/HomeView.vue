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
import TheParallax from "../components/TheParallax.vue";
import TheContact from "../components/TheContact.vue";

import "vue3-carousel/dist/carousel.css";

import { useHead } from "@vueuse/head";

const pageTitle = ref(
  "Elysia Laser Clinic — Prémium minőségű vizsgálatok és kezelések Győrben.",
);
const pageDescription = ref(
  "Fedezd fel a legjobb vizsgálatainkat és kezeléseinket, tapasztalt szakembereink és korszerű technológiáink segítségével",
);

useHead({
  title: pageTitle.value,
  meta: [
    {
      name: "description",
      content: pageDescription.value,
    },
    {
      property: "og:title",
      content: pageTitle.value,
    },
    {
      property: "og:description",
      content: pageDescription.value,
    },
    {
      property: "og:url",
      content: "https://elysia.hu/",
    },
  ],
});

const slides = ref([
  {
    id: 1,
    title: "Klinikánk nyitvatartása az ünnepek alatt változik!",
    // buttonText: "Plasztikai sebészet",
    // linkTo: "szolgaltatasok/lezerkezelesek/lezeres-szortelenites",
    alt: "asztalon lévő piros karácsonyi díszgömb",
    text: "",
    list: [
      "2023. December 21. 10:00 - 15:00",
      "2023. December 22 és Január 1 között zárva tartunk!",
      "2024. Január 2. 10:00 - 18:00",
    ],
    img: "christmas-slider.jpg",
    imgTablet: "christmas-slider-tablet.jpg",
    imgMobile: "christmas-slider-mobil.jpg",
  },
  {
    id: 2,
    title: "Intim lézeres kezelés 10% kedvezménnyel",
    // buttonText: "Bőrgyógyászat",
    linkTo: "szolgaltatasok/lezerkezelesek/intim-lezeres-kezelesek",
    alt: "Egy fényes bőrű, mosolygós göndör hajú nő",
    text: "Az első természetes technológia a hüvely sorvadásának kezelésére. Most bérlet vásárlása esetén 10% kedvezményt adunk a kezelés árából.",
    img: "hero-intim-lezeres-kezeles.jpg",
    imgTablet: "hero-intim-lezeres-kezeles-tablet.jpg",
    imgMobile: "hero-intim-lezeres-kezeles-mobil.jpg",
  },
  {
    id: 3,
    title: "Hatékony módszer a hajhullás kezelésében",
    // buttonText: "Bőrgyógyászat",
    linkTo: "blog/hajmezoterapia-a-haj-egeszsegeert-es-szepsegeert",
    alt: "Speciális fejbőr injekciózás egy nőn a kopaszodás és hajhullás ellen",
    text: "A mezoterápiás kezelés alkalmas belső és külső eredetű hajhullás kezelésére is. Vásárolj most bérletet és vedd igénybe az egyedi kedvezményeket.",
    img: "hero-hajmezoterapia.jpg",
    imgTablet: "hero-hajmezoterapia-tablet.jpg",
    imgMobile: "hero-hajmezoterapia-mobil.jpg",
  },
]);
</script>

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
          barátságos környezetű, magas minőséget képviselő magánklinika. Célunk,
          hogy továbbra is úgy képviselhessük az esztétika és egészségügy
          világát, ahol figyelnek a páciensre, ahova szívesen jön az ember, mert
          minőséget és odafigyelést kap. Az esztétikus megjelenés hívei vagyunk,
          nem a szélsőséges megnyilvánulásoké. Fontos számunkra a folyamatos
          visszajelzés pácienseinktől, mert ezek adják klinikánk lelkét.<br /><br />
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
