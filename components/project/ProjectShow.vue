
<template>
  <div class="">
    <div v-if="!project.coming_soon" class="mx-auto px-4 pb-16 sm:px-6  lg:max-w-7xl lg:px-8">
      <!-- Breadcrumb -->
      <ProjectBreadcrumb  class="my-5" />
      <!-- Product -->
      <div class="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
        <!-- Product image -->
        <div class="lg:col-span-4 lg:row-end-1">

          <TabGroup as="div" class="flex flex-col-reverse">
            <!-- Image selector -->
            <div class="mx-auto mt-6 w-full max-w-2xl lg:max-w-none">
              <TabList class="grid grid-cols-3 sm:grid-cols-4 gap-6">
                <Tab v-for="image in images" :key="image.id" class="relative flex h-16 xs:h-20 sm:h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4" v-slot="{ selected }">
                  <span class="sr-only">{{ image.name }}</span>
                  <span class="absolute inset-0 overflow-hidden rounded-md">
                  <img :src="image.src" alt="" class="h-full w-full object-cover object-center" />
                </span>
                  <span :class="[selected ? 'ring-lunar-500' : 'ring-transparent', 'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2']" aria-hidden="true" />
                </Tab>
              </TabList>
            </div>

            <TabPanels class="w-full max-w-2xl lg:max-w-none mx-auto rounded-lg overflow-hidden bg-white dark:bg-opacity-10 h-[250px] xs:h-[375px] sm:h-[500px]"> <!-- Adjust 'height' as needed -->
              <TabPanel v-for="image in images" :key="image.id" class="h-full w-full flex items-center justify-center">
                <!-- The image will scale within these bounds -->
                <img :src="image.src" :alt="image.alt" class="max-h-full max-w-full object-contain " />
              </TabPanel>
            </TabPanels>
          </TabGroup>

        </div>

        <!-- Product details -->
        <div class="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
          <div class="flex flex-col-reverse">
            <div class="">
              <h1 class="text-2xl font-bold tracking-tight sm:text-3xl text-zinc-900 dark:text-zinc-200">{{ project.title }}</h1>

              <h2 id="information-heading" class="sr-only">Date created</h2>
              <p class="mt-2 text-sm text-zinc-500 dark:text-zinc-300 dark:opacity-60">
                {{ project.date_created }}
              </p>
            </div>

          </div>

          <p class="mt-6 text-zinc-500 dark:text-zinc-200 dark:opacity-70">{{ project.medium_description }}</p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
            <button type="button" class="flex w-full items-center justify-center rounded-md border border-transparent bg-evening-sea-600 px-8 py-3 text-base font-medium text-white hover:bg-evening-sea-700 focus:outline-none focus:ring-2 focus:ring-evening-sea-700 focus:ring-offset-2 focus:ring-offset-gray-50">
              Website
            </button>
            <button type="button" class="flex w-full items-center justify-center rounded-md border border-transparent bg-lunar-200 px-8 py-3 text-base font-medium text-lunar-800 hover:bg-lunar-300 focus:outline-none focus:ring-2 focus:ring-lunar-500 focus:ring-offset-2 focus:ring-offset-gray-50">
              Github
            </button>
          </div>

          <div class="mt-10 border-t border-zinc-200 dark:border-evening-sea-500 dark:border-opacity-30 pt-10">
            <h3 class="text-sm font-medium text-zinc-900 dark:text-lunar-200">Highlights</h3>
            <div class="prose prose-sm mt-4 text-zinc-500 dark:text-zinc-200 dark:opacity-60">
              <ul role="list">
                <li v-for="highlight in project.highlights" :key="highlight">{{ highlight }}</li>
              </ul>
            </div>
          </div>

          <div class="mt-10 border-t border-zinc-200 dark:border-evening-sea-500 dark:border-opacity-30 pt-10">
            <h3 class="text-sm font-medium text-zinc-900 dark:text-lunar-200">Tech stack</h3>
            <div class="my-10 grid grid-cols-4 gap-5">
              <div v-for="skill in stack" class="mx-auto flex flex-col items-center space-y-3">
                <div :class="'w-10 h-10 xs:w-14 xs:h-14 flex flex-col justify-center transition-opacity duration-200 ease-in-out'"
                >
                  <!-- Regular icon with conditional classes -->
                  <img
                      :src="skill.icon"
                      :alt="'Icon for '+skill.name"
                      :class="skill.icon_dark_mode ? 'dark:hidden' : ''"
                  />
                  <!-- Dark icon (only if provided) -->
                  <img
                      v-if="skill.icon_dark_mode"
                      :src="skill.icon_dark_mode"
                      :alt="'Dark icon for '+skill.name"
                      class="hidden dark:inline-block"
                  />
                </div>
                <p class="text-sm text-lunar-800 dark:text-lunar-100">
                  {{ skill.name }}
                </p>
              </div>
            </div>
          </div>

        </div>

        <div class="mx-auto mt-16 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
          <TabGroup as="div">
            <div class="border-b border-gray-200 dark:border-zinc-200 dark:border-opacity-10">
              <TabList class="-mb-px flex space-x-8">
                <Tab as="template" v-slot="{ selected }">
                  <button :class="[selected ? 'border-mulberry-600 text-mulberry-600 dark:border-mulberry-300 dark:text-mulberry-300' : 'border-transparent text-zinc-700 hover:border-zinc-300 hover:text-zinc-800 dark:text-zinc-200 dark:hover:border-zinc-300 dark:hover:border-opacity-40', 'whitespace-nowrap border-b-2 py-6 text-sm font-medium']">Overview</button>
                </Tab>
                <Tab as="template" v-slot="{ selected }">
                  <button :class="[selected ? 'border-mulberry-600 text-mulberry-600 dark:border-mulberry-300 dark:text-mulberry-300' : 'border-transparent text-zinc-700 hover:border-zinc-300 hover:text-zinc-800 dark:text-zinc-200 dark:hover:border-zinc-300 dark:hover:border-opacity-40', 'whitespace-nowrap border-b-2 py-6 text-sm font-medium']">FAQ</button>
                </Tab>
                <Tab as="template" v-slot="{ selected }">
                  <button :class="[selected ? 'border-mulberry-600 text-mulberry-600 dark:border-mulberry-300 dark:text-mulberry-300' : 'border-transparent text-zinc-700 hover:border-zinc-300 hover:text-zinc-800 dark:text-zinc-200 dark:hover:border-zinc-300 dark:hover:border-opacity-40', 'whitespace-nowrap border-b-2 py-6 text-sm font-medium']">License</button>
                </Tab>
              </TabList>
            </div>
            <TabPanels as="template">
              <TabPanel class="pt-10">
                <h3 class="sr-only">Overview</h3>

                <div class="prose prose-sm max-w-none text-gray-500 dark:prose-invert" v-html="license.content" />
              </TabPanel>

              <TabPanel class="text-sm text-gray-500">
                <h3 class="sr-only">Frequently Asked Questions</h3>

                <dl>
                  <template v-for="faq in faqs" :key="faq.question">
                    <dt class="mt-10 font-medium text-gray-900">{{ faq.question }}</dt>
                    <dd class="prose prose-sm mt-2 max-w-none text-gray-500">
                      <p>{{ faq.answer }}</p>
                    </dd>
                  </template>
                </dl>
              </TabPanel>

              <TabPanel class="pt-10">
                <h3 class="sr-only">License</h3>

                <div class="prose prose-sm max-w-none text-gray-500" v-html="license.content" />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </div>
    <div v-else>
      <main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div class="text-center">
          <h1 class="mt-4 text-3xl font-bold tracking-tight text-evening-sea-900 dark:text-evening-sea-200 sm:text-5xl">Coming soon</h1>
          <p class="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-300">
            This project is still in development. Check back later for updates.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <NuxtLink to="/projects" class="rounded-md bg-lunar-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lunar-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lunar-800">Other projects</NuxtLink>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { StarIcon } from '@heroicons/vue/20/solid'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/vue'
