<script setup>
// import { ref } from "vue";
// import { useGetImageUrl } from "../../composables/getImageUrl";

// const images = ref([
//   "elysia_intro_1.webp",
//   "elysia_intro_2.webp",
//   "elysia_intro_3.webp",
// ]);

defineProps({
  title: { type: String },
  introduction: { type: String },
});
</script>
<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 gap-x-6 items-center max-w-screen-xl mx-auto"
  >
    <div
      class="md:order-1 grid grid-cols-1 gap-y-6 mx-auto text-center md:text-left lg:text-left px-2 max-w-3xl"
    >
      <span class="text-xs md:text-base tracking-wider uppercase text-gray-500"
        >bemutatkozás</span
      >
      <slot name="title"
        ><h2>{{ title }}</h2></slot
      >
      <p class="mb-8 sm:mb-12">
        <slot name="introduction" />
      </p>
    </div>

    <div class="grid grid-cols-12 grid-rows-5 p-4 gap-4 items-center">
      <img
        class="row-start-2 row-span-3 col-start-2 col-span-4"
        src="../../assets/images/elysia_intro_2.webp"
        alt="szájfeltöltés fecskendővel"
      />
      <img
        class="row-start-1 row-span-3 col-start-6 col-span-6 mb-12 sm:mb-16 md:mb-12 lg:mb-14"
        src="../../assets/images/elysia_intro_1.webp"
        alt="narancsbőr kezelése"
      />
      <img
        class="row-start-3 row-span-3 col-start-6 col-span-7 w-full"
        src="../../assets/images/elysia_intro_3.webp"
        alt="arckezelés"
      />
    </div>
  </div>
</template>
