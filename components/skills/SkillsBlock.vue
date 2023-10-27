<template>
  <div class="grid grid-cols-1 gap-y-10">
    <div v-for="category in skillCategories" :key="category.id">
    <div class="grid grid-cols-4 gap-4">
      <div
          v-for="skill in category.skills"
          :key="skill.id"
          class="flex flex-col items-center"
      >
        <div class="w-12 h-12">
          <Icon :name="skill.icon" />
        </div>
        <p class="text-sm text-lunar-800 dark:text-lunar-100">
          {{ skill.name }}
        </p>
      </div>
    </div>
  </div>
  </div>
</template>
<script setup lang="ts">
import { SkillCategory } from "~/types/SkillCategory";


// Generate a list of my skills in different categories based on the interface
const skillCategories: SkillCategory[] = [
  {
    id: 1,
    name: "Languages",
    skills: [
      {
        id: 1,
        name: "JavaScript",
        icon: "javascript",
      },
      {
        id: 2,
        name: "TypeScript",
        icon: "typescript",
      },
      {
        id: 3,
        name: "HTML",
        icon: "html",
      },
      {
        id: 4,
        name: "CSS",
        icon: "css",
      },
      {
        id: 5,
        name: "PHP",
        icon: "php",
      },
      {
        id: 6,
        name: "Python",
        icon: "python",
      },
      {
        id: 7,
        name: "SQL",
        icon: "sql",
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
        icon: "vue",
      },
      {
        id: 9,
        name: "Nuxt.js",
        icon: "nuxt",
      },
      {
        id: 10,
        name: "React",
        icon: "react",
      },
      {
        id: 11,
        name: "Next.js",
        icon: "next",
      },
      {
        id: 12,
        name: "Tailwind CSS",
        icon: "tailwind",
      },
      {
        id: 13,
        name: "Bootstrap",
        icon: "bootstrap",
      },
      {
        id: 14,
        name: "Laravel",
        icon: "laravel",
      },
      {
        id: 15,
        name: "Django",
        icon: "django",
      },
    ],
  },
]

</script>