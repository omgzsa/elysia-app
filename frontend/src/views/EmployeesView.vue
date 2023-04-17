<script setup>
import { ref } from "vue";
import EmployeeCard from "../components/employee/EmployeeCard.vue";

import employeeData from "../assets/coworkers.json";

const employees = ref(employeeData);
</script>

<template>
  <section>
    <div class="flex flex-col space-y-8 mx-auto">
      <AppHeader>
        <template #subtitle> elysia laser clinic </template>
        <template #title> Munkatársaink </template>
      </AppHeader>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 items-start max-w-screen-xl mx-auto px-2 md:px-4"
      >
        <EmployeeCard v-for="item in employees" :key="item.id" :item="item" />
      </div>
    </div>
  </section>
</template>
