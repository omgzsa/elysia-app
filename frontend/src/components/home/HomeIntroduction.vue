<script setup>
defineProps({
  title: { type: String },
  introduction: { type: String },
});
</script>
<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 gap-x-6 items-center max-w-screen-xl mx-auto site-padding"
  >
    <div
      class="md:order-1 grid grid-cols-1 gap-y-6 mx-auto text-center md:text-left lg:text-left px-2 max-w-3xl"
    >
      <span class="subheading">bemutatkozás</span>
      <h2>{{ title }}</h2>
      <p class="mb-8 sm:mb-12">
        <slot name="introduction" />
      </p>
    </div>

    <div class="grid grid-cols-12 grid-rows-5 p-4 gap-4 items-center">
      <img
        height="128"
        width="32"
        v-motion-slide-visible-once-bottom
        :delay="500"
        class="w-full row-start-2 row-span-3 col-start-2 col-span-4 rounded-xl"
        src="../../assets/images/bemutatkozas-1.webp"
        alt="szájfeltöltés fecskendővel"
      />
      <img
        height="46"
        width="164"
        v-motion-slide-visible-once-bottom
        :delay="300"
        class="w-full row-start-1 row-span-3 col-start-6 col-span-6 mb-12 sm:mb-16 md:mb-12 lg:mb-14 rounded-xl"
        src="../../assets/images/bemutatkozas-2.webp"
        alt="narancsbőr kezelése"
      />
      <img
        height="64"
        width="256"
        v-motion-slide-visible-once-bottom
        :delay="100"
        class="w-full row-start-3 row-span-3 col-start-6 col-span-7 rounded-xl"
        src="../../assets/images/bemutatkozas-3.webp"
        alt="arckezelés"
      />
    </div>
  </div>
</template>
