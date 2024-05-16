<script setup>
import { useGetImageUrl } from "../composables/getImageUrl";
</script>

<template>
  <span
    aria-label="háttérkép az elysia felnagyított logójával"
    role="img"
    class="pt-20 pb-10 text-center lg:pt-32 lg:pb-16 bg-right lg:text-left md:bg-cover md:bg-center bg-no-repeat"
    :style="{
      backgroundImage: `url(${useGetImageUrl('szolgaltatas-header-bg.webp')})`,
    }"
  >
    <div class="flex flex-col space-y-1 max-w-screen-xl mx-auto site-padding">
      <span class="subheading"><slot name="subtitle" /></span>
      <h2><slot name="title" /></h2>
      <span class="subheading capitalize"><slot name="description" /></span>
    </div>
  </span>
</template>
