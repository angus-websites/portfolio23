<template>
  <section
      aria-labelledby={id}
      class="md:border-l md:border-zinc-400/30 md:pl-6 md:dark:border-lunar-500/20"
  >
    <div class="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
      <h2
          class="text-lg font-semibold text-lunar-700 dark:text-buffy-100"
      >
        <slot name="title"></slot>
      </h2>
      <div class="md:col-span-3">
        <slot name="content"></slot>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
</script>