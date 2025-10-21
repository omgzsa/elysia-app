<script setup>
import { computed } from "vue";
import { inject } from "vue";

const treatment = inject("treatment");

const treatmentName = computed(() => {
  if (treatment.value.name.length > 15) {
    return treatment.value.name.slice(0, 10) + "...";
  } else {
    return treatment.value.name;
  }
});
</script>

<template>
  <nav aria-label="breadcrumb" class="w-full p-6 site-padding">
    <ol class="flex items-center space-x-2">
      <li
        class="flex items-center text-xs md:text-sm space-x-2 text-accent-100/70"
      >
        <!-- <span class="text-gray-400">#</span> -->
        <AppLink
          rel="noopener noreferrer"
          :to="{ name: 'home' }"
          title="Vissza a kezdőlapra"
          class="flex items-center hover:underline pr-1"
          >Kezdőlap</AppLink
        >
      </li>
      <li
        class="flex items-center space-x-2 text-xs md:text-sm text-accent-100/70 truncate"
      >
        <span class="text-gray-400">/</span>
        <AppLink
          rel="noopener noreferrer"
          :to="{
            name: 'services.category',
            params: { category: treatment.category[0].slug },
          }"
          class="flex items-center pr-1 hover:underline"
          >{{ treatment.category[0].name }}</AppLink
        >
      </li>
      <li class="flex items-center space-x-4 text-xs md:text-sm truncate">
        <span class="text-gray-400">/</span>
        <span class="flex items-center pr-1">
          {{ treatment.name }}
        </span>
      </li>
    </ol>
  </nav>
</template>
