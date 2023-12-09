<template>
  <main class="grid min-h-full place-items-center body bg-[#DDE2E6] dark:bg-evening-sea-bg-2 px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <p class="text-base font-semibold text-mulberry-600 dark:text-mulberry-300">{{selected_error['code']}}</p>
      <h1 class="mt-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-evening-sea-300 sm:text-5xl">{{selected_error['message']}}</h1>
      <p class="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-300">{{selected_error['description']}}</p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <a href="/" class="px-6 py-3.5 text-base font-medium text-white bg-evening-sea-700 hover:bg-evening-sea-800 focus:ring-4 focus:outline-none focus:ring-evening-sea-600 rounded-lg text-center dark:text-evening-sea-900 dark:bg-evening-sea-400 dark:hover:bg-evening-sea-500 dark:focus:ring-evening-sea-300">
          Home
        </a>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const props = defineProps({
  error: Object
})

useHead({
  bodyAttrs: {
    class: 'h-full',
  },
  htmlAttrs: {
    class: 'h-full',
  },
});

const error_codes = [
  {
    'code': 404,
    'message': 'Page not found',
    'description': 'Sorry, we couldn’t find the page you’re looking for.',
    'should_redirect': true,
  },
  {
    'code': 403,
    'message': 'Forbidden',
    'description': 'Sorry, you are not authorized to access this page.',
    'should_redirect': true,
  },
  {
    'code': 500,
    'message': 'A problem occurred',
    'description': 'Something went wrong. Please try again later.',
    'should_redirect': true,
  },
]

// Set default error to 500
let default_error = 500;

// Find the error code in the array based on the error code passed in, if not found, use the default error
let selected_error = error_codes.find(error => error.code === props.error.statusCode) || error_codes.find(error => error.code === default_error);

</script>
<style>
  #__nuxt {
    height: 100%;
  }
</style>