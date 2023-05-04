<script setup>
import { ref } from "vue";
import { useGetEmployeeImageUrl } from "../composables/getEmployeeImageUrl.js";
import EmployeeCard from "../components/employee/EmployeeCard.vue";
import employeeData from "../assets/coworkers.json";

import { useHead } from "@vueuse/head";

const pageTitle = ref("Munkatársaink — Elysia Laser Clinic");
const pageDescription = ref(
  "Ismerje meg magasan képzett munkatársainkat, akár még időpontot is foglalhat hozzá."
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
      content: "https://elysia.hu/munkatarsak",
    },
  ],
});

const hajnalka = {
  id: 40,
  name: "Simigla Hajnalka",
  slug: "/munkatarsak",
  hasAppointment: false,
  appointmentLink: "",
  title: "Műtősnő",
  image: "dr-simigla-hajnalka.webp",
};
</script>

<template>
  <section>
    <div class="flex flex-col space-y-10 mx-auto">
      <AppHeader>
        <template #subtitle> elysia laser clinic </template>
        <template #title> Munkatársaink </template>
      </AppHeader>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-8 items-start max-w-screen-xl mx-auto px-2 md:px-4"
      >
        <EmployeeCard
          v-for="item in employeeData"
          :key="item.id"
          :item="item"
        />
        <!-- STATIC CARD #1 -->
        <div class="employee-card group relative">
          <div
            class="bg-primary-100/20 h-52 w-full absolute -bottom-5 rounded-xl -z-10 group-hover:translate-y-1 transition-transform duration-200"
          ></div>
          <div class="text-xs sm:text-sm text-gray-500">
            <div class="flex flex-col px-4 space-y-2">
              <img
                :src="useGetEmployeeImageUrl(hajnalka.image)"
                :alt="hajnalka.name"
                width="128"
                height="128"
                class="rounded-xl w-full h-64 object-cover object-top mb-4 group-hover:-translate-y-1 transition-transform duration-200"
              />
              <h3 class="text-gray-900">
                {{ hajnalka.name }}
              </h3>
              <span>{{ hajnalka.title }}</span>
            </div>
          </div>
        </div>
        <!-- STATIC CARD #2 -->
        <div class="employee-card group relative">
          <div
            class="bg-primary-100/20 h-52 w-full absolute -bottom-5 rounded-xl -z-10 group-hover:translate-y-1 transition-transform duration-200"
          ></div>
          <div class="text-xs sm:text-sm text-gray-500">
            <div class="flex flex-col px-4 space-y-2">
              <!-- <div class="h-64"></div> -->
              <img
                :src="useGetEmployeeImageUrl('szabo-elizabet.webp')"
                alt="Szabó Elizabet"
                width="128"
                height="128"
                class="rounded-xl w-full h-64 object-cover object-top mb-4 group-hover:-translate-y-1 transition-transform duration-200"
              />
              <h3 class="text-gray-900">Szabó Elizabet</h3>
              <span>recepciós</span>
            </div>
          </div>
        </div>
        <!-- STATIC CARD #3 -->
        <div class="employee-card group relative">
          <div
            class="bg-primary-100/20 h-52 w-full absolute -bottom-5 rounded-xl -z-10 group-hover:translate-y-1 transition-transform duration-200"
          ></div>
          <div class="text-xs sm:text-sm text-gray-500">
            <div class="flex flex-col px-4 space-y-2">
              <!-- <div class="h-64"></div> -->
              <img
                :src="useGetEmployeeImageUrl('endresz-anna.webp')"
                alt="Endrész Anna"
                width="128"
                height="128"
                class="rounded-xl w-full h-64 object-cover object-top mb-4 group-hover:-translate-y-1 transition-transform duration-200"
              />
              <h3 class="text-gray-900">Endrész Anna</h3>
              <span>recepciós</span>
            </div>
          </div>
        </div>
        <!-- STATIC CARD #4 -->
        <div class="employee-card group relative">
          <div
            class="bg-primary-100/20 h-52 w-full absolute -bottom-5 rounded-xl -z-10 group-hover:translate-y-1 transition-transform duration-200"
          ></div>
          <div class="text-xs sm:text-sm text-gray-500">
            <div class="flex flex-col px-4 space-y-2">
              <!-- <div class="h-64"></div> -->
              <img
                :src="useGetEmployeeImageUrl('osvath-edit.webp')"
                alt="Osváth Edit"
                width="128"
                height="128"
                class="rounded-xl w-full h-64 object-cover object-top mb-4 group-hover:-translate-y-1 transition-transform duration-200"
              />
              <h3 class="text-gray-900">Osváth Edit</h3>
              <span>asszisztens</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
