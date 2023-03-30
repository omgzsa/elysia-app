<script setup>
import { RouterView } from "vue-router";
import TheFooter from "./components/TheFooter.vue";
import TheNavbar from "./components/TheNavbar.vue";

const logo = "elysia_logo_new_transparent.webp";
</script>

<template>
  <header>
    <TheNavbar :logo="logo" />
  </header>
  <main>
    <RouterView />
  </main>

  <TheFooter />
</template>
