<script setup>
import { ref, onMounted } from "vue";
import { RouterView, useRouter } from "vue-router";
import TheFooter from "./components/TheFooter.vue";
import TheNavbar from "./components/TheNavbar.vue";

const logo = "elysia_logo_new_transparent.webp";
const router = useRouter();
const showStickyImage = ref(true);

onMounted(() => {
  setTimeout(() => {
    showStickyImage.value = false;
  }, 8000);
});

const goToTender = () => {
  router.push("/palyazat");
  showStickyImage.value = false;
};
</script>

<template>
  <header>
    <TheNavbar :logo="logo" />
  </header>
  <main>
    <RouterView v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </RouterView>
  </main>

  <TheFooter />

  <transition name="fade">
    <div
      v-if="showStickyImage"
      class="fixed bottom-6 right-6 z-[9999] cursor-pointer hover:scale-105 transition-transform duration-300 shadow-2xl rounded-xl overflow-hidden border-2 border-primary-100/20 bg-white p-2"
      @click="goToTender"
    >
      <img
        src="/szechenyi-terv.jpg"
        alt="Széchenyi Terv Plusz"
        class="w-48 md:w-64 lg:w-72 h-auto"
      />
    </div>
  </transition>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  transition:
    opacity 0.2s,
    transform 0.2s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-5%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
