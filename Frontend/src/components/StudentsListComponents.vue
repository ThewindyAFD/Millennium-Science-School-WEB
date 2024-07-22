<template>
  <div class="md:flex">
    <!-- Left Navigation (Student List) -->
    <ul class="flex-column space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
      <li v-for="user in users" :key="user.name" @click="selectUser(user)">
        <a class="inline-flex items-center px-8 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
          <img class="w-6 h-6 rounded-full me-2" :src="user.image" :alt="user.name + ' image'">
          {{ user.name }}
        </a>
      </li>
    </ul>
    <!-- Right Content (Selected Student Details) -->
    <div class="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
      <div v-if="selectedUser">
        <img class="square-image mb-4" :src="selectedUser.image" :alt="selectedUser.name + ' image'">
        <p class="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400">{{ selectedUser.description }}</p>
        <blockquote class="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
          <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">"{{ selectedUser.quote || '貌似并没有说什么呢' }}"</p>
        </blockquote>
        <p class="text-gray-500 dark:text-gray-400">{{ selectedUser.detail }}</p>
      </div>
      <div v-else class="text-center flex flex-col justify-center items-center h-full">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          学院<mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">社团</mark>
        </h1>
        <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Scientia, intelléctĭo, et futúrum
        </p>
        <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          知识,理解及未来
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import FullImgCardComponents from "components/FullImgCardComponents.vue";
import Hod from "assets/M.png";

const props = defineProps({
  users: {
    type: Array,
    required: true,
    validator(value) {
      return value.every(user => 'position' in user && 'name' in user && 'schoolclub' in user && 'image' in user && 'description' in user && 'detail' in user && 'quote' in user)
    }
  }
});

const selectedUser = ref(null);

const selectUser = (user) => {
  selectedUser.value = user;
}
</script>

<style scoped>
.profile-image {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  object-fit: cover;
}

.square-image {
  width: 6rem;
  height: 6rem;
  border-radius: 0.5rem; /* Small border radius to make the corners slightly rounded */
  object-fit: cover;
}

.me-2 {
  margin-right: 0.5rem;
}

.mb-3 {
  margin-bottom: 0.75rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mb-4 {
  margin-bottom: 1rem;
}
</style>
