<script setup>
import { ref, computed } from "vue";
import EmployeeDetails from "../components/employee/EmployeeDetails.vue";
import employeeData from "../assets/coworkers.json";

import { useHead } from "@vueuse/head";

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
});

const employee = computed(() => {
  return employeeData.find((item) => item.slug === props.slug);
});

const pageTitle = ref(employee.value.name + " — Elysia Laser Clinic");
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
      content: `https://elysia.hu/munkatarsak/${props.slug}`,
    },
  ],
});
</script>
<template>
  <section class="">
    <div class="flex flex-col mx-auto space-y-8">
      <AppHeader>
        <template #subtitle> elysia laser clinic </template>
        <template #title>
          {{ employee.name }}
        </template>
        <template #description>{{ employee.title }}</template>
      </AppHeader>
    </div>
    <section class="max-w-screen-xl">
      <EmployeeDetails :item="employee" />
    </section>
  </section>
</template>
