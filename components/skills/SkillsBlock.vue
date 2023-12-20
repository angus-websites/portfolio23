<template>
  <div>

    <ul v-if="categories" class="grid grid-cols-1 gap-y-10">

      <li v-if="categories.length > 0" v-for="category in categories" :key="category.id">

        <div class="relative mb-10 flex flex-row items-center">
          <div class="w-full flex-1 border-t border-gray-300 dark:border-lunar-600/20" />
          <div class="">
            <h3 class="px-2 text-sm text-gray-500 dark:text-evening-sea-200">{{  category.title  }}</h3>
          </div>
          <div class="w-full flex-1 border-t border-gray-300 dark:border-lunar-600/20" />
        </div>

        <ul class="grid grid-cols-3 sm:grid-cols-4 gap-4">
          <li v-if="category.skills.length > 0" v-for="skill in category.skills">
            <SkillCard
                :key="skill.id"
                :skill="skill" />
          </li>
          <li v-else class="col-span-3 sm:col-span-4">
            <EmptyState class="text-center">No skills to show.</EmptyState>
          </li>
        </ul>
      </li>
      <li v-else>
        <EmptyState class="text-center">No skills to show.</EmptyState>
      </li>
    </ul>
    <ul v-else-if="error">
      <li>
        <ErrorState class="text-center">
          Error fetching skills
        </ErrorState>
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
import ErrorState from "~/components/ErrorState.vue";
const { fetchData } = useApiData();

// Fetch the skill categories from the API
const { data: categories, error: error} = await fetchData<SkillCategory[]>('/skill-categories');

</script>