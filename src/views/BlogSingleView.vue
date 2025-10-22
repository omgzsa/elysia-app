<script setup>
import { ref, computed, onMounted, inject, watch } from "vue";
import { useGetImageUrl } from "@/composables/getImageUrl";
import { formatDate } from "../utils/utils";
import { useHead } from "@vueuse/head";
// import AnimPulse from "../components/icons/AnimPulse.vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
});

const { directusService } = inject("$directus");

const blog = ref({});
const loading = ref(false);
const error = ref(null);

const pageTitle = computed(() => `${blog.value.cim} — Elysia Laser Clinic`);
const pageDescription = computed(() => blog.value.leiras || "");

async function fetchBlog() {
  loading.value = true;
  try {
    const response = await directusService.getBlog(props.id);
    blog.value = response;
  } catch (err) {
    console.error("Error fetching blog:", err);
    error.value = err;
  } finally {
    loading.value = false;
  }
}

onMounted(async () => {
  await fetchBlog();
});

watch(
  () => props.id,
  async (newId) => {
    if (newId) await fetchBlog();
  },
);

useHead({
  title: pageTitle,
  meta: [
    {
      name: "description",
      content: pageDescription,
    },
    {
      property: "og:title",
      content: pageTitle,
    },
    {
      property: "og:description",
      content: pageDescription,
    },
    {
      property: "og:url",
      content: `https://elysia.hu/blog/${props.slug}-${props.id}`,
    },
    {
      property: "og:author",
      content: computed(() => blog.value.szerzo),
    },
  ],
});
</script>

<template>
  <section>
    <div class="flex flex-col mx-auto space-y-8">
      <span
        aria-label="háttérkép az elysia felnagyított logójával"
        role="img"
        class="pt-20 pb-10 text-center bg-right bg-no-repeat lg:pt-32 lg:pb-16 lg:text-left md:bg-cover md:bg-center"
        :style="{
          backgroundImage: `url(${useGetImageUrl(
            'szolgaltatas-header-bg.webp',
          )})`,
        }"
      >
        <div
          class="flex flex-col max-w-screen-md mx-auto space-y-1 site-padding"
        >
          <span class="subheading">blog</span>
          <h2 class="pb-4">{{ blog.cim }}</h2>
          <div
            class="flex items-center gap-2 mx-auto text-xs italic lg:m-0 subheading"
          >
            <span>{{ formatDate(blog.datum, "hu-HU") }}</span>
            <span> &mdash; </span>
            <span>{{ blog.szerzo }}</span>
          </div>
        </div>
      </span>
    </div>
    <div
      class="grid items-center max-w-screen-md pt-8 mx-auto md:pt-16 blog-body site-padding"
      v-html="blog.szoveg"
    />
    <div v-if="blog.link" class="max-w-screen-md mx-auto mt-10 site-padding">
      <router-link
        class="mx-auto transition-colors duration-200 hover:underline underline-offset-2 hover:text-secondary-100"
        :to="`/${blog.link}`"
      >
        <button>
          <span class=""> Több infó </span>
        </button>
      </router-link>
    </div>
    <div class="max-w-screen-md mx-auto mt-10 site-padding">
      <AppLink :to="{ name: 'blogs.show' }">
        <p
          class="text-xl font-bold group-hover:underline group-focus:underline"
        >
          Vissza
        </p>
      </AppLink>
    </div>
  </section>
</template>
