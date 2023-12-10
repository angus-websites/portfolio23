
<template>
  <PageContainer>
    <div v-if="project">
      <ProjectShow :project="project" />
    </div>
    <p v-else>Error fetching project</p>
  </PageContainer>
</template>

<script setup lang="ts">
import {Project} from "~/types/Project";
import { useApiData } from '~/composables/useApiData';


const { fetchItem, getFullUrl } = useApiData();
const route = useRoute()


// Fetch the page data from the API
const { data: project } = await fetchItem<Project>(`/projects/slug/${route.params.slug}`);

if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project Not Found'
  })
}


// get the meta image url
const metaImageUrl = project.value.meta?.image ? getFullUrl(project.value.meta.image.url) : null

// TODO handle blank strings
// Set SEO meta tags if the project has meta properties
if (project.value.meta) {
  useSeoMeta({
    ogTitle: project.value.meta.title ?? project.value.title,
    ogDescription: project.value.short_description ?? "[og:description]",
    ogImage: metaImageUrl ?? "[og:image]",
  })
}

useHead({
  title: project.value.title,
  meta: [
    { name: 'title', content: project.value.meta?.title ?? project.value.title },
    { name: 'description', content: project.value.meta?.description ?? project.value.short_description },
  ],
})



</script>
