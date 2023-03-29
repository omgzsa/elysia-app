<script setup>
import { RouterLink, RouterView } from "vue-router";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>

  <TheFooter />
</template>
