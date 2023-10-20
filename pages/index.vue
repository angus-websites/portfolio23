<template>
    <PageContainer>
        <h1>{{page.title}}</h1>
        <p>{{page.sub_title}}</p>
    </PageContainer>
</template>

<script lang="ts" setup>
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