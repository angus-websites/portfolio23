<template>
  <div
      class="group max-w-sm rounded-lg shadow bg-zinc-100 dark:bg-evening-sea-900 dark:bg-opacity-40 "
      :class="project.coming_soon ? '' : ' hover:bg-zinc-50 hover:dark:bg-opacity-80'"
  >
    <ProjectLink :project="project">
      <div class="">
        <img
            width="100"
            height="100"
            class="rounded-t-lg lg:h-48 md:h-36 w-full object-cover object-center bg-base-300"
            :class="project.coming_soon ? 'brightness-50' : ''"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt=""
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
            <p class="text-zinc-400 dark:text-zinc-300">
              <span v-if="!project.coming_soon">2023</span>
              <span v-else class="group-hover:text-evening-sea-700 dark:group-hover:text-evening-sea-200">Coming soon</span>
            </p>
          </div>
        </div>

        <!-- Tags -->
        <div class="flex flex-row justify-start my-5">
          <div class="mr-2">
          <span
              class="px-2 py-1 text-xs rounded-full bg-mulberry-700 bg-opacity-90 dark:bg-mulberry-200 text-mulberry-50 dark:text-mulberry-800"
          >Technology</span
          >
          </div>
        </div>

        <p class="mt-5 text-sm text-zinc-700 dark:text-zinc-100 opacity-95">
          A fun drinking game to play with the family
        </p>
      </div>
    </ProjectLink>

  </div>
</template>
<script setup lang="ts">
import { PropType } from "vue";
import { Project } from "~/types/Project";
import ProjectLink from "~/components/project/ProjectLink.vue";

defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
});
</script>
