<script setup>
import { ref, inject, onMounted } from 'vue';
import { useNavigation } from '../composables/useNavigation';
import FooterSocial from './footer/FooterSocial.vue';
import TheDropdown from './TheDropdown.vue';
import IconDown from './icons/IconDown.vue';

const { directusService } = inject('$directus');
const { menu, load: loadNavigation } = useNavigation(directusService);

onMounted(loadNavigation);

const isServicesOpen = ref(false);
const toggleServices = () => (isServicesOpen.value = !isServicesOpen.value);
</script>

<template>
    <aside
        class="absolute z-20 right-2 sm:right-4 top-2 w-[min(18rem,calc(100vw-1rem))] bg-white border border-neutral-100 rounded-2xl shadow-xl"
    >
        <!-- Header -->
        <div class="px-5 pt-5 pb-2">
            <span class="text-[10px] font-semibold tracking-[0.2em] uppercase text-neutral-400"> Menü </span>
        </div>

        <nav class="max-h-[calc(100svh-6rem)] overflow-y-auto px-3 pb-4">
            <!-- Top-level links -->
            <div class="space-y-0.5">
                <AppLink
                    :to="{ name: 'home' }"
                    class="flex items-center w-full px-3 py-2.5 rounded-xl text-[15px] font-semibold text-gray-800 hover:text-accent-100 hover:bg-neutral-50 transition-colors"
                >
                    Kezdőlap
                </AppLink>

                <!-- Szolgáltatások — toggle -->
                <div>
                    <button
                        type="button"
                        class="flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-[15px] font-semibold text-gray-800 hover:text-accent-100 hover:bg-neutral-50 transition-colors"
                        @click="toggleServices"
                    >
                        <span>Szolgáltatások</span>
                        <IconDown
                            class="w-4 h-4 shrink-0 transition-transform duration-200 text-neutral-400"
                            :class="isServicesOpen ? 'rotate-0' : '-rotate-90'"
                        />
                    </button>

                    <!-- Services sub-block: visually distinct inset panel -->
                    <div
                        class="grid transition-[grid-template-rows] duration-250 ease-out"
                        :class="isServicesOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
                    >
                        <div class="overflow-hidden">
                            <div
                                class="mx-2 mt-1 mb-2 bg-neutral-50 rounded-xl border border-neutral-100 px-3 py-2 space-y-0.5"
                            >
                                <!-- Category accordions (Plasztikai sebészet, etc.) -->
                                <TheDropdown
                                    v-for="cat in menu"
                                    :key="cat.id"
                                    :title="cat.title"
                                    :submenu="cat.submenu"
                                />

                                <AppLink
                                    class="flex items-center w-full gap-3 py-1.5 text-sm font-medium transition-colors hover:text-accent-100"
                                    :to="{ name: 'service.pulmonology' }"
                                    >Tüdőgyógyászat</AppLink
                                >
                                <AppLink
                                    class="flex items-center w-full gap-3 py-1.5 text-sm font-medium transition-colors hover:text-accent-100"
                                    :to="{ name: 'service.somnology' }"
                                    >Szomnológia</AppLink
                                >
                                <AppLink
                                    class="flex items-center w-full gap-3 py-1.5 text-sm font-medium transition-colors hover:text-accent-100"
                                    :to="{ name: 'service.allergology' }"
                                    >Allergológia</AppLink
                                >
                            </div>
                        </div>
                    </div>
                </div>

                <AppLink
                    :to="{ name: 'zero.skin' }"
                    class="flex items-center w-full px-3 py-2.5 rounded-xl text-[15px] font-semibold text-gray-800 hover:text-accent-100 hover:bg-neutral-50 transition-colors"
                    >ZO Skin Health</AppLink
                >
                <AppLink
                    :to="{ name: 'fotofinder' }"
                    class="flex items-center w-full px-3 py-2.5 rounded-xl text-[15px] font-semibold text-gray-800 hover:text-accent-100 hover:bg-neutral-50 transition-colors"
                    >FotoFinder</AppLink
                >
                <AppLink
                    :to="{ name: 'prices.show' }"
                    class="flex items-center w-full px-3 py-2.5 rounded-xl text-[15px] font-semibold text-gray-800 hover:text-accent-100 hover:bg-neutral-50 transition-colors"
                    >Áraink</AppLink
                >
                <AppLink
                    :to="{ name: 'employees.show' }"
                    class="flex items-center w-full px-3 py-2.5 rounded-xl text-[15px] font-semibold text-gray-800 hover:text-accent-100 hover:bg-neutral-50 transition-colors"
                    >Munkatársak</AppLink
                >
                <AppLink
                    :to="{ name: 'blogs.show' }"
                    class="flex items-center w-full px-3 py-2.5 rounded-xl text-[15px] font-semibold text-gray-800 hover:text-accent-100 hover:bg-neutral-50 transition-colors"
                    >Blog</AppLink
                >
                <AppLink
                    :to="{ name: 'home', hash: '#contact' }"
                    class="flex items-center w-full px-3 py-2.5 rounded-xl text-[15px] font-semibold text-gray-800 hover:text-accent-100 hover:bg-neutral-50 transition-colors"
                    >Kapcsolat</AppLink
                >
            </div>

            <!-- Social -->
            <div class="mt-3 pt-3 px-2 border-t border-neutral-100">
                <FooterSocial />
            </div>
        </nav>
    </aside>
</template>
