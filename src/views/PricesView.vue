<script setup>
import { ref, inject, onMounted, computed } from "vue";
import { useHead } from "@vueuse/head";

import ErrorMessage from "@/components/ErrorMessage.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

const { directusService } = inject("$directus");

const loading = ref(false);
const pageLoading = ref(false);
const prices = ref([]);
const page = ref({});
const error = ref(null);
const pageError = ref(null);

async function fetchPrices() {
  loading.value = true;
  try {
    const response = await directusService.getPrices();
    // console.log(response);
    prices.value = response;
  } catch (error) {
    console.error("Error fetching prices:", error);
    error.value = error;
  } finally {
    loading.value = false;
  }
}

async function fetchPage() {
  pageLoading.value = true;
  try {
    const response = await directusService.getPages();
    // console.log(response);
    page.value = response[0];
  } catch (error) {
    console.error("Error fetching page:", error);
    pageError.value = error;
  } finally {
    pageLoading.value = false;
  }
}

onMounted(async () => {
  await Promise.all([fetchPrices(), fetchPage()]);
});

const pageTitle = ref("Áraink — Elysia Laser Clinic");
const pageDescription = ref(
  "Szolgáltatásaink, vizsgálataink és kezeléseink árlistája.",
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
      content: "https://elysia.hu/araink",
    },
  ],
});
</script>

<template>
  <section>
    <div class="flex flex-col mx-auto space-y-8">
      <AppHeader>
        <template #title>{{ page.nev }}</template>
      </AppHeader>
    </div>

    <LoadingSpinner v-if="loading" text="Áraink betöltés..." />

    <ErrorMessage
      v-else-if="error"
      text="Hiba történt az áraink betöltése során."
    />

    <div
      v-else
      class="flex flex-col space-y-8 py-10 max-w-screen-xl site-padding mx-auto rounded-xl [&>*:nth-child(even)]:bg-primary-200"
    >
      <p v-if="page">{{ page.uzenet }}</p>
      <div
        v-for="(item, index) in prices"
        :key="index"
        class="rounded-xl bg-secondary-200"
      >
        <h3
          class="p-6 rounded-t-xl"
          :class="index % 2 === 0 ? 'bg-primary-300' : 'bg-primary-100'"
        >
          {{ item.nev }}
        </h3>
        <div class="p-6">
          <div
            v-for="(treatment, index) in item.szolgaltatasok"
            :key="index"
            class="flex flex-col pb-4 space-y-1 sm:flex-row sm:items-center"
          >
            <p
              class="max-w-sm lg:max-w-screen-xl"
              :class="{
                'font-semibold': treatment.kiemelt === true,
                'italic py-4': treatment.kiemelt_dontve === true,
              }"
            >
              {{ treatment.nev }}
            </p>
            <div
              class="flex-grow hidden mx-4 border-b border-dotted sm:block border-b-gray-400"
            ></div>
            <p
              class="font-medium min-w-fit"
              :class="{
                italic: treatment.kiemelt_dontve === true,
              }"
            >
              {{ treatment.ar }}
            </p>
            <div
              class="flex-grow mx-4 border-b border-dotted sm:hidden border-b-gray-400"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col max-w-screen-xl mx-auto space-y-8 site-padding">
      <p class="text-xs italic">
        *Az Elysia Lézerközpont szolgáltatásainak díját készpénzben,
        bankkártyával, illetve bizonyos szolgáltatásokat egészségpénztárral is
        fizetheti.
      </p>
      <p class="text-xs">Egészségpénztári partnereink:</p>
      <ul>
        <li class="text-xs">OTP - Országos Egészség- és Önsegélyező Pénztár</li>
        <li class="text-xs">MBH Gondoskodás Egészségpénztár (régi MKB)</li>
        <li class="text-xs">
          Allianz Hungária Egészség- és Önsegélyező Pénztár
        </li>
        <li class="text-xs">Generali Egészség- és Önsegélyező Pénztár</li>
        <li class="text-xs">Prémium Egészség- és Önsegélyező Pénztár</li>
        <li class="text-xs">Patika Egészségpénztár</li>
      </ul>
    </div>
  </section>
</template>
