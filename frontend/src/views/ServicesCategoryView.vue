<script setup>
import { ref, computed } from "vue";
import CategoryCard from "@/components/category/CategoryCard.vue";
import servicesData from "@/assets/services.json";

import { useHead } from "@vueuse/head";

const service = computed(() => {
  return servicesData.find((s) => s.slug === props.category);
});

const pageTitle = ref(service.value.name + " — Elysia Laser Clinic");
const pageDescription = ref(
  "Fedezd fel a legjobb vizsgálatainkat és kezeléseinket, tapasztalt szakembereink és korszerű technológiáink segítségével"
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

const props = defineProps({
  category: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section>
    <div class="flex flex-col space-y-8 mx-auto">
      <AppHeader>
        <template #subtitle> elysia laser clinic </template>
        <template #title>
          {{ service.name }}
        </template>
      </AppHeader>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 items-start max-w-screen-xl mx-auto site-padding"
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
