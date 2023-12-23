<template>
  <div
      class="rounded flex flex-col items-center "
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
  >
    <div class="flex-1 p-5">

      <div :class="'w-10 h-10 xs:w-14 xs:h-14 flex flex-col justify-center transition-opacity overflow-hidden ' + (isHovered ? ' opacity-100' : ' opacity-90 dark:opacity-90')"
      >
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
      </div>

    </div>
    <div
        :class="'w-full p-1 transition-opacity ' + (isHovered ? ' opacity-100' : ' opacity-0')"
    >
      <p class="text-sm text-lunar-800 dark:text-lunar-100">
        {{ skill.name }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { PropType } from "vue";
import { Skill } from "~/types/Skill";
import { useApiData } from '~/composables/useApiData';

defineProps({
  skill: {
    type: Object as PropType<Skill>,
    required: true,
  }
});

const {getFullUrl} = useApiData();

const getIconUrl = (icon: string) => {
  return getFullUrl(icon);
}





const isHovered = ref(false);
</script>
