<script setup>
import { ref, computed, inject, provide, watch } from "vue";
import { useRouter } from "vue-router";

import ServiceTreatmentCard from "@/components/treatment/ServiceTreatmentCard.vue";
import AppHeader from "../components/AppHeader.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

import { useHead } from "@vueuse/head";

const { directusService } = inject("$directus");
const router = useRouter();

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
});

const loading = ref(false);
const error = ref(null);
const treatment = ref(null);

// consumed by TheBreadCrumbs
provide("treatment", treatment);

const pageDescription =
  "Fedezd fel a legjobb vizsgálatainkat és kezeléseinket, tapasztalt szakembereink és korszerű technológiáink segítségével.";

// useHead must run synchronously in setup; feed it a computed so it updates
// reactively as the fetched treatment resolves.
const pageTitle = computed(() =>
  treatment.value
    ? `${treatment.value.nev} — Elysia Laser Clinic`
    : "Szolgáltatásaink — Elysia Laser Clinic",
);
useHead(
  computed(() => ({
    title: pageTitle.value,
    meta: [
      { name: "description", content: pageDescription },
      { property: "og:title", content: pageTitle.value },
      { property: "og:description", content: pageDescription },
      {
        property: "og:url",
        content: `https://elysia.hu/szolgaltatasok/${treatment.value?.kategoria?.slug}/${props.slug}`,
      },
    ],
  })),
);

async function fetchTreatment(slug) {
  loading.value = true;
  error.value = null;
  try {
    const [item] = await directusService.getKezeles(slug);
    if (!item) {
      router.replace({
        name: "not.found",
        params: { pathMatch: ["szolgaltatasok", slug] },
      });
      return;
    }
    treatment.value = item;
  } catch (err) {
    console.error("Error fetching treatment:", err);
    error.value = err;
  } finally {
    loading.value = false;
  }
}

watch(() => props.slug, fetchTreatment, { immediate: true });
</script>

<template>
  <section>
    <LoadingSpinner v-if="loading" text="Kezelés betöltése..." />

    <ErrorMessage
      v-else-if="error"
      text="Hiba történt a kezelés betöltése során."
    />

    <template v-else-if="treatment">
      <div class="flex flex-col mx-auto space-y-8">
        <AppHeader>
          <template #subtitle>
            {{ treatment.kategoria?.nev }}
          </template>
          <template #title>
            {{ treatment.nev }}
          </template>
        </AppHeader>
      </div>
      <div>
        <ServiceTreatmentCard :key="treatment.id" :treatment="treatment" />
      </div>
    </template>
  </section>
</template>
