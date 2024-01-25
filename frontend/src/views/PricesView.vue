<script setup>
import { ref } from "vue";
import pricesData from "../assets/prices.json";

import { useHead } from "@vueuse/head";

const pageTitle = ref("Áraink — Elysia Laser Clinic");
const pageDescription = ref(
  "Szolgáltatásaink, vizsgálataink és kezeléseink árlistája.",
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
      content: "https://elysia.hu/araink",
    },
  ],
});
</script>

<template>
  <section>
    <div class="flex flex-col mx-auto space-y-8">
      <AppHeader>
        <template #title>Áraink</template>
      </AppHeader>
    </div>
    <div
      class="flex flex-col space-y-8 py-10 max-w-screen-xl site-padding mx-auto rounded-xl [&>*:nth-child(even)]:bg-primary-200"
    >
      <div
        v-for="item in pricesData"
        :key="item.id"
        class="rounded-xl bg-secondary-200"
      >
        <h3
          class="p-6 rounded-t-xl"
          :class="
            pricesData.indexOf(item) % 2 === 0
              ? 'bg-primary-300'
              : 'bg-primary-100'
          "
        >
          {{ item.title }}
        </h3>
        <div class="p-6">
          <div
            v-for="treatment in item.treatments"
            :key="treatment.id"
            class="flex flex-col pb-4 space-y-1 sm:flex-row sm:items-center"
          >
            <p
              class="max-w-sm lg:max-w-screen-xl"
              :class="{
                'font-semibold': treatment.isFeatured === true,
                'italic py-4': treatment.isItalic === true,
              }"
            >
              {{ treatment.title }}
            </p>
            <div
              class="flex-grow hidden mx-4 border-b border-dotted sm:block border-b-gray-400"
            ></div>
            <p
              class="font-medium"
              :class="{
                italic: treatment.isItalic === true,
              }"
            >
              {{ treatment.price }}
            </p>
            <div
              class="flex-grow mx-4 border-b border-dotted sm:hidden border-b-gray-400"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col max-w-screen-xl mx-auto space-y-8 site-padding">
      <p class="text-xs italic">
        *Az Elysia Lézerközpont szolgáltatásainak díját készpénzben,
        bankkártyával, illetve bizonyos szolgáltatásokat egészségpénztárral is
        fizetheti.
      </p>
      <p class="text-xs">Egészségpénztári partnereink:</p>
      <ul>
        <li class="text-xs">OTP - Országos Egészség- és Önsegélyező Pénztár</li>
        <li class="text-xs">MBH Gondoskodás Egészségpénztár (régi MKB)</li>
        <li class="text-xs">
          Allianz Hungária Egészség- és Önsegélyező Pénztár
        </li>
        <li class="text-xs">Generali Egészség- és Önsegélyező Pénztár</li>
        <li class="text-xs">Prémium Egészség- és Önsegélyező Pénztár</li>
        <li class="text-xs">Patika Egészségpénztár</li>
      </ul>
    </div>
  </section>
</template>
