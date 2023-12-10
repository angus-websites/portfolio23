<template>
  <PageContainer>
      <div v-if="pageData" class="text-center sm:text-left">
        <TitleAndSubtitle :title="pageData.tagline" :subtitle="pageData.subtitle" />
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
          <EmptyState v-else class="text-center">No favourites to show.</EmptyState>
        </div>
        <div v-else-if="error">
          <ErrorState class="text-center">
            Error fetching favourites
          </ErrorState>
        </div>
        <LoadingAnimation v-else />
      </div>

    </PageContainer>
</template>

<script setup lang="ts">
import TextSection from "~/components/TextSection.vue";
import LoadingAnimation from "~/components/loading/LoadingAnimation.vue";
import ErrorState from "~/components/ErrorState.vue";
import {FavouriteSection} from "~/types/Favourites";
import {usePageSetup} from "~/composables/usePageSetup";
import {useApiData} from "~/composables/useApiData";

const { fetchData} = useApiData();
const { setupPageHead, fetchPageData } = usePageSetup();

// Fetch about content
const { data: allSections, error: error} = await fetchData<FavouriteSection[]>('/favourite-sections');

// Fetch page content
const {pageData} = await fetchPageData();

// Set SEO and meta tags
setupPageHead(pageData.value,"About - Angus", "Find out more about Angus")

</script>
