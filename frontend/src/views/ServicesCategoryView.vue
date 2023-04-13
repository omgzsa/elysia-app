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
// mt-14 sm:mt-16 md:mt-18
const service = computed(() => {
  return services.value.find((s) => s.slug === props.category);
});
</script>

<template>
  <section>
    <div class="flex flex-col space-y-8 mx-auto">
      <span
        aria-label="háttérkép az elysia felnagyított logójával"
        role="img"
        class="pt-20 pb-10 text-center lg:pt-32 lg:pb-16 bg-right lg:text-left md:bg-cover md:bg-center bg-no-repeat"
        :style="{
          backgroundImage: `url(${useGetImageUrl(
            'szolgaltatas-header-bg.webp'
          )})`,
        }"
      >
        <div class="space-y-1 max-w-screen-xl mx-auto px-2 md:px-4 lg:px-8">
          <span class="subheading">elysia laser clinic</span>
          <h2>{{ service.name }}</h2>
        </div>
      </span>
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
