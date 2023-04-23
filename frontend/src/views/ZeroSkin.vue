<script setup>
import { useGetImageUrl } from "../composables/getImageUrl";
import { ImgComparisonSlider } from "@img-comparison-slider/vue";

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
        <div class="flex divide-x">
          <div class="flex flex-col text-center px-4 w-full sm:px-12 md:px-8">
            <div class="text-accent-100 font-bold text-2xl md:text-4xl">
              20+
            </div>
            <div
              class="text-xs lg:text-sm xl:text-base text-accent-100 font-medium"
            >
              év bőrgyógyászati szakmai tapasztalat
            </div>
          </div>
          <div class="flex flex-col text-center px-4 w-full sm:px-12 md:px-8">
            <div class="text-accent-100 font-bold text-2xl md:text-4xl">
              10+
            </div>
            <div
              class="text-xs lg:text-sm xl:text-base text-accent-100 font-medium"
            >
              termékkategória különböző problémákra
            </div>
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
    <div class="flex flex-col space-y-10 mx-auto site-padding max-w-screen-xl">
      <h3>Vendégeink a kezelés előtt és után</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- 1st comparison -->
        <div class="flex flex-col space-y-4">
          <ImgComparisonSlider>
            <!-- eslint-disable -->
            <img
              slot="first"
              class="h-72 object-cover m-auto rounded-xl"
              style="width: 100%"
              :src="useGetImageUrl('zoskin_01_before.webp')"
            />
            <img
              slot="second"
              class="h-72 object-cover m-auto rounded-xl"
              style="width: 100%"
              :src="useGetImageUrl('zoskin_01_after.webp')"
            />
            <!-- eslint-enable -->
          </ImgComparisonSlider>
          <div>
            <h4 class="mb-2">
              Öregedés, bőrfelszíni szín- és texturális egyenetlenségek
            </h4>
            <p class="text-sm">A kezelés után fényes, feszes arcbőr.</p>
          </div>
        </div>
        <!-- 2nd comparison -->
        <div class="flex flex-col space-y-4">
          <ImgComparisonSlider>
            <!-- eslint-disable -->
            <img
              slot="first"
              class="h-72 object-cover m-auto rounded-xl"
              style="width: 100%"
              :src="useGetImageUrl('zoskin_02_before.webp')"
            />
            <img
              slot="second"
              class="h-72 object-cover m-auto rounded-xl"
              style="width: 100%"
              :src="useGetImageUrl('zoskin_02_after.webp')"
            />
            <!-- eslint-enable -->
          </ImgComparisonSlider>
          <div>
            <h4 class="mb-2">Melasma, nagy kiterjedésű pigmentfoltok</h4>
            <p class="text-sm">A kezelés után foltmentes, sima felszínű bőr.</p>
          </div>
        </div>
        <!-- 3rd comparison -->
        <div class="flex flex-col space-y-4">
          <ImgComparisonSlider>
            <!-- eslint-disable -->
            <img
              slot="first"
              class="h-72 object-cover m-auto rounded-xl"
              style="width: 100%"
              :src="useGetImageUrl('zoskin_03_before.webp')"
            />
            <img
              slot="second"
              class="h-72 object-cover m-auto rounded-xl"
              style="width: 100%"
              :src="useGetImageUrl('zoskin_03_after.webp')"
            />
            <!-- eslint-enable -->
          </ImgComparisonSlider>
          <div>
            <h4 class="mb-2">Súlyos akne, hegekkel</h4>
            <p class="text-sm">A kezelés után javuló gyulladásos állapot.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
