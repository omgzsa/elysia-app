<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";
import { useGetImageUrl } from "../composables/getImageUrl";
import { onClickOutside } from "@vueuse/core";

import TheNavbarMobile from "./TheNavbarMobile.vue";

// icons
import IconMenu from "./icons/IconMenu.vue";
import IconCalendar from "./icons/IconCalendar.vue";
import IconWindowClose from "./icons/IconWindowClose.vue";
import IconDown from "./icons/IconDown.vue";
import IconRight from "./icons/IconRight.vue";
import TheDropdown from "./TheDropdown.vue";

// props
defineProps({
  logo: {
    type: String,
    required: true,
  },
  services: {
    type: Array,
    required: true,
  },
});

const borgyogyaszat = ref([
  {
    name: "Gyermek bőrgyógyászat",
    slug: "gyermek-borgyogyaszat",
    link: "/szolgaltatasok/borgyogyaszat/gyermek-borgyogyaszat",
  },
  {
    name: "Dermatoscopos anyajegy- és bőrrák szűrés",
    slug: "anyajegy-es-borrak-szures",
    link: "/szolgaltatasok/borgyogyaszat/dermatoscopos-anyajegy-es-borrak-szures",
  },
  {
    name: "Pattanásos bőr komplex kezelése",
    slug: "patanasos-bor-komplex-kezelese",
    link: "/szolgaltatasok/borgyogyaszat/pattanasos-bor-komplex-kezelese",
  },
  {
    name: "Bőr- és körömgombásodás kezelése",
    slug: "bor-es-koromgombasodas-kezeles",
    link: "/szolgaltatasok/borgyogyaszat/bor-es-koromgombasodas-kezeles",
  },
  {
    name: "Ekcéma, atópia, allergiás bőrbetegségek kezelése",
    slug: "allergias-borbetegsegek-kezelese",
    link: "/szolgaltatasok/borgyogyaszat/ekcema-atopia-allergias-borbetegsegek-kezelese",
  },
  {
    name: "Pikkelysömör (Pszoriázis) kezelés",
    slug: "pikkelysomor-kezeles",
    link: "/szolgaltatasok/borgyogyaszat/pikkelysomor-kezeles",
  },
  {
    name: "Vírusos szemölcsök kezelése",
    slug: "virusos-szemolcsok-kezelese",
    link: "/szolgaltatasok/borgyogyaszat/virusos-szemolcsok-kezelese",
  },
  {
    name: "Hajhullás kivizsgálása és kezelése",
    slug: "hajhullas-kivizsgalas-es-kezeles",
    link: "/szolgaltatasok/borgyogyaszat/hujhullas-kivizsgalas-es-kezeles",
  },
]);

const lezerkezelesek = ref([
  {
    name: "Lézeres arcfiatalítás",
    slug: "lezeres-arcfiatalitas",
    link: "/szolgaltatasok/lezerkezelesek/lezeres-arcfiatalitas",
  },
  {
    name: "Vagina rejuvenáció (hüvelyszűkítés)",
    slug: "vagina-rejuenacio",
    link: "/szolgaltatasok/lezerkezelesek/vagina-rejuvenacio",
  },
  {
    name: "Lézeres szőrtelenítés",
    slug: "lezeres-szortelenites",
    link: "/szolgaltatasok/lezerkezelesek/lezeres-szortelenites",
  },
  {
    name: "Seprűvénák, értágulatok kezelése",
    slug: "sepruvenak-ertagulatok-kezelese",
    link: "/szolgaltatasok/lezerkezelesek/sepruvenak-ertagulatok-kezelese",
  },
  {
    name: "Pigmentfoltok kezelése",
    slug: "pigmentfoltok-kezelese",
    link: "/szolgaltatasok/lezerkezelesek/pigmentfolt-kezeles",
  },
  {
    name: "Akne kezelés",
    slug: "akne-kezelese",
    link: "/szolgaltatasok/lezerkezelesek/akne-kezeles",
  },
  {
    name: "Stria kezelés",
    slug: "stria-kezelese",
    link: "/szolgaltatasok/lezerkezelesek/stria-kezeles",
  },
  {
    name: "Körömgomba kezelése",
    slug: "koromgomba-kezelese",
    link: "/szolgaltatasok/lezerkezelesek/koromgomba-kezeles",
  },
]);

