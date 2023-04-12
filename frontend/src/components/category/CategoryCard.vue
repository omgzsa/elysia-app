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
  <div class="category-card">
    <img
      :src="useGetServiceImageUrl(item.image)"
      :alt="item.name"
      class="rounded-xl w-full h-52 object-cover object-top"
    />
    <h3>{{ item.name }}</h3>
    <button class="text-xs text-gray-500 flex gap-4 items-center">
      Bővebben <IconArrowRight />
    </button>
    <!-- <AppLink /> -->
  </div>
</template>
