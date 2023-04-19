<script setup>
import faqData from "../assets/faq.json";
import IconArrowRight from "../components/icons/IconArrowRight.vue";

// a function that scrolls to the elements refs with the given id
const scrollTo = (id) => {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <section>
    <div class="flex flex-col space-y-8 mx-auto">
      <AppHeader>
        <template #title>Gyakran Ismételt Kérdések</template>
      </AppHeader>
    </div>
    <div
      class="flex flex-col space-y-1 mx-auto max-w-screen-xl pt-10 site-padding"
    >
      <h3>Válassz témakört</h3>
      <div v-for="subject in faqData" :key="subject.id">
        <p
          @click="scrollTo(subject.id)"
          class="cursor-pointer relative inline-flex items-center justify-start pr-12 overflow-hidden transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 group"
        >
          <span
            class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12"
          >
            <IconArrowRight />
          </span>
          <span
            class="absolute left-0 -translate-x-12 group-hover:translate-x-0 ease-out duration-200"
          >
            <IconArrowRight />
          </span>
          <span
            class="relative w-full text-left transition-colors duration-200 ease-in-out"
            >{{ subject.name }}</span
          >
        </p>
      </div>
    </div>
    <div
      class="flex flex-col space-y-8 py-10 max-w-screen-xl site-padding mx-auto rounded-xl [&>*:nth-child(even)]:bg-primary-200"
    >
      <div
        v-for="item in faqData"
        :key="item.id"
        class="rounded-xl bg-secondary-200"
      >
        <h3
          :id="item.id"
          class="rounded-t-xl p-6"
          :class="
            faqData.indexOf(item) % 2 === 0
              ? 'bg-primary-300'
              : 'bg-primary-100'
          "
        >
          {{ item.name }}
        </h3>
        <div class="p-6 space-y-4">
          <div v-for="content in item.content" :key="content.id">
            <p class="font-semibold">{{ content.question }}</p>
            <p>{{ content.description }}</p>
            <ul class="list-inside list-disc marker:text-accent-100">
              <li v-for="point in content.bulletPoints" :key="point.id">
                {{ point.text }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
