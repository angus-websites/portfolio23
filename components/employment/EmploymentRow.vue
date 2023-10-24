<template>

  <div class="flex flex-row items-end">
    <div class="flex flex-row gap-x-4 items-center flex-1">
      <!-- Logo -->
      <div class="flex flex-row justify-start">
        <img class="inline-block h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
      </div>

      <!-- Employer and Title -->
      <div class="flex flex-col justify-start">
        <div class="text-lg text-evening-sea-900 dark:text-zinc-50 font-bold tracking-tight">{{ employment.employer }}</div>
        <div class="text-sm text-evening-sea-700 dark:text-evening-sea-200">{{ employment.job_title }}</div>
      </div>
    </div>

    <!-- Dates -->
    <div class="flex flex-col justify-start">
      <div class="text-sm text-evening-sea-700 dark:text-evening-sea-200">{{ convertDateToYear(employment.start_date) }} - {{ convertDateToYear(employment.end_date) }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {PropType} from "vue";
import {Employment} from "~/types/Employment";

defineProps({
  employment: Object as PropType<Employment>
})

// Function to convert date to year only
function convertDateToYear(date: string) {
  return new Date(date).getFullYear()
}

</script>