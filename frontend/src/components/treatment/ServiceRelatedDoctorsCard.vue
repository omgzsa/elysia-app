<script setup>
import { useGetEmployeeImageUrl } from "../../composables/getEmployeeImageUrl";

defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="employee-card group relative">
    <div
      class="bg-primary-100/20 h-52 w-full absolute -bottom-5 rounded-xl -z-10 group-hover:translate-y-1 transition-transform duration-200"
    ></div>
    <AppLink
      v-slot="{ navigate }"
      :to="{ name: 'employee.single', params: { slug: item.slug } }"
      class="text-xs sm:text-sm text-gray-500"
    >
      <div @click="navigate" role="link" class="flex flex-col px-4 space-y-2">
        <img
          :src="useGetEmployeeImageUrl(item.image)"
          :alt="item.name"
          class="rounded-xl w-full h-72 object-cover object-top mb-4 group-hover:-translate-y-1 transition-transform duration-200"
        />
        <h3 class="text-gray-900">
          {{ item.name }}
        </h3>
        <span>{{ item.title }}</span>
      </div>
    </AppLink>
  </div>
</template>
