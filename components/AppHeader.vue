<template>
  <div class="text-white">
    <nav class="mx-auto px-5 md:px-10 lg:px-20 py-8 flex items-center">
      <!-- Logo -->
      <div class="w-1/4 flex flex-row justify-start">
        <div>
          <LogosLogoLightMode class="h-8 dark:hidden" />
          <LogosLogoDarkMode class="h-8 hidden dark:block" />
        </div>
      </div>

      <!-- Links for desktop -->
      <div class="w-1/2 flex flex-row justify-center">
        <ul
          class="hidden md:flex space-x-4 rounded-full bg-[#FFFFFF] dark:bg-opacity-5 px-5 shadow-sm ring-1 ring-zinc-200/50 dark:ring-0"
        >
          <li v-for="item in navigation" class="m-2">
            <NuxtLink

                :key="item.id"
                :to="item.href"
                :class="[
                  item.current ? 'text-evening-sea-600 dark:text-blade-300' : 'text-zinc-600 dark:text-zinc-200 dark:hover:text-dracula-200 hover:text-lunar-600',
                  'px-3 py-2 transition'
                ]"

            >
              {{ item.name }}</NuxtLink
            >
          </li>
        </ul>
      </div>

      <!-- Button -->
      <div class="w-1/4 flex flex-row justify-end">
        <div class="mr-5 md:mr-0">
          <ButtonsDarkToggle />
        </div>
        <div class="md:hidden">
          <AppMobileMenu :nav-items="navigation" />
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup lang="ts">
import AppMobileMenu from "~/components/AppMobileMenu.vue";
const route = useRoute();
import { computed } from 'vue';

const navigation = computed(() => [
  {
    id: 1,
    name: "Home",
    href: "/",
    current: route.name === 'index',
  },
  {
    id: 2,
    name: "Projects",
    href: "/projects",
    current: route.name === 'projects',
  },
  {
    id: 3,
    name: "About",
    href: "/about",
    current: route.name === 'about',
  },
]);
</script>
