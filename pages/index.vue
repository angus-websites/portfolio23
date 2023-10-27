<template>
  <PageContainer>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <TitleAndSubtitle
          title="Welcome to the portfolio"
          subtitle="A subtitle goes here"
        />
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-10 mt-20">
      <EmploymentBlock />
      <EducationBlock />
    </div>
  </PageContainer>
</template>
<script setup lang="ts">
</script>