<template>
  <div class="relative w-full max-w-sm px-4">
    <Popover v-slot="{ open }" class="relative">
      <PopoverButton
          data-collapse-toggle="navbar-cta"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-mulberry-200/40 hover:text-mulberry-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-cta"
          aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
        >
          <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </PopoverButton>
      <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="translate-y-1 opacity-0"
          enter-to-class="translate-y-0 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="translate-y-0 opacity-100"
          leave-to-class="translate-y-1 opacity-0">
        <PopoverOverlay class="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />

      </transition>

      <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="translate-y-1 opacity-0"
          enter-to-class="translate-y-0 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="translate-y-0 opacity-100"
          leave-to-class="translate-y-1 opacity-0"
      >
        <PopoverPanel
            v-slot="{ close }"
            class="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-5 ring-1 ring-zinc-900/5 dark:bg-evening-sea-bg-2 dark:ring-evening-sea-900/50"
        >

          <div class="flex flex-row-reverse items-center justify-between">
            <PopoverButton
                aria-label="Close menu"
                type="button"
                class="inline-flex items-center  p-1 w-10 h-10 justify-center text-sm rounded-lg md:hidden bg-mulberry-200/40 dark:bg-mulberry-500/50 hover:bg-mulberry-200/80 dark:hover:bg-mulberry-800/80 text-mulberry-700 dark:text-mulberry-200 focus:outline-none focus:ring-2 focus:ring-mulberry-800/40 dark:focus:ring-mulberry-300/60   "
                aria-controls="navbar-cta"
                aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </PopoverButton>

          </div>
          <div class="py-4">
            <div v-for="item in navItems" :key="item.id" class="group my-2 relative flex items-center gap-x-6 rounded-lg p-4 bg-lunar-50  hover:bg-lunar-100/60 dark:hover:bg-evening-sea-100/10 focus:ring-mulberry-800/40">
              <div class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-inherit group-hover:bg-white dark:group-hover:bg-lunar-400 dark:bg-evening-sea-200/30">
                <component :is="item.icon" class="h-6 w-6 text-evening-sea-800 group-hover:text-evening-sea-600 dark:group-hover:text-lunar-800 dark:text-evening-sea-200/70" aria-hidden="true" />
              </div>
              <div>
                <a :href="item.href" class="font-semibold text-zinc-700 group-hover:text-lunar-900 dark:text-lunar-200 dark:group-hover:text-lunar-50">
                  {{ item.name }}
                  <span class="absolute inset-0" />
                </a>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel, PopoverOverlay } from '@headlessui/vue'
import NuxtLink from "#app/components/nuxt-link.js";
import {PhoneIcon, PlayCircleIcon} from "@heroicons/vue/20/solid";
defineProps({
  navItems: {
    type: Array,
    required: true,
  },
})

const callsToAction = [


  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]
</script>
