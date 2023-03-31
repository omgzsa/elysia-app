<script setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const target = ref(null);

onClickOutside(target, () => {
  show.value = false;
});

defineEmits({
  // emit toggle event to parent component
});

const show = ref(false);
</script>

<template>
  <aside
    class="absolute z-10 right-4 sm:right-6 ml-auto p-6 sm:w-60 border rounded-xl bg-white"
  >
    <nav class="space-y-8 text-sm" ref="target">
      <div class="space-y-2">
        <span
          class="text-sm font-semibold tracking-widest uppercase dark:text-gray-400"
        >
          Menü
        </span>
        <div class="flex flex-col space-y-1">
          <a rel="noopener noreferrer" class="hover:text-secondary-100" href="#"
            >Kezdőlap</a
          >
          <a rel="noopener noreferrer" class="hover:text-secondary-100" href="#"
            >Szolgáltatások</a
          >
          <a rel="noopener noreferrer" class="hover:text-secondary-100" href="#"
            >Z0 Skin Health</a
          >
          <a rel="noopener noreferrer" class="hover:text-secondary-100" href="#"
            >Áraink</a
          >
          <a rel="noopener noreferrer" class="hover:text-secondary-100" href="#"
            >Munkatársak</a
          >
          <a rel="noopener noreferrer" class="hover:text-secondary-100" href="#"
            >Kapcsolat</a
          >
        </div>
      </div>
      <div class="space-y-2">
        <h2
          class="text-sm font-semibold tracking-widest uppercase dark:text-gray-400"
        >
          Dashboard
        </h2>
        <div class="relative">
          <!-- Dropdown toggle button -->
          <button @click="show = !show" class="flex items-center rounded-md">
            <span class="mr-4">Szolgáltatások</span>
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <!-- Dropdown menu -->
          <div
            v-show="show"
            class="absolute right-0 py-2 mt-2 rounded-md shadow-xl w-44"
          >
            <router-link
              to="/"
              class="block px-4 py-2 text-sm hover:bg-indigo-400 hover:text-indigo-100"
            >
              Dropdown List 1
            </router-link>
            <router-link
              to="/"
              class="block px-4 py-2 text-sm text-indigo-100 hover:bg-indigo-400 hover:text-indigo-100"
            >
              Dropdown List 2
            </router-link>
            <router-link
              to="/"
              class="block px-4 py-2 text-sm text-indigo-100 hover:bg-indigo-400 hover:text-indigo-100"
            >
              Dropdown List 3
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </aside>
</template>
