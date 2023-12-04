<template>
  <BlockShell>
    <template #icon>
      <AcademicCapIcon class="h-5 w-5 text-evening-sea-900 dark:text-zinc-50" />
    </template>

    <template #title>
      Education
    </template>

    <template #content>
      <ul v-if="education" class="grid grid-cols-1 gap-y-8">
        <li v-if="education.length > 0" v-for="edu in education">
          <EducationRow
              :key="edu.id"
              :education="edu"
          />
        </li>
        <li v-else>
          <p class="text-center text-gray-500 dark:text-gray-400">
            No education history to show.
          </p>
        </li>
      </ul>
      <LoadingAnimation v-else />
    </template>
  </BlockShell>
</template>

<script setup lang="ts">
import { AcademicCapIcon } from "@heroicons/vue/24/solid";
import type { Education } from "~/types/Education";

import { useApiData } from '~/composables/useApiData';
import LoadingAnimation from "~/components/loading/LoadingAnimation.vue";
const { fetchData } = useApiData();

// Fetch the skill categories from the API
const { data: education} = fetchData<Education[]>('/education');

</script>
