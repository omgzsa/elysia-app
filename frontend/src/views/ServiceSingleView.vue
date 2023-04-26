<script setup>
import { ref, provide, computed } from "vue";
import treatmentsData from "@/assets/treatments.json";

import ServiceTreatmentCard from "@/components/treatment/ServiceTreatmentCard.vue";
import AppHeader from "../components/AppHeader.vue";

import { useHead } from "@vueuse/head";

const treatment = computed(() => {
  return treatmentsData.find((t) => t.slug === props.slug);
});

provide("treatment", treatment);

const pageTitle = ref(treatment.value.name + " — Elysia Laser Clinic");
const pageDescription = ref(
  "Fedezd fel a legjobb vizsgálatainkat és kezeléseinket, tapasztalt szakembereink és korszerű technológiáink segítségével."
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
      content: `https://elysia.hu/szolgaltatasok/${treatment.value.category[0].slug}/${treatment.value.slug}`,
    },
  ],
});

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
});
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
