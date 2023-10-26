<template>
    <PageContainer>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <TitleAndSubtitle title="Welcome to the portfolio" subtitle="A subtitle goes here" />
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-4 mt-20">
        <EmploymentBlock />
      </div>
    </PageContainer>
</template>

<script lang="ts" setup>

interface PageData {
  title: number;
  sub_title: string;  
}




</script>