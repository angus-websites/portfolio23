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
        <PopoverOverlay class="fixed inset-0 z-50 bg-zinc-800/50 backdrop-blur dark:bg-black/60" />

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
            class="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-5 dark:bg-nosferatu bg-opacity-90 dark:ring-aro"
        >

          <div class="flex flex-row-reverse gap-x-5 items-center justify-between">

            <PopoverButton
                aria-label="Close menu"
                type="button"
                class="inline-flex items-center p-1 w-10 h-10 justify-center text-sm rounded-lg md:hidden bg-mulberry-200 dark:bg-buffy-500/50 hover:bg-mulberry-300/80 dark:hover:bg-buffy-800/80 text-mulberry-800 dark:text-buffy-100 focus:outline-none focus:ring-2 focus:ring-mulberry-800/40 dark:focus:ring-buffy-100/50   "
                aria-controls="navbar-cta"
                aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </PopoverButton>

            <div class="">
              <p class="p-1 px-2 rounded w-full  h-10 text-lg leading-8 dark:text-blade-200 text-evening-sea-800">Navigation</p>
            </div>


          </div>
          <div class="py-4">
            <NuxtLink v-for="item in navItems"
                      @click="close"
                      :to="item.href"
                      :key="item.id"
                      :class="[
                        item.current ? 'bg-evening-sea-600 dark:bg-nosferatu-600 focus:ring-evening-sea-500/50 dark:focus:ring-dracula-100/40' : 'bg-lunar-200 dark:bg-nosferatu-800 dark:hover:bg-nosferatu-700  hover:bg-lunar-300/80 focus:ring-lunar-800/50 dark:focus:ring-dracula-200/40',
                        'group my-2 relative flex items-center gap-x-6 rounded-lg p-3  focus:outline-none focus:ring-2 '
                      ]">
              <div>
                <p
                   :class="[
                        item.current ? 'text-white' : 'text-zinc-700 dark:text-lunar-200  group-hover:text-lunar-900 dark:group-hover:text-lunar-100',
                        'font-semibold '
                      ]"
                >
                  {{ item.name }}
                  <span class="absolute inset-0" />
                </p>
              </div>
            </NuxtLink>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel, PopoverOverlay } from '@headlessui/vue'
import NuxtLink from "#app/components/nuxt-link.js";
defineProps({
  navItems: {
    type: Array,
    required: true,
  },
})

</script>
