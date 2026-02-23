<script setup>
import { ref, inject, computed } from 'vue';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import TheSnowFall from '../../components/TheSnowFall.vue';
import 'vue3-carousel/dist/carousel.css';

const props = defineProps({
    slides: { type: Array, required: true },
});

const showSnowFall = computed(() => {
    // Show snowfall from December 1st through the last day of February (inclusive).
    // This handles the year boundary (Dec -> Jan/Feb).
    const now = new Date();
    const month = now.getMonth(); // 0 = Jan, 11 = Dec
    const day = now.getDate();

    // December: show from Dec 1 to Dec 31
    if (month === 11) return day >= 1;

    // January: whole month
    if (month === 0) return true;

    // February: show until the last day of February (handles leap years)
    if (month === 1) {
        const lastDayOfFeb = new Date(now.getFullYear(), 2, 0).getDate();
        return day <= lastDayOfFeb;
    }

    return false;
});

const { apiUrl } = inject('$directus');

const settings = ref({
    autoplay: 12000,
    wrapAround: true,
    itemsToShow: 1,
    snapAlign: 'center',
});

// Helper to detect external URLs so we can render a native <a> for them.
// Treats http(s), mailto, and tel links as external.
const isExternalLink = (url) => {
    return typeof url === 'string' && /^(https?:\/\/|mailto:|tel:)/i.test(url);
};
</script>

<template>
    <section class="relative overflow-hidden">
        <TheSnowFall v-if="showSnowFall" />
        <Carousel v-bind="settings">
            <slide
                v-for="slide in props.slides"
                :key="slide.id"
                class="relative z-10 w-full bg-cover min-h-[90vh] sm:min-h-[720px] bg-no-repeat bg-center lg:min-h-[820px]"
                :style="{
                    backgroundImage: `url('${apiUrl}/assets/${slide.kep}?width=1920&height=1080')`,
                }"
            >
                <div class="absolute inset-0 bg-neutral-900/40"></div>
                <div class="z-10 grid max-w-screen-xl grid-cols-1 site-padding">
                    <div
                        v-motion-slide-visible-once-bottom
                        :delay="150"
                        class="flex flex-col space-y-6 text-center md:pb-0"
                    >
                        <h1
                            class="max-w-md pt-10 text-4xl sm:pt-0 xl:text-5xl sm:max-w-xl xl:max-w-3xl text-white"
                            style="line-height: 1.125"
                        >
                            {{ slide.cim }}
                        </h1>
                        <p
                            class="max-w-lg mx-auto text-neutral-100"
                            v-if="slide.leiras"
                        >
                            {{ slide.leiras }}
                        </p>
                        <!-- <ul
                            class="max-w-lg mx-auto text-neutral-100"
                            v-if="slide.list"
                        >
                            <li v-for="item in slide.list" :key="item">
                                {{ item }}
                            </li>
                        </ul> -->

                        <template v-if="slide.link">
                            <AppLink
                                v-if="!isExternalLink(slide.link)"
                                :to="{ path: slide.link }"
                            >
                                <button
                                    class="relative px-8 py-2 overflow-hidden font-medium text-white border rounded-md cursor-pointer fo group bg-accent-100 border-accent-100"
                                >
                                    <span
                                        class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"
                                    ></span>
                                    <span
                                        class="relative flex flex-row items-center gap-2 font-bold text-white transition duration-300 group-hover:text-accent-100 ease"
                                        >{{
                                            slide.link_cimke
                                                ? slide.link_cimke
                                                : 'Tudjon meg többet'
                                        }}</span
                                    >
                                </button>
                            </AppLink>

                            <a
                                v-else
                                :href="slide.link"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-block"
                            >
                                <button
                                    class="relative px-8 py-2 overflow-hidden font-medium text-white border rounded-md cursor-pointer fo group bg-accent-100 border-accent-100"
                                >
                                    <span
                                        class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"
                                    ></span>
                                    <span
                                        class="relative flex flex-row items-center gap-2 font-bold text-white transition duration-300 group-hover:text-accent-100 ease"
                                        >{{
                                            slide.link_cimke
                                                ? slide.link_cimke
                                                : 'Tudjon meg többet'
                                        }}</span
                                    >
                                </button>
                            </a>
                        </template>
                    </div>
                </div>
            </slide>

            <template #addons>
                <!-- <navigation /> -->
                <pagination />
            </template>
        </Carousel>
    </section>
</template>

<style>
.carousel {
    padding-left: 0px;
}

.carousel__pagination-button::after {
    background-color: lightgray;
}

.carousel__pagination-button:hover::after,
.carousel__pagination-button--active::after {
    background-color: #586c63;
}
</style>
