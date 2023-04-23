<script setup>
import { computed } from "vue";
import { useGetEmployeeImageUrl } from "../../composables/getEmployeeImageUrl";
import IconCalendar from "../icons/IconCalendar.vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const hasAppointment = computed(() => {
  return props.item.hasAppointment;
});

// a function that returns if item.consultTime is not empty
const hasConsultTime = computed(() => {
  return props.item.consultTime.length > 0;
});

const hasSpecialties = computed(() => {
  return props.item.specialties.length > 0;
});

// function that logs to the console
// const log = (msg) => console.log(msg);
// log(hasAppointment);
</script>
<template>
  <div class="site-padding">
    <div class="grid py-6 gap-4 md:grid-cols-2">
      <div class="flex flex-col space-y-6 py-10 order-2 md:order-1">
        <p class="whitespace-pre-wrap">{{ item.bio }}</p>
        <h3 v-if="hasSpecialties">Szakterületek</h3>
        <ul class="list-disc list-inside marker:bg-accent-100">
          <li v-for="item in item.specialties" :key="item.id">
            {{ item.title }}
          </li>
        </ul>
      </div>
      <div class="mb-auto md:order-2 mx-auto text-center relative group">
        <div
          class="bg-primary-100/20 h-80 md:h-96 w-full absolute -bottom-5 rounded-xl -z-10 group-hover:translate-y-1 transition-transform duration-200"
        ></div>
        <div class="flex flex-col space-y-4 px-6 lg:px-8 lg:py-4">
          <img
            :src="useGetEmployeeImageUrl(item.image)"
            :alt="item.title"
            class="lg:-mt-24 rounded-xl w-full h-64 md:h-80 object-cover object-top mb-4 group-hover:-translate-y-1 transition-transform duration-200"
          />
          <h3 v-if="hasConsultTime" class="text-center">Rendelési idő</h3>
          <ul class="pb-2">
            <li
              v-for="consulting in item.consultTime"
              :key="consulting.id"
              class="py-2 divide-gray-200"
            >
              <div class="flex justify-between border-b border-b-gray-300">
                <p class="mb-2">{{ consulting.day }}</p>
                <p class="mb-2">{{ consulting.hours }}</p>
              </div>
            </li>
          </ul>
          <AppLink :to="item.appointmentLink">
            <button
              class="rounded-md px-4 py-2 overflow-hidden relative group cursor-pointer font-medium text-white bg-accent-100 border border-accent-100"
              :class="{ disabled: !hasAppointment }"
            >
              <span
                class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"
              ></span>
              <span
                class="text-xs sm:text-sm font-bold flex flex-row items-center gap-2 relative transition duration-300 group-hover:text-accent-100 ease"
                ><IconCalendar /> <span>Időpontfoglalás</span></span
              >
            </button>
          </AppLink>
        </div>
      </div>
    </div>
  </div>
</template>
