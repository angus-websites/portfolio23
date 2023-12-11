<template>
  <PageContainer>
    <div v-if="pageData" class="text-center sm:text-left">
      <TitleAndSubtitle :title="pageData.tagline" :subtitle="pageData.subtitle" />
    </div>
    <ErrorState v-if="error" class="text-center">
      Error fetching projects
    </ErrorState>
    <ul
      v-else-if="projects"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-20"
    >
      <li v-if="projects.length > 0" v-for="project in projects" class="mx-auto sm:mx-0">
          <span class="sr-only">{{project.title}}</span>
          <ProjectCard
              :key="project.id"
              :project="project"
               />
      </li>
      <li v-else class="text-center col-span-full">
        <EmptyState>No projects to show.</EmptyState>
      </li>
    </ul>
  </PageContainer>
</template>
<script lang="ts" setup>
import type { Project } from "~/types/Project";
import {useApiData} from "~/composables/useApiData";
import {usePageSetup} from "~/composables/usePageSetup";
import ErrorState from "~/components/ErrorState.vue";

const { fetchData } = useApiData();
const { setupPageHead, fetchPageData } = usePageSetup();


const { data: projects, error: error} = await fetchData<Project[]>('/projects');

// Fetch page content
const {pageData, pageError} = await fetchPageData();

// Set SEO and meta tags
setupPageHead(pageData.value, pageError,"Projects - Angus", "View the most recent projects Angus has worked on")






</script>
