<script setup>
import { ref } from "vue";
import IconDown from "./icons/IconDown.vue";
import IconRight from "./icons/IconRight.vue";
import { onClickOutside } from "@vueuse/core";

const target = ref(null);

defineProps({
  submenu: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const isVisible = ref(false);

const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
};
onClickOutside(target, () => {
  isVisible.value = false;
});
</script>

<template>
  <div class="relative z-auto cursor-pointer" ref="target">
    <div
      class="flex items-center space-x-2 hover:text-accent-100"
      @click="toggleVisibility"
    >
      <p class="text-sm">{{ title }}</p>
      <IconDown v-if="isVisible" />
      <IconRight v-else />
    </div>
    <Transition name="dropdown-fade">
      <ul
        v-if="isVisible"
        class="absolute inset-0 z-50 flex flex-col p-5 space-y-2 bg-white border sm:right-36 lg:right-auto top-4 xl:top-6 min-h-fit w-60 sm:w-max rounded-xl"
      >
        <li
          v-for="item in submenu"
          :key="item.name"
          class="flex space-x-1 hover:text-accent-100"
        >
          <span>
            <AppLink
              :to="{
                name: 'service.single',
                params: { category: item.category, slug: item.slug },
              }"
              class="text-sm"
            >
              {{ item.name }}
            </AppLink>
          </span>
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
  -webkit-transform: translate3d(0, -12px, 0);
  transform: translate3d(0, -12px, 0);

  @apply transform -translate-y-3 opacity-0;
}
</style>
