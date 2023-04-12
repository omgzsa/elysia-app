<script setup>
import { ref, computed } from "vue";
import CategoryCard from "@/components/category/CategoryCard.vue";
import sourceData from "@/assets/services.json";

const props = defineProps({
  category: {
    type: String,
    required: true,
  },
});

const services = ref(sourceData);

const service = computed(() => {
  return services.value.find((s) => s.slug === props.category);
});
</script>

<template>
  <section>
    <div class="px-2 md:px-4 flex flex-col">
      <div class="py-12">
        <span class="subheading">{{ service.slug }}</span>
        <h2>{{ service.name }}</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <CategoryCard
          v-for="item in service.submenu"
          :key="item.name"
          :item="item"
        />
      </div>
    </div>
  </section>
</template>
