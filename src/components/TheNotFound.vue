<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.back();
};
</script>

<template>
  <div
    class="grid min-h-screen site-padding bg-white place-content-center gap-4"
  >
    <h1 class="tracking-widest font-normal text-gray-300 uppercase">
      404 | Not Found
    </h1>
    <div>
      <span class="text-gray-800">
        Térj vissza a
        <AppLink
          class="underline underline-offset-4 hover:text-primary-100"
          :to="{ name: 'home' }"
          >kezdőlapra</AppLink
        >
        vagy ugorj az
        <span
          class="cursor-pointer underline underline-offset-4 hover:text-primary-100"
          @click="goBack"
          >előző oldal</span
        >ra.
      </span>
    </div>
  </div>
</template>
