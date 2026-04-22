elysia-app/src/components/home/HeroSkeleton.vue#L1-200
<template>
    <section
        class="relative overflow-hidden bg-neutral-200 bg-cover bg-center min-h-[90vh] sm:min-h-[720px] lg:min-h-[820px] flex items-center"
        role="status"
        aria-label="Loading hero content"
    >
        <!-- neutral background overlay to match real slides -->
        <div class="absolute inset-0 bg-neutral-200" aria-hidden="true"></div>

        <!-- dark overlay like the real slides -->
        <div class="absolute inset-0 bg-neutral-200" aria-hidden="true"></div>

        <!-- content skeleton (centred like the real content) -->
        <div class="z-10 w-full grid max-w-(--breakpoint-xl) grid-cols-1 site-padding">
            <div class="flex flex-col items-center space-y-6 text-center">
                <div
                    class="h-12 sm:h-16 w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 bg-neutral-300 rounded-md animate-pulse mx-auto"
                ></div>
                <div
                    class="h-4 w-10/12 md:w-7/12 bg-neutral-300 rounded-md animate-pulse mx-auto"
                ></div>
                <div
                    class="h-4 w-8/12 md:w-5/12 bg-neutral-300 rounded-md animate-pulse mx-auto"
                ></div>

                <div class="mt-4">
                    <div
                        class="h-11 w-44 bg-neutral-300 rounded-md animate-pulse mx-auto"
                    ></div>
                </div>
            </div>
        </div>

        <!-- pagination / dots skeleton to match carousel UI and avoid layout shift -->
        <div
            class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20"
            aria-hidden="true"
        >
            <span
                class="w-3 h-3 rounded-full bg-neutral-300 animate-pulse"
            ></span>
            <span
                class="w-3 h-3 rounded-full bg-neutral-300 animate-pulse"
            ></span>
            <span
                class="w-3 h-3 rounded-full bg-neutral-300 animate-pulse"
            ></span>
            <span
                class="w-3 h-3 rounded-full bg-neutral-300 animate-pulse"
            ></span>
            <span
                class="w-3 h-3 rounded-full bg-neutral-300 animate-pulse"
            ></span>
        </div>
    </section>
</template>

<script setup>
// This component is a pure presentational skeleton used while the
// slider data loads. No props required — you can swap it in place of the
// carousel to avoid layout shift. If you want dynamic dot counts or
// different heights, we can add props later.
</script>

<style scoped>
/* Use Tailwind's neutral pulsing utilities for blocks.
   Keep a small reduced-motion rule so users who prefer reduced motion
   won't see the Tailwind pulse animation. */
@media (prefers-reduced-motion: reduce) {
    .animate-pulse {
        animation: none !important;
    }
}
</style>
