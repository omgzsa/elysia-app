<script setup>
import { RouterLink } from "vue-router";
import { useGetImageUrl } from "../composables/getImageUrl";
import IconCalendar from "./icons/IconCalendar.vue";

defineProps({
  logo: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between mt-1">
      <div class="md:flex md:items-center md:gap-12">
        <a class="block text-teal-600 w-12 sm:w-16 md:w-20" href="/">
          <span class="sr-only">Home</span>
          <img :src="useGetImageUrl(logo)" alt="" />
        </a>
      </div>

      <div class="hidden lg:block">
        <nav aria-label="Site Nav">
          <ul class="flex items-center gap-6 text-sm">
            <li>
              <a
                class="text-gray-500 transition hover:text-gray-500/75 font-bold text-xs"
                href="/"
              >
                Kezdőlap
              </a>
            </li>

            <li>
              <a
                class="text-gray-500 transition hover:text-gray-500/75 font-bold text-xs"
                href="/"
              >
                Szolgáltatások
              </a>
            </li>

            <li>
              <a
                class="text-gray-500 transition hover:text-gray-500/75 font-bold text-xs"
                href="/"
              >
                Z0 Skin Health
              </a>
            </li>

            <li>
              <a
                class="text-gray-500 transition hover:text-gray-500/75 font-bold text-xs"
                href="/"
              >
                Áraink
              </a>
            </li>

            <li>
              <a
                class="text-gray-500 transition hover:text-gray-500/75 font-bold text-xs"
                href="/"
              >
                Munkatársak
              </a>
            </li>

            <li>
              <a
                class="text-gray-500 transition hover:text-gray-500/75 font-bold text-xs"
                href="/"
              >
                Kapcsolat
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="flex items-center gap-4">
        <div class="sm:flex sm:gap-4">
          <RouterLink :to="{ name: 'services', path: '/services' }">
            <button
              class="rounded-md px-4 py-2 overflow-hidden relative group cursor-pointer font-medium text-gray-700 bg-secondary-100 border border-secondary-100"
            >
              <span
                class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"
              ></span>
              <span
                class="text-xs md:text-sm font-bold flex flex-row items-center gap-2 relative transition duration-300 group-hover:text-secondary-100 ease"
                ><IconCalendar /> <span>Időpontfoglalás</span></span
              >
            </button>
          </RouterLink>
        </div>

        <div class="block lg:hidden">
          <button
            class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
