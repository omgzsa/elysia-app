<script setup>
import { ref, provide, computed } from "vue";
import { useGetImageUrl } from "../composables/getImageUrl";
import treatmentsData from "@/assets/treatments.json";

import ServiceTreatmentCard from "@/components/treatment/ServiceTreatmentCard.vue";

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
});

const treatments = ref(treatmentsData);

const treatment = computed(() => {
  return treatments.value.find((t) => t.slug === props.slug);
});

provide("treatment", treatment);
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
        <div class="space-y-1 max-w-screen-xl mx-auto site-padding">
          <span class="subheading">{{ treatment.category[0].name }}</span>
          <h2>{{ treatment.name }}</h2>
        </div>
      </span>
    </div>
    <div>
      <ServiceTreatmentCard :key="treatment.id" :treatment="treatment" />
    </div>
  </section>
</template>
