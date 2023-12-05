<template>
  <PageContainer>
    <div class="text-center sm:text-left">
      <TitleAndSubtitle title="About" subtitle="The about page" />
    </div>

    <!-- Setup -->
    <AboutShell v-for="section in allSections" class="my-20">
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

  </PageContainer>
</template>

<script setup lang="ts">

useHead({
  title: 'About - Angus',
  meta: [
    { name: 'description', content: 'About description' }
  ]
})

// Generate some dummy setup data
import TextSection from "~/components/TextSection.vue";
import {FavouriteSection} from "~/types/Favourites";

const setup = Array.from({ length: 3 }, (_, i) => ({
  id: i,
  title: `Macbook Pro 16 M1`,
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique quis tempor at, aliquam nec ip`
}))

const devTools = Array.from({ length: 3 }, (_, i) => ({
  id: i,
  title: `Sublime Text 4`,
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique quis tempor at, aliquam nec ip`
}))

const designTools = Array.from({ length: 3 }, (_, i) => ({
  id: i,
  title: `Affinity designer`,
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique quis tempor at, aliquam nec ip`
}))

const photography = Array.from({ length: 3 }, (_, i) => ({
  id: i,
  title: `Canon R6 m2`,
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique quis tempor at, aliquam nec ip`
}))

const allSections: FavouriteSection[] = [
    {
      id: 1,
      title: "My Setup",
      items: setup
    },
    {
      id: 2,
      title: "Dev Tools",
      items: devTools
    },
    {
      id: 3,
      title: "Design Tools",
      items: designTools
    },
    {
      id: 4,
      title: "Photography",
      items: photography
    }
]
</script>
