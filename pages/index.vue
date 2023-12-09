<template>
  <PageContainer>
    <div v-if="pageData" class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <TitleAndSubtitle
          :title="pageData.title"
          :subtitle="pageData.subtitle"
        />
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-10 my-20">
      <EmploymentBlock />
      <EducationBlock />
    </div>

    <div class="text-center my-28">
      <h2 class="h2 text-lunar-800 dark:text-lunar-100">My skills</h2>

      <SkillsBlock class="mt-20" />
    </div>
  </PageContainer>
</template>
<script setup lang="ts">

import {useApiData} from "~/composables/useApiData";
import type { PageData } from "~/types/PageData";

useHead({
  title: 'Home - Angus',
  meta: [
    { name: 'description', content: 'Portfolio description' }
  ]
})

const { fetchItem } = useApiData();

const route = useRoute()


// Fetch the page data from the API
const { data: pageData, error: pageError} = await fetchItem<PageData>(`/pages/${route.name}`);

</script>