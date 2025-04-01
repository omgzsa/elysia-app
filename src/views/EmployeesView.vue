<script setup>
import { ref } from "vue";
import { useGetEmployeeImageUrl } from "../composables/getEmployeeImageUrl.js";
import EmployeeCard from "../components/employee/EmployeeCard.vue";
import employeeData from "../assets/coworkers.json";

import { useHead } from "@vueuse/head";

const pageTitle = ref("Munkatársaink — Elysia Laser Clinic");
const pageDescription = ref(
  "Ismerje meg magasan képzett munkatársainkat, akár még időpontot is foglalhat hozzá.",
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

const katalin = {
  id: 41,
  name: "Horváth Katalin",
  slug: "/munkatarsak",
  hasAppointment: false,
  appointmentLink: "",
  title: "Asszisztens",
  image: "dr-horvath-katalin.webp",
};

const eva = {
  id: 42,
  name: "Dobó Éva",
  slug: "/munkatarsak",
  hasAppointment: false,
  appointmentLink: "",
  title: "Műtősnő",
  image: "dobo-eva.webp",
};

const mira = {
  id: 43,
  name: "Murányi Míra",
  slug: "/munkatarsak",
  hasAppointment: false,
  appointmentLink: "",
  title: "Recepciós",
  image: "muranyi-mira.webp",
};
</script>

<template>
  <section>
    <div class="flex flex-col mx-auto space-y-10">
      <AppHeader>
        <template #subtitle> elysia laser clinic </template>
        <template #title> Munkatársaink </template>
      </AppHeader>
      <div
        class="grid items-start max-w-screen-xl grid-cols-1 px-2 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-8 md:px-4"
      >
        <EmployeeCard
          v-for="item in employeeData"
          :key="item.id"
          :item="item"
        />
        <!-- STATIC CARD #1 -->
        <div class="relative employee-card group">
          <div
            class="absolute w-full transition-transform duration-200 bg-primary-100/20 h-52 -bottom-5 rounded-xl -z-10 group-hover:translate-y-1"
          ></div>
          <div class="text-xs text-gray-500 sm:text-sm">
            <div class="flex flex-col px-4 space-y-2">
              <img
                :src="useGetEmployeeImageUrl(hajnalka.image)"
                :alt="hajnalka.name"
                width="128"
                height="128"
                class="object-cover object-top w-full h-64 mb-4 transition-transform duration-200 rounded-xl group-hover:-translate-y-1"
              />
              <h3 class="text-gray-900">
                {{ hajnalka.name }}
              </h3>
              <span>{{ hajnalka.title }}</span>
            </div>
          </div>
        </div>
        <!-- STATIC CARD #2 -->
        <div class="relative employee-card group">
          <div
            class="absolute w-full transition-transform duration-200 bg-primary-100/20 h-52 -bottom-5 rounded-xl -z-10 group-hover:translate-y-1"
          ></div>
          <div class="text-xs text-gray-500 sm:text-sm">
            <div class="flex flex-col px-4 space-y-2">
              <img
                :src="useGetEmployeeImageUrl(katalin.image)"
                :alt="katalin.name"
                width="128"
                height="128"
                class="object-cover object-top w-full h-64 mb-4 transition-transform duration-200 rounded-xl group-hover:-translate-y-1"
              />
              <h3 class="text-gray-900">
                {{ katalin.name }}
              </h3>
              <span>{{ katalin.title }}</span>
            </div>
          </div>
        </div>

        <!-- STATIC CARD #3 -->
        <div class="relative employee-card group">
          <div
            class="absolute w-full transition-transform duration-200 bg-primary-100/20 h-52 -bottom-5 rounded-xl -z-10 group-hover:translate-y-1"
          ></div>
          <div class="text-xs text-gray-500 sm:text-sm">
            <div class="flex flex-col px-4 space-y-2">
              <img
                :src="useGetEmployeeImageUrl(eva.image)"
                :alt="eva.name"
                width="128"
                height="128"
                class="object-cover object-top w-full h-64 mb-4 transition-transform duration-200 rounded-xl group-hover:-translate-y-1"
              />
              <h3 class="text-gray-900">
                {{ eva.name }}
              </h3>
              <span>{{ eva.title }}</span>
            </div>
          </div>
        </div>

        <!-- STATIC CARD #4 -->
        <div class="relative employee-card group">
          <div
            class="absolute w-full transition-transform duration-200 bg-primary-100/20 h-52 -bottom-5 rounded-xl -z-10 group-hover:translate-y-1"
          ></div>
          <div class="text-xs text-gray-500 sm:text-sm">
            <div class="flex flex-col px-4 space-y-2">
              <img
                :src="useGetEmployeeImageUrl(mira.image)"
                :alt="mira.name"
                width="128"
                height="128"
                class="object-cover object-top w-full h-64 mb-4 transition-transform duration-200 rounded-xl group-hover:-translate-y-1"
              />
              <h3 class="text-gray-900">
                {{ mira.name }}
              </h3>
              <span>{{ mira.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
