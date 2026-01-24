<script setup>
import { ref, inject } from 'vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import { Carousel, Slide, Pagination } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

const { apiUrl } = inject('$directus');

defineProps({
    title: { type: String },
    gallery: { type: Array, default: () => [] },
    loading: Boolean,
});

const settings = ref({
    itemsToShow: 1,
    snapAlign: 'center',
    autoplay: 12000,
    pauseAutoplayOnHover: true,
});

const breakpoints = ref({
    320: {
        itemsToShow: 1,
    },
    640: {
        itemsToShow: 1.5,
    },
    960: {
        itemsToShow: 2.5,
    },
    1280: {
        itemsToShow: 3.5,
    },
});
</script>

<template>
    <div class="text-center">
        <span class="subheading">elysia laser clinic</span>
        <h2 class="py-4 mb-4 lg:mb-10">
            {{ title }}
        </h2>
        <div v-if="loading" class="h-96 flex my-auto items-start">
            <LoadingSpinner text="Galéria betöltése..." />
        </div>
        <Carousel
            v-else
            aria-label="galéria képek"
            v-bind="settings"
            :breakpoints="breakpoints"
            :wrap-around="true"
            :transition="500"
        >
            <Slide v-for="(image, idx) in gallery" :key="idx">
                <img
                    :src="`${apiUrl.href}/assets/${image.directus_files_id}`"
                    :alt="image.alt"
                    height="250"
                    width="400"
                    class="w-full rounded-xl"
                />
            </Slide>

            <template #addons>
                <pagination />
            </template>
        </Carousel>
    </div>
</template>

<style scoped>
.carousel > * {
    overflow: hidden;
}
.carousel__slide {
    padding: 3px;
}

.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.5;
    transform: scale(0.8);
}

.carousel__slide--active ~ .carousel__slide {
    transform: scale(0.8);
}

.carousel__slide--prev {
    opacity: 0.5;
    transform: scale(0.8);
}

.carousel__slide--next {
    opacity: 0.5;
    transform: scale(0.8);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1);
}

:deep(.carousel__pagination) {
    bottom: -2rem;
}
</style>
