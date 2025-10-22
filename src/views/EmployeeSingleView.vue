<script setup>
import { ref, inject, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useHead } from "@vueuse/head";

import EmployeeDetails from "../components/employee/EmployeeDetails.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
});

const { directusService } = inject("$directus");
const route = useRoute();

const loading = ref(false);
const employee = ref(null);
const error = ref(null);

async function fetchEmployee() {
  loading.value = true;
  try {
    const response = await directusService.getEmployee(
      route.params.slug || props.slug,
    );
    // console.log(response[0]);
    employee.value = response[0];
  } catch (error) {
    console.error("Error fetching employee:", error);
    error.value = error;
  } finally {
    loading.value = false;
  }
}
onMounted(async () => {
  await fetchEmployee();
});

const pageTitle = computed(() =>
  employee.value?.nev
    ? `${employee.value.nev} — Elysia Laser Clinic`
    : "Elysia Laser Clinic",
);
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
  <section>
    <div class="flex flex-col mx-auto space-y-8">
      <AppHeader>
        <template #subtitle> elysia laser clinic </template>
        <template #title>
          {{ employee?.nev }}
        </template>
        <template #description>{{ employee?.titulus }}</template>
      </AppHeader>
    </div>

    <LoadingSpinner v-if="loading" text="Munkatárs betöltése..." />

    <ErrorMessage
      v-if="error"
      text="Hiba történt a munkatárs betöltése során."
    />
    <section v-if="employee" class="max-w-screen-xl">
      <EmployeeDetails :item="employee" />
    </section>
  </section>
</template>
