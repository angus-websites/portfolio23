
<template>
  <PageContainer>
    <div v-if="project">
      <ProjectShow :project="project" />
    </div>
    <p v-else>Error fetching project</p>
  </PageContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const route = useRoute()
const slug = ref(route.params.slug)

// Create a fake project
const project = ref({
  id: 1,
  name: 'Project 1',
  slug: 'project-1',
  description: 'A fun drinking game to play with the family',
})

useHead({
  title: project.value.name,
  meta: [
    { name: 'description', content: 'Project description - Angus' }
  ]
})

</script>
