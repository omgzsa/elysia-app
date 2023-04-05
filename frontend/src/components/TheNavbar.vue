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
                <TheDropdown title="Bőrgyógyászat" :submenu="borgyogyaszat" />

                <TheDropdown title="Lézerkezelések" :submenu="lezerkezelesek" />

                <AppLink class="text-sm" :to="{ name: 'home' }">
                  Tüdőgyógyászati szakrendelés
                </AppLink>
                <AppLink class="text-sm" :to="{ name: 'home' }">
                  Idegsebészeti vizsgálatok
                </AppLink>
                <TheDropdown
                  title="Orvos esztétika"
                  :submenu="orvosEsztetika"
                />

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
