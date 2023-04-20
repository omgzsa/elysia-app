<script setup>
import { useGetImageUrl } from "../composables/getImageUrl";

const images = [
  {
    text: "Testkezelés",
    image: "z0-testkezeles.webp",
  },
  {
    text: "Öregedő bőr",
    image: "z0-oregedo-bor.webp",
  },
  {
    text: "Pigmentfoltok",
    image: "z0-pigmentfoltok.webp",
  },
  {
    text: "Rosacea",
    image: "z0-rosacea.webp",
  },
  {
    text: "Érzékeny bőr",
    image: "z0-erzekeny-bor.webp",
  },
  {
    text: "Napkárosodás",
    image: "z0-napkarosodas.webp",
  },
  {
    text: "Akne, pattanásos bőr",
    image: "z0-akne-pattanas.webp",
  },
];
</script>
<template>
  <section class="space-y-12">
    <div class="flex flex-col space-y-10 mx-auto">
      <AppHeader>
        <template #subtitle>orvosi termékek</template>
        <template #title>Z0 Skin Health</template>
      </AppHeader>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-xl mx-auto site-padding"
    >
      <!-- content -->
      <div class="space-y-8">
        <h3>Z0® Skin Health megoldások bőrproblémákra</h3>
        <p>
          Ha Ön is szeretné látványosan javítani bőre állapotát és visszanyerni
          annak egészségét, keresse fel orvosainkat. Részletes konzultációt
          követően a bőrproblémájára egyedileg szabott megoldási javaslatot kap.
          <br /><br />A ZO® Skin Health termékek otthoni használatával rövid idő
          alatt látványos bőrminőség javulást érhet el bőrproblémától és kortól
          függetlenül. Az elért eredmények megtartása hosszútávon is biztosított
          a ZO® bőrápolási rutinjaival. Átfogó megoldások, állandó bőregészség!
        </p>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x-2"
        >
          <div class="flex flex-col text-center">
            <span class="text-accent-100 font-bold text-2xl md:text-4xl"
              >20+</span
            >
            <span class="text-accent-100 font-medium"
              >év bőrgyógyászati szakmai tapasztalat</span
            >
          </div>
          <div class="flex flex-col text-center pt-4 sm:pt-0 sm:pl-4">
            <span class="text-accent-100 font-bold text-2xl md:text-4xl"
              >10+</span
            >
            <span class="text-accent-100 font-medium"
              >termékkategória különböző problémákra</span
            >
          </div>
        </div>
      </div>
      <!-- image -->
      <div>
        <img
          class="w-96 object-contain h-full m-auto"
          :src="useGetImageUrl('z0-products.webp')"
          alt="z0 skin health termékekcsalád"
        />
      </div>
    </div>
    <!-- symbols -->
    <div class="bg-primary-200 space-y-10 text-center py-16">
      <h3 class="site-padding">
        Bőrproblémák amelyek esetén a Z0® Skin Health megoldást nyújt
      </h3>
      <div
        class="grid grid-cols-2 gap-y-6 sm:grid-cols-4 xl:grid-cols-7 max-w-screen-xl m-auto"
      >
        <div
          v-for="(item, index) in images"
          :key="index"
          class="site-padding mx-auto space-y-2"
        >
          <img
            class="w-24 h-24 object-contain m-auto"
            :src="useGetImageUrl(item.image)"
            alt="z0-skin-health megoldás"
          />
          <p class="font-medium">{{ item.text }}</p>
        </div>
      </div>
    </div>

    <!-- before-after images -->
    <div>images</div>
  </section>
</template>
