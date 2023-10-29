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

      <!-- Links for desktop  flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 -->
      <div class="w-1/2 flex flex-row justify-center">
        <div
          class="hidden md:flex space-x-4 rounded-full bg-[#FFFFFF] dark:bg-opacity-5 px-5 shadow-sm border dark:border-[#FFFFFF] dark:border-opacity-0"
        >
          <NuxtLink
            v-for="item in navigation"
            :key="item.id"
            :to="item.href"
            class="text-zinc-600 hover:text-evening-sea-600 dark:text-zinc-200 dark:hover:text-evening-sea-400 px-3 py-2 transition"
            >{{ item.name }}</NuxtLink
          >
        </div>
      </div>

      <!-- Button -->
      <div class="w-1/4 flex flex-row justify-end">
        <div class="mr-5 md:mr-0">
          <ButtonsDarkToggle />
        </div>
        <div class="md:hidden">
          <AppMobileMenu />
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div
      id="mobile-menu"
      class="md:hidden bg-gray-700 text-white p-4 space-y-2 hidden"
    >
      <a href="#" class="block">Home</a>
      <a href="#" class="block">About</a>
      <a href="#" class="block">Services</a>
      <a href="#" class="block">Contact</a>
      <button class="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-md">
        Button
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import AppMobileMenu from "~/components/AppMobileMenu.vue";
const route = useRoute();

const navigation = [
  { id: 1, name: "Home", href: "/", current: route.name === "index" },
  {
    id: 2,
    name: "Projects",
    href: "/projects",
    current: route.name === "projects",
  },
  { id: 3, name: "About", href: "/about", current: route.name === "about" },
];
</script>
