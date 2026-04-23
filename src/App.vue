<script setup>
import { computed, ref } from 'vue';
import { RouterView, useRouter, useRoute } from 'vue-router';
import { useElementBounding, useWindowSize, useElementSize } from '@vueuse/core';
import TheFooter from './components/TheFooter.vue';
import TheNavbar from './components/TheNavbar.vue';

const logo = 'elysia_logo_new_transparent.webp';
const router = useRouter();
const route = useRoute();

const footerRef = ref(null);
const stickyRef = ref(null);
const { top: footerTop } = useElementBounding(footerRef);
const { height: stickyHeight } = useElementSize(stickyRef);
const { height: windowHeight } = useWindowSize();

const pushUpAmount = computed(() => {
    if (!footerTop.value || !stickyHeight.value) return 0;
    
    const currentImageTop = windowHeight.value - 18 - stickyHeight.value;
    const targetImageTop = footerTop.value + 18;
    
    return Math.max(0, currentImageTop - targetImageTop); 
});

// The sticky image should be visible on every page except the Tender page (/palyazat).
const showStickyImage = computed(() => {
    const path = route.path || '';
    return !path.startsWith('/palyazat');
});

const goToTender = () => {
    router.push('/palyazat');
};
</script>

<template>
    <header>
        <TheNavbar :logo="logo" />
    </header>

    <main>
        <RouterView v-slot="{ Component }">
            <transition name="slide" mode="out-in">
                <component :is="Component" :key="$route.path" />
            </transition>
        </RouterView>
    </main>

    <div ref="footerRef">
        <TheFooter />
    </div>

    <transition name="fade">
        <div
            v-if="showStickyImage"
            ref="stickyRef"
            class="fixed bottom-3 right-3 md:bottom-6 md:right-6 z-9999"
            :style="{ transform: `translateY(-${pushUpAmount}px)` }"
        >
            <div
                class="cursor-pointer hover:scale-105 transition-transform duration-300 shadow-2xl rounded-xl overflow-hidden border-2 border-primary-100/20 bg-white p-2"
                @click="goToTender"
            >
            <img
                src="/szechenyi-terv.jpg"
                alt="Széchenyi Terv Plusz"
                class="w-48 md:w-64 lg:w-72 h-auto"
            />
            </div>
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
