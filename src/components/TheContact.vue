<script setup>
import { ref } from "vue";
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";

import IconClock from "../components/icons/IconClock.vue";
import IconEmail from "../components/icons/IconEmail.vue";
import IconPhone from "../components/icons/IconPhone.vue";
import IconMarker from "../components/icons/IconMarker.vue";
import IconCalendar from "../components/icons/IconCalendar.vue";

const center = ref({ lat: 47.6931539, lng: 17.6366309 });
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const openHours = "Hétfő - Csütörtök: 10:00 - 18:00 \nPéntek: 10:00 - 16:00";
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
  <section
    id="contact"
    class="grid max-w-screen-xl grid-cols-1 gap-6 site-padding sm:grid-cols-2"
  >
    <!-- contact data -->
    <div class="space-y-6">
      <h2>{{ title }}</h2>

      <ul class="space-y-3">
        <li class="flex items-center space-x-2 whitespace-pre">
          <IconClock class="mt-px text-xl text-accent-100" />
          <span>{{ openHours }}</span>
        </li>
        <li class="flex items-center space-x-2">
          <IconEmail class="text-xl text-accent-100" />
          <a
            class="no-underline link-underline hover:text-accent-100"
            :href="`mailto:${contactEmail}`"
          >
            {{ contactEmail }}
          </a>
        </li>
        <li class="flex items-center space-x-2">
          <IconPhone class="text-xl text-accent-100" />
          <a
            class="no-underline link-underline hover:text-accent-100"
            :href="`tel:${phoneNum}`"
          >
            {{ phoneNum }}
          </a>
        </li>
        <li class="inline-flex items-center space-x-2">
          <IconMarker class="text-xl text-accent-100" />
          <span>{{ address }}</span>
        </li>
      </ul>

      <p class="pb-8">
        Ha nem találja amit keres nézzen körül
        <AppLink class="font-medium" :to="{ name: 'faq.show' }"
          >Gyakran Ismételt Kérdések</AppLink
        >
        között.
      </p>

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
    <!-- <iframe
      width="100%"
      height="100%"
      frameborder="0"
      style="border: 0"
      referrerpolicy="no-referrer-when-downgrade"
      :src="`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Elysia+Orvos-Esztétikai+Központ`"
      allowfullscreen
    >
    </iframe> -->
  </section>
</template>
