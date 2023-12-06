<template>
  <PageContainer>
    <div v-if="pageData" class="text-center sm:text-left">
      <TitleAndSubtitle
        :title="pageData.title"
        :subtitle="pageData.subtitle"
      />
    </div>
    <p v-if="error">Error fetching projects</p>
    <ul
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-20"
    >
      <li v-for="project in projects" class="mx-auto sm:mx-0">
          <span class="sr-only">{{project.title}}</span>
          <ProjectCard
              :key="project.id"
              :project="project"
               />
      </li>
    </ul>
  </PageContainer>
</template>
<script lang="ts" setup>
import type { Project } from "~/types/Project";
import {useApiData} from "~/composables/useApiData";
import {PageData} from "~/types/PageData";

useHead({
  title: 'Projects - Angus',
  meta: [
    { name: 'description', content: 'Portfolio description' }
  ]
})

// Create a fake project list
const projects: Project[] = [
  {
    id: 1,
    coming_soon: false,
    title: "Project 4",
    slug: "project-4",
    short_description: "A fun drinking game to play with the family",
  },
  {
    id: 2,
    coming_soon: true,
    title: "Project 2",
    slug: "project-2",
    short_description: "A fun drinking game to play with the family",
  },
]

const error = false

const { fetchItem } = useApiData();

const route = useRoute()

// Fetch the page data from the API
const { data: pageData, error: pageError} = fetchItem<PageData>(`/pages/${route.name}`);



</script>
