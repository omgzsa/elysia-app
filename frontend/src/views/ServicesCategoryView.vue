<script setup>
import { ref, computed } from "vue";
import sourceData from "@/assets/services.json";

const props = defineProps({
  category: {
    type: String,
    required: true,
  },
});

const services = ref(sourceData);

const service = computed(() => {
  return services.value.find((s) => s.category === props.category);
});
</script>

<template>
  <section class="container flex flex-col items-center">
    <h2>hello destination {{ props.category }}</h2>
    <p>hello service {{ service.name }}</p>
    <p>and the id is: {{ service.id }}</p>
    <p>and the category is: {{ service.category }}</p>
  </section>
</template>
