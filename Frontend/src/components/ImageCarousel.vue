<template>
  <div class="q-pa-md ">
    <q-carousel
      arrows
      animated
      infinite
      v-model="slide"
      height="400px"
      class="rounded-lg"
    >
      <q-carousel-slide
        v-for="(slide, index) in slides"
        :key="index"
        :name="slide.name"
        :img-src="slide.imgSrc"
      >
        <div class="absolute-bottom custom-caption backdrop-blur-md">
          <div class="text-h2">{{ slide.title }}</div>
          <div class="text-subtitle1">{{ slide.subtitle }}</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  slides: {
    type: Array,
    required: true,
    default: () => []
  }
})

const slide = ref(props.slides.length > 0 ? props.slides[0].name : '')
</script>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, 0.3)
</style>
