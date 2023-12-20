<template>
  <!-- Angus was here 2023 -->
  <div class="font-sans bg-paper-dark dark:bg-ninja-dark ">
    <div
      class="body max-w-7xl mx-auto dark:bg-ninja bg-paper text-[#172119] dark:text-[#D3D3D3]"
    >
      <AppHeader />

      <!-- Main Content -->
      <main class="content">
        <slot />
      </main>

      <AppFooter />
    </div>
  </div>
</template>
<script setup lang="ts">
import {useRuntimeConfig} from "nuxt/app";

const config = useRuntimeConfig();
const hostUrl = config.public.hostUrl;

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/icons/favicon-16x16.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/icons/favicon-32x32.png' },
    { rel: 'apple-touch-icon', href: '/assets/icons/apple-touch-icon.png'},
    { rel: 'apple-touch-icon', sizes:'57x57', href: '/assets/icons/apple-touch-icon-57x57.png'},
    { rel: 'apple-touch-icon', sizes:'72x72', href: '/assets/icons/apple-touch-icon-72x72.png'},
    { rel: 'apple-touch-icon', sizes:'76x76', href: '/assets/icons/apple-touch-icon-76x76.png'},
    { rel: 'apple-touch-icon', sizes:'114x114', href: '/assets/icons/apple-touch-icon-114x114.png'},
    { rel: 'apple-touch-icon', sizes:'120x120', href: '/assets/icons/apple-touch-icon-120x120.png'},
    { rel: 'apple-touch-icon', sizes:'144x144', href: '/assets/icons/apple-touch-icon-144x144.png'},
    { rel: 'apple-touch-icon', sizes:'152x152', href: '/assets/icons/apple-touch-icon-152x152.png'},
    { rel: 'apple-touch-icon', sizes:'180x180', href: '/assets/icons/apple-touch-icon-180x180.png'},
    { rel: 'mask-icon', href: '/assets/icons/safari-pinned-tab.svg', color: '#5bbad5' },
    { rel: 'manifest', href: '/assets/icons/site.webmanifest' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Angus Goody",
        "url": hostUrl
      }),
    }
  ],
})

useSeoMeta({
  ogImage: '/assets/images/og-image.png',
})
</script>


