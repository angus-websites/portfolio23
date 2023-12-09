
<template>
  <main class="">
    <div v-if="!project.coming_soon" class="mx-auto px-4 pb-16 sm:px-6  lg:max-w-7xl lg:px-8">
      <!-- Breadcrumb -->
      <ProjectBreadcrumb  class="my-5" />
      <!-- Product -->
      <div class="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
        <!-- Product image -->
        <div class="lg:col-span-4 lg:row-end-1">

          <TabGroup as="div" class="flex flex-col-reverse">
            <!-- Image selector -->
            <div class="mx-auto mt-6 w-full max-w-2xl lg:max-w-none">
              <TabList class="grid grid-cols-3 sm:grid-cols-4 gap-6">
                <Tab v-for="image in project.images.images" :key="image.id" class="relative flex h-16 xs:h-20 sm:h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4" v-slot="{ selected }">
                  <span class="sr-only">{{ image.image.alt }}</span>
                  <span class="absolute inset-0 overflow-hidden rounded-md">
                  <img :src="getFullUrl(image.image.url)" :alt="image.image.alt" class="h-full w-full object-cover object-center" />
                </span>
                  <span :class="[selected ? 'ring-lunar-500' : 'ring-transparent', 'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2']" aria-hidden="true" />
                </Tab>
              </TabList>
            </div>

            <TabPanels class="w-full max-w-2xl lg:max-w-none mx-auto rounded-lg overflow-hidden bg-white dark:bg-opacity-10 h-[250px] xs:h-[375px] sm:h-[500px]">
              <TabPanel v-if="hasProjectImages()" v-for="image in project.images.images" :key="image.id" class="h-full w-full flex items-center justify-center">
                <!-- The image will scale within these bounds -->
                <img :src="getFullUrl(image.image.url)" :alt="image.image.alt" class="max-h-full max-w-full object-contain " />
              </TabPanel>
              <div v-else class="h-full w-full flex items-center justify-center">
                <img :src="getFullUrl(project.images.cover_image.url)" :alt="project.images.cover_image.alt" class="max-h-full max-w-full object-contain " />
              </div>
            </TabPanels>
          </TabGroup>

        </div>

        <!-- Product details -->
        <div class="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
          <div class="flex flex-col-reverse">
            <div class="">
              <h1 class="text-2xl font-bold tracking-tight sm:text-3xl text-zinc-900 dark:text-zinc-200">{{ project.title }}</h1>

              <h2 id="information-heading" class="sr-only">Date created</h2>
              <p class="mt-2 text-sm text-lunar-700 dark:text-lunar-300 dark:opacity-80">
                {{ formatDate(project.date_created) }}
              </p>
            </div>

          </div>

          <p class="mt-6 text-zinc-600 dark:text-zinc-200 dark:opacity-70">
            <span v-if="project.medium_description">{{ project.medium_description }}</span>
            <span v-else>{{ project.short_description }}</span>

          </p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
            <a v-if="project.links.web_link" :href="project.links.web_link" target="_blank" class="flex w-full items-center justify-center rounded-md border border-transparent bg-evening-sea-600 px-8 py-3 text-base font-medium text-white hover:bg-evening-sea-700 focus:outline-none focus:ring-2 focus:ring-evening-sea-700 focus:ring-offset-2 focus:ring-offset-gray-50">
              Website
            </a>
            <a v-if="project.links.git_link" :href="project.links.git_link" target="_blank" class="flex w-full items-center justify-center rounded-md border border-transparent bg-lunar-200 px-8 py-3 text-base font-medium text-lunar-800 hover:bg-lunar-300 focus:outline-none focus:ring-2 focus:ring-lunar-500 focus:ring-offset-2 focus:ring-offset-gray-50">
              Github
            </a>
          </div>

          <div v-if="project.highlights" class="mt-10 border-t border-zinc-300 dark:border-evening-sea-500 dark:border-opacity-20 pt-10">
            <h3 class="text-sm font-medium text-lunar-700 dark:text-lunar-200">Highlights</h3>
            <div class="prose prose-sm mt-4 prose-polo dark:prose-invert">
              <ul role="list">
                <li v-for="highlight in project.highlights" :key="highlight">{{ highlight }}</li>
              </ul>
            </div>
          </div>

          <div class="mt-10 border-t border-zinc-300 dark:border-evening-sea-500 dark:border-opacity-20 pt-10">
            <h3 class="text-sm font-medium text-lunar-700 dark:text-lunar-200">Tech stack</h3>
            <div class="my-10 grid grid-cols-4 gap-5">
              <div v-for="skill in project.stack" class="mx-auto flex flex-col items-center space-y-3">
                <div :class="'w-10 h-10 xs:w-14 xs:h-14 flex flex-col justify-center transition-opacity duration-200 ease-in-out'"
                >
                  <!-- Regular icon with conditional classes -->
                  <img
                      :src="getFullUrl(skill.value.icon.url)"
                      :alt="skill.value.icon.alt"
                      :class="skill.value.icon_dark_mode ? 'dark:hidden' : ''"
                  />
                  <!-- Dark icon (only if provided) -->
                  <img
                      v-if="skill.value.icon_dark_mode"
                      :src="getFullUrl(skill.value.icon_dark_mode.url)"
                      :alt="skill.value.icon_dark_mode.alt"
                      class="hidden dark:inline-block"
                  />
                </div>
                <p class="text-sm text-lunar-800 dark:text-lunar-100">
                  {{ skill.value.name }}
                </p>
              </div>
            </div>
          </div>

        </div>

        <div v-if="project.long_description" class="mx-auto mt-20 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
          <div class="py-5 border-t border-b border-evening-sea-700 border-opacity-30 dark:border-opacity-30">
            <h3 class="sr-only">Project overview</h3>
            <div class="prose max-w-none prose-polo prose-img:rounded-lg prose-h2:text-lunar-800 dark:prose-h2:text-lunar-300 dark:prose-invert" v-html="convertDescriptionToHtml(project.long_description)" />
          </div>
        </div>

      </div>
    </div>
    <div v-else>
      <div class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div class="text-center">
          <h1 class="mt-4 text-3xl font-bold tracking-tight text-evening-sea-900 dark:text-evening-sea-200 sm:text-5xl">Coming soon</h1>
          <p class="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-300">
            This project is still in development. Check back later for updates.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <NuxtLink to="/projects" class="rounded-md bg-lunar-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lunar-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lunar-800">Other projects</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/vue'
import {Project} from "~/types/Project.js";
import {PropType} from "vue";
import {useApiData} from "~/composables/useApiData";
import {useSerialize} from "~/composables/useSerialize";

const props = defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  }
})

const {getFullUrl} = useApiData();
const {jsonToHtml} = useSerialize();

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-GB', { year: 'numeric', month: 'short' });
}

function hasProjectImages(){
  // Handle undefined
  if (props.project.images && props.project.images.images) {
    return props.project.images.images.length > 0;
  }
  return false
}

const convertDescriptionToHtml = (description: object) => {
  return jsonToHtml(description);
}





</script>