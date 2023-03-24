<script setup>
defineProps({
  title: {
    type: String,
  },
});
</script>
<template>
  <section class="max-w-screen-xl mx-auto">
    <div class="flex flex-col items-center gap-4 mb-12">
      <span class="subheading">elégedett ügyfeleink</span>
      <h2>{{ title }}</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
      <div class="p-6 bg-primary-200 rounded-xl border border-gray-400">
        <p class="italic mb-4">
          "Lorem ipsum dolor sit amet consectetur. Pulvinar hendrerit arcu et
          quam blandit integer blandit pellentesque maecenas. Amet diam volutpat
          pellentesque a risus. Quam et ut fusce faucibus in pretium etiam
          praesent. In diam amet augue tincidunt nec sed iaculis lobortis.
          Suspendisse commodo in in habitant aliquam sollicitudin egestas congue
          velit. Dignissim volutpat diam pulvinar mauris aliquet lectus nullam
          facilisi."
        </p>
        <div class="flex flex-row gap-4 items-center">
          <img src="../../assets/images/rolunk_pic.jpg" alt="" />
          <div class="flex gap-2 items-center">
            <p class="font-bold">Jane Doe</p>
            |
            <p>Beosztás</p>
          </div>
        </div>
      </div>
      <div class="p-6 bg-primary-200 rounded-xl">
        <p class="italic mb-4">
          "Lorem ipsum dolor sit amet consectetur. Pulvinar hendrerit arcu et
          quam blandit integer blandit pellentesque maecenas. Amet diam volutpat
          pellentesque a risus. Quam et ut fusce faucibus in pretium etiam
          praesent. In diam amet augue tincidunt nec sed iaculis lobortis.
          Suspendisse commodo in in habitant aliquam sollicitudin egestas congue
          velit. Dignissim volutpat diam pulvinar mauris aliquet lectus nullam
          facilisi."
        </p>
        <div class="flex flex-row gap-4 items-center">
          <img src="../../assets/images/rolunk_pic.jpg" alt="" />
          <div class="flex gap-2 items-center">
            <p class="font-bold">Jane Doe</p>
            |
            <p>Beosztás</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
