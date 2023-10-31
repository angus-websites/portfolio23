<template>
  <div
      class="rounded flex flex-col items-center "
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
  >
    <div class="flex-1 p-5">

      <div :class="'w-10 h-10 xs:w-14 xs:h-14 flex flex-col justify-center transition-opacity duration-200 ease-in-out' + (isHovered ? ' opacity-100' : ' opacity-90 dark:opacity-90')"
      >
        <!-- Regular icon with conditional classes -->
        <img
            :src="skill.icon"
            :alt="'Icon for '+skill.name"
            :class="skill.iconDark ? 'dark:hidden' : ''"
        />
        <!-- Dark icon (only if provided) -->
        <img
            v-if="skill.iconDark"
            :src="skill.iconDark"
            :alt="'Dark icon for '+skill.name"
            class="hidden dark:inline-block"
        />
      </div>
    </div>
    <div
        :class="'w-full p-1 transition-opacity duration-200 ease-in-out' + (isHovered ? ' opacity-100' : ' opacity-0')"
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

defineProps({
  skill: Object as PropType<Skill>,
});

const isHovered = ref(false);
</script>
