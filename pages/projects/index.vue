<template>
    <PageContainer>
        <TitleAndSubtitle title="My Projects" subtitle="Some of my recent work..." />
        <p v-if="error">Error fetching projects</p>
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-20">
          <ProjectCard class="mx-auto sm:mx-0" v-for="project in projects.data" :key="project.id" :project="project.attributes" />
        </div>
    </PageContainer>
</template>
<script lang="ts" setup>
import type { Project } from '~/types/Project'
const { find } = useStrapi()

interface ProjectResponse{
  data: Project[];
}

const { data: projects, error } = await useAsyncData<{ data: ProjectResponse[] }>('strapiProjects', () => {
  return find('projects')
});

</script>