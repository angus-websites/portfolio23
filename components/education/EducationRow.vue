<template>
  <div class="flex flex-row">
    <div class="flex flex-row gap-x-4 items-start flex-1">
      <!-- Logo -->
      <div class="">
        <div class="rounded-full w-10 h-10 border relative overflow-hidden">
          <NuxtImg v-if="education.icon"
            class="w-full h-full object-cover"
            width="100"
            height="100"
            :src="getFullUrl(education.icon.url)"
            :alt="education.icon.alt ?? 'Placeholder icon'"
          />
        </div>
      </div>

      <!-- Employer and Title -->
      <div class="flex flex-col justify-start flex-1">
        <div
          class=" text-evening-sea-900 dark:text-cullen-50 font-semibold tracking-tight"
        >
          <p>{{ education.school }}</p>
        </div>
        <div class="flex flex-wrap justify-between">
          <div class="text-sm text-evening-sea-700 dark:text-blade-200">
            <span>{{ education.level }}</span>
            <span v-if="education.grade" class="ml-2 text-mulberry-700 dark:text-buffy-100">{{ education.grade }}</span>
          </div>
          <div class="text-sm text-evening-sea-700 dark:text-vanHelsing-200">
            {{ convertDateToYear(education.start_date) }} -
            <span v-if="education.end_date">{{ convertDateToYear(education.end_date, true) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PropType } from "vue";
import type { Education } from "~/types/Education";
import {useApiData} from "~/composables/useApiData";

defineProps({
  education: {
    type: Object as PropType<Education>,
    required: true,
  }
});

const {getFullUrl} = useApiData();

// Function to convert date to year only
function convertDateToYear(date: string, handleNull = false) {
  if (handleNull && date == null) {
    return "";
  }
  return new Date(date).getFullYear();
}
</script>
