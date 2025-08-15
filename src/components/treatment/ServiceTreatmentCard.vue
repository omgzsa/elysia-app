<script setup>
import { computed } from "vue";
import { useGetImageUrl } from "../../composables/getImageUrl";
import { useGetServiceImageUrl } from "../../composables/getServiceImageUrl";
import { useGetTreatmentImageUrl } from "../../composables/getTreatmentImageUrl";
import { ImgComparisonSlider } from "@img-comparison-slider/vue";
import TheBreadCrumbs from "@/components/TheBreadCrumbs.vue";
import ServiceRelatedDoctorsCard from "@/components/treatment/ServiceRelatedDoctorsCard.vue";

// icons
import IconLoop from "@/components/icons/IconLoop.vue";
import IconPhone from "@/components/icons/IconPhone.vue";
import IconClock from "@/components/icons/IconClock.vue";

const bgImage = "CTA_bg.webp";

const isPlasticSurgery = computed(() => {
  return (
    props.treatment.id === 22 ||
    props.treatment.id === 23 ||
    props.treatment.id === 25
  );
});

// +36202750025

const hasData = computed(() => {
  return (
    props.treatment.treatTime ||
    props.treatment.frequency ||
    isPlasticSurgery.value
  );
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

// a function that returns if treatment.treatmentImages.images is empty or not
const hasTreatmentImage = computed(() => {
  return props.treatment.treatmentImages.length > 0;
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
        class="grid grid-cols-1 space-y-2 sm:grid-cols-3 sm:space-y-0 gap-y-6"
      >
        <!-- treatment information -->
        <div class="order-2 mb-8 space-y-6 site-padding sm:col-span-2">
          <h3>{{ treatment.content.title }}</h3>
          <p class="whitespace-pre-wrap">
            {{ treatment.content.description }}
          </p>
          <div class="text-center" v-if="hasTreatmentImage">
            <ImgComparisonSlider>
              <!-- eslint-disable -->
              <img
                slot="first"
                class="object-cover m-auto h-72 rounded-xl"
                style="width: 100%"
                :src="
                  useGetTreatmentImageUrl(props.treatment.treatmentImages[0])
                "
                width="220"
                height="200"
                alt=""
              />
              <img
                slot="second"
                class="object-cover m-auto h-72 rounded-xl"
                style="width: 100%"
                :src="
                  useGetTreatmentImageUrl(props.treatment.treatmentImages[1])
                "
                width="220"
                height="200"
                alt=""
              />
              <!-- eslint-enable -->
            </ImgComparisonSlider>
          </div>
          <h3>{{ treatment.content.title2 }}</h3>
          <p class="whitespace-pre-wrap">
            {{ treatment.content.description2 }}
          </p>
          <h3>{{ treatment.content.benefitsTitle }}</h3>
          <ul role="list" class="list-disc list-inside marker:text-accent-100">
            <li
              v-for="item in treatment.content.benefits"
              :key="item.id"
              class="whitespace-pre-wrap"
            >
              {{ item.text }}
            </li>
          </ul>
          <h3>{{ treatment.content.title3 }}</h3>
          <p class="whitespace-pre-wrap">
            {{ treatment.content.description3 }}
          </p>
          <h3>{{ treatment.content.benefitsTitle2 }}</h3>
          <ul role="list" class="list-disc list-inside marker:text-accent-100">
            <li
              v-for="item in treatment.content.benefits2"
              :key="item.id"
              class="whitespace-pre-wrap"
            >
              {{ item.text }}
            </li>
          </ul>
          <p class="whitespace-pre-wrap">
            {{ treatment.content.description4 }}
          </p>
        </div>
        <!-- treatment time/frequency -->
        <div class="relative px-4 sm:order-2 sm:col-span-1" v-if="hasData">
          <div class="sm:sticky top-20">
            <div
              v-if="isPlasticSurgery"
              class="flex items-center space-x-2 sm:flex-col sm:items-start sm:space-x-0 sm:space-y-2 md:flex-row md:items-center md:space-x-2 md:space-y-0 border border-primary-100 bg-primary-200 px-4 py-4 rounded-xl lg:py-6 lg:px-6 xl:py-8 xl:px-10 mb-4"
            >
              <div>
                <p class="mb-3">
                  A műtét minden esetben előzetes konzultációhoz kötött. A
                  konzultációra időpontot telefonon vagy személyesen a
                  rendelőben tud kérni.
                  <span class="italic">(+36202750025)</span>
                </p>
                <a href="tel:+36202750025">
                  <button
                    class="rounded-md px-4 py-2 overflow-hidden relative group cursor-pointer font-medium text-white bg-accent-100 border border-accent-100"
                  >
                    <span
                      class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"
                    ></span>
                    <span
                      class="text-xs md:text-sm font-bold flex flex-row items-center gap-2 relative transition duration-300 group-hover:text-accent-100 ease"
                      ><IconPhone /> <span>Időpontfoglalás</span></span
                    >
                  </button>
                </a>
              </div>
            </div>
            <div
              class="flex flex-col px-4 py-4 mx-auto space-y-6 bg-primary-200 border border-primary-100 rounded-xl lg:py-6 lg:px-6 xl:py-8 xl:px-10"
            >
              <div
                class="flex items-center space-x-2 sm:flex-col sm:items-start sm:space-x-0 sm:space-y-2 md:flex-row md:items-center md:space-x-2 md:space-y-0"
              >
                <IconClock
                  class="flex-shrink text-xl text-accent-100 md:text-2xl xl:text-3xl"
                />
                <div class="flex flex-col flex-1">
                  <span
                    class="text-xs tracking-wider text-gray-800 uppercase lg:text-sm xl:text-base"
                    >időtartam</span
                  >
                  <span
                    class="text-sm font-medium text-accent-100 md:font-semibold"
                    >{{ props.treatment.treatTime }}</span
                  >
                </div>
              </div>
              <div
                v-if="hasFrequency"
                class="flex items-center space-x-2 sm:flex-col sm:items-start sm:space-x-0 sm:space-y-2 md:flex-row md:items-center md:space-x-2 md:space-y-0"
              >
                <IconLoop
                  class="flex-shrink text-xl text-accent-100 md:text-2xl xl:text-3xl"
                />
                <div class="flex flex-col flex-1">
                  <span
                    class="text-xs tracking-wider text-gray-800 uppercase lg:text-sm xl:text-base"
                    >gyakorisága</span
                  >
                  <span
                    class="text-sm font-medium text-accent-100 md:font-semibold"
                    >{{ props.treatment.frequency }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- medical equipment image (treatments have no image yet) -->
        <div
          class="relative flex px-4 mx-auto sm:flex-col sm:order-2 sm:col-span-1"
          v-if="hasImage"
        >
          <img
            class="object-contain object-top h-60 sm:h-96 sm:sticky sm:top-20"
            width="300"
            height="80"
            :src="useGetServiceImageUrl(props.treatment.images[0])"
            :alt="props.treatment.title"
          />
        </div>
      </div>
    </div>
    <!-- related Doctors -->
    <div
      class="max-w-screen-xl py-8 mx-auto mb-10 space-y-6 site-padding"
      v-if="hasRelatedDoctors"
    >
      <div class="mb-8 space-y-2">
        <!-- <span class="subheading">elysia laser clinic</span> -->
        <h3>A témában jártas munkatársaink:</h3>
      </div>
      <div class="flex flex-col items-start gap-12 sm:flex-row">
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
      class="px-2 py-20 space-y-6 text-center bg-left bg-no-repeat bg-cover 3xl:bg-contain"
    >
      <span
        class="max-w-screen-md mx-auto text-xl font-bold text-white lg:text-2xl xl:text-3xl"
      >
        Kérdése van?
      </span>
      <p class="max-w-2xl mx-auto text-white">
        Böngéssze át a Gyakran Ismételt Kérdéseket, amelyek az orvosainknál
        felmerülhetnek. Olvashat a hozzájuk tartozó vizsgálatokról és arról
        mikor érdemes szakemberhez fordulni.
      </p>
      <div>
        <div class="flex flex-col justify-center gap-2 md:flex-row">
          <AppLink :to="{ name: 'faq.show' }">
            <button
              class="relative px-8 py-2 m-1 overflow-hidden font-medium border rounded-md cursor-pointer group bg-secondary-100 border-secondary-100"
            >
              <span
                class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 bg-white -translate-x-44 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"
              ></span>
              <span
                class="relative flex flex-row gap-2 font-bold text-gray-800 transition duration-300 group-hover:text-secondary-100 ease"
                >GY.I.K.</span
              >
            </button>
          </AppLink>
        </div>
      </div>
    </div>
  </div>
</template>
