<template>
  <div
    className="relative rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
    <img className="w-full h-auto rounded-xl" :src="imageSrc" :alt="imageAlt"/>
    <div className="absolute top-0 start-0 end-0">
      <div className="p-4 md:p-5">
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800">
          {{ title }}
        </h3>
        <p className="mt-1 text-sm md:text-base lg:text-lg text-gray-800">
          {{ content }}
        </p>
        <p className="mt-5 text-xs md:text-sm lg:text-base text-gray-500 dark:text-neutral-500">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from 'vue'

const props = defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
})
</script>

<style scoped>
@media (max-width: 640px) {
  h3 {
    font-size: 4vw; /* 字体大小相对于视口宽度 */
  }

  p {
    font-size: 3vw; /* 字体大小相对于视口宽度 */
  }
}

@media (max-width: 364px) {
  h3 {
    margin-top: -5px;
  }
}

@media (max-width: 320px) {
  h3 {
    margin-top: -15px;
  }
}
</style>
