<script setup>
import { ref, computed, inject, watch } from "vue";
import { useRouter } from "vue-router";
import CategoryCard from "@/components/category/CategoryCard.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

import { useHead } from "@vueuse/head";

const { directusService } = inject("$directus");
const router = useRouter();

const props = defineProps({
  category: {
    type: String,
    required: true,
  },
});

const loading = ref(false);
const error = ref(null);
const service = ref(null);
const treatments = ref([]);

const pageDescription =
  "Fedezd fel a legjobb vizsgálatainkat és kezeléseinket, tapasztalt szakembereink és korszerű technológiáink segítségével";

// useHead must run synchronously in setup; feed it a computed so it updates
// reactively as the fetched category resolves.
const pageTitle = computed(() =>
  service.value
    ? `${service.value.nev} — Elysia Laser Clinic`
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
        content: `https://elysia.hu/szolgaltatasok/${props.category}`,
      },
    ],
  })),
);

async function fetchCategory(slug) {
  loading.value = true;
  error.value = null;
  try {
    const [cat] = await directusService.getKategoria(slug);
    if (!cat) {
      router.replace({
        name: "not.found",
        params: { pathMatch: ["szolgaltatasok", slug] },
      });
      return;
    }
    service.value = cat;
    treatments.value = await directusService.getKezelesek(slug, {
      filter: { status: { _eq: "published" } },
    });
  } catch (err) {
    console.error("Error fetching category:", err);
    error.value = err;
  } finally {
    loading.value = false;
  }
}

watch(() => props.category, fetchCategory, { immediate: true });
</script>

<template>
  <section>
    <div class="flex flex-col mx-auto space-y-8">
      <AppHeader>
        <template #subtitle> elysia laser clinic </template>
        <template #title>
          {{ service?.nev }}
        </template>
      </AppHeader>

      <LoadingSpinner v-if="loading" text="Kezelések betöltése..." />

      <ErrorMessage
        v-else-if="error"
        text="Hiba történt a kezelések betöltése során."
      />

      <div
        v-else
        class="grid items-start max-w-(--breakpoint-xl) grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 site-padding"
      >
        <CategoryCard
          v-for="item in treatments"
          :key="item.id"
          :item="item"
        />
      </div>
    </div>
  </section>
</template>
