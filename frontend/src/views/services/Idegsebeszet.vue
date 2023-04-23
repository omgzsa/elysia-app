<script setup>
import { useGetImageUrl } from "../../composables/getImageUrl";
import { useGetEmployeeImageUrl } from "../../composables/getEmployeeImageUrl";

import IconClock from "@/components/icons/IconClock.vue";

const bgImage = "CTA_bg.webp";
</script>

<template>
  <section>
    <div class="flex flex-col space-y-8 mx-auto">
      <AppHeader>
        <template #subtitle> szolgáltatások </template>
        <template #title> Idegsebészeti vizsgálatok </template>
      </AppHeader>
    </div>
    <div class="max-w-screen-xl mx-auto py-10">
      <div
        class="grid grid-cols-1 sm:grid-cols-3 space-y-2 sm:space-y-0 gap-y-6 mb-8"
      >
        <!-- treatment information -->
        <div class="site-padding order-2 sm:col-span-2 space-y-6">
          <p class="">
            A rendelésen az idegsebészeti kórképek átfogó feltérképezése
            történik a panaszok részletes elemzésével, a kórelőzmény
            megismerésével és neurológiai állapotfelmérés segítségével, melyet
            adott esetben képi diagnosztikai (MR, CT, röntgen, ultrahang)
            vizsgálat követ.
          </p>
          <p class="">
            A diagnózis felállítása után részletesen átbeszéljük a legcélszerűbb
            kezelési tervet. Szükség szerint javaslatot teszünk az alapellátást
            kiegészítő gyógytornára, fizikoterápiára, majd a kontroll
            vizsgálatokon figyelemmel kísérjük a gyógyulás folymatát.
          </p>
          <h3>
            Idegsebészeti szakrendelésünket többek közt az alábbi panaszok
            előfordulása esetén érdemes felkeresni:
          </h3>

          <ul role="list" class="marker:text-accent-100 list-disc list-inside">
            <li>végtagba sugárzó fájdalom vagy zsibbadás</li>
            <li>erős, szokatlan fejfájások</li>
            <li>nyaki problémák</li>
            <li>hát és derékfájdalom, isiász</li>
            <li>gerincpanaszok</li>
          </ul>
        </div>
        <!-- treatment time/frequency -->
        <div class="px-4 relative sm:order-2 sm:col-span-1">
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
                  >a kezelés időtartama</span
                >
                <span
                  class="text-accent-100 font-medium md:font-semibold text-sm"
                  >15 - 20 perc</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- FAQ call to action -->
    <div>
      <div
        :style="{ backgroundImage: `url(${useGetImageUrl(bgImage)})` }"
        class="text-center py-20 bg-cover 3xl:bg-contain bg-left bg-no-repeat px-2 space-y-6"
      >
        <p
          class="text-white font-bold text-xl lg:text-2xl xl:text-3xl max-w-screen-md mx-auto"
        >
          Kérdése van?
        </p>
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
    <!-- related Doctors -->
    <div class="max-w-screen-xl mx-auto py-8 site-padding space-y-6">
      <div class="space-y-2 mb-8">
        <span class="subheading">elysia laser clinic</span>
        <h3>A témában jártas munkatársaink:</h3>
      </div>
      <div class="flex flex-col sm:flex-row gap-12 items-center">
        <div class="employee-card group relative">
          <div
            class="bg-primary-100/20 h-52 w-full absolute -bottom-5 rounded-xl -z-10 group-hover:translate-y-1 transition-transform duration-200"
          ></div>
          <AppLink
            v-slot="{ navigate }"
            :to="{
              name: 'employee.single',
              params: { slug: 'dr-barcsak-endre' },
            }"
            class="text-xs sm:text-sm text-gray-500"
          >
            <div
              @click="navigate"
              role="link"
              class="flex flex-col px-4 space-y-2"
            >
              <img
                :src="useGetEmployeeImageUrl('dr-barcsak-endre.webp')"
                alt="Dr. Barcsák Endre"
                class="rounded-xl w-full h-72 object-cover object-top mb-4 group-hover:-translate-y-1 transition-transform duration-200"
              />
              <h3 class="text-gray-900">Dr. Barcsák Endre</h3>
              <span>Idegsebész adjunktus</span>
            </div>
          </AppLink>
        </div>
      </div>
    </div>
  </section>
</template>
