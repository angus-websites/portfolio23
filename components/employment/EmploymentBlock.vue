<template>
  <BlockShell>
    <template #icon>
      <BriefcaseIcon class="h-5 w-5 text-evening-sea-900 dark:text-zinc-50" />
    </template>

    <template #title>
      Work
    </template>

    <template #content>
      <ul class="grid grid-cols-1 gap-y-8">
        <li v-for="employment in employments">
          <EmploymentRow
              :key="employment.id"
              :employment="employment" />
        </li>
      </ul>
    </template>
  </BlockShell>
</template>

<script setup lang="ts">
import { BriefcaseIcon } from "@heroicons/vue/24/solid";
import type { Employment } from "~/types/Employment";

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
