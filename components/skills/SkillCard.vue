<template>
  <div
      class="rounded flex flex-col items-center transition-all duration-300 ease-in-out"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
  >
    <div class="flex-1 p-5">
      <div class="w-16 h-16 flex flex-col justify-center">
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
        :class="isHovered ? 'w-full p-1 opacity-100 transition-opacity duration-300 ease-in-out' : 'w-full p-1 opacity-0 transition-opacity duration-300 ease-in-out'"
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
