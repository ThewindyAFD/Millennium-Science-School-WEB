<template>
  <div class="content-wrapper p-6 rounded-lg mt-3">
    <div>
      <div class="w-full mb-5">
        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-sky-300 from-blue-400">{{ title }}</span>
        </h1>
        <p class="text-gray-500 dark:text-gray-400">{{ history }}</p>
        <blockquote class="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
          <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">{{ quote }}</p>
        </blockquote>
        <div>
          <students-list-components :users="users"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import StudentsListComponents from "components/StudentsListComponents.vue";

// Define props for the seminar details
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  history: {
    type: String,
    required: true
  },
  quote: {
    type: String,
    required: true
  },
  users: {
    type: Array,
    required: true,
    validator(value) {
      return value.every(user => 'name' in user && 'image' in user && 'quote' in user && 'description' in user && 'detail' in user)
    }
  }
});
</script>

<style scoped>
.content-wrapper {
  width: 66.6667%; /* 2/3 of the current width */
}

@media (min-width: 770px) {
  .content-wrapper {
    background-color: rgba(255, 255, 255, 0.7); /* Add a semi-transparent background for resolutions 768px and above */
    border-bottom: none; /* Hide border-bottom for resolutions 768px and above */
    border: #c9c9c9 1px solid;
  }
}

@media (min-width: 1024px) {
  .content-wrapper {
    width: 66.6667%; /* Adjust for larger screens if needed */
  }
}

@media (max-width: 1023px) {
  .content-wrapper {
    width: 90%; /* Adjust for smaller screens if needed */
  }
}

@media (max-width: 768px) {
  .content-wrapper {
    width: 100%; /* Make content-wrapper full width for resolutions below 768px */
    padding-left: 1rem; /* Optional: Add some padding to the sides */
    padding-right: 1rem; /* Optional: Add some padding to the sides */
  }

  .flex {
    padding-left: 0; /* Reset padding */
    padding-right: 0; /* Reset padding */
  }
}
</style>
