<template>
    <PageContainer>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <TitleAndSubitle :title="page.title" :subtitle="page.sub_title" />
        </div>
      </div>
    </PageContainer>
</template>

<script lang="ts" setup>
import TitleAndSubitle from "~/components/TitleAndSubitle.vue";

const { $directus, $readItems } = useNuxtApp()

interface PageData {
  title: number;
  sub_title: string;  
}

const { data: page } = await useAsyncData<{ data: PageData}>('getPageDetails', () => {
  return $directus.request(
    $readItems('global', {
      fields: ['title', 'sub_title']
    })
  )
});

</script>