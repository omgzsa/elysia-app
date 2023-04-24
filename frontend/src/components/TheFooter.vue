<script setup>
import { computed } from "vue";
import IconFacebook from "./icons/IconFacebook.vue";
import IconInstagram from "./icons/IconInstagram.vue";
import { useGetImageUrl } from "../composables/getImageUrl";

const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
  <footer aria-label="Site Footer" class="bg-primary-200">
    <div class="max-w-screen-xl site-padding pb-6 mx-auto">
      <div class="space-y-4 pt-8">
        <img
          :src="useGetImageUrl('elysia_logo_new_transparent.webp')"
          alt="Elysia Laser CLinic"
          class="h-16 py-1"
        />
        <nav aria-label="Footer Navigation - Support">
          <ul
            class="text-accent-100 flex flex-wrap justify-start gap-4 text-xs"
          >
            <li>
              <AppLink
                :to="{ name: 'services' }"
                class="hover:text-gray-800 transition text-xs"
              >
                Szolgáltatások
              </AppLink>
            </li>

            <li>
              <AppLink
                :to="{ name: 'employees.show' }"
                class="hover:text-gray-800 transition text-xs"
              >
                Munkatársak
              </AppLink>
            </li>

            <li>
              <AppLink
                :to="{ name: 'prices.show' }"
                class="hover:text-gray-800 transition text-xs"
              >
                Árak
              </AppLink>
            </li>

            <li>
              <AppLink
                :to="{ name: 'faq.show' }"
                class="hover:text-gray-800 transition text-xs"
              >
                GY.I.K.
              </AppLink>
            </li>
            <li>
              <AppLink
                :to="{ name: 'not.found' }"
                class="hover:text-gray-800 transition text-xs"
              >
                Adatvédelmi tájékoztató
              </AppLink>
            </li>
          </ul>
        </nav>
      </div>

      <div
        class="pt-4 border-t border-gray-400 flex flex-col items-start sm:flex-row sm:justify-between sm:items-center sm:space-y-0 space-y-4 mt-6"
      >
        <p class="text-accent-100 text-xs">
          Az oldalt a
          <AppLink
            class="hover:text-gray-800 transition font-semibold"
            to="https://blackand.hu"
            >BLACK/AND</AppLink
          >
          készítette.
        </p>

        <p class="block text-accent-100 text-xs text-center">
          Elysia Laser Clinic © {{ currentYear }}
        </p>

        <ul class="flex justify-start gap-6 mt-8 sm:mt-0 lg:justify-end">
          <li>
            <AppLink
              to="https://www.facebook.com/elysiagyor"
              class="text-gray-700 transition hover:opacity-75"
            >
              <span class="sr-only">Facebook</span>

              <IconFacebook class="text-lg" />
            </AppLink>
          </li>

          <li>
            <AppLink
              to="https://www.instagram.com/elysiagyor/"
              class="text-gray-700 transition hover:opacity-75"
            >
              <span class="sr-only">Instagram</span>

              <IconInstagram class="text-lg" />
            </AppLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
