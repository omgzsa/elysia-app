<script setup>
import { ref, inject, onMounted } from "vue";
import { useGetImageUrl } from "../../composables/getImageUrl";

const { directusService, apiUrl } = inject("$directus");

defineProps({
  title: { type: String },
  description: { type: String },
});

// featured categories (kiemelt flag in Directus)
const servicesFeatured = ref([]);

onMounted(async () => {
  try {
    servicesFeatured.value = await directusService.getKategoriak({
      filter: {
        status: { _eq: "published" },
        kiemelt: { _eq: true },
      },
    });
  } catch (err) {
    console.error("Error fetching featured categories:", err);
  }
});
</script>

<template>
  <div class="max-w-(--breakpoint-xl) mx-auto site-padding flex flex-col space-y-12">
    <!-- title and description -->
    <div class="grid grid-cols-1 gap-y-6 text-center mx-auto max-w-3xl">
      <span class="subheading">elysia laser clinic</span>
      <slot name="title"
        ><h2>
          {{ title }}
        </h2></slot
      >
      <p>
        <slot name="description" />
      </p>
    </div>
    <!-- service list with symbols -->
    <ul
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-8 lg:gap-y-12 px-2 items-start"
      name="list"
    >
      <li
        v-for="service in servicesFeatured"
        :key="service.id"
        class="list-item transform transition duration-300 ease-in-out hover:-translate-y-1"
      >
        <AppLink
          class="flex flex-col items-center gap-4"
          :to="{
            name: 'services.category',
            params: { category: service.slug },
          }"
        >
          <img
            class="h-24 sm:h-32 w-full object-contain"
            width="100"
            height="100"
            :src="`${apiUrl}/assets/${service.kep}`"
            :alt="service.nev + ' szimbólum'"
          />
          <p class="font-semibold text-center text-xs sm:text-base">
            {{ service.nev }}
          </p>
        </AppLink>
      </li>
      <li
        class="list-item transform transition duration-300 ease-in-out hover:-translate-y-1"
      >
        <AppLink
          class="flex flex-col items-center gap-4"
          :to="{
            name: 'zero.skin',
          }"
        >
          <img
            class="h-24 sm:h-32 w-full object-contain"
            :src="useGetImageUrl('z0_skin_health.webp')"
            width="100"
            height="100"
            alt="z0-skin-health szimbólum"
          />
          <p class="font-semibold text-center text-xs sm:text-base">
            Z0 Skin Health
          </p>
        </AppLink>
      </li>
      <li
        class="list-item transform transition duration-300 ease-in-out hover:-translate-y-1"
      >
        <AppLink
          class="flex flex-col items-center gap-4"
          :to="{
            name: 'service.pulmonology',
          }"
        >
          <img
            class="h-24 sm:h-32 w-full object-contain"
            :src="useGetImageUrl('tudogyogyaszati-szakrendeles.webp')"
            width="100"
            height="100"
            alt="tüdőgyógyászat szimbólum"
          />
          <p class="font-semibold text-center text-xs sm:text-base">
            Tüdőgyógyászat
          </p>
        </AppLink>
      </li>
    </ul>
  </div>
</template>
