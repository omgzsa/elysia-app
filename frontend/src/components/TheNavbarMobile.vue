<script setup>
import TheDropdown from "./TheDropdown.vue";

defineProps({
  services: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <aside
    class="absolute z-10 right-6 sm:right-10 ml-auto p-6 sm:w-60 border rounded-xl bg-white"
  >
    <nav class="space-y-8 text-sm">
      <div class="space-y-2">
        <span
          class="text-sm font-semibold tracking-widest uppercase dark:text-gray-400"
        >
          Menü
        </span>
        <div class="flex flex-col space-y-1">
          <AppLink to="/">Kezdőlap</AppLink>

          <!-- Dropdown toggle button -->
          <div class="relative">
            <!-- Dropdown menu -->
            <TheDropdown title="Szolgáltatások" :services="services" />
          </div>

          <AppLink :to="{ name: 'home', path: '/' }">Z0 Skin Health</AppLink>
          <AppLink :to="{ name: 'home', path: '/' }">Áraink</AppLink>
          <AppLink :to="{ name: 'home', path: '/' }">Munkatársak</AppLink>
          <AppLink :to="{ name: 'home', path: '/' }">Kapcsolat</AppLink>
        </div>
      </div>
    </nav>
  </aside>
</template>

<style></style>
