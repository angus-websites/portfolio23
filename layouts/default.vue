<template>
  <!-- Angus was here 2023 -->
  <div class="bg-[#DDE2E6] dark:bg-evening-sea-bg-2 font-sans">
    <div
      class="body max-w-7xl mx-auto bg-[#EAEEF1] dark:bg-evening-sea-bg text-[#161616] dark:text-[#D3D3D3]"
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


useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/icons/favicon-16x16.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/icons/favicon-32x32.png' },
    { rel: 'apple-touch-icon', sizes: "180x180",  href: '/assets/icons/apple-touch-icon.png'},
    { rel: 'mask-icon', href: '/assets/icons/safari-pinned-tab.svg', color: '#5bbad5' },
    { rel: 'manifest', href: '/assets/icons/site.webmanifest' },
  ]
})
</script>


