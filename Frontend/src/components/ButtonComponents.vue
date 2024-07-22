<template>
  <a :href="link" :class="buttonClasses">
    {{ text }}
    <img :src="beforeImageSrc" class="image" />
  </a>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true,
    default: 'See more'
  },
  link: {
    type: String,
    required: true
  },
  beforeImageSrc: {
    type: String,
    required: true
  },
  bgColor: {
    type: String,
    default: 'bg-sky-800'
  },
  textColor: {
    type: String,
    default: 'text-gray-50'
  },
  hoverBgColor: {
    type: String,
    default: 'hover:bg-sky-300'
  },
  hoverTextColor: {
    type: String,
    default: 'hover:text-sky-900'
  },
  width: {
    type: String,
    default: 'w-64'
  },
  height: {
    type: String,
    default: 'h-16'
  }
});

const buttonClasses = computed(() => [
  'inline-flex justify-center items-center group relative text-left p-3 text-base font-bold rounded-lg overflow-hidden',
  'hover:border-sky-300 duration-500 before:duration-500 hover:duration-500',
  'origin-left hover:decoration-2',
  props.bgColor,
  props.textColor,
  props.hoverBgColor,
  props.hoverTextColor,
  props.width,
  props.height
].join(' '));
</script>

<style scoped>
.image {
  position: absolute;
  width: 48px;
  height: 48px;
  object-fit: contain; /* 保持图片原比例 */
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  filter: blur(10px);
  transition: filter 0.5s ease;
}

a:hover .image {
  filter: blur(0);
}
</style>
