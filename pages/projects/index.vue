<template>
    <PageContainer>
        <h1>My projects</h1>
        <p v-if="error">Error fetching projects</p>
        <div v-else class="prose">
            <ul class="list-disc">
                <li v-for="project in projects" :key="project.id">
                    <h2>{{project.title}}</h2>
                </li>
            </ul>
        </div>
    </PageContainer>
</template>
<script lang="ts" setup>
const { $directus, $readItems } = useNuxtApp()

interface Project {
  id: number;
  slug: string;
  title: string;
  short_description?: string;
  
}

const { data: projects, error } = await useAsyncData<{ data: Project[] }>('getProjects', () => {
  return $directus.request(
    $readItems('projects', {
      fields: ['slug', 'title', 'short_description']
    })
  )
});
</script>