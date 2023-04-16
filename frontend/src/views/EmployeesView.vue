<script setup>
import { ref } from "vue";
import employeeData from "../assets/coworkers.json";

const employees = ref(employeeData);
</script>

<template>
  <div>
    <h1>Employees</h1>
    <ul>
      <li v-for="employee in employees" :key="employee.id">
        {{ employee.name }}
      </li>
    </ul>
  </div>
</template>
