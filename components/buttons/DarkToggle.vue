<template>
  <button @click="toggleDarkMode" class="p-2 rounded-full bg-zinc-200 dark:bg-evening-sea-900 text-evening-sea-800 dark:text-evening-sea-200">
    <SunIcon class="h-6 w-6 hidden dark:block" />
    <MoonIcon class="h-6 w-6 dark:hidden" />
  </button>
</template>

<script setup>
import { SunIcon, MoonIcon } from "@heroicons/vue/24/solid";
const { $colorMode } = useNuxtApp();

const toggleDarkMode = () => {
  $colorMode.preference = $colorMode.preference === 'dark' ? 'light' : 'dark';
}
</script>
