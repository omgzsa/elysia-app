<script setup>
import { ref } from "vue";
import { Carousel, Slide, Pagination } from "vue3-carousel";
import { useGetImageUrl } from "../../composables/getImageUrl";
import { useWindowSize } from "@vueuse/core";

// import IconArrowRight from "../icons/IconArrowRight.vue";

import "vue3-carousel/dist/carousel.css";

const props = defineProps({
  slides: { type: Object, required: true },
});

const { width } = useWindowSize();

const settings = ref({
  autoplay: 12000,
  wrapAround: true,
  itemsToShow: 1,
  snapAlign: "center",
});

const getResponsiveImage = (id) => {
  const slide = props.slides.find((slide) => slide.id === id);
  if (width.value > 1024) {
    return slide.img;
  } else if (width.value > 640) {
    return slide.imgTablet;
  } else {
    return slide.imgMobile;
  }
};
</script>

<template>
  <carousel v-bind="settings">
    <slide
      v-for="slide in props.slides"
      :key="slide.id"
      class="w-full bg-cover min-h-[820px] bg-no-repeat bg-bottom"
      :style="{
        backgroundImage: `url(${useGetImageUrl(getResponsiveImage(slide.id))})`,
      }"
    >
      <div class="grid max-w-screen-xl grid-cols-1 site-padding md:grid-cols-2">
        <div class="flex flex-col space-y-6 text-left pb-36 md:pb-0">
          <h1
            class="max-w-md sm:max-w-xl xl:max-w-3xl"
            style="line-height: 1.125"
          >
            {{ slide.title }}
          </h1>
          <p class="max-w-lg">
            {{ slide.text }}
          </p>

          <AppLink :to="{ path: `${slide.linkTo}` }">
            <button
              class="relative px-8 py-2 overflow-hidden font-medium text-white border rounded-md cursor-pointer fo group bg-accent-100 border-accent-100"
            >
              <span
                class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"
              ></span>
              <span
                class="relative flex flex-row items-center gap-2 font-bold text-white transition duration-300 group-hover:text-accent-100 ease"
                >Tudjon meg többet</span
              >
            </button>
          </AppLink>
        </div>
      </div>
    </slide>

    <template #addons>
      <!-- <navigation /> -->
      <pagination />
    </template>
  </carousel>
</template>

<style>
.carousel {
  padding-left: 0px;
}

.carousel__pagination-button::after {
  background-color: lightgray;
}

.carousel__pagination-button:hover::after,
.carousel__pagination-button--active::after {
  background-color: #586c63;
}
</style>