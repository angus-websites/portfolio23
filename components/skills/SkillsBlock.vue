<template>
  <div>
    <ul v-if="categories" class="grid grid-cols-1 gap-y-10">

      <li v-if="categories.length > 0" v-for="category in categories" :key="category.id">

        <div class="relative mb-10">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-gray-300 dark:border-evening-sea-700 dark:border-opacity-20" />
          </div>
          <div class="relative flex justify-center">
            <h3 class="bg-[#EAEEF1] dark:bg-evening-sea-bg px-2 text-sm text-gray-500 dark:text-evening-sea-100">{{  category.title  }}</h3>
          </div>
        </div>

        <ul class="grid grid-cols-3 sm:grid-cols-4 gap-4">
          <li v-if="category.skills.length > 0" v-for="skill in category.skills">
            <SkillCard
                :key="skill.id"
                :skill="skill" />
          </li>
          <li v-else class="col-span-3 sm:col-span-4">
            <p class="text-center text-gray-500 dark:text-gray-400">
              No skills to show.
            </p>
          </li>
        </ul>
      </li>
      <li v-else>
        <p class="text-center text-gray-500 dark:text-gray-400">
          No Skills to show
        </p>
      </li>
    </ul>
    <LoadingAnimation v-else />
  </div>
</template>
<script setup lang="ts">
import { SkillCategory } from "~/types/SkillCategory";
import SkillCard from "~/components/skills/SkillCard.vue";
import { useApiData } from '~/composables/useApiData';
import LoadingAnimation from "~/components/loading/LoadingAnimation.vue";
const { fetchData } = useApiData();

// Fetch the skill categories from the API
const { data: categories} = fetchData<SkillCategory[]>('/skill-categories');

</script>