<script setup>
// import { computed } from "vue";
import pricesData from "../assets/prices.json";

// a function that returns if the element is even or odd in an array
</script>

<template>
  <section>
    <div class="flex flex-col space-y-8 mx-auto">
      <AppHeader>
        <template #title>Áraink</template>
      </AppHeader>
    </div>
    <div
      class="flex flex-col space-y-8 py-10 max-w-screen-xl site-padding mx-auto rounded-xl [&>*:nth-child(even)]:bg-primary-200"
    >
      <div
        v-for="item in pricesData"
        :key="item.id"
        class="rounded-xl bg-secondary-200"
      >
        <h3
          class="rounded-t-xl p-6"
          :class="
            pricesData.indexOf(item) % 2 === 0
              ? 'bg-primary-300'
              : 'bg-primary-100'
          "
        >
          {{ item.title }}
        </h3>
        <div class="p-6">
          <div
            v-for="treatment in item.treatments"
            :key="treatment.id"
            class="flex flex-col sm:flex-row sm:items-center pb-4 space-y-1"
          >
            <p class="max-w-sm lg:max-w-screen-xl">
              {{ treatment.title }}
            </p>
            <div
              class="hidden sm:block border-b border-b-gray-400 border-dotted flex-grow mx-4"
            ></div>
            <p class="font-medium">{{ treatment.price }}</p>
            <div
              class="sm:hidden border-b border-b-gray-400 border-dotted flex-grow mx-4"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
