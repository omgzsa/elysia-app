<script setup>
import EmployeeCard from "../components/employee/EmployeeCard.vue";
import employeeData from "../assets/coworkers.json";
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
      </div>
    </div>
  </section>
</template>
