<template>
    <div class="bg-[#FAFAFA] dark:bg-[#161616]">
      <div class="body container mx-auto bg-[#FFFFFF] dark:bg-[#232323] text-[#161616] dark:text-[#D3D3D3]  ">
        <AppHeader />
    
        <!-- Main Content -->
        <main class="content">
          <slot />
        </main>
    
        <AppFooter/>
      </div>
    </div>
</template>
  

  