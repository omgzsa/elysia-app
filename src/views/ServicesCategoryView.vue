<script setup>
import { ref, computed } from "vue";
import CategoryCard from "@/components/category/CategoryCard.vue";
import servicesData from "@/assets/services.json";

import { useHead } from "@vueuse/head";

const props = defineProps({
  category: {
    type: String,
    required: true,
  },
});

const service = computed(() => {
  return servicesData.find((s) => s.slug === props.category);
});

const pageTitle = ref(service.value.name + " — Elysia Laser Clinic");
const pageDescription = ref(
  "Fedezd fel a legjobb vizsgálatainkat és kezeléseinket, tapasztalt szakembereink és korszerű technológiáink segítségével",
);

useHead({
  title: pageTitle.value,
  meta: [
    {
      name: "description",
      content: pageDescription.value,
    },
    {
      property: "og:title",
      content: pageTitle.value,
    },
    {
      property: "og:description",
      content: pageDescription.value,
    },
    {
      property: "og:url",
      content: `https://elysia.hu/szolgaltatasok/${props.category}`,
    },
  ],
});
</script>

<template>
  <section>
    <div class="flex flex-col mx-auto space-y-8">
      <AppHeader>
        <template #subtitle> elysia laser clinic </template>
        <template #title>
          {{ service.name }}
        </template>
      </AppHeader>
      <div
        class="grid items-start max-w-screen-xl grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 site-padding"
      >
        <CategoryCard
          v-for="item in service.submenu"
          :key="item.name"
          :item="item"
        />
      </div>
    </div>
  </section>
</template>
