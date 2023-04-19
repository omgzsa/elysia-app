<script setup>
import { provide, computed } from "vue";
import treatmentsData from "@/assets/treatments.json";

import ServiceTreatmentCard from "@/components/treatment/ServiceTreatmentCard.vue";
import AppHeader from "../components/AppHeader.vue";

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
});

const treatment = computed(() => {
  return treatmentsData.find((t) => t.slug === props.slug);
});

provide("treatment", treatment);
</script>

<template>
  <section>
    <div class="flex flex-col space-y-8 mx-auto">
      <AppHeader>
        <template #subtitle>
          {{ treatment.category[0].name }}
        </template>
        <template #title>
          {{ treatment.name }}
        </template>
      </AppHeader>
    </div>
    <div>
      <ServiceTreatmentCard :key="treatment.id" :treatment="treatment" />
    </div>
  </section>
</template>
