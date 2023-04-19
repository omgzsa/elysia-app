<script setup>
import { ref } from "vue";
import TheDropdown from "./TheDropdown.vue";
import IconDown from "./icons/IconDown.vue";
import IconRight from "./icons/IconRight.vue";

import { onClickOutside } from "@vueuse/core";

const target = ref(null);

const isServicesOpen = ref(false);
const toggleServices = () => (isServicesOpen.value = !isServicesOpen.value);

const borgyogyaszat = ref([
  {
    name: "Gyermek bőrgyógyászat",
    slug: "gyermek-borgyogyaszat",
    category: "borgyogyaszati-kezelesek",
  },
  {
    name: "Dermatoscopos anyajegy- és bőrrák szűrés",
    slug: "dermatoscopos-anyajegy-es-borrak-szures",
    category: "borgyogyaszati-kezelesek",
  },
  {
    name: "Pattanásos bőr komplex kezelése",
    slug: "pattanasos-bor-komplex-kezelese",
    category: "borgyogyaszati-kezelesek",
  },
  {
    name: "Bőr- és körömgombásodás kezelése",
    slug: "bor-es-koromgombasodas-kezelese",
    category: "borgyogyaszati-kezelesek",
  },
  {
    name: "Ekcéma, atópia, allergiás bőrbetegségek kezelése",
    slug: "ekcema-atopia-allergias-borbetegsegek-kezelese",
    category: "borgyogyaszati-kezelesek",
  },
  {
    name: "Pikkelysömör (Pszoriázis) kezelés",
    slug: "pikkelysomor-pszoriazis-kezelese",
    category: "borgyogyaszati-kezelesek",
  },
  {
    name: "Vírusos szemölcsök kezelése",
    slug: "virusos-szemolcsok-kezelese",
    category: "borgyogyaszati-kezelesek",
  },
  {
    name: "Hajhullás kivizsgálása és kezelése",
    slug: "hajhullas-kivizsgalasa-es-kezelese",
    category: "borgyogyaszati-kezelesek",
  },
]);

const lezerkezelesek = ref([
  {
    name: "Lézeres arcfiatalítás",
    slug: "lezeres-arcfiatalitas",
    category: "lezerkezelesek",
  },
  {
    name: "Vagina rejuvenáció (hüvelyszűkítés)",
    slug: "vagina-rejuvenacio-huvelyszukites",
    category: "lezerkezelesek",
  },
  {
    name: "Lézeres szőrtelenítés",
    slug: "lezeres-szortelenites",
    category: "lezerkezelesek",
  },
  {
    name: "Seprűvénák, értágulatok kezelése",
    slug: "sepruvenak-ertagulatok-kezelese",
    category: "lezerkezelesek",
  },
  {
    name: "Pigmentfoltok kezelése",
    slug: "pigmentfoltok-kezelese",
    category: "lezerkezelesek",
  },
  {
    name: "Akne kezelése",
    slug: "akne-kezelese",
    category: "lezerkezelesek",
  },
  {
    name: "Stria kezelése",
    slug: "stria-kezelese",
    category: "lezerkezelesek",
  },
  {
    name: "Körömgomba kezelése",
    slug: "koromgomba-kezelese",
    category: "lezerkezelesek",
  },
]);

const orvosEsztetika = ref([
  {
    name: "Profhiló kezelés",
    slug: "profhilo-kezeles",
    category: "orvos-esztetika",
  },
  {
    name: "Arc és nyak mezoterápiás kezelése",
    slug: "arc-es-nyak-mezoterapias-kezelese",
    category: "orvos-esztetika",
  },
  {
    name: "Hajas fejbőr mezoterápiás kezelése",
    slug: "hajas-fejbor-mezoterapias-kezelese",
    category: "orvos-esztetika",
  },
  {
    name: "Dermaroller kezelés",
    slug: "dermaroller-kezeles",
    category: "orvos-esztetika",
  },
  {
    name: "Fokozott hónalji izzadás kezelése",
    slug: "fokozott-honalji-izzadas-kezelese",
    category: "orvos-esztetika",
  },
  {
    name: "Ráncfeltöltés hyaluronsavval",
    slug: "rancfeltoltes-hyaluronsavval",
    category: "orvos-esztetika",
  },
  {
    name: "Ránctalanítás botulinum toxinnal (botox)",
    slug: "ranctalanitas-botulinum-toxinnal-botox",
    category: "orvos-esztetika",
  },
  {
    name: "Thread lifting: bioszálas arckontúrozás",
    slug: "thread-lifting-bioszalas-arckonturozas",
    category: "orvos-esztetika",
  },
  {
    name: "PRP/Drakula terápia",
    slug: "prp-drakula-terapia",
    category: "orvos-esztetika",
  },
  {
    name: "Skin booster kezelés",
    slug: "skin-booster-kezeles",
    category: "orvos-esztetika",
  },
]);

