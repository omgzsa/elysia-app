<script setup>
import { useGetServiceImageUrl } from "../../composables/getServiceImageUrl";

import IconArrowRight from "@/components/icons/IconArrowRight.vue";

defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="category-card group relative">
    <div
      class="bg-primary-100/20 h-52 w-full absolute -bottom-5 rounded-xl -z-10 group-hover:translate-y-1 transition-transform duration-200"
    ></div>
    <div class="flex flex-col px-4 space-y-2">
      <img
        :src="useGetServiceImageUrl(item.image)"
        :alt="item.name"
        height="200"
        width="220"
        class="rounded-xl w-full h-52 object-cover object-top mb-4 group-hover:-translate-y-1 transition-transform duration-200"
      />
      <h3 class="">
        {{ item.name }}
      </h3>

      <AppLink
        v-slot="{ navigate }"
        :to="{ name: 'service.single', params: { slug: item.slug } }"
        class="text-xs sm:text-sm text-gray-500"
      >
        <span @click="navigate" role="link" class="flex gap-4 items-start">
          Bővebben <IconArrowRight
        /></span>
      </AppLink>
    </div>
  </div>
</template>
