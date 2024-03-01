<script setup>
import { ref } from "vue";
import { useGetImageUrl } from "../composables/getImageUrl";
import servicesData from "@/assets/services.json";

import { useHead } from "@vueuse/head";

const pageTitle = ref("Szolgáltatásaink");
const pageDescription = ref(
  "Fedezd fel a legjobb orvosi és esztétikai lézerkezeléseket szolgáltatásaink között, tapasztalt szakembereink és korszerű technológiáink segítségével.",
);

useHead({
  title: pageTitle.value,
  meta: [
    {
      name: "description",
      content: pageDescription.value,
    },
    {
      property: "og:title",
      content: pageTitle.value,
    },
    {
      property: "og:description",
      content: pageDescription.value,
    },
    {
      property: "og:url",
      content: "https://elysia.hu/szolgaltatasaink",
    },
  ],
});
</script>

<template>
  <section class="mb-0">
    <div class="flex flex-col mx-auto space-y-10">
      <AppHeader>
        <template #subtitle> elysia laser clinic </template>
        <template #title> Szolgáltatásaink </template>
      </AppHeader>
    </div>
    <div class="max-w-screen-xl py-16 mx-auto space-y-10 site-padding">
      <!-- <p class="max-w-lg mx-auto text-center">{{ pageDescription }}</p> -->
      <ul
        class="grid items-start grid-cols-2 px-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-8 lg:gap-y-12 sm:gap-x-6"
        name="list"
      >
        <li
          v-for="service in servicesData"
          :key="service.id"
          class="transition duration-300 ease-in-out transform list-item hover:-translate-y-1"
        >
          <AppLink
            class="flex flex-col items-center gap-4"
            :to="{
              name: 'services.category',
              params: { category: service.slug },
            }"
          >
            <img
              class="object-contain w-full h-24 sm:h-32"
              :src="useGetImageUrl(service.image)"
              :alt="service.name + 'szimbólum'"
              height="100"
              width="100"
            />
            <p class="text-xs font-semibold text-center sm:text-base">
              {{ service.name }}
            </p>
          </AppLink>
        </li>
        <li
          class="transition duration-300 ease-in-out transform list-item hover:-translate-y-1"
        >
          <AppLink
            class="flex flex-col items-center gap-4"
            :to="{
              name: 'service.pulmonology',
            }"
          >
            <img
              class="object-contain w-full h-24 sm:h-32"
              :src="useGetImageUrl('tudogyogyaszati-szakrendeles.webp')"
              alt="tüdőgyógyászati vizsgálatok szimbólum"
            />
            <p class="text-xs font-semibold text-center sm:text-base">
              Tüdőgyógyászat
            </p>
          </AppLink>
        </li>
        <li
          class="transition duration-300 ease-in-out transform list-item hover:-translate-y-1"
        >
          <AppLink
            class="flex flex-col items-center gap-4"
            :to="{
              name: 'service.neurosurgery',
            }"
          >
            <img
              class="object-contain w-full h-24 sm:h-32"
              :src="useGetImageUrl('idegsebeszeti-vizsgalatok.webp')"
              alt="idegsebészeti vizsgálatok szimbólum"
              height="100"
              width="100"
            />
            <p class="text-xs font-semibold text-center sm:text-base">
              Idegsebészet
            </p>
          </AppLink>
        </li>
        <li
          class="transition duration-300 ease-in-out transform list-item hover:-translate-y-1"
        >
          <AppLink
            class="flex flex-col items-center gap-4"
            :to="{
              name: 'service.somnology',
            }"
          >
            <img
              class="object-contain w-full h-24 sm:h-32"
              :src="useGetImageUrl('szomnologia.webp')"
              alt="szomnológia szimbólum"
              height="100"
              width="100"
            />
            <p class="text-xs font-semibold text-center sm:text-base">
              Szomnológia
            </p>
          </AppLink>
        </li>
        <li
          class="transition duration-300 ease-in-out transform list-item hover:-translate-y-1"
        >
          <AppLink
            class="flex flex-col items-center gap-4"
            :to="{
              name: 'service.allergology',
            }"
          >
            <img
              class="object-contain w-full h-24 sm:h-32"
              :src="useGetImageUrl('allergologia.webp')"
              alt="allergológia szimbólum"
              height="100"
              width="100"
            />
            <p class="text-xs font-semibold text-center sm:text-base">
              Allergológia
            </p>
          </AppLink>
        </li>
      </ul>
    </div>
  </section>
</template>
