<script setup>
import { inject } from "vue";

const treatment = inject("treatment");
</script>

<template>
  <nav aria-label="breadcrumb" class="w-full p-4 site-padding">
    <ol class="flex h-8 space-x-2">
      <!-- <li class="flex items-center text-sm text-accent-100/70">
        <AppLink
          rel="noopener noreferrer"
          :to="{ name: 'home' }"
          title="Vissza a kezdőlapra"
          class="flex items-center hover:underline"
          >Kezdőlap</AppLink
        >
      </li> -->
      <li class="flex items-center space-x-1 text-sm text-accent-100/70">
        <span class="text-gray-400">#</span>
        <AppLink
          rel="noopener noreferrer"
          :to="{
            name: 'services.category',
            params: { category: treatment.category[0].slug },
          }"
          class="flex items-center px-1 hover:underline"
          >{{ treatment.category[0].name }}</AppLink
        >
      </li>
      <li class="flex items-center space-x-1 text-sm">
        <span class="text-gray-400">/</span>
        <span class="flex items-center px-1">
          {{ treatment.name }}
        </span>
      </li>
    </ol>
  </nav>
</template>
