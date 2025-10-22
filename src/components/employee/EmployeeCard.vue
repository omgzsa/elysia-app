<script setup>
import { inject } from "vue";

const { apiUrl } = inject("$directus");

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  navigationDisabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="employee-card group relative">
    <div
      class="bg-primary-100/20 h-52 w-full absolute -bottom-5 rounded-xl -z-10 group-hover:translate-y-1 transition-transform duration-200"
    ></div>
    <RouterLink
      v-if="!navigationDisabled"
      :to="{ name: 'employee.single', params: { slug: item.slug } }"
      class="text-xs sm:text-sm text-gray-500"
    >
      <div role="link" class="flex flex-col px-4 space-y-2">
        <img
          :src="`${apiUrl}/assets/${item.kep}?w=128&h=128&fit=cover`"
          :alt="item.nev"
          width="128"
          height="128"
          class="rounded-xl w-full h-64 object-cover object-top mb-4 group-hover:-translate-y-1 transition-transform duration-200"
        />
        <h3 class="text-gray-900">
          {{ item.nev }}
        </h3>
        <span>{{ item.titulus }}</span>
      </div>
    </RouterLink>
    <div v-else class="text-xs sm:text-sm text-gray-500">
      <div class="flex flex-col px-4 space-y-2">
        <img
          :src="`${apiUrl}/assets/${item.kep}?w=128&h=128&fit=cover`"
          :alt="item.nev"
          width="128"
          height="128"
          class="rounded-xl w-full h-64 object-cover object-top mb-4 group-hover:-translate-y-1 transition-transform duration-200"
        />
        <h3 class="text-gray-900">
          {{ item.nev }}
        </h3>
        <span>{{ item.titulus }}</span>
      </div>
    </div>
  </div>
</template>
