<template>
    <PageContainer>
        <TitleAndSubitle title="My Projects" subtitle="Some of my recent work..." />
        <p v-if="error">Error fetching projects</p>
        <div v-else class="grid grid-cols-3 gap-3 my-20">
          <ProjectCard v-for="project in projects" :key="project.id" :project="project" />

        </div>
    </PageContainer>
</template>
<script lang="ts" setup>

import {Project} from "~/types/Project";
import TitleAndSubitle from "~/components/TitleAndSubitle.vue";

const { $directus, $readItems } = useNuxtApp()

const { data: projects, error } = await useAsyncData<{ data: Project[] }>('getProjects', () => {
  return $directus.request(
    $readItems('projects', {
      fields: ['slug', 'title', 'short_description']
    })
  )
});
</script>