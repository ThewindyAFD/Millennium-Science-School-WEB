<template>
  <ul class="divide-y divide-gray-200 dark:divide-gray-700">
    <li v-for="user in users" :key="user.email" class="py-3 sm:py-4">
      <div class="flex items-center space-x-4 rtl:space-x-reverse">
        <div class="flex-shrink-0">
          <img class="w-8 h-8 rounded-full" :src="user.imgSrc" :alt="`${user.title} image`">
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
            {{ user.title }}
          </p>
          <p class="text-sm text-gray-500 truncate dark:text-gray-400">
            {{ user.username }}
          </p>
        </div>
        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          {{ user.publishtime }}
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  users: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>

<style scoped>
img {
  width: 2rem; /* Set the desired width */
  height: 2rem; /* Set the desired height */
  object-fit: cover; /* Ensures the image covers the element while maintaining its aspect ratio */
}
</style>
