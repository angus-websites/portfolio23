<template>
  <PageContainer>
      <div class="text-center sm:text-left">
        <TitleAndSubtitle :title="pageData.title" :subtitle="pageData.subtitle" />
      </div>

      <!-- Setup -->
      <div class="my-20">
        <div v-if="allSections" class="grid grid-cols-1 gap-y-20">
          <AboutShell v-if="allSections.length > 0" v-for="section in allSections" :key="section.id">
            <template #title>
              {{  section.title }}
            </template>
            <template #content>
              <ul role="list" class="space-y-10">
                <li v-for="item in section.items">
                  <TextSection :title="item.title" :content="item.content" />
                </li>
              </ul>
            </template>
          </AboutShell>
          <p v-else class="text-center text-gray-500 dark:text-gray-400">
            No favourites to show.
          </p>
        </div>
        <div v-else-if="error">
          <p class="text-center text-red-700 dark:text-red-300">
            Error fetching favourites
          </p>
        </div>
        <LoadingAnimation v-else />
      </div>

    </PageContainer>
</template>

<script setup lang="ts">

// Generate some dummy setup data
import TextSection from "~/components/TextSection.vue";
import {FavouriteSection} from "~/types/Favourites";
import { useApiData } from '~/composables/useApiData';
import LoadingAnimation from "~/components/loading/LoadingAnimation.vue";

definePageMeta({ middleware: 'fetch-page'});

const routeSlug = useState('routeSlug')

useHead({
  title: 'About - Angus',
  meta: [
    { name: 'description', content: 'About description' }
  ]
})

const { fetchData, fetchItem } = useApiData();

// Fetch the skill categories from the API
const { data: allSections, error: error} = fetchData<FavouriteSection[]>('/favourite-sections');

const { data: pageData, error: pageError} = fetchItem(`/pages/${routeSlug.value}`);


</script>
