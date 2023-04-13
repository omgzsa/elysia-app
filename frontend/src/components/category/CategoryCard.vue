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
  <div class="category-card relative">
    <div
      class="bg-primary-100/20 h-52 w-full absolute -bottom-5 rounded-xl -z-10"
    ></div>
    <div class="px-4 space-y-2">
      <img
        :src="useGetServiceImageUrl(item.image)"
        :alt="item.name"
        class="rounded-xl w-full h-52 object-cover object-top mb-6"
      />
      <h3>{{ item.name }}</h3>

      <AppLink
        tag="button"
        :to="{ name: 'service.single', params: { slug: item.slug } }"
        class="text-xs sm:text-sm text-gray-500 flex gap-4 items-center"
      >
        Bővebben <IconArrowRight />
      </AppLink>
    </div>
  </div>
</template>
