<template>
  <section class="from-indigo-500 dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
      <div class="flex flex-col justify-center">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-gray-600">
          {{ title }}
        </h1>
        <p class="mb-8 text-lg font-normal text-gray-600 lg:text-xl ">
          {{ description }}
        </p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 drop-shadow-md">
          <ButtonComponents
            :text="primaryButtonText"
            :link="primaryButtonLink"
            beforeImageSrc="/src/assets/LOGOAC.png"
            class="py-3 px-5 text-base font-medium text-center"
          />
          <a
            :href="secondaryButtonLink"
            class="flex items-center justify-center py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            {{ secondaryButtonText }}
          </a>
        </div>
      </div>
      <div class="video-container">
        <iframe
          class="video-iframe rounded-lg"
          :src="videoLink"
          title="Video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
import ButtonComponents from "components/ButtonComponents.vue";

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  primaryButtonText: {
    type: String,
    required: true
  },
  primaryButtonLink: {
    type: String,
    required: true
  },
  secondaryButtonText: {
    type: String,
    required: true
  },
  secondaryButtonLink: {
    type: String,
    required: true
  },
  videoLink: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
</style>
