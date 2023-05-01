<script setup>
import { computed } from "vue";
import { useGetImageUrl } from "../../composables/getImageUrl";
import { useGetServiceImageUrl } from "../../composables/getServiceImageUrl";
import TheBreadCrumbs from "@/components/TheBreadCrumbs.vue";
import ServiceRelatedDoctorsCard from "@/components/treatment/ServiceRelatedDoctorsCard.vue";

// icons
import IconLoop from "@/components/icons/IconLoop.vue";
import IconClock from "@/components/icons/IconClock.vue";

const bgImage = "CTA_bg.webp";

const hasData = computed(() => {
  return props.treatment.treatTime || props.treatment.frequency;
});

const hasFrequency = computed(() => {
  return props.treatment.frequency;
});

// function that returns if treatment has related doctors or not
const hasRelatedDoctors = computed(() => {
  return props.treatment.relatedDoctor.length > 0;
});

// a function that returns if treatment.images is empty or not
const hasImage = computed(() => {
  return props.treatment.images.length > 0;
});

const props = defineProps({
  treatment: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div>
    <div class="max-w-screen-xl mx-auto">
      <!-- breadcrumb component -->
      <TheBreadCrumbs />
      <div
        class="grid grid-cols-1 sm:grid-cols-3 space-y-2 sm:space-y-0 gap-y-6"
      >
        <!-- treatment information -->
        <div class="site-padding order-2 sm:col-span-2 space-y-6">
          <h3>{{ treatment.content.title }}</h3>
          <p class="whitespace-pre-wrap">
            {{ treatment.content.description }}
          </p>
          <h3>{{ treatment.content.title2 }}</h3>
          <!-- <img
            v-if="hasImage"
            class="h-80 mx-auto object-contain object-top"
            width="300"
            height="80"
            :src="useGetServiceImageUrl(props.treatment.images[0])"
            :alt="props.treatment.title"
          /> -->
          <p class="whitespace-pre-wrap">
            {{ treatment.content.description2 }}
          </p>
          <h3>{{ treatment.content.title3 }}</h3>
          <!-- <img
            v-if="hasImage"
            class="h-80 mx-auto object-contain object-top"
            width="300"
            height="80"
            :src="useGetServiceImageUrl(props.treatment.images[1])"
            :alt="props.treatment.title"
          /> -->
          <p class="whitespace-pre-wrap">
            {{ treatment.content.description3 }}
          </p>
          <h3>{{ treatment.content.benefitsTitle }}</h3>
          <ul role="list" class="marker:text-accent-100 list-disc list-inside">
            <li
              v-for="item in treatment.content.benefits"
              :key="item.id"
              class="whitespace-pre-wrap"
            >
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
                class="text-accent-100 flex-shrink text-xl md:text-2xl xl:text-3xl"
              />
              <div class="flex flex-col flex-1">
                <span
                  class="text-xs lg:text-sm xl:text-base tracking-wider uppercase text-gray-800"
                  >időtartam</span
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
                class="text-accent-100 flex-shrink text-xl md:text-2xl xl:text-3xl"
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
        <!-- medical equipment image (treatments have no image yet) -->
        <div
          class="flex sm:flex-col mx-auto px-4 relative sm:order-2 sm:col-span-1"
          v-if="hasImage"
        >
          <img
            class="h-60 sm:h-96 sm:sticky sm:top-20 object-contain object-top"
            width="300"
            height="80"
            :src="useGetServiceImageUrl(props.treatment.images[0])"
            :alt="props.treatment.title"
          />
          <!-- <img
            v-for="(image, index) in props.treatment.images"
            :key="index"
            class="h-60 sm:h-96 object-contain object-top"
            width="300"
            height="80"
            :src="useGetServiceImageUrl(image)"
            :alt="props.treatment.title"
          /> -->
        </div>
      </div>
    </div>
    <!-- related Doctors -->
    <div
      class="max-w-screen-xl mx-auto py-8 site-padding space-y-6 mb-10"
      v-if="hasRelatedDoctors"
    >
      <div class="space-y-2 mb-8">
        <!-- <span class="subheading">elysia laser clinic</span> -->
        <h3>A témában jártas munkatársaink:</h3>
      </div>
      <div class="flex flex-col sm:flex-row gap-12 items-start">
        <ServiceRelatedDoctorsCard
          v-for="item in props.treatment.relatedDoctor"
          :key="item.id"
          :item="item"
        />
      </div>
    </div>
    <!-- FAQ call to action -->

    <div
      :style="{ backgroundImage: `url(${useGetImageUrl(bgImage)})` }"
      class="text-center py-20 bg-cover 3xl:bg-contain bg-left bg-no-repeat px-2 space-y-6"
    >
      <span
        class="text-white font-bold text-xl lg:text-2xl xl:text-3xl max-w-screen-md mx-auto"
      >
        Kérdése van?
      </span>
      <p class="text-white max-w-2xl mx-auto">
        Böngéssze át a Gyakran Ismételt Kérdéseket, amelyek az orvosainknál
        felmerülhetnek. Olvashat a hozzájuk tartozó vizsgálatokról és arról
        mikor érdemes szakemberhez fordulni.
      </p>
      <div>
        <div class="flex flex-col justify-center gap-2 md:flex-row">
          <AppLink :to="{ name: 'faq.show' }">
            <button
              class="rounded-md px-8 py-2 m-1 overflow-hidden relative group cursor-pointer font-medium bg-secondary-100 border border-secondary-100"
            >
              <span
                class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-44 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"
              ></span>
              <span
                class="font-bold flex flex-row gap-2 relative text-gray-800 group-hover:text-secondary-100 transition duration-300 ease"
                >GY.I.K.</span
              >
            </button>
          </AppLink>
        </div>
      </div>
    </div>
  </div>
</template>
