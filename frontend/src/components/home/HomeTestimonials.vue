<script setup>
defineProps({
  title: {
    type: String,
  },
});
</script>
<template>
  <div>
    <span class="subheading">elégedett ügyfeleink</span>
    <h2>{{ title }}</h2>
  </div>
</template>
