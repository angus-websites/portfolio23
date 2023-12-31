<template>
  <PageContainer>
      <div v-if="pageData" class="text-center sm:text-left">
        <TitleAndSubtitle :title="pageData.tagline" :subtitle="pageData.subtitle" />
      </div>
      <!-- About -->
      <div v-if="aboutData && !aboutError" class="my-10 sm:my-16">
        <div class="prose prose-polo dark:prose-invert" v-html="aboutData.intro_html">

        </div>
      </div>
      <div v-else-if="aboutError">
        <ErrorState class="text-center">
          Error fetching about section
        </ErrorState>
      </div>

      <!-- Setup -->
      <div class="my-20">
        <div v-if="allSections && !error" class="grid grid-cols-1 gap-y-20">
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

const { fetchData, fetchItem} = useApiData();
const { setupPageHead, fetchPageData } = usePageSetup();

type aboutSection = {
  intro_html: string;
}

// Fetch about content
const { data: allSections, error: error} = await fetchData<FavouriteSection[]>('/favourite-sections');
const { data: aboutData, error: aboutError} = await fetchItem<aboutSection>('/globals/about');

// Fetch page content
const {pageData, pageError} = await fetchPageData();

// Set SEO and meta tags
setupPageHead(pageData.value, pageError,"About - Angus", "Find out more about Angus")

</script>
