<template>
  <div class="flex flex-row">
    <div class="flex flex-row gap-x-4 items-start flex-1">
      <!-- Logo -->
      <div class="">
        <div class="rounded-full w-10 h-10 border relative overflow-hidden">
          <NuxtImg v-if="employment.icon"
            width="100"
            height="100"
            class="w-full h-full object-cover bg-white"
            :src="getFullUrl(employment.icon.url)"
            :alt="employment.icon.alt"
          />
        </div>
      </div>

      <!-- Employer and Title -->
      <div class="flex flex-col justify-start flex-1">
        <div
          class="text-evening-sea-900 dark:text-cullen-50 font-semibold tracking-tight"
        >
          <p>{{ employment.employer }}</p>
        </div>
        <div class="flex flex-wrap justify-between">
          <div class="text-sm text-evening-sea-700 dark:text-blade-200">
            <p>{{ employment.job_title }}</p>
          </div>
          <div class="text-sm text-evening-sea-700 dark:text-vanHelsing-200">
            <span>{{ convertDateToYear(employment.start_date) }}</span> -
            <span v-if="employment.end_date">{{ convertDateToYear(employment.end_date, true) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PropType } from "vue";
import { Employment } from "~/types/Employment";
import {useApiData} from "~/composables/useApiData";

defineProps({
  employment: {
    type: Object as PropType<Employment>,
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
