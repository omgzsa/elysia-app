<script setup>
import { ref, computed } from "vue";
import EmployeeDetails from "../components/employee/EmployeeDetails.vue";
import employeeData from "../assets/coworkers.json";

const employees = ref(employeeData);

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
});

const employee = computed(() => {
  return employees.value.find((item) => item.slug === props.slug);
});
</script>
<template>
  <section class="">
    <div class="flex flex-col space-y-8 mx-auto">
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
