<template>
  <div
      class="rounded flex flex-col items-center "
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
  >
    <div class="flex-1 p-5">

      <div :class="'w-10 h-10 xs:w-14 xs:h-14 flex flex-col justify-center transition-opacity overflow-hidden ' + (isHovered ? ' opacity-100' : ' opacity-90 dark:opacity-90')"
      >
        <SkillIcon :skill="skill" />
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
import SkillIcon from "~/components/skills/SkillIcon.vue";

defineProps({
  skill: {
    type: Object as PropType<Skill>,
    required: true,
  }
});

const isHovered = ref(false);
</script>
