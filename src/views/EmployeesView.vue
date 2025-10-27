<script setup>
import { ref, inject, onMounted } from "vue";
import { useHead } from "@vueuse/head";

import EmployeeCard from "@/components/employee/EmployeeCard.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

const { directusService } = inject("$directus");

const loading = ref(false);
const employees = ref([]);
const error = ref(null);

async function fetchEmployees() {
  loading.value = true;
  try {
    const response = await directusService.getEmployees();
    // console.log(response);
    employees.value = response;
  } catch (error) {
    console.error("Error fetching employees:", error);
    error.value = error;
  } finally {
    loading.value = false;
  }
}

// Helper to check if navigation should be disabled for an employee
const isNavigationDisabled = (employee) => {
  return employee.bio === null || employee.bio === undefined;
};

onMounted(async () => {
  await fetchEmployees();
});

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
</script>

<template>
  <section>
    <div class="flex flex-col mx-auto space-y-10">
      <AppHeader>
        <template #subtitle> elysia laser clinic </template>
        <template #title> Munkatársaink </template>
      </AppHeader>

      <LoadingSpinner v-if="loading" text="Munkatársaink betöltése..." />

      <ErrorMessage
        v-else-if="error"
        text="Hiba történt a munkatársaink betöltése során."
      />

      <div
        v-else="employees"
        class="grid items-start max-w-screen-xl grid-cols-1 px-2 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-8 md:px-4"
      >
        <EmployeeCard
          v-for="item in employees"
          :key="item.id"
          :item="item"
          :navigationDisabled="isNavigationDisabled(item)"
        />
      </div>
    </div>
  </section>
</template>
