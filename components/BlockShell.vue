<template>
  <div class="p-5 border rounded-xl dark:border-white dark:border-opacity-0 bg-zinc-50 dark:bg-evening-sea-900 dark:bg-opacity-40">

    <!-- Top row -->
    <div class="flex flex-row items-center justify-start">

      <!-- Slot for the icon -->
      <div class="mr-2">
        <slot name="icon">
        </slot>
      </div>

      <!-- Slot for the title -->
      <div>
        <h3 class="text-lg text-evening-sea-900 dark:text-zinc-50 font-bold tracking-tight">
          <slot name="title">

          </slot>
        </h3>
      </div>
    </div>

    <!-- Slot for the content -->
    <div class="mt-5">
      <slot name="content">
      </slot>
    </div>
  </div>
</template>
