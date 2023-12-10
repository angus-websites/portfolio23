
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
import { useUtils} from "~/composables/useUtils";

const { fetchItem, getFullUrl } = useApiData();
const {checkBlankString} = useUtils();

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


// Set SEO meta tags if the project has meta properties
if (project.value.meta) {
  useSeoMeta({
    ogTitle: checkBlankString(project.value.meta.title ?? project.value.title, project.value.title),
    ogDescription: checkBlankString(project.value.meta.description ?? project.value.short_description, project.value.short_description),
    ogImage: metaImageUrl,
  })
}

useHead({
  title: project.value.title,
  meta: [
    { name: 'title', content: checkBlankString(project.value.meta?.title ?? project.value.title, project.value.title)},
    { name: 'description', content: checkBlankString(project.value.meta?.description ?? project.value.short_description, project.value.short_description)}
  ],
})



</script>
