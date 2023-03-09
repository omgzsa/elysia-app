<script setup>
import { useGetImageUrl } from "../../composables/getImageUrl";
// import { onMounted } from "vue";

defineProps({
  services: { type: Array, required: true },
  title: { type: String },
  description: { type: String },
});

// const isVisible = (index) => {
//   const el = document.querySelectorAll(".list-item")[index];
//   const rect = el.getBoundingClientRect();
//   const windowHeight =
//     window.innerHeight || document.documentElement.clientHeight;
//   const windowWidth = window.innerWidth || document.documentElement.clientWidth;
//   const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
//   const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
//   return vertInView && horInView;
// };

// onMounted(() => {
//   window.addEventListener("scroll", () => {
//     props.services.forEach((item, index) => {
//       if (isVisible(index)) {
//         item.isVisible = true;
//       }
//     });
//   });
// });
</script>

<template>
  <div class="max-w-screen-xl mx-auto">
    <div class="grid grid-cols-1 gap-y-6 text-center mx-auto px-2 max-w-3xl">
      <span class="text-xs md:text-base tracking-wider uppercase text-gray-500"
        >elysia laser clinic</span
      >
      <slot name="title"
        ><h2>{{ title }}</h2></slot
      >
      <p class="mb-8 sm:mb-12">
        <slot name="description" />
      </p>
    </div>
    <ul>
      <TransitionGroup
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-5 gap-y-8 lg:gap-y-12 px-2 items-center"
        name="list"
        tag="ul"
        appear
      >
        <li
          v-for="service in services"
          :key="service.id"
          :style="{ transitionDelay: Math.random() * 800 + 'ms' }"
          class="list-item"
        >
          <div class="flex flex-col items-center gap-4">
            <img
              class="h-24 sm:h-32 md:h-full"
              :src="useGetImageUrl(service.img)"
              alt=""
            />
            <p class="font-bold text-xs sm:text-base">
              {{ service.title }}
            </p>
          </div>
        </li>
      </TransitionGroup>
    </ul>
  </div>
</template>

<style>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-move-active {
  position: absolute;
}
</style>
