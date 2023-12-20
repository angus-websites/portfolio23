<template>
  <div
      class="group max-w-sm rounded-lg shadow bg-zinc-100 dark:bg-lunar-900/40 flex flex-col h-full"
      :class="project.coming_soon ? '' : ' hover:bg-zinc-50 dark:hover:bg-lunar-900/60'"
  >
    <ProjectLink :project="project" class="flex-1">
      <div class="border-b dark:border-lunar-800/20">
        <img
            width="100"
            height="100"
            class="rounded-t-lg lg:h-48 md:h-36 w-full object-cover object-center bg-zinc-50  dark:bg-zinc-900/40"
            :class="project.coming_soon ? 'brightness-50' : ''"
            :src="getFullUrl(project.images.cover_image.url)"
            :alt="project.images.cover_image.alt"
        />
      </div>
      <div class="p-5">
        <!-- Top row -->
        <div class="flex flex-row justify-between">
          <div>
            <h3
                class="text-xl text-evening-sea-900 dark:text-zinc-50 font-semibold tracking-tight"
            >
              {{ project.title }}
            </h3>
          </div>
          <div>
            <p class="text-lunar-800/80 dark:text-lunar-200/70">
              <span v-if="!project.coming_soon">{{ formatDate(project.date_created) }}</span>
              <span v-else class="group-hover:text-evening-sea-700 dark:group-hover:text-evening-sea-200">Coming soon</span>
            </p>
          </div>
        </div>

        <!-- Tags -->
        <div v-if="project.tags" class="flex flex-row justify-start flex-wrap gap-y-3 my-5">
          <div v-for="tag in projectTags" class="mr-2">
            <span
                class="px-2 py-1 text-xs rounded-full bg-mulberry-700 bg-opacity-90 dark:bg-mulberry-200 text-mulberry-50 dark:text-mulberry-800"
            >{{ tag.value.title }}</span
            >
          </div>
        </div>

        <p class="mt-5 text-sm text-zinc-700 dark:text-zinc-100 opacity-95">
          {{ project.short_description }}
        </p>
      </div>
    </ProjectLink>

  </div>
</template>
<script setup lang="ts">
import { PropType } from "vue";
import { Project } from "~/types/Project";
import ProjectLink from "~/components/project/ProjectLink.vue";
import {useApiData} from "~/composables/useApiData";

const props = defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
});

const {getFullUrl} = useApiData();


const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-GB', { year: 'numeric', month: 'short' });
}

// Computed property that only gets the first 3 tags, if there are more than 3
const projectTags = computed(() => {
  if (props.project.tags.length > 3) {
    return props.project.tags.slice(0, 3);
  }
  return props.project.tags;
});


</script>
