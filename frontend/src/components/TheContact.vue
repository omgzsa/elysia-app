<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";

import IconClock from "../components/icons/IconClock.vue";
import IconEmail from "../components/icons/IconEmail.vue";
import IconPhone from "../components/icons/IconPhone.vue";
import IconMarker from "../components/icons/IconMarker.vue";
import IconCalendar from "../components/icons/IconCalendar.vue";

const center = ref({ lat: 47.6931539, lng: 17.6366309 });
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const openHours = "Hétfő - Péntek: 8:00 - 18:00";
const contactEmail = "info@elysia.hu";
const phoneNum = "+36 20 275 0025";
const address = "9026 Győr, Dózsa György rkpt. 29-31.";

defineProps({
  title: {
    type: String,
    default: "Kapcsolat",
  },
});
</script>

<template>
  <section class="mb-0 grid grid-cols-1 sm:grid-cols-2 gap-8">
    <!-- contact data -->
    <div
      class="space-y-4 pl-4 sm:pl-5 md:pl-10 lg:pl-12 py-4 sm:py-5 md:py-10 lg:py-12 xl:pl-0 max-w-xl sm:ml-auto"
    >
      <h2>{{ title }}</h2>

      <ul class="">
        <li class="flex items-center space-x-2">
          <IconClock class="text-accent-100 w-6" />
          <p>{{ openHours }}</p>
        </li>
        <li class="flex items-center space-x-2">
          <IconEmail class="text-accent-100 w-6" />
          <p>{{ contactEmail }}</p>
        </li>
        <li class="flex items-center space-x-2">
          <IconPhone class="text-accent-100 w-6" />
          <p>{{ phoneNum }}</p>
        </li>
        <li class="flex items-center space-x-2">
          <IconMarker class="text-accent-100 w-6" />
          <p>{{ address }}</p>
        </li>
      </ul>

      <p class="pb-8">
        Ha nem találja amit keres nézzen körül Gyakran Ismételt Kérdések között.
      </p>

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

    <!-- google maps -->
    <GoogleMap
      :api-key="apiKey"
      :center="center"
      :zoom="15"
      class="w-full h-96 md:h-full"
    >
      <Marker :options="{ position: center }" />
      <InfoWindow :options="{ position: { lat: 47.6942539, lng: center.lng } }">
        <h4>Elysia Laser Clinic</h4>
        <p class="text-xs">9026 Győr, Dózsa György rakpart 29-31.</p>
      </InfoWindow>
    </GoogleMap>
  </section>
</template>
