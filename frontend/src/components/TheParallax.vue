<script setup>
import { useGetImageUrl } from "../composables/getImageUrl";

const image = "elysia-bg.webp";
</script>

<template>
  <section>
    <div
      class="flex items-center justify-center h-72 md:h-[600px] m-auto mt-6 bg-scroll xl:bg-fixed bg-center bg-no-repeat bg-cover"
      :style="{ backgroundImage: `url(${useGetImageUrl(image)})` }"
    ></div>
  </section>
</template>
