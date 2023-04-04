<script setup>
import { ref } from "vue";
import IconDown from "./icons/IconDown.vue";
import IconRight from "./icons/IconRight.vue";
// import { onClickOutside } from "@vueuse/core";
//

defineProps({
  submenu: {
    type: Array,
    required: true,
  },
});

const isVisible = ref(false);
// const modal = ref(null);

// onClickOutside(modal, () => {
//   isVisible.value = false;
// });

const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
};
</script>

<template>
  <div class="relative cursor-pointer">
    <div
      class="flex items-center space-x-2 hover:text-secondary-100"
      @click="toggleVisibility"
    >
      <p class="text-sm"><slot /></p>
      <IconDown v-if="isVisible" />
      <IconRight v-else />
    </div>
    <Transition name="dropdown-fade">
      <ul
        v-if="isVisible"
        class="absolute z-20 inset-0 sm:right-36 lg:right-auto top-4 xl:top-6 max-h-max w-60 sm:w-max p-6 border rounded-xl bg-white flex flex-col space-y-1"
      >
        <li
          v-for="item in submenu"
          :key="item.title"
          class="hover:text-secondary-100 flex space-x-1"
        >
          <p class="text-sm">
            {{ item.title }}
          </p>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<style scoped>
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.1s ease-out;
}

.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
