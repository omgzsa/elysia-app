<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="category-card">
    <img src="" alt="" />
    <h3>{{ item.name }}</h3>
    <button>Bővebben</button>
    <!-- <AppLink /> -->
  </div>
</template>
