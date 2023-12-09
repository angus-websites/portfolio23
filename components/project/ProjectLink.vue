<template>
  <NuxtLink
      v-if="!project.coming_soon"
      :to="`/projects/${project.slug}`"
  >
    <slot />
  </NuxtLink>
  <div v-else>
    <slot />
  </div>
</template>
<script setup lang="ts">
import {PropType} from "vue/dist/vue";
import {Project} from "~/types/Project";

defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
});

</script>