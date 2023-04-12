<script setup>
import { ref, computed } from "vue";
import { useGetImageUrl } from "../composables/getImageUrl";
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
    <div class="flex flex-col mx-auto">
      <div
        class="py-16 mt-14 sm:mt-16 md:mt-18 mb-16 bg-right md:bg-cover bg-no-repeat"
        :style="{
          backgroundImage: `url(${useGetImageUrl(
            'szolgaltatas-header-bg.jpg'
          )})`,
        }"
      >
        <div class="space-y-1 max-w-screen-xl mx-auto px-2 md:px-4">
          <span class="subheading">{{ service.slug }}</span>
          <h2>{{ service.name }}</h2>
        </div>
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 items-start max-w-screen-xl mx-auto px-2 md:px-4"
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
