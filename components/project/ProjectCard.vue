<template>

  <NuxtLink to="#" class="max-w-sm border dark:border-white dark:border-opacity-0 bg-zinc-100 rounded-lg shadow dark:bg-evening-sea-900 dark:bg-opacity-40">
    <div>
      <img class="rounded-t-lg lg:h-48 md:h-36 w-full object-cover object-center bg-base-300" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
    </div>
    <div class="p-5">
      <!-- Top row -->
      <div class="flex flex-row justify-between">
        <div><h3 class="text-xl text-evening-sea-900 dark:text-zinc-50 font-semibold tracking-tight">{{project.title}}</h3></div>
        <div>
          <p class="text-evening-sea-700 dark:text-evening-sea-200">2023</p>
        </div>
      </div>

      <!-- Tags -->
      <div class="flex flex-row justify-start my-5">
        <div class="mr-2"><span class="px-2 py-1 text-xs font-semibold rounded-full bg-zinc-300 dark:bg-evening-sea-500 dark:bg-opacity-40 text-evening-sea-900 dark:text-evening-sea-200">Technology</span></div>
      </div>

      <p class="mt-5 text-sm text-zinc-700 dark:text-zinc-100 opacity-95">A fun drinking game to play with the family</p>

    </div>
  </NuxtLink>
</template>
<script setup lang="ts">

import {Project} from "~/types/Project";
import {PropType} from "vue";

const props = defineProps({
  project: Object as PropType<Project>
})

</script>