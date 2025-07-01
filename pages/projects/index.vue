<template>
  <PageContainer>
    <div v-if="pageData" class="text-center sm:text-left">
      <TitleAndSubtitle :title="pageData.tagline" :subtitle="pageData.subtitle" />
    </div>
    <ErrorState v-if="error" class="text-center">
      Error fetching projects
    </ErrorState>

    <div v-else-if="projects" class="my-20">
      <!-- Display number of projects -->
      <div class="text-center my-8">
        <p class="text-base text-lunar-600 dark:text-aro-400">
          <span>{{projects.length}}</span> projects
        </p>
      </div>
      <ul

        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-7 "
      >

        <li v-if="projects.length > 0" v-for="project in projects" class="w-full">
            <span class="sr-only">{{project.title}}</span>
            <ProjectCard
                class="mx-auto"
                :key="project.id"
                :project="project"
                 />
        </li>
        <li v-else class="text-center col-span-full">
          <EmptyState>No projects to show.</EmptyState>
        </li>
      </ul>
    </div>
  </PageContainer>
</template>
<script lang="ts" setup>
import type { Project } from "~/types/Project";
import {useApiData} from "~/composables/useApiData";
import {usePageSetup} from "~/composables/usePageSetup";
import ErrorState from "~/components/ErrorState.vue";

const { fetchData } = useApiData();
const { setupPageHead, fetchPageData } = usePageSetup();


const { data: projects, error: error} = await fetchData<Project[]>('/projects?limit=15'); // TODO paginate

console.log(projects)
// Fetch page content
const {pageData, pageError} = await fetchPageData();

// Set SEO and meta tags
setupPageHead(pageData.value, pageError,"Projects - Angus", "View the most recent projects Angus has worked on")






</script>
