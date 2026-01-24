<script setup>
import LoadingSpinner from '@/components/LoadingSpinner.vue';

defineProps({
    title: {
        type: String,
    },
    testimonials: {
        type: Array,
    },
    loading: {
        type: Boolean,
    },
});
</script>

<template>
    <section class="max-w-screen-xl mx-auto site-padding pl-4">
        <div class="flex flex-col items-center gap-4 mb-12">
            <span class="subheading">elégedett ügyfeleink</span>
            <h2>{{ title }}</h2>
        </div>

        <div v-if="loading" class="h-96 flex my-auto items-start">
            <LoadingSpinner text="Vélemények betöltése..." />
        </div>
        <div
            v-else
            class="space-y-10 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8"
        >
            <div
                v-for="item in testimonials"
                :key="item.id"
                class="sm:break-inside-avoid bg-primary-200 rounded-xl shadow-border flex flex-col"
            >
                <div class="p-4">
                    <p class="italic text-base mb-4">"{{ item.tartalom }}"</p>
                    <p class="text-sm font-bold pb-4">{{ item.nev }}</p>
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
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid #586c63;
    transform: translate(-0.5em, -0.5em);
    z-index: -1;
    border-radius: 0.75rem;
}
</style>
