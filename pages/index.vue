<template>
    <PageContainer>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <TitleAndSubtitle :title="page.title" :subtitle="page.sub_title" />
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-4 mt-20">
        <EmploymentBlock />
      </div>
    </PageContainer>
</template>

<script lang="ts" setup>

const { $directus, $readItems } = useNuxtApp()

interface PageData {
  title: number;
  sub_title: string;  
}

// Ready the employments data
const { data: page } = await useAsyncData<{ data: PageData}>('getPageDetails', () => {
  return $directus.request(
    $readItems('global', {
      fields: ['title', 'sub_title']
    })
  )
});

</script>