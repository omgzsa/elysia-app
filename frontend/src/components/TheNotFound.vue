<template>
  <div
    class="grid min-h-screen site-padding bg-white place-content-center gap-4"
  >
    <h1 class="tracking-widest font-normal text-gray-500 uppercase">
      404 | Not Found
    </h1>
    <div>
      <p class="text-gray-500">
        Térj vissza a
        <AppLink class="underline underline-offset-4" :to="{ name: 'home' }"
          >kezdőlapra</AppLink
        >
      </p>
    </div>
  </div>
</template>
