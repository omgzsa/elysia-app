<script setup lang="ts">
import { ref, onMounted } from "vue";

interface Snowflake {
  id: number;
  left: string;
  size: string;
  duration: string;
  delay: string;
  blur: string;
}

const SNOWDROPS_LENGTH = 100;
const snowflakes = ref<Snowflake[]>([]);

const generateSnowflakes = (): Snowflake[] => {
  const flakes: Snowflake[] = [];
  const snowSizeBase = 30;
  const browserBuffer = 50;
  const leftPosition = 100 + browserBuffer;
  const animateSpeedBase = 10000;
  const minimumFallingSpeed = 5000;
  const animateDelayBase = 5000;
  const blurBase = 5;

  for (let i = 0; i < SNOWDROPS_LENGTH; i++) {
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
* {
  overflow: hidden;
}

.g-snows {
  width: 100%;
  height: 100vh;
  background-color: transparent;
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  z-index: 1;
  pointer-events: none;
}

.g-snows > li {
  opacity: 0;
  position: absolute;
  top: 0;
  border-radius: 100%;
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-size: 100% auto;
  animation-name: snow-drop;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}

@keyframes snow-drop {
  0% {
    transform: translate(0, 0);
    opacity: 0.5;
    margin-left: 0;
  }
  10% {
    margin-left: 15px;
  }
  20% {
    margin-left: 20px;
  }
  25% {
    transform: translate(0, 166.67px);
    opacity: 0.75;
  }
  30% {
    margin-left: 15px;
  }
  40% {
    margin-left: 0;
  }
  50% {
    transform: translate(0, 333.33px);
    opacity: 1;
    margin-left: -15px;
  }
  60% {
    margin-left: -20px;
  }
  70% {
    margin-left: -15px;
  }
  75% {
    transform: translate(0, 500px);
    opacity: 0.5;
  }
  80% {
    margin-left: 0;
  }
  100% {
    transform: translate(0, 666.67px);
    opacity: 0;
  }
}
</style>
