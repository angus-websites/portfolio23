<template>
  <div
    class="p-5 border rounded-xl dark:border-white dark:border-opacity-0 bg-zinc-50 dark:bg-evening-sea-900 dark:bg-opacity-40"
  >
    <!-- Top row -->
    <div class="flex flex-row items-center justify-start">
      <!-- Work heroicon -->
      <div class="mr-2">
        <BriefcaseIcon class="h-5 w-5 text-evening-sea-900 dark:text-zinc-50" />
      </div>
      <!-- Block title -->
      <div>
        <h3
          class="text-lg text-evening-sea-900 dark:text-zinc-50 font-bold tracking-tight"
        >
          Work
        </h3>
      </div>
    </div>

    <!-- Content -->
    <div class="mt-5">
      <div class="grid grid-cols-1 gap-y-8">
        <EmploymentRow
          v-for="employment in employments"
          :key="employment.id"
          :employment="employment"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { BriefcaseIcon } from "@heroicons/vue/24/solid";
import { Employment } from "~/types/Employment";

// Create some employment data based on the interface
const employments: Employment[] = [
  {
    id: 1,
    employer: "Company 1",
    job_title: "Software Engineer",
    start_date: "2020-01-01",
    end_date: "2020-01-01",
  },
];
</script>
