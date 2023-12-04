<template>
  <BlockShell>
    <template #icon>
      <BriefcaseIcon class="h-5 w-5 text-evening-sea-900 dark:text-zinc-50" />
    </template>

    <template #title>
      Work
    </template>

    <template #content>
      <ul v-if="employments" class="grid grid-cols-1 gap-y-8">
        <li v-if="employments.length > 0" v-for="employment in employments">
          <EmploymentRow
              :key="employment.id"
              :employment="employment" />
        </li>
        <li v-else>
          <p class="text-center text-gray-500 dark:text-gray-400">
            No employment history to show.
          </p>
        </li>
      </ul>
      <LoadingAnimation v-else />
    </template>
  </BlockShell>
</template>

<script setup lang="ts">
import { BriefcaseIcon } from "@heroicons/vue/24/solid";
import type { Employment } from "~/types/Employment";

import { useApiData } from '~/composables/useApiData';
import LoadingAnimation from "~/components/loading/LoadingAnimation.vue";
const { fetchData } = useApiData();

// Fetch the skill categories from the API
const { data: employments} = fetchData<Employment[]>('/employment');


</script>
