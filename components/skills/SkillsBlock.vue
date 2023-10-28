<template>
  <div class="grid grid-cols-1 gap-y-10">
    <div v-for="category in skillCategories" :key="category.id">

      <div class="relative mb-10">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="w-full border-t border-gray-300 dark:border-evening-sea-700 dark:border-opacity-20" />
        </div>
        <div class="relative flex justify-center">
          <h3 class="bg-[#EAEEF1] dark:bg-evening-sea-bg px-2 text-sm text-gray-500 dark:text-evening-sea-100">{{  category.name  }}</h3>
        </div>
      </div>

      <ul class="grid grid-cols-3 sm:grid-cols-4 gap-4">
        <li v-for="skill in category.skills">
          <SkillCard
              :key="skill.id"
              :skill="skill" />
        </li>
      </ul>
  </div>
  </div>
</template>
<script setup lang="ts">
import { SkillCategory } from "~/types/SkillCategory";
import SkillCard from "~/components/skills/SkillCard.vue";


// Generate a list of my skills in different categories based on the interface
const skillCategories: SkillCategory[] = [
  {
    id: 1,
    name: "Languages",
    skills: [
      {
        id: 1,
        name: "JavaScript",
        icon: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
      },
      {
        id: 3,
        name: "HTML",
        icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
      },
      {
        id: 4,
        name: "CSS",
        icon: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
      },
      {
        id: 5,
        name: "PHP",
        icon: "https://cdn.worldvectorlogo.com/logos/php-1.svg",
      },
      {
        id: 6,
        name: "Python",
        icon: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
      },
    ],
  },
  {
    id: 2,
    name: "Frameworks",
    skills: [
      {
        id: 8,
        name: "Vue.js",
        icon: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
      },
      {
        id: 9,
        name: "Nuxt.js",
        icon: "https://cdn.worldvectorlogo.com/logos/nuxt-2.svg",
      },
      {
        id: 10,
        name: "React",
        icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
      },
      {
        id: 12,
        name: "Tailwind CSS",
        icon: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
      },
      {
        id: 14,
        name: "Laravel",
        icon: "https://cdn.worldvectorlogo.com/logos/laravel-3.svg",
        iconDark: "/laravel-white.svg"
      },
      {
        id: 15,
        name: "Django",
        icon: "https://static-00.iconduck.com/assets.00/djangoproject-icon-512x512-qguhk178.png",
      },
    ],
  },
]

</script>