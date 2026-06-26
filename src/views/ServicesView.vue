<script setup>
import { ref, inject, onMounted } from "vue";
import { useGetImageUrl } from "../composables/getImageUrl";
import ErrorMessage from "@/components/ErrorMessage.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

import { useHead } from "@vueuse/head";

const { directusService, apiUrl } = inject("$directus");

// Categories that have dedicated static pages (own routes), so they are
// excluded from the dynamic category grid below.
const STATIC_CATEGORY_SLUGS = [
  "tudogyogyaszat",
  "idegsebeszet",
  "szomnologia",
  "allergologia",
];

const loading = ref(false);
const error = ref(null);
const categories = ref([]);

async function fetchCategories() {
  loading.value = true;
  try {
    const response = await directusService.getKategoriak({
      filter: { status: { _eq: "published" } },
    });
    categories.value = response.filter(
      (c) => !STATIC_CATEGORY_SLUGS.includes(c.slug),
    );
  } catch (err) {
    console.error("Error fetching categories:", err);
    error.value = err;
  } finally {
    loading.value = false;
  }
}

onMounted(fetchCategories);

const pageTitle = ref("Szolgáltatásaink");
const pageDescription = ref(
  "Fedezd fel a legjobb orvosi és esztétikai lézerkezeléseket szolgáltatásaink között, tapasztalt szakembereink és korszerű technológiáink segítségével.",
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
      content: "https://elysia.hu/szolgaltatasaink",
    },
  ],
});
</script>

<template>
  <section class="mb-0">
    <div class="flex flex-col mx-auto space-y-10">
      <AppHeader>
        <template #subtitle> elysia laser clinic </template>
        <template #title> Szolgáltatásaink </template>
      </AppHeader>
    </div>
    <div class="max-w-(--breakpoint-xl) py-16 mx-auto space-y-10 site-padding">
      <LoadingSpinner v-if="loading" text="Szolgáltatásaink betöltése..." />

      <ErrorMessage
        v-else-if="error"
        text="Hiba történt a szolgáltatásaink betöltése során."
      />

      <ul
        v-else
        class="grid items-start grid-cols-2 px-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-8 lg:gap-y-12 sm:gap-x-6"
        name="list"
      >
        <li
          v-for="service in categories"
          :key="service.id"
          class="transition duration-300 ease-in-out transform list-item hover:-translate-y-1"
        >
          <AppLink
            class="flex flex-col items-center gap-4"
            :to="{
              name: 'services.category',
              params: { category: service.slug },
            }"
          >
            <img
              class="object-contain w-full h-24 sm:h-32"
              :src="`${apiUrl}/assets/${service.kep}`"
              :alt="service.nev + ' szimbólum'"
              height="100"
              width="100"
            />
            <p class="text-xs font-semibold text-center sm:text-base">
              {{ service.nev }}
            </p>
          </AppLink>
        </li>
        <li
          class="transition duration-300 ease-in-out transform list-item hover:-translate-y-1"
        >
          <AppLink
            class="flex flex-col items-center gap-4"
            :to="{
              name: 'service.pulmonology',
            }"
          >
            <img
              class="object-contain w-full h-24 sm:h-32"
              :src="useGetImageUrl('tudogyogyaszati-szakrendeles.webp')"
              alt="tüdőgyógyászati vizsgálatok szimbólum"
            />
            <p class="text-xs font-semibold text-center sm:text-base">
              Tüdőgyógyászat
            </p>
          </AppLink>
        </li>
        <!-- <li
          class="transition duration-300 ease-in-out transform list-item hover:-translate-y-1"
        >
          <AppLink
            class="flex flex-col items-center gap-4"
            :to="{
              name: 'service.neurosurgery',
            }"
          >
            <img
              class="object-contain w-full h-24 sm:h-32"
              :src="useGetImageUrl('idegsebeszeti-vizsgalatok.webp')"
              alt="idegsebészeti vizsgálatok szimbólum"
              height="100"
              width="100"
            />
            <p class="text-xs font-semibold text-center sm:text-base">
              Idegsebészet
            </p>
          </AppLink>
        </li> -->
        <li
          class="transition duration-300 ease-in-out transform list-item hover:-translate-y-1"
        >
          <AppLink
            class="flex flex-col items-center gap-4"
            :to="{
              name: 'service.somnology',
            }"
          >
            <img
              class="object-contain w-full h-24 sm:h-32"
              :src="useGetImageUrl('szomnologia.webp')"
              alt="szomnológia szimbólum"
              height="100"
              width="100"
            />
            <p class="text-xs font-semibold text-center sm:text-base">
              Szomnológia
            </p>
          </AppLink>
        </li>
        <li
          class="transition duration-300 ease-in-out transform list-item hover:-translate-y-1"
        >
          <AppLink
            class="flex flex-col items-center gap-4"
            :to="{
              name: 'service.allergology',
            }"
          >
            <img
              class="object-contain w-full h-24 sm:h-32"
              :src="useGetImageUrl('allergologia.webp')"
              alt="allergológia szimbólum"
              height="100"
              width="100"
            />
            <p class="text-xs font-semibold text-center sm:text-base">
              Allergológia
            </p>
          </AppLink>
        </li>
      </ul>
    </div>
  </section>
</template>
