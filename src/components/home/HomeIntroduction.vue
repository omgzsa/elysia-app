<script setup>
defineProps({
  title: { type: String },
  introduction: { type: String },
});
</script>
<template>
  <div
    class="grid items-center max-w-screen-xl grid-cols-1 mx-auto md:grid-cols-2 gap-x-6 site-padding"
  >
    <div
      class="grid max-w-3xl grid-cols-1 px-2 mx-auto md:order-1 gap-y-6"
    >
      <span class="subheading">bemutatkozás</span>
      <h2>{{ title }}</h2>
      <p>
        <slot name="introduction" />
      </p>
      <AppLink :to="{ name: 'services' }">
        <button
          class="relative px-8 py-2 mb-8 overflow-hidden font-medium text-white border rounded-md cursor-pointer md:mb-0 group bg-accent-100 border-accent-100"
        >
          <span
            class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"
          ></span>
          <span
            class="relative flex flex-row items-center gap-2 font-bold text-white transition duration-300 group-hover:text-accent-100 ease"
            >Szolgáltatásaink</span
          >
        </button>
      </AppLink>
    </div>

    <div class="grid items-center grid-cols-12 grid-rows-5 gap-4">
      <img
        height="128"
        width="32"
        v-motion-slide-visible-once-bottom
        :delay="500"
        class="w-full col-span-4 col-start-2 row-span-3 row-start-2 rounded-xl"
        src="../../assets/images/bemutatkozas-1.webp"
        alt="szájfeltöltés fecskendővel"
      />
      <img
        height="46"
        width="164"
        v-motion-slide-visible-once-bottom
        :delay="300"
        class="w-full col-span-6 col-start-6 row-span-3 row-start-1 mb-12 sm:mb-16 md:mb-12 lg:mb-14 rounded-xl"
        src="../../assets/images/bemutatkozas-2.webp"
        alt="narancsbőr kezelése"
      />
      <img
        height="64"
        width="256"
        v-motion-slide-visible-once-bottom
        :delay="100"
        class="w-full col-span-7 col-start-6 row-span-3 row-start-3 rounded-xl"
        src="../../assets/images/bemutatkozas-3.webp"
        alt="arckezelés"
      />
    </div>
  </div>
</template>
