<script setup>
import { RouterLink } from "vue-router";
import { useGetImageUrl } from "../../composables/getImageUrl";

const bgImage = "CTA_bg.webp";
</script>

<template>
  <div
    :style="{ backgroundImage: `url(${useGetImageUrl(bgImage)})` }"
    class="text-center py-24 lg:py-32 bg-cover 3xl:bg-contain bg-left bg-no-repeat px-2"
  >
    <p class="text-white font-bold text-3xl max-w-screen-md mx-auto mb-8">
      Megnyerő mondat, hogy miért akkor jár a legjobban az ide látogató, ha itt
      foglal időpontot.
    </p>
    <div>
      <div class="flex flex-col justify-center gap-4 md:flex-row">
        <RouterLink :to="{ name: 'home', path: '/' }">
          <button
            class="rounded-md px-8 py-2 m-1 overflow-hidden relative group cursor-pointer font-medium bg-secondary-100 border border-secondary-100"
          >
            <span
              class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"
            ></span>
            <span
              class="font-bold flex flex-row gap-2 relative text-gray-800 group-hover:text-secondary-100 transition duration-300 ease"
              >Szolgáltatások</span
            >
          </button>
        </RouterLink>
        <RouterLink :to="{ name: 'about', path: '/about' }">
          <button
            class="rounded-md px-8 py-2 m-1 overflow-hidden relative group cursor-pointer border font-medium border-white text-white"
          >
            <span
              class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-accent-100 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"
            ></span>
            <span
              class="font-bold flex flex-row gap-2 relative text-white transition duration-300 group-hover:text-white ease"
              >Időpontfoglalás</span
            >
          </button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
