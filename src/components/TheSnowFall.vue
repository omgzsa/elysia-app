<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useWindowSize } from "@vueuse/core";

interface Snowflake {
  id: number;
  left: string;
  size: string;
  duration: string;
  delay: string;
  blur: string;
}

const { width } = useWindowSize();
const snowflakes = ref<Snowflake[]>([]);

const getSnowflakeCount = () => {
  if (width.value < 640) return 30; // Mobile
  if (width.value < 1024) return 50; // Tablet
  return 100; // Desktop
};

const generateSnowflakes = (): Snowflake[] => {
  const count = getSnowflakeCount();
  const flakes: Snowflake[] = [];
  const snowSizeBase = 30;
  const browserBuffer = 50;
  const leftPosition = 100 + browserBuffer;
  const animateSpeedBase = 10000;
  const minimumFallingSpeed = 5000;
  const animateDelayBase = 5000;
  const blurBase = 5;

  for (let i = 0; i < count; i++) {
    const size = Math.abs(
      Math.random() * snowSizeBase - Math.random() * snowSizeBase,
    );
    const left = Math.abs(
      Math.random() * leftPosition - Math.random() * leftPosition,
    );
    const duration =
      Math.abs(
        Math.random() * animateSpeedBase - Math.random() * animateSpeedBase,
      ) + minimumFallingSpeed;
    const delay = Math.abs(Math.random() * animateDelayBase);
    const blur = Math.abs(Math.random() * blurBase - Math.random() * blurBase);

    flakes.push({
      id: i,
      left: `${left}%`,
      size: `${size}px`,
      duration: `${duration}ms`,
      delay: `${delay}ms`,
      blur: `${blur}px`,
    });
  }
  return flakes;
};

onMounted(() => {
  snowflakes.value = generateSnowflakes();
});
</script>

<template>
  <ul class="g-snows">
    <li
      v-for="flake in snowflakes"
      :key="flake.id"
      :style="{
        left: flake.left,
        width: flake.size,
        height: flake.size,
        animationDuration: flake.duration,
        animationDelay: flake.delay,
        filter: `blur(${flake.blur})`,
      }"
    />
  </ul>
</template>

<style scoped>
.g-snows {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute; /* Change from absolute to fixed */
  top: 0;
  left: 0;
  pointer-events: none;
  background: transparent;
  z-index: 50; /* Ensure it's on top */
}

.g-snows > li {
  opacity: 0;
  position: absolute;
  top: 0;
  border-radius: 100%;
  background-color: #ffffff;
  animation-name: snow-drop;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  will-change: transform, opacity;
}

@keyframes snow-drop {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 0.5;
    margin-left: 0;
  }
  25% {
    transform: translate3d(0, 166.67px, 0);
    opacity: 0.75;
  }
  50% {
    transform: translate3d(0, 333.33px, 0);
    opacity: 1;
  }
  75% {
    transform: translate3d(0, 500px, 0);
    opacity: 0.5;
  }
  100% {
    transform: translate3d(0, 666.67px, 0);
    opacity: 0;
  }
}
</style>
