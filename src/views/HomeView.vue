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
    title: "Árváltozás január 15-től!",
    // buttonText: "Áraink",
    linkTo: "araink",
    alt: "Egy piros fenyőfadísz egy fa asztalon.",
    text: "Módosult árak és új szolgáltatások január 13-tól! A teljes listát az Áraink oldalon találja.",
    // list: [
    //   "2024. December 20. 8:30-12:30",
    //   "2024. December 21 - 2025 Január 5 között ZÁRVA TARTUNK",
    //   "2024. Január 6. 10:00-18:00",
    // ],
    img: "arvaltozas.jpg",
    imgTablet: "arvaltozas-tablet.jpg",
    imgMobile: "arvaltozas-mobil.jpg",
  },
  //  {
  //    id: 1,
  //    title: "Ünnepi nyitvatartás",
  //    buttonText: "Plasztikai sebészet",
  //    linkTo:
  //      "szolgaltatasok/plasztikai-sebeszet/anyajegy-eltavolitasa-szovettani-vizsgalattal",
  //    alt: "Egy piros fenyőfadísz egy fa asztalon.",
  //    text: "Akár esztétikai, akár egészségügyi okból történik az anyajegy eltávolítása, minden esetben plasztikai sebész által végzett sebészeti eljárást alkalmazunk.",
  //    list: [
  //      "2024. December 20. 8:30-12:30",
  //      "2024. December 21 - 2025 Január 5 között ZÁRVA TARTUNK",
  //      "2024. Január 6. 10:00-18:00",
  //    ],
  //    img: "christmas-slider.jpg",
  //    imgTablet: "christmas-slider-tablet.jpg",
  //    imgMobile: "christmas-slider-mobil.jpg",
  //  },
  {
    id: 2,
    title: "Élvezze gyönyörű és sima bőrét egész évben",
    // buttonText: "Bőrgyógyászat",
    linkTo: "szolgaltatasok/lezerkezelesek/lezeres-szortelenites",
    alt: "Lézeres szőrtelenítés az Elysia Laser központban",
    text: "Lézeres szőrtelenítés a legújabb technológiával Győrben. Intsen búcsút a makacsul visszatérő, benőtt szőrszálaknak!",
    img: "hero-lezeres-szortelenites.jpg",
    imgTablet: "hero-lezeres-szortelenites-tablet.jpg",
    imgMobile: "hero-lezeres-szortelenites-mobil.jpg",
  },
  {
    id: 3,
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
    id: 4,
    title: "Alsó és felső szemhéjplasztika",
    // buttonText: "Bőrgyógyászat",
    linkTo: "szolgaltatasok/plasztikai-sebeszet/also-felso-szemhejplasztika",
    alt: "Speciális fejbőr injekciózás egy nőn a kopaszodás és hajhullás ellen",
    text: "Célja az esztétikai és funkcionális helyreállítás, a szem körüli szövetek eredeti állapothoz közeli műtéti rekonstrukciója. Látási nehezítettség esetén megszünteti a panaszokat is.",
    img: "hero-szemhejplasztika.jpg",
    imgTablet: "hero-szemhejplasztika-tablet.jpg",
    imgMobile: "hero-szemhejplasztika-mobil.jpg",
  },
  {
    id: 5,
    title: "Anyajegy eltávolítása szövettani vizsgálattal",
    // buttonText: "Plasztikai sebészet",
    linkTo:
      "szolgaltatasok/plasztikai-sebeszet/anyajegy-eltavolitasa-szovettani-vizsgalattal",
    alt: "Egy nő és egy férfi anyajegyekkel a hátukon",
    text: "Akár esztétikai, akár egészségügyi okból történik az anyajegy eltávolítása, minden esetben plasztikai sebész által végzett sebészeti eljárást alkalmazunk.",
    // list: [],
    img: "hero-anyajegy-eltavolitas-desktop.jpg",
    imgTablet: "hero-anyajegy-eltavolitas-tablet.jpg",
    imgMobile: "hero-anyajegy-eltavolitas-mobil.jpg",
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
