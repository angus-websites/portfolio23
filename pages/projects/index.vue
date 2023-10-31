<template>
  <PageContainer>
    <div class="text-center sm:text-left">
      <TitleAndSubtitle
        title="My Projects"
        subtitle="Some of my recent work..."
      />
    </div>
    <p v-if="error">Error fetching projects</p>
    <ul
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-20"
    >
      <li v-for="project in projects" class="mx-auto sm:mx-0">
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
    title: "Project 4",
    slug: "project-4",
    short_description: "A fun drinking game to play with the family",
  },
  {
    id: 2,
    title: "Project 2",
    slug: "project-2",
    short_description: "A fun drinking game to play with the family",
  },
]

</script>
