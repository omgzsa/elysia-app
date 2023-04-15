<script setup>
import { useGetImageUrl } from "../composables/getImageUrl";

const image = "contact_bg.webp";
</script>

<template>
  <section>
    <div
      class="flex items-center justify-center h-72 md:h-[600px] m-auto mt-6 bg-fixed bg-center bg-[length:960px_349px] bg-no-repeat md:bg-[length:1440px_524px] xl:bg-[length:1920px_698px]"
      :style="{ backgroundImage: `url(${useGetImageUrl(image)})` }"
    ></div>
  </section>
</template>
