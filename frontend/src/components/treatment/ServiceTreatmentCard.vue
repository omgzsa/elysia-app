<script setup>
import { computed } from "vue";
// icons
import IconLoop from "@/components/icons/IconLoop.vue";
import IconClock from "@/components/icons/IconClock.vue";

const hasData = computed(() => {
  return props.treatment.treatTime && props.treatment.frequency;
});

const props = defineProps({
  treatment: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <section class="max-w-screen-xl">
    <div
      class="grid grid-cols-1 sm:grid-cols-3 space-y-6 sm:space-y-0 gap-y-6 sm:py-8"
    >
      <!-- treatment information -->
      <div class="site-padding order-2 sm:col-span-2 space-y-4">
        <h3>{{ treatment.content.title }}</h3>
        <p class="whitespace-pre-wrap">
          {{ treatment.content.description }}
        </p>
        <h3>{{ treatment.content.title2 }}</h3>
        <p>{{ treatment.content.description2 }}</p>
        <h3>{{ treatment.content.title3 }}</h3>
        <p>{{ treatment.content.description3 }}</p>
        <h3>{{ treatment.content.benefitsTitle }}</h3>
        <ul>
          <li v-for="item in treatment.content.benefits" :key="item.id">
            {{ item.text }}
          </li>
        </ul>
      </div>
      <!-- treatment time/frequency -->
      <div
        class="site-padding pt-2 relative sm:order-2 sm:col-span-1"
        v-if="hasData"
      >
        <div
          class="flex flex-col space-y-6 mx-auto w-64 sm:w-full lg:max-w-md bg-primary-200 py-3 px-3 rounded-xl lg:py-6 lg:px-10 sm:sticky top-20"
        >
          <div class="flex items-start space-x-2">
            <IconClock
              class="text-accent-100 flex-shrink text-xs lg:text-base"
            />
            <div class="flex flex-col flex-1">
              <span class="subheading">a kezelés időtartama</span>
              <span
                class="text-accent-100 font-medium md:font-semibold text-sm"
                >{{ props.treatment.treatTime }}</span
              >
            </div>
          </div>
          <div class="flex items-start space-x-2">
            <IconLoop
              class="text-accent-100 flex-shrink text-xs lg:text-base"
            />
            <div class="flex flex-col flex-1">
              <span class="subheading">gyakorisága</span>
              <span
                class="text-accent-100 font-medium md:font-semibold text-sm"
                >{{ props.treatment.frequency }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
