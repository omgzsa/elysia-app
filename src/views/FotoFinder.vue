<script setup>
import { useGetImageUrl } from "../composables/getImageUrl";
import IconScan from "../components/icons/IconScan.vue";
import IconLens from "../components/icons/IconLens.vue";
import IconChip from "../components/icons/IconChip.vue";
</script>

<template>
  <section class="pb-24 overflow-hidden">
    <!-- Hero / Header -->
    <div class="flex flex-col mx-auto mb-16 space-y-10">
      <AppHeader>
        <template #subtitle>orvosi termékek</template>
        <template #title>FotoFinder</template>
      </AppHeader>
    </div>

    <!-- Section 1: Intro -->
    <div class="max-w-(--breakpoint-xl) mx-auto site-padding relative mt-4 md:mt-0">
      <!-- Decorative background elements -->
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-primary-200/40 rounded-full blur-3xl -z-10"></div>
      <div class="absolute top-1/2 -right-32 w-[30rem] h-[30rem] bg-accent-100/5 rounded-full blur-3xl -z-10"></div>
      
      <div class="grid grid-cols-1 gap-12 lg:gap-16 lg:grid-cols-2 items-center">
        <div class="space-y-10 relative">
          <div class="inline-flex items-center w-fit px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-accent-100/5 text-accent-100 text-[10px] sm:text-xs tracking-wider md:tracking-widest uppercase border border-accent-100/10 whitespace-nowrap">
            <span class="mr-1.5 md:mr-2 animate-pulse">●</span> Mesterséges Intelligencia Támogatással
          </div>
          <div class="space-y-6">
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-gray-900">
              A világ vezető <br/>
              <span class="text-accent-100">dermatológiai</span> <br/>
              képalkotó rendszere
            </h2>
            <p class="text-lg md:text-xl leading-relaxed text-gray-600 max-w-xl">
              Az 50 megapixeles precizitás és az intelligens szoftver összehangolt működése új távlatokat nyit a bőrrák korai felismerésében.
            </p>
          </div>
          <div class="flex flex-wrap gap-6">
             <div class="flex items-center space-x-3 text-sm font-semibold text-gray-500">
                <span class="w-2 h-2 rounded-full bg-accent-100"></span>
                <span>Fájdalommentes</span>
             </div>
             <div class="flex items-center space-x-3 text-sm font-semibold text-gray-500">
                <span class="w-2 h-2 rounded-full bg-accent-100"></span>
                <span>30-45 perc</span>
             </div>
             <div class="flex items-center space-x-3 text-sm font-semibold text-gray-500">
                <span class="w-2 h-2 rounded-full bg-accent-100"></span>
                <span>Azonnali elemzés</span>
             </div>
          </div>
        </div>
        
        <div class="flex justify-center lg:justify-end">
          <div class="relative group">
            <!-- Standing portrait background shapes -->
            <div class="absolute -inset-y-6 -inset-x-10 bg-primary-200 rounded-[3rem] transform rotate-3 transition duration-300 group-hover:rotate-1 -z-10 opacity-50"></div>
            <div class="absolute -inset-y-6 -inset-x-10 bg-accent-100/10 rounded-[4rem] transform -rotate-3 transition duration-300 group-hover:-rotate-1 -z-20"></div>
            
            <div class="overflow-hidden rounded-3xl shadow-2xl">
              <img
                class="object-cover h-[500px] lg:h-[650px] w-auto transition duration-300 group-hover:scale-105"
                :src="useGetImageUrl('fotofinder-elysia.jpg')"
                alt="FotoFinder AI technológia"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 2: Methods -->
    <div class="mt-20 md:mt-32 py-20 md:py-32 bg-gray-50/80 relative">
      <div class="max-w-(--breakpoint-xl) mx-auto site-padding">
        <div class="grid grid-cols-1 gap-12 lg:gap-20 lg:grid-cols-2 items-center">
          <div class="order-2 lg:order-1 flex justify-center w-full">
             <img
              class="object-cover h-[500px] lg:h-[650px] w-auto rounded-[3rem] shadow-2xl"
              :src="useGetImageUrl('ATBM-carpet-front-side-right-close.jpg')"
              alt="FotoFinder ATBM készülék"
            />
          </div>
          <div class="order-1 lg:order-2 space-y-12">
            <h3 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-gray-900">Kétféle szűrés, egy cél: <br/><span class="text-accent-100">tökéletes biztonság</span></h3>
            <p class="text-lg text-gray-600 leading-relaxed">
              Rendelőnkben a hagyományos és a legújabb technológiát ötvözzük a maximális precizitás érdekében. A kettő kombinációjával a szabálytalannak ítélt anyajegyek tökéletes pontossággal rögzíthetők és nyomonkövethetők.
            </p>
            <div class="space-y-8">
              <div class="flex items-start transition-all duration-200">
                <span class="flex items-center justify-center w-10 h-10 rounded-2xl bg-accent-100 text-white font-bold shrink-0 shadow-lg shadow-accent-100/20 text-xl">1</span>
                <div class="ml-6">
                  <h4 class="text-xl font-bold">Hagyományos dermatoszkópos szűrés</h4>
                  <p class="text-gray-600 mt-2 leading-relaxed">Szakorvosi áttekintés speciális nagyítóval az aktuális státusz véleményezéséhez.</p>
                </div>
              </div>
              <div class="flex items-start transition-all duration-200">
                <span class="flex items-center justify-center w-10 h-10 rounded-2xl bg-accent-100 text-white font-bold shrink-0 shadow-lg shadow-accent-100/20 text-xl">2</span>
                <div class="ml-6">
                  <h4 class="text-xl font-bold">AI-támogatott teljes testtérképezés</h4>
                  <p class="text-gray-600 mt-2 leading-relaxed">A FotoFinder Automated Total Body Mapping felismeri az új vagy változó elváltozásokat.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 3: Benefits Grid -->
    <div class="max-w-(--breakpoint-xl) mx-auto site-padding mt-20 md:mt-32">
      <div class="text-center max-w-2xl mx-auto space-y-4 mb-12 md:mb-20">
        <h3 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">Miért a FotoFinder?</h3>
        <p class="text-lg text-gray-600">A világ élvonalába tartozó képalkotó berendezés a legmodernebb technológiával biztosít minden eddiginél pontosabb diagnózist.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div class="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 transition duration-300 hover:shadow-xl group">
          <div class="w-16 h-16 bg-primary-200 rounded-2xl flex items-center justify-center mb-8 transition duration-300 group-hover:scale-110 shadow-inner">
            <IconScan class="text-accent-100 w-8 h-8" />
          </div>
          <h4 class="text-2xl font-bold mb-4">Automatizált szkennelés</h4>
          <p class="text-gray-600 leading-relaxed">Gyors, 30-45 perces vizsgálat. A berendezés automatikusan felismeri a meglévő bőrelváltozásokat, azonnal megmutatva a rendellenességeket.</p>
        </div>
        <div class="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 transition duration-300 hover:shadow-xl group">
          <div class="w-16 h-16 bg-primary-200 rounded-2xl flex items-center justify-center mb-8 transition duration-300 group-hover:scale-110 shadow-inner">
            <IconLens class="text-accent-100 w-8 h-8" />
          </div>
          <h4 class="text-2xl font-bold mb-4">50 Megapixeles pontosság</h4>
          <p class="text-gray-600 leading-relaxed">Rendkívül nagy felbontású, polarizált felvételek. Még a talpakon vagy a hajas fejbőrön észlelt elváltozások is tökéletesen elemezhetők.</p>
        </div>
        <div class="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 transition duration-300 hover:shadow-xl group">
          <div class="w-16 h-16 bg-primary-200 rounded-2xl flex items-center justify-center mb-8 transition duration-300 group-hover:scale-110 shadow-inner">
            <IconChip class="text-accent-100 w-8 h-8" />
          </div>
          <h4 class="text-2xl font-bold mb-4">AI Nyomonkövetés</h4>
          <p class="text-gray-600 leading-relaxed">A mesterséges intelligencia színkódokkal jelöli a változó vagy új anyajegyeket, vizuálisan segítve a korai diagnózist.</p>
        </div>
      </div>
    </div>

    <!-- Section 4: Target Audience Refined -->
    <div class="max-w-(--breakpoint-xl) mx-auto site-padding mt-24 md:mt-40 mb-16 md:mb-24">
      <div class="relative p-8 md:p-20 bg-primary-200/30 rounded-[3rem] md:rounded-[4rem]">
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div class="space-y-16">
            <div class="space-y-6">
              <h3 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-[1.05]">
                Kiknek ajánlott a <br/><span class="text-accent-100">kiemelt szűrés?</span>
              </h3>
              <p class="text-lg md:text-xl text-gray-600 leading-relaxed max-w-md">
                A rizikócsoportba tartozók számára az évenkénti FotoFinder vizsgálat életmentő lehet.
              </p>
            </div>
            
            <!-- Refined List: Minimalist & Clean -->
            <div class="space-y-6">
               <div class="flex items-center space-x-6 group">
                  <div class="w-3 h-3 rounded-full bg-accent-100 transition-transform duration-200 group-hover:scale-150"></div>
                  <span class="text-xl font-bold text-gray-800 tracking-tight">Családi halmozódás</span>
               </div>
               <div class="flex items-center space-x-6 group">
                  <div class="w-3 h-3 rounded-full bg-accent-100 transition-transform duration-200 group-hover:scale-150"></div>
                  <span class="text-xl font-bold text-gray-800 tracking-tight">Világos, érzékeny bőr</span>
               </div>
               <div class="flex items-center space-x-6 group">
                  <div class="w-3 h-3 rounded-full bg-accent-100 transition-transform duration-200 group-hover:scale-150"></div>
                  <span class="text-xl font-bold text-gray-800 tracking-tight">Sok anyajegy (50-100+)</span>
               </div>
               <div class="flex items-center space-x-6 group">
                  <div class="w-3 h-3 rounded-full bg-accent-100 transition-transform duration-200 group-hover:scale-150"></div>
                  <span class="text-xl font-bold text-gray-800 tracking-tight">Gyerekkori leégés</span>
               </div>
               <div class="flex items-center space-x-6 group">
                  <div class="w-3 h-3 rounded-full bg-accent-100 transition-transform duration-200 group-hover:scale-150"></div>
                  <span class="text-xl font-bold text-gray-800 tracking-tight">Gyermekeknek alapszűrés</span>
               </div>
            </div>

            <!-- Refined Kezelési Terv: Integrated & Minimal -->
            <div class="pt-10 border-t border-gray-900/5">
              <div class="flex flex-col space-y-4">
                <h4 class="text-sm font-black uppercase tracking-[0.2em] text-accent-100">Személyre szabott kezelési terv</h4>
                <p class="text-lg font-medium text-gray-700 leading-relaxed">
                  Ha a rendszer magas kockázatot jelez, bőrgyógyászunk fájdalommentes, egyedi igényekre szabott eltávolító eljárást javasol.
                </p>
              </div>
            </div>
          </div>
          
          <div class="flex justify-center group">
             <div class="relative">
               <div class="absolute -inset-y-6 -inset-x-10 border-2 border-accent-100/5 rounded-[4.5rem] -z-10 transform group-hover:scale-105 transition duration-300"></div>
               <img
                class="object-cover h-[500px] lg:h-[700px] w-auto rounded-[3.5rem] shadow-2xl shadow-gray-900/10 transition duration-300 group-hover:scale-105"
                :src="useGetImageUrl('1000009908.jpg')"
                alt="FotoFinder szűrés folyamata"
              />
             </div>
          </div>
        </div>
      </div>
    </div>

    <!-- FotoFinder Logo -->
    <div class="max-w-(--breakpoint-xl) mx-auto site-padding flex justify-center">
      <img
        class="h-20 md:h-24 w-auto"
        :src="useGetImageUrl('fotofinder-logo.png')"
        alt="FotoFinder Logo"
      />
    </div>
  </section>
</template>