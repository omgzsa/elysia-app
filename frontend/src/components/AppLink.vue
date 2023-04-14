<script setup>
import { RouterLink } from "vue-router";
import { computed } from "vue";

const props = defineProps({
  ...RouterLink.props,
});

const isExternal = computed(
  () => typeof props.to === "string" && props.to.startsWith("http")
);
</script>

<template>
  <template v-if="isExternal">
    <a
      class="cursor-pointer hover:text-accent-100 transition"
      :href="to"
      rel="noopener"
      target="_blank"
      ><slot
    /></a>
  </template>
  <RouterLink
    class="cursor-pointer hover:text-accent-100 transition"
    v-else
    v-bind="$props"
    ><slot
  /></RouterLink>
</template>
