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
      <p>
        <slot name="introduction" />
      </p>
      <AppLink :to="{ name: 'services' }">
        <button
          class="mb-8 md:mb-0 rounded-md px-8 py-2 overflow-hidden relative group cursor-pointer font-medium text-white bg-accent-100 border border-accent-100"
        >
          <span
            class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"
          ></span>
          <span
            class="font-bold flex flex-row items-center gap-2 relative text-white transition duration-300 group-hover:text-accent-100 ease"
            >Szolgáltatásaink</span
          >
        </button>
      </AppLink>
    </div>

    <div class="grid grid-cols-12 grid-rows-5 gap-4 items-center">
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
