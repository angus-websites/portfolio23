<template>
  <PageContainer>
    <div v-if="pageData" class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <TitleAndSubtitle :title="pageData.tagline" :subtitle="pageData.subtitle" />
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-10 my-20">
      <EmploymentBlock />
      <EducationBlock />
    </div>

    <div class="text-center my-28">
      <h2 class="h2 text-lunar-800 dark:text-cullen-50">My skills</h2>

      <SkillsBlock class="mt-20" />
    </div>
  </PageContainer>
</template>
<script setup lang="ts">

import {usePageSetup} from "~/composables/usePageSetup";

const { setupPageHead, fetchPageData } = usePageSetup();


// Fetch page content
const {pageData, pageError} = await fetchPageData();

// Set SEO and meta tags
setupPageHead(pageData.value, pageError,"Home - Angus", "Find out more about Angus")


</script>