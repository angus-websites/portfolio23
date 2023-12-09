<template>
  <!-- Angus was here 2023 -->
  <div class="bg-[#DDE2E6] dark:bg-evening-sea-bg-2 font-sans">
    <div
      class="body max-w-7xl mx-auto bg-[#EAEEF1] dark:bg-evening-sea-bg text-[#161616] dark:text-[#D3D3D3]"
    >
      <AppHeader />

      {{ apiBaseUrl }}

      <!-- Main Content -->
      <main class="content">
        <slot />
      </main>

      <AppFooter />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRuntimeConfig } from 'nuxt/app';

const config = useRuntimeConfig();
const apiBaseUrl = config.public.apiBaseUrl;

// TODO
useSeoMeta({
  title: '[title]',
  description: '[description]',
  ogTitle: '[og:title]',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
</script>


