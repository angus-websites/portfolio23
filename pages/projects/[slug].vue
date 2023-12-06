
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
import {PageData} from "~/types/PageData";
import { useApiData } from '~/composables/useApiData';


const { fetchItem } = useApiData();
const route = useRoute()


// Fetch the page data from the API
const { data: project } = await fetchItem<PageData>(`/projects/slug/${route.params.slug}`);

if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project Not Found'
  })
}


useHead({
  title: project.value.title,
})

</script>
