<script setup>
import { ref } from "vue";
import {
  borgyogyaszat,
  lezerkezelesek,
  orvosEsztetika,
  plasztikaiSebeszet,
  diagnosztikaiVizsgalatok,
  orvosiTermekek,
} from "@/utils/links";
import TheDropdown from "./TheDropdown.vue";
import IconDown from "./icons/IconDown.vue";
import IconRight from "./icons/IconRight.vue";

import { onClickOutside } from "@vueuse/core";

const target = ref(null);

const isServicesOpen = ref(false);
const toggleServices = () => (isServicesOpen.value = !isServicesOpen.value);

onClickOutside(target, () => {
  isServicesOpen.value = false;
});
</script>

<template>
  <aside
    class="absolute z-10 p-6 ml-auto bg-white border right-6 sm:right-10 sm:w-60 rounded-xl"
  >
    <nav class="space-y-8 text-sm">
      <div class="space-y-2">
        <span
          class="text-sm font-semibold tracking-widest uppercase dark:text-gray-400"
        >
          Menü
        </span>
        <div class="flex flex-col space-y-2">
          <AppLink :to="{ name: 'home' }"> Kezdőlap </AppLink>

          <div class="relative z-0" ref="target">
            <div
              @click="toggleServices"
              class="flex items-center space-x-2 cursor-pointer hover:text-accent-100"
            >
              <p class="text-sm xl:text-base">Szolgáltatások</p>
              <IconDown v-if="isServicesOpen" />
              <IconRight v-else />
            </div>
            <Transition name="dropdown-fade">
              <ul
                v-show="isServicesOpen"
                class="absolute z-10 flex flex-col p-5 space-y-2 bg-white border right-1 sm:right-36 lg:right-auto top-4 xl:top-7 max-h-max w-max rounded-xl"
              >
                <TheDropdown title="Lézerkezelések" :submenu="lezerkezelesek" />

                <TheDropdown
                  title="Plasztikai sebészet"
                  :submenu="plasztikaiSebeszet"
                />

                <TheDropdown
                  title="Orvos esztétika"
                  :submenu="orvosEsztetika"
                />

                <TheDropdown title="Bőrgyógyászat" :submenu="borgyogyaszat" />

                <TheDropdown
                  title="Labor és diagnosztika"
                  :submenu="diagnosztikaiVizsgalatok"
                />

                <TheDropdown
                  title="Orvosi termékek"
                  :submenu="orvosiTermekek"
                />

                <AppLink class="text-sm" :to="{ name: 'service.pulmonology' }">
                  Tüdőgyógyászat
                </AppLink>
                <AppLink class="text-sm" :to="{ name: 'service.neurosurgery' }">
                  Idegsebészet
                </AppLink>
                <AppLink class="text-sm" :to="{ name: 'service.somnology' }">
                  Szomnológia
                </AppLink>
                <AppLink class="text-sm" :to="{ name: 'service.allergology' }">
                  Allergológia
                </AppLink>
              </ul>
            </Transition>
          </div>

          <AppLink :to="{ name: 'zero.skin' }"> Z0 Skin Health </AppLink>

          <AppLink :to="{ name: 'prices.show' }"> Áraink </AppLink>

          <AppLink :to="{ name: 'employees.show' }"> Munkatársak </AppLink>

          <AppLink :to="{ name: 'blogs.show' }"> Blog </AppLink>

          <AppLink :to="{ name: 'home', hash: '#contact' }">
            Kapcsolat
          </AppLink>
        </div>
      </div>
    </nav>
  </aside>
</template>
