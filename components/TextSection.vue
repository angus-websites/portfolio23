<template>
  <p class="text-base font-semibold tracking-tight text-evening-sea-800 dark:text-blade-200">
    {{ title }}
  </p>
  <p class="mt-2 text-sm text-lunar-900/80 dark:text-lunar-200/70">
    {{ content }}
  </p>
</template>
<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "Title",
  },
  content: {
    type: String,
  },
});

</script>