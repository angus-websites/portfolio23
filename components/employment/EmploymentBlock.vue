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
          <EmptyState class="text-center">No employment history to show.</EmptyState>
        </li>
      </ul>
      <ul v-else-if="error">
        <li>
          <ErrorState class="text-center">
            Error fetching employment
          </ErrorState>
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
import ErrorState from "~/components/ErrorState.vue";
const { fetchData } = useApiData();

// Fetch the skill categories from the API
const { data: employments, error: error} = await fetchData<Employment[]>('/employment');


</script>
