<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="flex flex-col mx-auto text-center">
    <h1><slot name="title"></slot></h1>
    <p class="mb-4 mt-auto"><slot name="text"> </slot></p>
    <div class="flex flex-col items-center">
      <RouterLink :to="{ name: 'services', path: '/services' }">
        <button
          class="rounded-md px-8 py-2 m-1 overflow-hidden relative group cursor-pointer font-medium text-white bg-accent-100 border-2 border-accent-100"
        >
          <span
            class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"
          ></span>
          <span
            class="flex flex-row gap-2 relative font-bold text-white transition duration-300 group-hover:text-accent-100 ease"
            >Szolgáltatások</span
          >
        </button>
      </RouterLink>
      <RouterLink :to="{ name: 'about', path: '/about' }">
        <button
          class="rounded-md px-8 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-accent-100 text-accent-100"
        >
          <span
            class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-accent-100 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"
          ></span>
          <span
            class="flex flex-row gap-2 relative font-bold text-accent-100 transition duration-300 group-hover:text-white ease"
            >Időpontfoglalás</span
          >
        </button>
      </RouterLink>
    </div>
  </div>
</template>
