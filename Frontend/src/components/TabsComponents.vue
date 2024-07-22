<template>
  <div class="md:flex">
    <ul class="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
      <li v-for="(tab, index) in tabs" :key="index">
        <a
          :class="[
            'inline-flex items-center px-4 py-3 rounded-lg w-full',
            tab.active ? 'text-white bg-blue-700 dark:bg-blue-600' : 'hover:text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white'
          ]"
          :aria-current="tab.active ? 'page' : undefined"
          @click="() => setActiveTab(index)"
        >
          {{ tab.label }}
        </a>
      </li>
    </ul>
    <div class="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full flex flex-col">
      <ListsComponents :users="paginatedUsers" />
      <div v-if="shouldShowPagination" class="mt-auto">
        <!-- Pagination -->
        <nav class="flex items-center gap-x-1 sticky bottom-0 bg-gray-50 dark:bg-gray-800 py-2">
          <button type="button" class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                  @click="prevPage" :disabled="currentPage === 1">
            <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m15 18-6-6 6-6"></path>
            </svg>
            <span aria-hidden="true" class="sr-only">Previous</span>
          </button>
          <div class="flex items-center gap-x-1">
            <button v-for="page in totalPages" :key="page" type="button" class="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:focus:bg-white/10"
                    :class="{ 'bg-gray-100': page === currentPage }"
                    @click="goToPage(page)">
              {{ page }}
            </button>
          </div>
          <button type="button" class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                  @click="nextPage" :disabled="currentPage === totalPages">
            <span aria-hidden="true" class="sr-only">Next</span>
            <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </nav>
        <!-- End Pagination -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { defineProps } from 'vue';
import ListsComponents from './ListsComponents.vue'; // 请确保正确的路径

const props = defineProps({
  tabs: {
    type: Array,
    required: true,
  },
});

const activeTabIndex = ref(0);
const currentPage = ref(1);
const itemsPerPage = 4;

const activeTabContent = computed(() => props.tabs[activeTabIndex.value].content);

const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return activeTabContent.value.users.slice(start, end);
});

const totalPages = computed(() => Math.ceil(activeTabContent.value.users.length / itemsPerPage));

const shouldShowPagination = computed(() => totalPages.value > 1 || activeTabContent.value.users.length > itemsPerPage);

function setActiveTab(index) {
  activeTabIndex.value = index;
  currentPage.value = 1; // Reset to first page on tab change
  props.tabs.forEach((tab, idx) => {
    tab.active = idx === index;
  });
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
}

function goToPage(page) {
  currentPage.value = page;
}
</script>

<style scoped>
</style>