const orvosEsztetika = ref([
  {
    name: "Profhiló kezelés",
    slug: "profhilo-kezeles",
    link: "/szolgaltatasok/orvos-esztetika/profhilo-kezeles",
  },
  {
    name: "Arc és nyak mezoterápiás kezelése",
    slug: "arc-es-nyak-mezoterapias-kezelese",
    link: "/szolgaltatasok/orvos-esztetika/arc-es-nyak-mezoterapias-kezelese",
  },
  {
    name: "Hajas fejbőr mezoterápiás kezelése",
    slug: "hajas-fejbor-mezoterapias-kezelese",
    link: "/szolgaltatasok/orvos-esztetika/hajas-fejbor-mezoterapias-kezelese",
  },
  {
    name: "Dermaroller kezelés",
    slug: "dermaroller-kezeles",
    link: "/szolgaltatasok/orvos-esztetika/demaroller-kezeles",
  },
  {
    name: "Fokozott hónalji izzadás kezelése",
    slug: "fokozott-honalji-izzadas-kezeles",
    link: "/szolgaltatasok/orvos-esztetika/fokozott-honalji-izzadas-kezeles",
  },
  {
    name: "Ráncfeltöltés hyaluronsavval",
    slug: "racfeltoltes-hyaluronsavval",
    link: "/szolgaltatasok/orvos-esztetika/rancfeltoltes-hyaluronsavval",
  },
  {
    name: "Ránctalanítás botulinum toxin injekcióval",
    slug: "ranctalanitas-botulinum-toxin-injekcioval",
    link: "/szolgaltatasok/orvos-esztetika/ranc-talanitas-botulinum-toxin-injekcioval",
  },
  {
    name: "Thread lifting: bioszálas arckontúrozás",
    slug: "thread-lifting-bioszalas-arckonturozas",
    link: "/szolgaltatasok/orvos-esztetika/thread-lifting-bioszalas-arckonturozas",
  },
  {
    name: "PRP/Drakula terápia",
    slug: "prp-drakula-terapia",
    link: "/szolgaltatasok/orvos-esztetika/prp-drakula-terapia",
  },
  {
    name: "Skin booster kezelés",
    slug: "skin-booster-kezeles",
    link: "/szolgaltatasok/orvos-esztetika/skin-booster-kezeles",
  },
]);

const plasztikaiSebeszet = ref([
  {
    name: "Anyajegy eltávolítása szövettani vizsgálattal",
    slug: "anyajegy-eltavolitasa-szovettani-vizsgalattal",
    link: "/szolgaltatasok/plasztikai-sebeszet/anyajegy-eltavolitasa-szovettani-vizsgalattal",
  },
  {
    name: "Alsó, felső szemhéjplasztika",
    slug: "also-felso-szemhejplasztika",
    link: "/szolgaltatasok/plasztikai-sebeszet/also-felso-szemhejplasztika",
  },
  {
    name: "Fülkorrekció",
    slug: "fulkorrekcio",
    link: "/szolgaltatasok/plasztikai-sebeszet/fulkorrekcio",
  },
  {
    name: "Fülllyuk korrekció",
    slug: "fulllyuk-korrekcio",
    link: "/szolgaltatasok/plasztikai-sebeszet/fulllyuk-korrekcio",
  },
  {
    name: "Kisajak plasztika",
    slug: "kisajak-plasztika",
    link: "/szolgaltatasok/plasztikai-sebeszet/kisajak-plasztika",
  },
  {
    name: "Orrkorrekció",
    slug: "orrkorrekcio",
    link: "/szolgaltatasok/plasztikai-sebeszet/orrkorrekcio",
  },
  {
    name: "Hegkorrekció",
    slug: "hegkorrekcio",
    link: "/szolgaltatasok/plasztikai-sebeszet/hegkorrekcio",
  },
  {
    name: "Ajakfeltöltés",
    slug: "ajakfeltoltes",
    link: "/szolgaltatasok/plasztikai-sebeszet/ajakfeltoltes",
  },
  {
    name: "COG szálas arclifting",
    slug: "cog-szalas-arclifting",
    link: "/szolgaltatasok/plasztikai-sebeszet/cog-szalas-arclifting",
  },
]);

const diagnosztikaiVizsgalatok = ref([
  {
    name: "Standard epicutan teszt",
    slug: "standard-epicutan-teszt",
    link: "/szolgaltatasok/diagnosztikai-vizsgalatok/standard-epicutan-teszt",
  },
  {
    name: "Laboratóriumi vizsgálatok",
    slug: "laboratoriumi-vizsgalatok",
    link: "/szolgaltatasok/diagnosztikai-vizsgalatok/laboratoriumi-vizsgalatok",
  },
]);

const orvosiTermekek = ref([
  {
    name: "Z0 Skin Health",
    slug: "z0-skin-health",
    link: "/szolgaltatasok/orvosi-termek/z0-skin-health",
  },
  {
    name: "La Roche Posay",
    slug: "la-roche-posay",
    link: "/szolgaltatasok/orvosi-termek/la-roche-posay",
  },
  {
    name: "CeraVe",
    slug: "cerave",
    link: "/szolgaltatasok/orvosi-termek/cerave",
  },
  {
    name: "Vichy",
    slug: "vichy",
    link: "/szolgaltatasok/orvosi-termek/vichy",
  },
  {
    name: "Bioderma",
    slug: "bioderma",
    link: "/szolgaltatasok/orvosi-termek/bioderma",
  },
  {
    name: "Thalgo",
    slug: "thalgo",
    link: "/szolgaltatasok/orvosi-termek/thalgo",
  },
  {
    name: "Orvosi lézerkészülékek",
    slug: "orvosi-lezerkeszulekek",
    link: "/szolgaltatasok/orvosi-termek/orvosi-lezerkeszulekek",
  },
]);

