<script setup>
defineProps({
  title: { type: String },
  introduction: { type: String },
});
</script>
<template>
  <div
    class="grid items-center max-w-screen-xl grid-cols-1 mx-auto lg:grid-cols-2 gap-x-6 site-padding"
  >
    <div
      class="grid max-w-3xl grid-cols-1 px-2 mx-auto lg:order-1 gap-y-6 mb-8 lg:mb-0"
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

    <div
      class="grid grid-cols-4 grid-rows-4 gap-3 w-full aspect-square auto-rows-fr mx-auto max-w-3xl"
    >
      <!-- Top left - spans 2 cols, 2 rows -->
      <img
        height="300"
        width="300"
        v-motion-slide-visible-once-bottom
        :delay="300"
        class="col-span-2 row-span-2 w-full h-full object-cover rounded-xl"
        src="../../assets/images/bemutatkozas-1.jpg"
        alt="szájfeltöltés fecskendővel"
      />
      <!-- Top right - spans 2 cols, 2 rows -->
      <img
        height="300"
        width="300"
        v-motion-slide-visible-once-bottom
        :delay="200"
        class="col-span-2 row-span-2 w-full h-full object-cover rounded-xl"
        src="../../assets/images/bemutatkozas-2.webp"
        alt="narancsbőr kezelése"
      />
      <!-- Bottom - spans 3 cols, 2 rows, offset by 1 col -->
      <img
        height="282"
        width="430"
        v-motion-slide-visible-once-bottom
        :delay="100"
        class="col-span-3 col-start-2 row-span-2 w-full h-full object-cover rounded-xl"
        src="../../assets/images/bemutatkozas-3.webp"
        alt="arckezelés"
      />
    </div>
  </div>
</template>
