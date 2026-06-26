<script setup>
import { computed } from "vue";
import { useGetImageUrl } from "../../composables/getImageUrl";
import TheBreadCrumbs from "@/components/TheBreadCrumbs.vue";
import ServiceRelatedDoctorsCard from "@/components/treatment/ServiceRelatedDoctorsCard.vue";

// icons
import IconLoop from "@/components/icons/IconLoop.vue";
import IconPhone from "@/components/icons/IconPhone.vue";
import IconClock from "@/components/icons/IconClock.vue";

const bgImage = "CTA_bg.webp";

const props = defineProps({
  treatment: {
    type: Object,
    required: true,
  },
});

// Plastic-surgery treatments require a prior consultation (shown as a notice).
const isPlasticSurgery = computed(() => {
  return props.treatment.kategoria?.slug === "plasztikai-sebeszet";
});

// +36202750025

const hasData = computed(() => {
  return (
    props.treatment.kezelesi_ido ||
    props.treatment.gyakorisaga ||
    isPlasticSurgery.value
  );
});

const hasFrequency = computed(() => {
  return props.treatment.gyakorisaga;
});

// related doctors come from the M2M junction (kapcsolodo_orvosok)
const relatedDoctors = computed(() => {
  return (props.treatment.kapcsolodo_orvosok || [])
    .map((j) => j.Munkatarsak_id)
    .filter(Boolean);
});

const hasRelatedDoctors = computed(() => relatedDoctors.value.length > 0);
</script>

<template>
  <div>
    <div class="max-w-(--breakpoint-xl) mx-auto">
      <!-- breadcrumb component -->
      <TheBreadCrumbs />
      <div
        class="grid grid-cols-1 space-y-2 sm:grid-cols-3 sm:space-y-0 gap-y-6"
      >
        <!-- treatment information -->
        <div class="order-2 mb-8 space-y-6 site-padding sm:col-span-2">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="treatment-content space-y-4" v-html="treatment.tartalom" />
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
                  class="shrink text-xl text-accent-100 md:text-2xl xl:text-3xl"
                />
                <div class="flex flex-col flex-1">
                  <span
                    class="text-xs tracking-wider text-gray-800 uppercase lg:text-sm xl:text-base"
                    >időtartam</span
                  >
                  <span
                    class="text-sm font-medium text-accent-100 md:font-semibold"
                    >{{ treatment.kezelesi_ido }}</span
                  >
                </div>
              </div>
              <div
                v-if="hasFrequency"
                class="flex items-center space-x-2 sm:flex-col sm:items-start sm:space-x-0 sm:space-y-2 md:flex-row md:items-center md:space-x-2 md:space-y-0"
              >
                <IconLoop
                  class="shrink text-xl text-accent-100 md:text-2xl xl:text-3xl"
                />
                <div class="flex flex-col flex-1">
                  <span
                    class="text-xs tracking-wider text-gray-800 uppercase lg:text-sm xl:text-base"
                    >gyakorisága</span
                  >
                  <span
                    class="text-sm font-medium text-accent-100 md:font-semibold"
                    >{{ treatment.gyakorisaga }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- related Doctors -->
    <div
      class="max-w-(--breakpoint-xl) py-8 mx-auto mb-10 space-y-6 site-padding"
      v-if="hasRelatedDoctors"
    >
      <div class="mb-8 space-y-2">
        <!-- <span class="subheading">elysia laser clinic</span> -->
        <h3>A témában jártas munkatársaink:</h3>
      </div>
      <div class="flex flex-col items-start gap-12 sm:flex-row">
        <ServiceRelatedDoctorsCard
          v-for="item in relatedDoctors"
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
        class="max-w-(--breakpoint-md) mx-auto text-xl font-bold text-white lg:text-2xl xl:text-3xl"
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

<style scoped>
/* The `tartalom` rich-text is injected via v-html, so target it with :deep().
   Match the previous card look: section titles render like h3, not the giant
   global h2, and benefit lists get bullets. */
.treatment-content :deep(h2) {
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.025em;
  line-height: 1.5rem;
}
@media (min-width: 768px) {
  .treatment-content :deep(h2) {
    font-size: 1.125rem;
  }
}
@media (min-width: 1024px) {
  .treatment-content :deep(h2) {
    font-size: 1.25rem;
  }
}
.treatment-content :deep(p) {
  white-space: pre-wrap;
}
.treatment-content :deep(ul) {
  list-style-type: disc;
  list-style-position: inside;
}
.treatment-content :deep(ul) ::marker {
  color: var(--color-accent-100);
}
</style>
