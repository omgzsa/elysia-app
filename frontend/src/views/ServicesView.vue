<script setup>
import { useGetImageUrl } from "../composables/getImageUrl";
import servicesData from "@/assets/services.json";
</script>

<template>
  <section class="mb-0">
    <div class="flex flex-col space-y-10 mx-auto">
      <AppHeader>
        <template #subtitle> elysia laser clinic </template>
        <template #title> Szolgáltatásaink </template>
      </AppHeader>
    </div>
    <div class="max-w-screen-xl mx-auto py-16">
      <ul
        class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-8 lg:gap-y-12 sm:gap-x-6 px-2 items-start"
        name="list"
      >
        <li
          v-for="service in servicesData"
          :key="service.id"
          class="list-item transform transition duration-300 ease-in-out hover:-translate-y-1"
        >
          <AppLink
            class="flex flex-col items-center gap-4"
            :to="{
              name: 'services.category',
              params: { category: service.slug },
            }"
          >
            <img
              class="h-24 sm:h-32 w-full object-contain"
              :src="useGetImageUrl(service.image)"
              :alt="service.name + 'szimbólum'"
              height="100"
              width="100"
            />
            <p class="font-semibold text-center text-xs sm:text-base">
              {{ service.name }}
            </p>
          </AppLink>
        </li>
        <li
          class="list-item transform transition duration-300 ease-in-out hover:-translate-y-1"
        >
          <AppLink
            class="flex flex-col items-center gap-4"
            :to="{
              name: 'service.pulmonology',
            }"
          >
            <img
              class="h-24 sm:h-32 w-full object-contain"
              :src="useGetImageUrl('tudogyogyaszati-szakrendeles.webp')"
              alt="tüdőgyógyászati vizsgálatok szimbólum"
            />
            <p class="font-semibold text-center text-xs sm:text-base">
              Tüdőgyógyászati szakrendelés
            </p>
          </AppLink>
        </li>
        <li
          class="list-item transform transition duration-300 ease-in-out hover:-translate-y-1"
        >
          <AppLink
            class="flex flex-col items-center gap-4"
            :to="{
              name: 'service.neurosurgery',
            }"
          >
            <img
              class="h-24 sm:h-32 w-full object-contain"
              :src="useGetImageUrl('idegsebeszeti-vizsgalatok.webp')"
              alt="idegsebészeti vizsgálatok szimbólum"
              height="100"
              width="100"
            />
            <p class="font-semibold text-center text-xs sm:text-base">
              Idegsebészeti vizsgálatok
            </p>
          </AppLink>
        </li>
      </ul>
    </div>
  </section>
</template>
