<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import TheFooter from "./components/TheFooter.vue";
import TheNavbar from "./components/TheNavbar.vue";
// import TheNavbarTwo from "./components/TheNavbarTwo.vue";

const logo = "elysia_logo_new_transparent.webp";

const services = ref([
  {
    title: "Bőrgyógyászat",
    open: true,
    submenu: [
      {
        title: "Gyermek bőrgyógyászat",
        link: "/szolgaltatasok/borgyogyaszat/gyermek-borgyogyaszat",
      },
      {
        title: "Dermatoscopos anyajegy- és bőrrák szűrés",
        link: "/szolgaltatasok/borgyogyaszat/dermatoscopos-anyajegy-es-borrak-szures",
      },
      {
        title: "Pattanásos bőr komplex kezelése",
        link: "/szolgaltatasok/borgyogyaszat/pattanasos-bor-komplex-kezelese",
      },
      {
        title: "Bőr- és körömgombásodás kezelése",
        link: "/szolgaltatasok/borgyogyaszat/bor-es-koromgombasodas-kezeles",
      },
      {
        title: "Ekcéma, atópia, allergiás bőrbetegségek kezelése",
        link: "/szolgaltatasok/borgyogyaszat/ekcema-atopia-allergias-borbetegsegek-kezelese",
      },
      {
        title: "Pikkelysömör (Pszoriázis) kezelés",
        link: "/szolgaltatasok/borgyogyaszat/pikkelysomor-kezeles",
      },
      {
        title: "Vírusos szemölcsök kezelése",
        link: "/szolgaltatasok/borgyogyaszat/virusos-szemolcsok-kezelese",
      },
      {
        title: "Hajhullás kivizsgálása és kezelése",
        link: "/szolgaltatasok/borgyogyaszat/hujhullas-kivizsgalas-es-kezeles",
      },
    ],
  },
  {
    title: "Tüdőgyógyászati Szakrendelés",
    link: "/szolgaltatasok/tudogyogyaszati-szakrendeles",
    open: false,
  },
  {
    title: "Idegsebészeti vizsgálatok",
    link: "/szolgaltatasok/idegsebeszeti-vizsgalatok",
    open: false,
  },
  {
    title: "Lézerkezelések",
    open: true,
    submenu: [
      {
        title: "Lézeres arcfiatalítás",
        link: "/szolgaltatasok/lezerkezelesek/lezeres-arcfiatalitas",
      },
      {
        title: "Vagina rejuvenáció (hüvelyszűkítés)",
        link: "/szolgaltatasok/lezerkezelesek/vagina-rejuvenacio",
      },
      {
        title: "Lézeres szőrtelenítés",
        link: "/szolgaltatasok/lezerkezelesek/lezeres-szortelenites",
      },
      {
        title: "Seprűvénák, értágulatok kezelése",
        link: "/szolgaltatasok/lezerkezelesek/sepruvenak-ertagulatok-kezelese",
      },
      {
        title: "Pigmentfoltok kezelése",
        link: "/szolgaltatasok/lezerkezelesek/pigmentfolt-kezeles",
      },
      {
        title: "Akne kezelés",
        link: "/szolgaltatasok/lezerkezelesek/akne-kezeles",
      },
      {
        title: "Stria kezelés",
        link: "/szolgaltatasok/lezerkezelesek/stria-kezeles",
      },
      {
        title: "Körömgomba kezelése",
        link: "/szolgaltatasok/lezerkezelesek/koromgomba-kezeles",
      },
    ],
  },
  {
    title: "Orvosi esztétika",
    open: true,
    submenu: [
      {
        title: "Profhiló kezelés",
        link: "/szolgaltatasok/orvos-esztetika/profhilo-kezeles",
      },
      {
        title: "Arc és nyak mezoterápiás kezelése",
        link: "/szolgaltatasok/orvos-esztetika/arc-es-nyak-mezoterapias-kezelese",
      },
      {
        title: "Hajas fejbőr mezoterápiás kezelése",
        link: "/szolgaltatasok/orvos-esztetika/hajas-fejbor-mezoterapias-kezelese",
      },
      {
        title: "Dermaroller kezelés",
        link: "/szolgaltatasok/orvos-esztetika/demaroller-kezeles",
      },
      {
        title: "Fokozott hónalji izzadás kezelése",
        link: "/szolgaltatasok/orvos-esztetika/fokozott-honalji-izzadas-kezeles",
      },
      {
        title: "Ráncfeltöltés hyaluronsavval",
        link: "/szolgaltatasok/orvos-esztetika/rancfeltoltes-hyaluronsavval",
      },
      {
        title: "Ránctalanítás botulinum toxin injekcióval",
        link: "/szolgaltatasok/orvos-esztetika/ranc-talanitas-botulinum-toxin-injekcioval",
      },
      {
        title: "Thread lifting: bioszálas arckontúrozás",
        link: "/szolgaltatasok/orvos-esztetika/thread-lifting-bioszalas-arckonturozas",
      },
      {
        title: "PRP/Drakula terápia",
        link: "/szolgaltatasok/orvos-esztetika/prp-drakula-terapia",
      },
      {
        title: "Skin booster kezelés",
        link: "/szolgaltatasok/orvos-esztetika/skin-booster-kezeles",
      },
    ],
  },
  {
    title: "Plasztikai sebészet",
    open: true,
    submenu: [
      {
        title: "Anyajegy eltávolítása szövettani vizsgálattal",
        link: "/szolgaltatasok/plasztikai-sebeszet/anyajegy-eltavolitasa-szovettani-vizsgalattal",
      },
      {
        title: "Alsó, felső szemhéjplasztika",
        link: "/szolgaltatasok/plasztikai-sebeszet/also-felso-szemhejplasztika",
      },
      {
        title: "Fülkorrekció",
        link: "/szolgaltatasok/plasztikai-sebeszet/fulkorrekcio",
      },
      {
        title: "Fülllyuk korrekció",
        link: "/szolgaltatasok/plasztikai-sebeszet/fulllyuk-korrekcio",
      },
      {
        title: "Kisajak plasztika",
        link: "/szolgaltatasok/plasztikai-sebeszet/kisajak-plasztika",
      },
      {
        title: "Orrkorrekció",
        link: "/szolgaltatasok/plasztikai-sebeszet/orrkorrekcio",
      },
      {
        title: "Hegkorrekció",
        link: "/szolgaltatasok/plasztikai-sebeszet/hegkorrekcio",
      },
      {
        title: "Ajakfeltöltés",
        link: "/szolgaltatasok/plasztikai-sebeszet/ajakfeltoltes",
      },
      {
        title: "COG szálas arclifting",
        link: "/szolgaltatasok/plasztikai-sebeszet/cog-szalas-arclifting",
      },
    ],
  },
  {
    title: "Diagnosztikai vizsgálatok",
    open: true,
    submenu: [
      {
        title: "Standard epicutan teszt",
        link: "/szolgaltatasok/diagnosztikai-vizsgalatok/standard-epicutan-teszt",
      },
      {
        title: "Laboratóriumi vizsgálatok",
        link: "/szolgaltatasok/diagnosztikai-vizsgalatok/laboratoriumi-vizsgalatok",
      },
    ],
  },
  {
    title: "Orvosi termékek",
    open: true,
    submenu: [
      {
        title: "Z0 Skin Health",
        link: "/szolgaltatasok/orvosi-termek/z0-skin-health",
      },
      {
        title: "La Roche Posay",
        link: "/szolgaltatasok/orvosi-termek/la-roche-posay",
      },
      {
        title: "CeraVe",
        link: "/szolgaltatasok/orvosi-termek/cerave",
      },
      {
        title: "Vichy",
        link: "/szolgaltatasok/orvosi-termek/vichy",
      },
      {
        title: "Bioderma",
        link: "/szolgaltatasok/orvosi-termek/bioderma",
      },
      {
        title: "Thalgo",
        link: "/szolgaltatasok/orvosi-termek/thalgo",
      },
      {
        title: "Orvosi lézerkészülékek",
        link: "/szolgaltatasok/orvosi-termek/orvosi-lezerkeszulekek",
      },
    ],
  },
]);
</script>

<template>
  <header>
    <TheNavbar :logo="logo" :services="services" />
    <!-- <TheNavbarTwo /> -->
  </header>
  <main>
    <RouterView :key="$route.path" />
  </main>

  <TheFooter />
</template>