const plasztikaiSebeszet = ref([
  {
    name: "Anyajegy eltávolítása szövettani vizsgálattal",
    slug: "anyajegy-eltavolitasa-szovettani-vizsgalattal",
    category: "plasztikai-sebeszet",
  },
  {
    name: "Alsó, felső szemhéjplasztika",
    slug: "also-felso-szemhejplasztika",
    category: "plasztikai-sebeszet",
  },
  {
    name: "Fülkagyló korrekció",
    slug: "fulkagylo-korrekcio",
    category: "plasztikai-sebeszet",
  },
  {
    name: "Füllyuk korrekció",
    slug: "fullyuk-korrekcio",
    category: "plasztikai-sebeszet",
  },
  {
    name: "Kisajak plasztika",
    slug: "kisajak-plasztika",
    category: "plasztikai-sebeszet",
  },
  {
    name: "Orrkorrekció",
    slug: "orrkorrekcio",
    category: "plasztikai-sebeszet",
  },
  {
    name: "Hegkorrekció",
    slug: "hegkorrekcio",
    category: "plasztikai-sebeszet",
  },
  {
    name: "Ajakfeltöltés",
    slug: "ajakfeltoltes",
    category: "plasztikai-sebeszet",
  },
  {
    name: "COG szálas arclifting",
    slug: "cog-szalas-arclifting",
    category: "plasztikai-sebeszet",
  },
]);

const diagnosztikaiVizsgalatok = ref([
  {
    name: "Standard epicutan teszt",
    slug: "standard-epicutan-teszt",
    category: "diagnosztikai-vizsgalatok",
  },
  {
    name: "Laboratóriumi vizsgálatok",
    slug: "laboratoriumi-vizsgalatok",
    category: "diagnosztikai-vizsgalatok",
  },
]);

// const orvosiTermekek = ref([
//   {
//     name: "Z0 Skin Health",
//     slug: "z0-skin-health",
//     category: "orvosi-termekek",
//   },
//   {
//     name: "La Roche Posay",
//     slug: "la-roche-posay",
//     category: "orvosi-termekek",
//   },
//   {
//     name: "CeraVe",
//     slug: "cerave",
//     category: "orvosi-termekek",
//   },
//   {
//     name: "Vichy",
//     slug: "vichy",
//     category: "orvosi-termekek",
//   },
//   {
//     name: "Bioderma",
//     slug: "bioderma",
//     category: "orvosi-termekek",
//   },
//   {
//     name: "Thalgo",
//     slug: "thalgo",
//     category: "orvosi-termekek",
//   },
//   {
//     name: "Orvosi lézerkészülékek",
//     slug: "orvosi-lezerkeszulekek",
//     category: "orvosi-termekek",
//   },
// ]);

onClickOutside(target, () => {
  isServicesOpen.value = false;
});
</script>

<template>
  <aside
    class="absolute z-10 right-6 sm:right-10 ml-auto p-6 sm:w-60 border rounded-xl bg-white"
  >
    <nav class="space-y-8 text-sm">
      <div class="space-y-2">
        <span
          class="text-sm font-semibold tracking-widest uppercase dark:text-gray-400"
        >
          Menü
        </span>
        <div class="flex flex-col space-y-2">
          <AppLink :to="{ name: 'home' }"> Kezdőlap </AppLink>

          <div class="relative z-0" ref="target">
            <div
              @click="toggleServices"
              class="flex items-center cursor-pointer space-x-2 hover:text-accent-100"
            >
              <p class="text-sm xl:text-base">Szolgáltatások</p>
              <IconDown v-if="isServicesOpen" />
              <IconRight v-else />
            </div>
            <Transition name="dropdown-fade">
              <ul
                v-show="isServicesOpen"
                class="absolute z-10 right-1 sm:right-36 lg:right-auto top-4 xl:top-7 max-h-max w-max p-6 space-y-2 border rounded-xl bg-white flex flex-col"
              >
                <TheDropdown title="Lézerkezelések" :submenu="lezerkezelesek" />

                <TheDropdown
                  title="Orvos esztétika"
                  :submenu="orvosEsztetika"
                />

                <TheDropdown title="Bőrgyógyászat" :submenu="borgyogyaszat" />

                <TheDropdown
                  title="Plasztikai sebészet"
                  :submenu="plasztikaiSebeszet"
                />

                <TheDropdown
                  title="Diagnosztikai vizsgálatok"
                  :submenu="diagnosztikaiVizsgalatok"
                />

                <!-- <TheDropdown
                  title="Orvosi termékek"
                  :submenu="orvosiTermekek"
                /> -->

                <AppLink class="text-sm" :to="{ name: 'home' }">
                  Tüdőgyógyászati szakrendelés
                </AppLink>
                <AppLink class="text-sm" :to="{ name: 'home' }">
                  Idegsebészeti vizsgálatok
                </AppLink>
              </ul>
            </Transition>
          </div>

          <AppLink :to="{ name: 'home' }"> Z0 Skin Health </AppLink>

          <AppLink :to="{ name: 'prices.show' }"> Áraink </AppLink>

          <AppLink :to="{ name: 'employees.show' }"> Munkatársak </AppLink>

          <AppLink :to="{ name: 'home' }"> Kapcsolat </AppLink>
        </div>
      </div>
    </nav>
  </aside>
</template>