import {Skill} from "~/types/Skill.js";
import {Project} from "~/types/Project.js";

// const props = defineProps({
//   product: {
//     type: Object,
//     required: true,
//   }
// })

const project: Project = {
  title: 'The Wavy Game',
  coming_soon: false,
  date_created: 'September 2023',
  medium_description: 'A fun drinking game to play with the family, or your friends at a party. A website that allows you to play the game online, or download the app to play on your phone.',
  price: '$220',
  description:
      'The Application UI Icon Pack comes with over 200 icons in 3 styles: outline, filled, and branded. This playful icon pack is tailored for complex application user interfaces with a friendly and legible look.',
  highlights: [
    '200+ SVG icons in 3 unique styles',
    'Compatible with Figma, Sketch, and Adobe XD',
    'Drawn on 24 x 24 pixel grid',
  ],
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-05-product-01.jpg',
  imageAlt: 'Sample of 30 icons with friendly and fun details in outline, filled, and brand color styles.',
}
const reviews = {
  average: 4,
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
      `,
      date: 'July 16, 2021',
      datetime: '2021-07-16',
      author: 'Emily Selman',
      avatarSrc:
          'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    {
      id: 2,
      rating: 5,
      content: `
        <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
      `,
      date: 'July 12, 2021',
      datetime: '2021-07-12',
      author: 'Hector Gibbons',
      avatarSrc:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    // More reviews...
  ],
}
const faqs = [
  {
    question: 'What format are these icons?',
    answer:
        'The icons are in SVG (Scalable Vector Graphic) format. They can be imported into your design tool of choice and used directly in code.',
  },
  {
    question: 'Can I use the icons at different sizes?',
    answer:
        "Yes. The icons are drawn on a 24 x 24 pixel grid, but the icons can be scaled to different sizes as needed. We don't recommend going smaller than 20 x 20 or larger than 64 x 64 to retain legibility and visual balance.",
  },
  // More FAQs...
]
const license = {
  href: '#',
  summary:
      'For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.',
  content: `
    <h4>Overview</h4>

    <p>For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.</p>

    <ul role="list">
    <li>You\'re allowed to use the icons in unlimited projects.</li>
    <li>Attribution is not required to use the icons.</li>
    </ul>

    <h4>What you can do with it</h4>

    <ul role="list">
    <li>Use them freely in your personal and professional work.</li>
    <li>Make them your own. Change the colors to suit your project or brand.</li>
    </ul>

    <h4>What you can\'t do with it</h4>

    <ul role="list">
    <li>Don\'t be greedy. Selling or distributing these icons in their original or modified state is prohibited.</li>
    <li>Don\'t be evil. These icons cannot be used on websites or applications that promote illegal or immoral beliefs or activities.</li>
    </ul>
  `,
}

const stack: Skill[] = [
  {
    id: 14,
    name: "Laravel",
    icon: "https://cdn.worldvectorlogo.com/logos/laravel-3.svg",
    iconDark: "/laravel-white.svg"
  },

  {
    id: 8,
    name: "Vue.js",
    icon: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
  },

  {
    id: 12,
    name: "Tailwind CSS",
    icon: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
  },
]

const images = [
  {
    id: 1,
    name: 'Angled view',
    src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
    alt: 'Angled front view with bag zipped and handles upright.',
  },
  {
    id: 2,
    name: 'Angled view',
    src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
    alt: 'Angled front view with bag zipped and handles upright.',
  },
]

</script>