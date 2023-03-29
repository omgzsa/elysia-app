<script setup>
import { ref } from "vue";
import { useGetImageUrl } from "@/composables/getImageUrl.js";
import { RouterLink } from "vue-router";
import { GoogleMap, Marker } from "vue3-google-map";

import IconClock from "../components/icons/IconClock.vue";
import IconEmail from "../components/icons/IconEmail.vue";
import IconPhone from "../components/icons/IconPhone.vue";
import IconMarker from "../components/icons/IconMarker.vue";
import IconCalendar from "../components/icons/IconCalendar.vue";

const center = ref({ lat: 47.6931539, lng: 17.6366309 });
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const image = "contact_bg.webp";
const openHours = "Hétfő - Péntek: 8:00 - 18:00";
const contactEmail = "info@elysia.hu";
const phoneNum = "+36 20 275 0025";
const address = "9026 Győr, Dózsa György rakpart 29-31.";

defineProps({
  title: {
    type: String,
    default: "Kapcsolat",
  },
});
</script>

<template>
  <div>
    <section class="mb-0">
      <div
        class="flex items-center justify-center h-72 md:h-[600px] m-auto mt-6 bg-fixed bg-center bg-[length:960px_349px] bg-no-repeat md:bg-[length:1440px_524px] xl:bg-cover"
        :style="{ backgroundImage: `url(${useGetImageUrl(image)})` }"
      >
        <div class="p-5 text-2xl text-white bg-opacity-50 rounded-xl">
          <!-- Parallax inline -->
        </div>
      </div>
    </section>

    <div class="m-auto grid grid-cols-1 md:grid-cols-2">
      <!-- contact data -->
      <div class="space-y-8 p-6 mx-auto md:p-12 lg:p-20 max-w-3xl">
        <h2>{{ title }}</h2>

        <ul class="space-y-2">
          <li class="flex flex-row gap-2 items-center">
            <IconClock class="text-accent-100" />
            <p>{{ openHours }}</p>
          </li>
          <li class="flex flex-row gap-2 items-center">
            <IconEmail class="text-accent-100" />
            <p>{{ contactEmail }}</p>
          </li>
          <li class="flex flex-row gap-2 items-center">
            <IconPhone class="text-accent-100" />
            <p>{{ phoneNum }}</p>
          </li>
          <li class="flex flex-row gap-2 items-center">
            <IconMarker class="text-accent-100" />
            <p>{{ address }}</p>
          </li>
        </ul>

        <p class="pb-8">
          Ha nem találja amit keres nézzen körül Gyakran Ismételt Kérdések
          között.
        </p>

        <RouterLink :to="{ name: 'services', path: '/services' }">
          <button
            class="rounded-md px-8 py-2 overflow-hidden relative group cursor-pointer font-medium text-white bg-accent-100 border border-accent-100"
          >
            <span
              class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"
            ></span>
            <span
              class="font-bold flex flex-row items-center gap-2 relative text-white transition duration-300 group-hover:text-accent-100 ease"
              ><IconCalendar /> <span>Időpontfoglalás</span></span
            >
          </button>
        </RouterLink>
      </div>

      <!-- google maps -->
      <div>
        <GoogleMap
          :api-key="apiKey"
          style="width: 100%; height: 100%"
          :center="center"
          :zoom="15"
        >
          <Marker :options="{ position: center }" />
        </GoogleMap>
      </div>
    </div>
  </div>
</template>
