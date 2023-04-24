<script setup>
defineProps({
  title: {
    type: String,
  },
});
</script>
<template>
  <section class="max-w-screen-xl mx-auto site-padding pl-4">
    <div class="flex flex-col items-center gap-4 mb-12">
      <span class="subheading">elégedett ügyfeleink</span>
      <h2>{{ title }}</h2>
    </div>
    <div
      class="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8"
    >
      <div
        class="mb-8 sm:break-inside-avoid ml-2 p-6 bg-primary-200 rounded-xl shadow-border flex flex-col"
      >
        <p class="italic mb-4">
          "Rendszeresen a Klinika vendége vagyok. :) Nem csak a
          bőrgyógyászatban, de az esztétikában is élen járnak. Teljes mértékben
          meg vagyok elégedve Dr. Horváth Beáta munkájával, és a recepciós
          hölgyek is mindig mosolyogva és kedvességgel várnak. Dr. Görcsi
          Jánosnál is jártam szemhéjplasztika műtéten, és az eredmény valami
          fantasztikus! Köszönöm szépen az Elysia Laser Clinic munkáját!"
        </p>
        <div class="flex gap-4 items-center">
          <img
            src="../../assets/images/testimonial-2.webp"
            alt=""
            class="w-14 h-14 rounded-full object-cover"
          />
          <div class="text-sm space-y-1">
            <p class="font-bold">Zsuzsanna</p>
          </div>
        </div>
      </div>
      <div
        class="mb-8 sm:break-inside-avoid ml-2 p-6 bg-primary-200 rounded-xl shadow-border flex flex-col"
      >
        <p class="italic mb-4">
          "Kedvesség, rugalmasság, szakmai profizmus. Családommal többször
          jártam már náluk, ezért szívből ajánlom az Elysiát akár bőrgyógyászati
          probléma megoldására, akár esztétikai kezelésre."
        </p>
        <div class="flex gap-4 items-center">
          <img
            src="../../assets/images/rolunk_pic.jpg"
            alt=""
            class="w-14 h-14 rounded-full object-cover"
          />
          <div class="text-sm space-y-1">
            <p class="font-bold">Orsolya</p>
          </div>
        </div>
      </div>
      <div
        class="mb-8 sm:break-inside-avoid ml-2 p-6 bg-primary-200 rounded-xl shadow-border flex flex-col"
      >
        <p class="italic mb-4">
          "Kellemes környezet, kedves fogadtatás párosul magas szakmai
          színvonallal. Mindig ajánlom Őket ismerőseimnek, és Ők is nagyon
          elégedettek."
        </p>
        <div class="flex gap-4 items-center">
          <img
            src="../../assets/images/testimonial-3.webp"
            alt=""
            class="w-14 h-14 rounded-full object-cover"
          />
          <div class="text-sm space-y-1">
            <p class="font-bold">Timi</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.shadow-border {
  position: relative;
  border: none;
}

.shadow-border:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid #586c63;
  transform: translate(-2.125em, -2.125em);
  z-index: -1;
  border-radius: 0.75rem;
}
</style>
