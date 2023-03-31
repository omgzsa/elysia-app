<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useGetImageUrl } from "../composables/getImageUrl";
import TheNavbarMobile from "./TheNavbarMobile.vue";

// icons
import IconMenu from "./icons/IconMenu.vue";
// import IconMenuShort from "./icons/IconMenuShort.vue";
import IconCalendar from "./icons/IconCalendar.vue";
import IconWindowClose from "./icons/IconWindowClose.vue";

const isMobileMenuOpen = ref(false);
const toggleNav = () => (isMobileMenuOpen.value = !isMobileMenuOpen.value);

defineProps({
  logo: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="relative mx-auto max-w-screen-xl px-2 sm:px-4 lg:px-6">
    <div class="flex h-16 items-center justify-between mt-1">
      <!-- LOGO -->
      <div class="md:flex md:items-center md:gap-12">
        <a class="block text-teal-600 w-12 sm:w-16 md:w-20" href="/">
          <span class="sr-only">Home</span>
          <img :src="useGetImageUrl(logo)" alt="" />
        </a>
      </div>

      <!-- DESKTOP MENU -->
      <div class="hidden lg:block">
        <nav aria-label="Site Nav">
          <ul
            class="flex items-center gap-6 font-bold text-xs lg:text-sm xl:text-base"
          >
            <li>
              <a
                class="text-gray-500 transition hover:text-secondary-100 active:hover:text-secondary-100"
                href="/"
              >
                Kezdőlap
              </a>
            </li>

            <li>
              <a
                class="text-gray-500 transition hover:text-secondary-100 active:hover:text-secondary-100"
                href="/"
              >
                Szolgáltatások
              </a>
            </li>

            <li>
              <a
                class="text-gray-500 transition hover:text-secondary-100 active:hover:text-secondary-100"
                href="/"
              >
                Z0 Skin Health
              </a>
            </li>

            <li>
              <a
                class="text-gray-500 transition hover:text-secondary-100 active:hover:text-secondary-100"
                href="/"
              >
                Áraink
              </a>
            </li>

            <li>
              <a
                class="text-gray-500 transition hover:text-secondary-100 active:hover:text-secondary-100"
                href="/"
              >
                Munkatársak
              </a>
            </li>

            <li>
              <a
                class="text-gray-500 transition hover:text-secondary-100 active:hover:text-secondary-100"
                href="/"
              >
                Kapcsolat
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <!-- IDŐPONTFOGLALÁS -->
      <div class="flex items-center gap-2">
        <div class="sm:flex sm:gap-4">
          <RouterLink :to="{ name: 'services', path: '/services' }">
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

        <!-- MOBILE MENU button -->
        <div class="block lg:hidden">
          <button
            @click="toggleNav"
            :aria-expanded="isMobileMenuOpen ? 'true' : 'false'"
            aria-label="Toggle mobile menu"
            class="rounded p-1.5 sm:p-2 text-gray-500 transition hover:text-gray-700 hover:bg-gray-200"
          >
            <IconMenu :class="{ hidden: isMobileMenuOpen }" />
            <IconWindowClose :class="{ hidden: !isMobileMenuOpen }" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile sidebar -->
    <!-- <Transition name="slide"> -->
    <div :class="{ block: isMobileMenuOpen, hidden: !isMobileMenuOpen }">
      <TheNavbarMobile />
    </div>
    <!-- </Transition> -->
  </div>
</template>

<style>
/* slide in animation */
/* .slide-enter-active {
  animation: slide-in 0.3s ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
} */

/* slide out animation */
/* .slide-leave-active {
  animation: slide-out 0.3s ease-out forwards;
}

@keyframes slide-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
} */
</style>
