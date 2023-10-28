<template>
  <BlockShell>
    <template #icon>
      <AcademicCapIcon class="h-5 w-5 text-evening-sea-900 dark:text-zinc-50" />
    </template>

    <template #title>
      Education
    </template>

    <template #content>
      <ul class="grid grid-cols-1 gap-y-8">
        <li v-for="edu in education">
          <EducationRow
              :key="edu.id"
              :education="edu"
          />
        </li>
      </ul>
    </template>
  </BlockShell>
</template>

<script setup lang="ts">
import { AcademicCapIcon } from "@heroicons/vue/24/solid";
import type { Education } from "~/types/Education";

// Create some employment data based on the interface
const education: Education[] = [
  {
    id: 1,
    institution: "The Example University",
    level: "BSC Computer Science",
    grade: "2:1",
    start_date: "2020-01-01",
    end_date: "2020-01-01",
  },
];
</script>
