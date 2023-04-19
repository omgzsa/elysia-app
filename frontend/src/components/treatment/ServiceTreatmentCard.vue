<script setup>
import { computed } from "vue";
import TheBreadCrumbs from "@/components/TheBreadCrumbs.vue";

// icons
import IconLoop from "@/components/icons/IconLoop.vue";
import IconClock from "@/components/icons/IconClock.vue";

// const hasTreatTime = computed(() => {
//   return props.treatment.treatTime;
// });

const hasData = computed(() => {
  return props.treatment.treatTime || props.treatment.frequency;
});

const hasFrequency = computed(() => {
  return props.treatment.frequency;
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
    <!-- breadcrumb component -->
    <TheBreadCrumbs />
    <div class="grid grid-cols-1 sm:grid-cols-3 space-y-2 sm:space-y-0 gap-y-6">
      <!-- treatment information -->
      <div class="site-padding order-2 sm:col-span-2 space-y-6">
        <h3>{{ treatment.content.title }}</h3>
        <p class="whitespace-pre-wrap">
          {{ treatment.content.description }}
        </p>
        <h3>{{ treatment.content.title2 }}</h3>
        <p class="whitespace-pre-wrap">{{ treatment.content.description2 }}</p>
        <h3>{{ treatment.content.title3 }}</h3>
        <p class="whitespace-pre-wrap">{{ treatment.content.description3 }}</p>
        <h3>{{ treatment.content.benefitsTitle }}</h3>
        <ul role="list" class="marker:text-accent-100 list-disc list-inside">
          <li v-for="item in treatment.content.benefits" :key="item.id">
            {{ item.text }}
          </li>
        </ul>
      </div>
      <!-- treatment time/frequency -->
      <div class="px-4 relative sm:order-2 sm:col-span-1" v-if="hasData">
        <div
          class="flex flex-col space-y-6 mx-auto w-64 sm:w-full lg:max-w-md bg-primary-200 py-4 px-4 rounded-xl lg:py-6 lg:px-6 xl:py-8 xl:px-10 sm:sticky top-20"
        >
          <div
            class="flex items-center space-x-2 sm:flex-col sm:items-start sm:space-x-0 sm:space-y-2 md:flex-row md:items-center md:space-x-2 md:space-y-0"
          >
            <IconClock
              class="text-accent-100 flex-shrink text-xs lg:text-base"
            />
            <div class="flex flex-col flex-1">
              <span
                class="text-xs lg:text-sm xl:text-base tracking-wider uppercase text-gray-800"
                >a kezelés időtartama</span
              >
              <span
                class="text-accent-100 font-medium md:font-semibold text-sm"
                >{{ props.treatment.treatTime }}</span
              >
            </div>
          </div>
          <div
            v-if="hasFrequency"
            class="flex items-center space-x-2 sm:flex-col sm:items-start sm:space-x-0 sm:space-y-2 md:flex-row md:items-center md:space-x-2 md:space-y-0"
          >
            <IconLoop
              class="text-accent-100 flex-shrink text-xs lg:text-base"
            />
            <div class="flex flex-col flex-1">
              <span
                class="text-xs lg:text-sm xl:text-base tracking-wider uppercase text-gray-800"
                >gyakorisága</span
              >
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
