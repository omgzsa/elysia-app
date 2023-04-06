<script setup>
// import { useRoute } from "vue-router";
import { ref, computed } from "vue";
import sourceData from "@/assets/services.json";

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
});

const services = ref(sourceData);

const service = computed(() => {
  return services.value.find((s) => s.slug === props.slug);
});
</script>

<template>
  <div class="container flex flex-col items-center">
    <h2>hello destination {{ props.slug }}</h2>
    <!-- <ul>
      <li v-for="item in sourceData" :key="item.id">{{ item.slug }}</li>
    </ul> -->
    <h2>hello service {{ service.name }}</h2>
    <h3>and the id is: {{ service.id }}</h3>
    <h4>and the slug is: {{ service.slug }}</h4>
  </div>
</template>
