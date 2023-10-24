<template>
  <div class="rounded-xl bg-zinc-50 p-5 border">

    <!-- Top row -->
    <div class="flex flex-row items-center justify-start">
      <!-- Work heroicon -->
      <div class="mr-2">
        <BriefcaseIcon class="h-5 w-5 text-evening-sea-900 dark:text-zinc-50" />
      </div>
      <!-- Block title -->
      <div>
        <h3 class="text-lg text-evening-sea-900 dark:text-zinc-50 font-bold tracking-tight">Work</h3>
      </div>
    </div>

    <!-- Content -->
    <div class="mt-5">
      <div class="grid grid-cols-1 gap-y-3">
        <EmploymentRow v-for="employment in employments" :employment="employment" :key="employment.id" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { BriefcaseIcon } from '@heroicons/vue/24/solid'
import {Employment} from "~/types/Employment";


const { $directus, $readItems } = useNuxtApp()

const { data: employments, error } = await useAsyncData<{ data: Employment[] }>('getEmployment', () => {
  return $directus.request(
      $readItems('employments', {
        // Read all fields
        fields: ['*.*']
      })
  )
});

</script>