// variables for navbar scrollPosition check
const showNavbar = ref(true);
const lastScrollPosition = ref(0);

const target = ref(null);
onClickOutside(target, () => {
  isMobileMenuOpen.value = false;
  isServicesOpen.value = false;
});

const isMobileMenuOpen = ref(false);
const isServicesOpen = ref(false);
const toggleNav = () => (isMobileMenuOpen.value = !isMobileMenuOpen.value);
const toggleServices = () => (isServicesOpen.value = !isServicesOpen.value);

// scrollPosition check
function onScroll() {
  const currentScrollPosition =
    window.scrollY || document.documentElement.scrollTop;

  if (currentScrollPosition <= 60) {
    document.querySelector(".navbar").style.backgroundColor = "transparent";
  } else {
    document.querySelector(".navbar").style.background =
      "rgba(255, 255, 255, 1)";
  }

  if (currentScrollPosition < 0) {
    return;
  }
  if (Math.abs(currentScrollPosition - lastScrollPosition.value) < 60) {
    return;
  }
  showNavbar.value = currentScrollPosition < lastScrollPosition.value;
  lastScrollPosition.value = currentScrollPosition;

  isServicesOpen.value = false;
  isMobileMenuOpen.value = false;
}

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <nav
    class="navbar w-full pl-1 pr-3 md:pr-2 py-1"
    :class="{ 'navbar--hidden': !showNavbar }"
    aria-label="Site Nav"
  >
    <div
      class="relative max-w-screen-2xl mx-auto flex px-2 sm:px-4 lg:px-6 h-12 sm:h-16 items-center justify-between"
    >
      <!-- LOGO -->
      <div class="md:flex md:items-center md:gap-12">
        <AppLink :to="{ name: 'home' }" class="block w-12 sm:w-16" href="/">
          <span class="sr-only">Home</span>
          <img :src="useGetImageUrl(logo)" alt="" />
        </AppLink>
      </div>

      <!-- DESKTOP MENU -->
      <div class="hidden lg:block ml-auto">
        <ul
          class="flex items-center gap-6 font-medium text-xs lg:text-sm xl:text-base"
        >
          <AppLink :to="{ name: 'home' }"> Kezdőlap </AppLink>

          <div class="relative cursor-pointer">
            <div
              @click="toggleServices"
              class="flex items-center space-x-1 hover:text-secondary-100"
            >
              <p class="text-sm xl:text-base">Szolgáltatások</p>
              <IconDown v-if="isServicesOpen" />
              <IconRight v-else />
            </div>
            <Transition name="dropdown-fade">
              <ul
                v-show="isServicesOpen"
                ref="target"
                class="absolute right-6 sm:right-36 lg:right-auto top-4 xl:top-5 max-h-max w-max p-6 border rounded-xl bg-white flex flex-col space-y-2"
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

                <TheDropdown
                  title="Orvosi termékek"
                  :submenu="orvosiTermekek"
                />

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

          <AppLink :to="{ name: 'home' }"> Áraink </AppLink>

          <AppLink :to="{ name: 'home' }"> Munkatársak </AppLink>

          <AppLink :to="{ name: 'home' }"> Kapcsolat </AppLink>
        </ul>
      </div>

      <!-- IDŐPONTFOGLALÁS -->
      <div class="flex items-center gap-2 ml-auto mr-1">
        <div class="sm:flex sm:gap-4">
          <RouterLink :to="{ name: 'home', path: '/' }">
            <button
              class="rounded-md px-4 py-2 overflow-hidden relative group cursor-pointer font-medium text-gray-700 bg-secondary-100 border border-secondary-100"
            >
              <span
                class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"
              ></span>
              <span
                class="text-xs sm:text-sm font-bold flex flex-row items-center gap-2 relative transition duration-300 group-hover:text-secondary-100 ease"
                ><IconCalendar /> <span>Időpontfoglalás</span></span
              >
            </button>
          </RouterLink>
        </div>
      </div>

      <!-- MOBILE MENU button -->
      <div class="block lg:hidden">
        <div
          @click="toggleNav"
          aria-label="Toggle mobile menu"
          class="rounded -mr-2 sm:-mr-4 p-1.5 sm:p-2 text-gray-500 transition hover:text-gray-700 hover:bg-gray-200"
        >
          <IconMenu v-if="!isMobileMenuOpen" />
          <IconWindowClose v-else />
        </div>
      </div>
    </div>

    <!-- Mobile sidebar -->
    <div :class="{ block: isMobileMenuOpen, hidden: !isMobileMenuOpen }">
      <TheNavbarMobile :services="services" ref="target" />
    </div>
  </nav>
</template>

<style>
.navbar {
  width: 100vw;
  background: #ffffff20;
  position: fixed;
  transform: translate3d(0, 0, 0);
  transition: 0.15s all ease-out;
  z-index: 1;
}

.navbar.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}

.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.1s ease-out;
}

.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
