<template>
  <h1
    class="text-4xl font-bold tracking-tight text-evening-sea-950 dark:text-cullen-50 sm:text-6xl"
  >
    {{ title }}
  </h1>
  <p class="mt-4 text-lg leading-8 dark:text-dracula-100">{{ subtitle }}</p>
</template>
<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "Title",
  },
  subtitle: {
    type: String,
    default: "Subtitle",
  },
});
</script>
