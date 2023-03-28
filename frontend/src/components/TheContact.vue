<script setup>
import { useGetImageUrl } from "@/composables/getImageUrl.js";

const image = "contact_bg.webp";
</script>

<template>
  <section
    class="flex items-center justify-center h-[600px] m-auto mb-12 bg-fixed bg-center bg-cover"
    :style="{ backgroundImage: `url(${useGetImageUrl(image)})` }"
  >
    <div class="p-5 text-2xl text-white bg-opacity-50 rounded-xl">
      <!-- Parallax inline -->
    </div>
    <div>
      <div>
        <h2>Foglalja le időpontját pár kattintással!</h2>
      </div>
      <div></div>
    </div>
  </section>
</template>
