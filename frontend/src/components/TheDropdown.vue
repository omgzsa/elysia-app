<script setup>
import { ref } from "vue";
import IconDown from "./icons/IconDown.vue";

defineProps({
  title: {
    type: String,
    required: true,
    default: "menü",
  },
  services: {
    type: Array,
    required: true,
  },
});

const isVisible = ref(false);

const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
};
</script>

<template>
  <div @click="toggleVisibility" class="relative cursor-pointer">
    <div class="flex items-center space-x-2 hover:text-secondary-100">
      <p class="text-sm">{{ title }}</p>
      <IconDown />
    </div>
    <Transition name="dropdown-fade">
      <ul
        v-if="isVisible"
        class="absolute right-6 sm:right-36 lg:right-auto top-3 max-h-max w-max p-6 border rounded-xl bg-white flex flex-col space-y-1"
      >
        <li
          v-for="item in services"
          :key="item.title"
          class="hover:text-secondary-100"
        >
          <p class="text-sm">{{ item.title }}</p>
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
