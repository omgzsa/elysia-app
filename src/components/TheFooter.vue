<script setup>
import { computed } from "vue";
import FooterSocial from "./footer/FooterSocial.vue";
import IconFacebook from "./icons/IconFacebook.vue";
import IconInstagram from "./icons/IconInstagram.vue";
import { useGetImageUrl } from "../composables/getImageUrl";

const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
  <footer aria-label="Site Footer" class="bg-primary-200">
    <div class="max-w-screen-xl pb-6 mx-auto site-padding">
      <div class="pt-8 space-y-4">
        <img
          :src="useGetImageUrl('elysia_logo_new_transparent.webp')"
          alt="Elysia Laser CLinic logó"
          height="64"
          class="h-16 py-1"
        />
        <nav aria-label="Footer Navigation - Support">
          <ul
            class="flex flex-wrap justify-start gap-4 text-xs text-accent-100"
          >
            <li>
              <AppLink
                :to="{ name: 'services' }"
                class="text-xs transition hover:text-gray-800"
              >
                Szolgáltatások
              </AppLink>
            </li>

            <li>
              <AppLink
                :to="{ name: 'employees.show' }"
                class="text-xs transition hover:text-gray-800"
              >
                Munkatársak
              </AppLink>
            </li>

            <li>
              <AppLink
                :to="{ name: 'prices.show' }"
                class="text-xs transition hover:text-gray-800"
              >
                Árak
              </AppLink>
            </li>

            <li>
              <AppLink
                :to="{ name: 'faq.show' }"
                class="text-xs transition hover:text-gray-800"
              >
                GY.I.K.
              </AppLink>
            </li>
            <li>
              <AppLink
                :to="{ name: 'not.found' }"
                class="text-xs transition hover:text-gray-800"
              >
                Adatvédelmi tájékoztató
              </AppLink>
            </li>
          </ul>
        </nav>
      </div>

      <div
        class="flex flex-col items-start pt-4 mt-6 space-y-4 border-t border-gray-400 sm:flex-row sm:justify-between sm:items-center sm:space-y-0"
      >
        <p class="text-xs text-accent-100">
          Az oldalt a
          <AppLink
            class="font-semibold transition hover:text-gray-800"
            to="https://blackand.hu"
            >BLACK/AND</AppLink
          >
          készítette.
        </p>

        <p class="block text-xs text-center text-accent-100">
          Elysia Laser Clinic © {{ currentYear }}
        </p>

        <FooterSocial />
      </div>
    </div>
  </footer>
</template>
