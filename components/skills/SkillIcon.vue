<template>
  <!-- Regular icon with conditional classes -->
  <img
      :src="getIconUrl(skill.icon.url)"
      :alt="skill.icon.alt"
      :class="skill.icon_dark_mode ? 'dark:hidden' : ''"
      class="max-w-full max-h-full object-contain"
  />
  <!-- Dark icon (only if provided) -->
  <img
      v-if="skill.icon_dark_mode"
      :src="getIconUrl(skill.icon_dark_mode.url)"
      :alt="skill.icon_dark_mode.alt"
      class="hidden dark:inline-block max-w-full max-h-full object-contain"
  />
</template>
<script setup lang="ts">
import {useApiData} from "~/composables/useApiData";
import { Skill } from "~/types/Skill";

const props = defineProps({
  skill: {
    type: Object as PropType<Skill>,
    required: true,
  }
});

const {getFullUrl} = useApiData();

const getIconUrl = (icon: string) => {
  return getFullUrl(icon);
}

</script>