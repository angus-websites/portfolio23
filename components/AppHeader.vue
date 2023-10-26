<template>
    <div class="text-white">
        <nav class="mx-auto px-5 md:px-10 lg:px-20 py-4 flex items-center">
            <!-- Logo -->
            <div class="w-1/4 flex flex-row justify-start">
                <div>
                    <LogosLogo class="h-8 dark:hidden" />
                    <LogosLogoDarkMode class="h-8 hidden dark:block" />
                </div>
            </div>

            <!-- Links for desktop  flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 -->
            <div class="w-1/2 flex flex-row justify-center">
                <div class="hidden md:flex space-x-4 rounded-full bg-[#FFFFFF] dark:bg-opacity-5 px-5 shadow-sm border dark:border-[#FFFFFF] dark:border-opacity-0">
                    <NuxtLink v-for="item in navigation" :to="item.href" class="text-zinc-600 hover:text-evening-sea-600 dark:text-zinc-200 dark:hover:text-evening-sea-400 px-3 py-2 transition">{{ item.name }}</NuxtLink>
                </div>
            </div>

            <!-- Button -->
            <div class="w-1/4 flex flex-row justify-end">
                <div class="mr-5 md:mr-0">
                  <ButtonsDarkToggle />
                </div>
                <div class="md:hidden">
                  <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                  </button>
                </div>


            </div>
            
        </nav>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="md:hidden bg-gray-700 text-white p-4 space-y-2 hidden">
            <a href="#" class="block">Home</a>
            <a href="#" class="block">About</a>
            <a href="#" class="block">Services</a>
            <a href="#" class="block">Contact</a>
            <button class="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-md">Button</button>
        </div>
    </div>
</template>
<script setup lang="ts">
const route = useRoute()

let navigation = [
  { name: "Home", href: "/", current: route.name == "index" },
  { name: "Projects", href: "/projects", current: route.name == "projects" },
  { name: "About", href: "/about", current: route.name == "about" },
  
]
</script>