<template>
  <PageContainer>
    <TitleAndSubtitle title="About" subtitle="The about page" />

    <!-- Setup -->
    <AboutShell v-for="section in allSections" class="my-20">
      <template #title>
        {{  section.title }}
      </template>
      <template #content>
        <ul role="list" class="space-y-14">
          <li v-for="item in section.content">
            <TextSection :title="item.title" :content="item.content" />
          </li>
        </ul>
      </template>
    </AboutShell>

    <div class="my-20">
      <a target="_blank" href="https://www.ecowebhosting.co.uk/" rel="noopener">
        <img class="mx-auto " src="https://eco-cdn.co.uk/eco-badge-2.svg" alt="Planting trees every month with Eco Web Hosting">
      </a>
    </div>
  </PageContainer>
</template>

<script setup lang="ts">

// Generate some dummy setup data
import TextSection from "~/components/TextSection.vue";

const setup = Array.from({ length: 3 }, (_, i) => ({
  title: `Macbook Pro 16 M1`,
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique quis tempor at, aliquam nec ip`
}))

const devTools = Array.from({ length: 3 }, (_, i) => ({
  title: `Sublime Text 4`,
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique quis tempor at, aliquam nec ip`
}))

const designTools = Array.from({ length: 3 }, (_, i) => ({
  title: `Affinity designer`,
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique quis tempor at, aliquam nec ip`
}))

const photography = Array.from({ length: 3 }, (_, i) => ({
  title: `Canon R6 m2`,
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique quis tempor at, aliquam nec ip`
}))

const allSections = [
    {
      title: "My Setup",
      content: setup
    },
    {
      title: "Dev Tools",
      content: devTools
    },
    {
      title: "Design Tools",
      content: designTools
    },
    {
      title: "Photography",
      content: photography
    }
]
</script>
