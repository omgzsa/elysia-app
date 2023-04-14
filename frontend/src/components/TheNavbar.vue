<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { useGetImageUrl } from "../composables/getImageUrl";
import { onClickOutside } from "@vueuse/core";

// components
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
    name: "Akne kezelés",
    slug: "akne-kezelese",
    category: "lezerkezelesek",
  },
  {
    name: "Stria kezelés",
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
    name: "Ránctalanítás botulinum toxin injekcióval",
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
    name: "Fülkorrekció",
    slug: "fulkorrekcio",
    category: "plasztikai-sebeszet",
  },
  {
    name: "Fülllyuk korrekció",
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

const orvosiTermekek = ref([
  {
    name: "Z0 Skin Health",
    slug: "z0-skin-health",
    category: "orvosi-termekek",
  },
  {
    name: "La Roche Posay",
    slug: "la-roche-posay",
    category: "orvosi-termekek",
  },
  {
    name: "CeraVe",
    slug: "cerave",
    category: "orvosi-termekek",
  },
  {
    name: "Vichy",
    slug: "vichy",
    category: "orvosi-termekek",
  },
  {
    name: "Bioderma",
    slug: "bioderma",
    category: "orvosi-termekek",
  },
  {
    name: "Thalgo",
    slug: "thalgo",
    category: "orvosi-termekek",
  },
  {
    name: "Orvosi lézerkészülékek",
    slug: "orvosi-lezerkeszulekek",
    category: "orvosi-termekek",
  },
]);

const route = useRoute();

// variables for navbar scrollPosition check
const showNavbar = ref(true);
const lastScrollPosition = ref(0);

// clickOutside() target
const target = ref(null);

// dropdown menu variables and togglers
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

function closeDropDown() {
  isServicesOpen.value = false;
  isMobileMenuOpen.value = false;
}

// close mobile menu on click outside
onClickOutside(target, () => {
  closeDropDown();
});

// watch() for route change
watch(
  () => route.fullPath,
  (path) => {
    if (path !== "/") {
      closeDropDown();
    }
  }
);

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
              class="flex items-center space-x-1 hover:text-accent-100"
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
      <TheNavbarMobile ref="target" />
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
