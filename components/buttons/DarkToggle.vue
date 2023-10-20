<template>
  <button @click="toggleDarkMode" class="p-2 transition-colors duration-300 rounded-full" :class="{ 'bg-black text-white': isDarkMode, 'bg-white text-black': !isDarkMode }">
  <template v-if="isDarkMode">
      <SunIcon class="h-6 w-6" />
    </template>
    <template v-else>
      <MoonIcon class="h-6 w-6" />
    </template>
  </button>
</template>

<script setup>
import { ref } from 'vue';
import { SunIcon, MoonIcon } from "@heroicons/vue/24/solid";
const isDarkMode = ref(false)

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
}
</script>
