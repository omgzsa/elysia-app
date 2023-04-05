<script setup>
import { ref } from "vue";
import TheDropdown from "./TheDropdown.vue";
import IconDown from "./icons/IconDown.vue";
import IconRight from "./icons/IconRight.vue";

const isServicesOpen = ref(false);
const toggleServices = () => (isServicesOpen.value = !isServicesOpen.value);

const borgyogyaszat = ref([
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
]);

const lezerkezelesek = ref([
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
]);

const orvosEsztetika = ref([
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
]);

const plasztikaiSebeszet = ref([
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
]);

const diagnosztikaiVizsgalatok = ref([
  {
    title: "Standard epicutan teszt",
    link: "/szolgaltatasok/diagnosztikai-vizsgalatok/standard-epicutan-teszt",
  },
  {
    title: "Laboratóriumi vizsgálatok",
    link: "/szolgaltatasok/diagnosztikai-vizsgalatok/laboratoriumi-vizsgalatok",
  },
]);

const orvosiTermekek = ref([
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
]);
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

          <div class="relative cursor-pointer">
            <div
              @click="toggleServices"
              class="flex items-center space-x-2 hover:text-secondary-100"
            >
              <p class="text-sm xl:text-base">Szolgáltatások</p>
              <IconDown v-if="isServicesOpen" />
              <IconRight v-else />
            </div>
            <Transition name="dropdown-fade">
              <!-- IMPLEMENT EMIT ON UL INSTEAD OF WHOLE -->
              <ul
                v-show="isServicesOpen"
                class="absolute right-1 sm:right-36 lg:right-auto top-4 xl:top-7 max-h-max w-max p-6 border rounded-xl bg-white flex flex-col space-y-2"
              >
                <TheDropdown :submenu="borgyogyaszat">
                  Bőrgyógyászat
                </TheDropdown>
                <TheDropdown :submenu="lezerkezelesek">
                  Lézerkezelések
                </TheDropdown>
                <TheDropdown :submenu="orvosEsztetika">
                  Orvos esztétika
                </TheDropdown>
                <AppLink class="text-sm" :to="{ name: 'home' }">
                  Tüdőgyógyászati szakrendelés
                </AppLink>
                <AppLink class="text-sm" :to="{ name: 'home' }">
                  Idegsebészeti vizsgálatok
                </AppLink>
                <TheDropdown :submenu="plasztikaiSebeszet">
                  Plasztikai sebészet
                </TheDropdown>
                <TheDropdown :submenu="diagnosztikaiVizsgalatok">
                  Diagnosztikai vizsgálatok
                </TheDropdown>
                <TheDropdown :submenu="orvosiTermekek">
                  Orvosi termékek
                </TheDropdown>
              </ul>
            </Transition>
          </div>

          <AppLink :to="{ name: 'home' }"> Z0 Skin Health </AppLink>

          <AppLink :to="{ name: 'home' }"> Áraink </AppLink>

          <AppLink :to="{ name: 'home' }"> Munkatársak </AppLink>

          <AppLink :to="{ name: 'home' }"> Kapcsolat </AppLink>
        </div>
      </div>
    </nav>
  </aside>
</template>

<style></style>
