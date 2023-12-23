<template>
  <button
    class="p-2 rounded-full bg-evening-sea-400/20 dark:bg-nosferatu-700 text-evening-sea-800 dark:text-morbius-200"
    @click="toggleDarkMode"
    :title="`Turn on ${currentMode === 'dark' ? 'light' : 'dark'} mode`"
  >
    <SunIcon class="h-6 w-6 hidden dark:block" />
    <MoonIcon class="h-6 w-6 dark:hidden" />
  </button>
</template>

<script setup>
import { SunIcon, MoonIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";
const { $colorMode } = useNuxtApp();
const currentMode = ref($colorMode.preference);

const toggleDarkMode = () => {
  if ($colorMode.preference === "dark" || ($colorMode.preference === "system" && $colorMode.value === "dark")) {
    $colorMode.preference = "light";
    currentMode.value = "light";
  } else {
    $colorMode.preference = "dark";
    currentMode.value = "dark";
  }
};

</script>
