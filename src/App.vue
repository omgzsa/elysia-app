<script setup>
import { computed } from 'vue';
import { RouterView, useRouter, useRoute } from 'vue-router';
import TheFooter from './components/TheFooter.vue';
import TheNavbar from './components/TheNavbar.vue';

const logo = 'elysia_logo_new_transparent.webp';
const router = useRouter();
const route = useRoute();

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

    <TheFooter />

    <transition name="fade">
        <div
            v-if="showStickyImage"
            class="fixed bottom-3 right-3 md:bottom-6 md:right-6 z-[9999] cursor-pointer hover:scale-105 transition-transform duration-300 shadow-2xl rounded-xl overflow-hidden border-2 border-primary-100/20 bg-white p-2"
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
