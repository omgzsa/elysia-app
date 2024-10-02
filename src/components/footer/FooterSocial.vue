<script setup>
import IconFacebook from '../icons/IconFacebook.vue';
import IconInstagram from '../icons/IconInstagram.vue';
import AppLink from '../AppLink.vue';
</script>

<template>
  <ul class="flex justify-start gap-2 mt-8 sm:mt-0 lg:justify-end">
    <li>
      <AppLink
        to="https://www.facebook.com/elysiagyor"
        class="text-gray-500 transition hover:text-gray-700"
      >
        <span class="sr-only">Facebook</span>

        <IconFacebook class="text-lg" />
      </AppLink>
    </li>

    <li>
      <AppLink
        to="https://www.instagram.com/elysiagyor/"
        class="text-gray-500 transition hover:text-gray-700"
      >
        <span class="sr-only">Instagram</span>

        <IconInstagram class="text-lg" />
      </AppLink>
    </li>
  </ul>
</template>
