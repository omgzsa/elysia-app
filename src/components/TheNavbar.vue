<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import {
  borgyogyaszat,
  lezerkezelesek,
  orvosEsztetika,
  plasztikaiSebeszet,
  diagnosztikaiVizsgalatok,
  orvosiTermekek,
  sebeszet,
} from "@/utils/links";
import { useRoute } from "vue-router";
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
});

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
  },
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
    class="w-full py-1 pl-1 pr-3 navbar md:pr-2"
    :class="{ 'navbar--hidden': !showNavbar }"
    aria-label="Site Nav"
  >
    <div
      class="relative flex items-center justify-between h-12 px-2 mx-auto max-w-screen-2xl sm:px-4 sm:h-16"
    >
      <!-- LOGO -->
      <div class="md:flex md:items-center md:gap-12">
        <AppLink :to="{ name: 'home' }" class="block w-16 h-full sm:w-20">
          <span class="sr-only">Home</span>
          <img
            :src="useGetImageUrl(logo)"
            alt="Elysia Laser Clinic logó"
            height="64"
            width="120"
            class="object-contain object-center py-1 h-14 md:h-16"
          />
        </AppLink>
      </div>

      <!-- DESKTOP MENU -->
      <div class="hidden ml-auto lg:block">
        <ul
          class="flex items-center gap-6 text-xs font-medium lg:text-sm xl:text-base"
        >
          <AppLink :to="{ name: 'home' }"> Kezdőlap </AppLink>

          <div class="relative z-0 cursor-pointer">
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
                class="absolute z-10 flex flex-col p-5 space-y-2 bg-white border right-6 sm:right-36 lg:right-auto top-4 xl:top-5 max-h-max w-max rounded-xl"
              >
                <TheDropdown title="Lézerkezelések" :submenu="lezerkezelesek" />

                <TheDropdown
                  title="Plasztikai sebészet"
                  :submenu="plasztikaiSebeszet"
                />

                <TheDropdown
                  title="Orvos esztétika"
                  :submenu="orvosEsztetika"
                />

                <TheDropdown title="Bőrgyógyászat" :submenu="borgyogyaszat" />

                <TheDropdown
                  title="Labor és diagnosztika"
                  :submenu="diagnosztikaiVizsgalatok"
                />

                <TheDropdown
                  title="Orvosi termékek"
                  :submenu="orvosiTermekek"
                />
                
                <TheDropdown
                  title="Sebészet"
                  :submenu="sebeszet"
                />

                <AppLink class="text-sm" :to="{ name: 'service.pulmonology' }">
                  Tüdőgyógyászat
                </AppLink>
                <AppLink class="text-sm" :to="{ name: 'service.neurosurgery' }">
                  Idegsebészet
                </AppLink>
                <AppLink class="text-sm" :to="{ name: 'service.somnology' }">
                  Szomnológia
                </AppLink>
                <AppLink class="text-sm" :to="{ name: 'service.allergology' }">
                  Allergológia
                </AppLink>
              </ul>
            </Transition>
          </div>

          <AppLink :to="{ name: 'zero.skin' }"> Z0 Skin Health </AppLink>

          <AppLink :to="{ name: 'prices.show' }"> Áraink </AppLink>

          <AppLink :to="{ name: 'employees.show' }"> Munkatársak </AppLink>

          <AppLink :to="{ name: 'blogs.show' }"> Blog </AppLink>

          <AppLink :to="{ name: 'home', hash: '#contact' }">
            Kapcsolat
          </AppLink>
        </ul>
      </div>

      <!-- IDŐPONTFOGLALÁS -->
      <div class="flex items-center gap-2 ml-auto mr-2.5">
        <div class="sm:flex sm:gap-4">
          <AppLink to="https://medicall.cc/idopontfoglalas/elysia/index">
            <button
              class="relative px-4 py-2 overflow-hidden font-medium text-gray-700 border rounded-md cursor-pointer group bg-secondary-100 border-secondary-100"
            >
              <span
                class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"
              ></span>
              <span
                class="relative flex flex-row items-center gap-2 text-xs font-bold transition duration-300 sm:text-sm group-hover:text-secondary-100 ease"
                ><IconCalendar /> <span>Időpontfoglalás</span></span
              >
            </button>
          </AppLink>
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
  -webkit-transform: translate3d(0, -12px, 0);
  transform: translate3d(0, -12px, 0);
  z-index: 1000;
}
</style>
