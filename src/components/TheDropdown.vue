<script setup>
import { ref, useId } from 'vue';
import AppLink from './AppLink.vue';
import IconRight from './icons/IconRight.vue';
import { onClickOutside } from '@vueuse/core';

defineProps({
    submenu: {
        type: Array,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
});

const target = ref(null);
const isVisible = ref(false);
const menuId = useId();

const toggle = () => (isVisible.value = !isVisible.value);
const close = () => (isVisible.value = false);

onClickOutside(target, close);
</script>

<template>
    <div
        ref="target"
        @keydown.esc="close"
    >
        <button
            type="button"
            class="flex items-center justify-between w-full gap-3 py-1.5 text-sm font-medium text-left transition-colors cursor-pointer hover:text-accent-100"
            :class="{ 'text-accent-100': isVisible }"
            :aria-expanded="isVisible"
            aria-haspopup="menu"
            :aria-controls="menuId"
            @click="toggle"
        >
            <span>{{ title }}</span>
            <IconRight
                class="text-xs transition-transform duration-200 ease-out shrink-0"
                :class="{ 'rotate-90': isVisible }"
            />
        </button>

        <!-- inline accordion: grid-rows 0fr -> 1fr animates the height smoothly -->
        <div
            class="grid transition-[grid-template-rows] duration-200 ease-out"
            :class="isVisible ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
        >
            <ul
                :id="menuId"
                role="menu"
                class="overflow-hidden ml-1.5 pl-3 border-l border-primary-100/60"
            >
                <li
                    v-for="item in submenu"
                    :key="item.slug"
                    role="none"
                >
                    <AppLink
                        role="menuitem"
                        :to="{
                            name: 'service.single',
                            params: { category: item.category, slug: item.slug },
                        }"
                        class="block py-1.5 text-sm leading-snug text-gray-600 transition-colors hover:text-accent-100"
                        @click="close"
                    >
                        {{ item.name }}
                    </AppLink>
                </li>
            </ul>
        </div>
    </div>
</template>
