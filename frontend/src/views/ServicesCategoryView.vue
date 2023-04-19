<script setup>
import { computed } from "vue";
import CategoryCard from "@/components/category/CategoryCard.vue";
import servicesData from "@/assets/services.json";

const props = defineProps({
  category: {
    type: String,
    required: true,
  },
});

const service = computed(() => {
  return servicesData.find((s) => s.slug === props.category);
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
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 items-start max-w-screen-xl mx-auto px-2 md:px-4"
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
