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
    <div class="flex flex-col mx-auto space-y-10">
      <AppHeader>
        <template #subtitle>orvosi termékek</template>
        <template #title>Z0® Skin Health</template>
      </AppHeader>
    </div>
    <!-- z0 skin -->
    <div
      class="grid max-w-screen-xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 site-padding"
    >
      <!-- content -->
      <div class="space-y-8">
        <h3 class="text-base md:text-2xl">
          Z0® Skin Health megoldások bőrproblémákra
        </h3>
        <p>
          Ha Ön is szeretné látványosan javítani bőre állapotát és visszanyerni
          annak egészségét, keresse fel orvosainkat. Részletes konzultációt
          követően a bőrproblémájára egyedileg szabott megoldási javaslatot kap.
          <br /><br />A ZO® Skin Health termékek otthoni használatával rövid
          idő alatt látványos bőrminőség javulást érhet el bőrproblémától és
          kortól függetlenül. Az elért eredmények megtartása hosszútávon is
          biztosított a ZO® bőrápolási rutinjaival. Átfogó megoldások, állandó
          bőregészség!
        </p>
        <div class="flex divide-x">
          <div class="flex flex-col w-full px-4 text-center sm:px-12 md:px-8">
            <div class="text-2xl font-bold text-accent-100 md:text-4xl">
              20+
            </div>
            <div
              class="text-xs font-medium lg:text-sm xl:text-base text-accent-100"
            >
              év bőrgyógyászati szakmai tapasztalat
            </div>
          </div>
          <div class="flex flex-col w-full px-4 text-center sm:px-12 md:px-8">
            <div class="text-2xl font-bold text-accent-100 md:text-4xl">
              10+
            </div>
            <div
              class="text-xs font-medium lg:text-sm xl:text-base text-accent-100"
            >
              termékkategória különböző problémákra
            </div>
          </div>
        </div>
      </div>
      <!-- image -->
      <div>
        <img
          class="object-contain h-full m-auto w-96"
          :src="useGetImageUrl('z0-products.webp')"
          alt="z0 skin health termékekcsalád"
          width="400"
          height="200"
        />
      </div>
    </div>
    <!-- symbols -->
    <div class="py-16 space-y-10 text-center bg-primary-200">
      <h3 class="site-padding">
        Bőrproblémák amelyek esetén a Z0® Skin Health megoldást nyújt
      </h3>
      <div
        class="grid items-start max-w-screen-xl grid-cols-2 mx-auto gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7"
      >
        <div
          v-for="(item, index) in images"
          :key="index"
          class="flex flex-col items-center space-y-2"
        >
          <img
            class="object-contain w-24 h-24"
            :src="useGetImageUrl(item.image)"
            alt="z0-skin-health megoldás"
            width="100"
            height="100"
          />
          <p class="font-medium">{{ item.text }}</p>
        </div>
      </div>
    </div>

    <!-- red carpet -->
    <div
      class="grid items-start max-w-screen-xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 site-padding"
    >
      <div class="space-y-8">
        <h3 class="text-base md:text-2xl">
          ZO® Red Carpet Hollywood Peeling azonnali ragyogásért
        </h3>
        <h3>Mi is az a Z0® Skin Health?</h3>
        <p>
          A ZO® Skin health egy orvosok által kifejlesztett exkluzív márka,
          mely professzionális bőrápolást nyújt a felhasználók részére. A
          termékek használata és a rendelői kezelések is egyedülálló élményt
          biztosítanak orvosi felügyelet mellett. A ZO® minden problémára,
          bármely életkorban kiemelkedő eredményt garantál, amit pácienseink
          visszajelzései is hűen tükröznek!
        </p>
        <h3>Mi is az a ZO® Red Carpet Hollywood Peeling?</h3>
        <p>
          A ZO® Red Carpet Hollywood Peeling egy fájdalommentes kezelés, mely
          azonnali hatást eredményez gyógyulási idő nélkül. ZO® kezelés nem
          csak ZO® felhasználóknak! Kiváló nagyobb, "vörös-szőnyeges" események
          előtt.
        </p>
        <h3>Tökéletes hatás:</h3>
        <ul class="list-disc list-inside marker:bg-accent-100">
          <li>rosaceás bőrön</li>
          <li>aknés bőrön</li>
          <li>anti-aging céllal</li>
        </ul>
        <p>
          A hámlasztás során több fajta ZO® Skin Health terméket használunk
          megadott sorrendben, beleértve a tisztítást, hámlasztást, táplálást és
          fényvédelmet, kényeztető masszázzsal kiegészítve az igazi wellness
          élményért.
        </p>
        <h3>
          A kezelés maximum 40 percet vesz igénybe és teljesen fájdalommentes!
        </h3>
        <p>
          A Red Carpet Peeling akár hetente elvégezhető az igazi Hollywood-i
          ragyogásért! Kérje a kezelést, hogy ez a 40 perc csak önről szóljon!
        </p>
      </div>
      <div class="sticky mx-auto top-10">
        <img
          class="object-contain h-full w-96 rounded-xl"
          :src="useGetImageUrl('z0-hollywood.webp')"
          alt="z0 red carpet hollywood kezelés"
          width="400"
          height="200"
        />
      </div>
    </div>

    <!-- 3 peel -->
    <div
      class="grid items-start max-w-screen-xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 site-padding"
    >
      <div class="space-y-8 md:order-2">
        <h3 class="text-base md:text-2xl">ZO® Skin Health 3 Step Peeling</h3>
        <p>
          A ZO® Skin Health 3 Step Peeling egy hatékony hámlasztó kezelés,
          amely erőteljesem javítja a bőr textúráját és megjelenését. Ez a
          kezelés számos bőrprobléma kezelésére használható, például
          pigmentfoltok, ráncok és akne kezelésére. A kezelés előtt legalább 6
          hétig szükséges a bőrgyógyász által összeállított ZO® protokoll
          használata.
        </p>
        <h3>A kezelés folyamata</h3>
        <p>
          Az első lépés a peeling kezelésében egy mélytisztító folyamat, amely
          eltávolítja a bőr felületi szennyeződéseit és az elhalt bőrsejteket.
          Ez a lépés előkészíti a bőrt a következő két lépésre, amelyek közé
          tartozik a tényleges peeling. A második lépésben a bőrre egy savas
          keveréket alkalmazunk. Ezek a savak hatékonyan és erőteljesen
          hámlasztják a bőr felső rétegét. A harmadik és utolsó lépésben egy
          bőrtápláló krémet alkalmazunk, amely segít hidratálni a bőrt. Ez a
          lépés fontos a bőr egészségi állapotának megőrzése érdekében, és segít
          megakadályozni a túlzott irritációt és kiszáradást. A hámlasztás
          általában 30-45 percig tart, és általában hatékony eredményeket nyújt
          az első kezelés után is.
        </p>
        <h3>Mik a teendők utána?</h3>
        <p>
          A kezelést követően javasolt 5-6 napig otthon tartózkodni, hogy a bőr
          felülfertőződését és a fénytől való bepigmentálódását teljes mértékben
          elkerülje a páciens. Ez idő után is nagyon fontos a fokozott
          fényvédelem! Nagyon fontos információ, hogy a ZO® Skin Health 3 Step
          Peeling kezelést csak kiképzett és tapasztalt bőrgyógyász végezheti
          el.
        </p>
      </div>
      <div class="sticky mx-auto top-10 md:order-1">
        <img
          class="object-contain h-full w-96 rounded-xl"
          :src="useGetImageUrl('zo-peeling.webp')"
          alt="z0 red carpet hollywood kezelés"
          width="400"
          height="200"
        />
      </div>
    </div>

    <!-- before-after images -->
    <div class="flex flex-col max-w-screen-xl mx-auto space-y-10 site-padding">
      <h3 class="text-base text-center md:text-2xl">
        Vendégeink a kezelés előtt és után
      </h3>
      <div class="grid grid-cols-1 gap-4 mx-auto md:grid-cols-3">
        <!-- 1st comparison -->
        <div class="flex flex-col max-w-md space-y-4">
          <ImgComparisonSlider>
            <!-- eslint-disable -->
            <img
              slot="first"
              class="object-cover m-auto h-72 rounded-xl"
              style="width: 100%"
              :src="useGetImageUrl('zoskin_01_before.webp')"
              width="220"
              height="200"
              alt="Z0 Skin Health kezelés előtti állapot"
            />
            <img
              slot="second"
              class="object-cover m-auto h-72 rounded-xl"
              style="width: 100%"
              :src="useGetImageUrl('zoskin_01_after.webp')"
              width="220"
              height="200"
              alt="Z0 Skin Health kezelés utáni állapot"
            />
            <!-- eslint-enable -->
          </ImgComparisonSlider>
          <div>
            <h3 class="mb-2">
              Öregedés, bőrfelszíni szín- és texturális egyenetlenségek
            </h3>
            <p class="text-sm">A kezelés után fényes, feszes arcbőr.</p>
          </div>
        </div>
        <!-- 2nd comparison -->
        <div class="flex flex-col max-w-md space-y-4">
          <ImgComparisonSlider>
            <!-- eslint-disable -->
            <img
              slot="first"
              class="object-cover m-auto h-72 rounded-xl"
              style="width: 100%"
              :src="useGetImageUrl('zoskin_02_before.webp')"
              width="220"
              height="200"
              alt="Z0 Skin Health kezelés előtti állapot"
            />
            <img
              slot="second"
              class="object-cover m-auto h-72 rounded-xl"
              style="width: 100%"
              :src="useGetImageUrl('zoskin_02_after.webp')"
              width="220"
              height="200"
              alt="Z0 Skin Health kezelés utáni állapot"
            />
            <!-- eslint-enable -->
          </ImgComparisonSlider>
          <div>
            <h3 class="mb-2">Melasma, nagy kiterjedésű pigmentfoltok</h3>
            <p class="text-sm">A kezelés után foltmentes, sima felszínű bőr.</p>
          </div>
        </div>
        <!-- 3rd comparison -->
        <div class="flex flex-col max-w-md space-y-4">
          <ImgComparisonSlider>
            <!-- eslint-disable -->
            <img
              slot="first"
              class="object-cover m-auto h-72 rounded-xl"
              style="width: 100%"
              :src="useGetImageUrl('zoskin_03_before.webp')"
              width="220"
              height="200"
              alt="Z0 Skin Health kezelés előtti állapot"
            />
            <img
              slot="second"
              class="object-cover m-auto h-72 rounded-xl"
              style="width: 100%"
              :src="useGetImageUrl('zoskin_03_after.webp')"
              width="220"
              height="200"
              alt="Z0 Skin Health kezelés utáni állapot"
            />
            <!-- eslint-enable -->
          </ImgComparisonSlider>
          <div>
            <h3 class="mb-2">Súlyos akne, hegekkel</h3>
            <p class="text-sm">A kezelés után javuló gyulladásos állapot.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
