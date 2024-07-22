<template>
  <section
    class="bg-center bg-no-repeat bg-blend-multiply"
    :style="backgroundImageStyle"
  >
    <div class="px-4 mx-auto text-center py-24 lg:py-56">
      <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl drop-shadow-lg">
        {{ title }}
      </h1>
      <p class="mb-4 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48 drop-shadow-xl">
        {{ description }}
      </p>
      <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48 drop-shadow-xl">
        {{ vicedescription }}
      </p>
      <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        <ButtonComponents
          :text="primaryButtonText"
          :link="primaryButtonLink"
          :beforeImageSrc="beforeImageSrc"
          bgColor="bg-blue-700"
          textColor="text-white"
          hoverBgColor="hover:bg-blue-800"
          hoverTextColor="hover:text-gray-50"
        />
        <a
          :href="secondaryButtonLink"
          class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
        >
          {{ secondaryButtonText }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import ButtonComponents from 'components/ButtonComponents.vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  vicedescription:{
    type: String,
    required: true,
  },
  primaryButtonText: {
    type: String,
    required: true,
  },
  primaryButtonLink: {
    type: String,
    required: true,
  },
  secondaryButtonText: {
    type: String,
    required: true,
  },
  secondaryButtonLink: {
    type: String,
    required: true,
  },
  backgroundImageUrl: {
    type: String,
    required: true,
  },
  beforeImageSrc: {
    type: String,
    required: false,
    default: '/src/assets/MSS.png'
  },
});

const backgroundImageStyle = computed(() => ({
  backgroundImage: `url(${props.backgroundImageUrl})`,
  backgroundSize: 'auto',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
}));
</script>

<style scoped>
.bg-[url] {
  background-size: cover;
}
</style>
