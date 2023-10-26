<template>
  <div class="flex flex-row">
    <div class="flex flex-row gap-x-4 items-start flex-1">
      <!-- Logo -->
      <div class="">
        <div class="rounded-full w-10 h-10 border relative overflow-hidden">
          <img
            class="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
      </div>

      <!-- Employer and Title -->
      <div class="flex flex-col justify-start flex-1">
        <div
          class="text-lg text-evening-sea-900 dark:text-zinc-50 font-semibold tracking-tight"
        >
          {{ employment.employer }}
        </div>
        <div class="flex flex-wrap justify-between">
          <div class="text-sm text-evening-sea-700 dark:text-evening-sea-200">
            {{ employment.job_title }}
          </div>
          <div class="text-sm text-evening-sea-700 dark:text-evening-sea-200">
            {{ convertDateToYear(employment.start_date) }} -
            {{ convertDateToYear(employment.end_date, true) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PropType } from "vue";
import { Employment } from "~/types/Employment";

defineProps({
  employment: Object as PropType<Employment>,
});

// Function to convert date to year only
function convertDateToYear(date: string, handleNull = false) {
  if (handleNull && date == null) {
    return "";
  }
  return new Date(date).getFullYear();
}
</script>
