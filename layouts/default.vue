<template>
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
