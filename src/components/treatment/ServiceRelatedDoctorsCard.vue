<script setup>
import { inject } from 'vue';

const { apiUrl } = inject('$directus');

defineProps({
    item: {
        type: Object,
        required: true,
    },
});
</script>
<template>
    <div class="employee-card group relative w-full sm:w-72 shrink-0">
        <div
            class="bg-primary-100/20 h-52 w-full absolute -bottom-5 rounded-xl -z-10 group-hover:translate-y-1 transition-transform duration-200"
        ></div>
        <AppLink
            v-slot="{ navigate }"
            :to="{ name: 'employee.single', params: { slug: item.slug } }"
            class="text-xs sm:text-sm text-gray-500"
        >
            <div
                @click="navigate"
                role="link"
                class="flex flex-col px-4 space-y-2"
            >
                <img
                    :src="`${apiUrl}/assets/${item.kep}?width=600&quality=85&format=webp`"
                    :alt="item.nev"
                    height="250"
                    width="300"
                    class="rounded-xl w-full h-72 object-cover mb-4 group-hover:-translate-y-1 transition-transform duration-200"
                    style="object-position: 50% 15%"
                />
                <h3 class="text-gray-900">
                    {{ item.nev }}
                </h3>
                <span>{{ item.titulus }}</span>
            </div>
        </AppLink>
    </div>
</template>
