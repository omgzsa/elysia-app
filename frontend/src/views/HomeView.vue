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
    title: "Fedezze fel bőre igazi szépségét biostimulációval",
    buttonText: "Plasztikai sebészet",
    linkTo: "szolgaltatasok/orvos-esztetika/nucleofill-kezeles",
    alt: "Fiatalos 50-es éveiben járó hölgy tapintja a puha bőrét az arcán",
    text: "A Nucleofill egy innovatív orvos esztétikai kezelés, ami sejt szinten fejti ki biostimuláló hatását, professzionális megoldás nyújtva az idős, dehidratált, megereszkedett bőrnek.",
    img: "hero-nucleofill.webp",
    imgTablet: "hero-nucleofill-tablet.webp",
    imgMobile: "hero-nucleofill-mobil.webp",
  },
  {
    id: 2,
    title: "Átfogó megoldások, állandó bőregészség",
    buttonText: "Lézerkezelések",
    linkTo: "szolgaltatasok/orvosi-termekek/z0-skin-health",
    alt: "Z0 Skin health termékek egy designos képben",
    text: "A ZO® Skin Health egyedülállóan hatékony prémium bőrterápiás és bőrápoló rendszer bőrproblémák teljes körű kezelésére.",
    img: "hero-zo-skin.webp",
    imgTablet: "hero-zo-tablet.webp",
    imgMobile: "hero-zo-mobil.webp",
  },
  {
    id: 3,
    title: "Szőrtelenítés orvosi lézerrel a legújabb technológiával Győrben.",
    buttonText: "Bőrgyógyászat",
    linkTo: "szolgaltatasok/lezerkezelesek/lezeres-szortelenites",
    alt: "Egy fényes bőrű lábait tornásztató hölgy",
    text: "Élvezze gyönyörű és sima bőrét egész évben. Intsen búcsút a makacsul visszatérő, benőtt szőrszálaknak!",
    img: "hero-szortelenites.jpg",
    imgTablet: "hero-szortelenites-tablet.webp",
    imgMobile: "hero-szortelenites-mobil.webp",
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
