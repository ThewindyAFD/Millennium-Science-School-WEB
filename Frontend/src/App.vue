<template>
  <router-view />
  <LoadingComponents/>
</template>

<script>
import { defineComponent } from 'vue'
import LoadingComponents from "components/LoadingComponents.vue";

export default defineComponent({
  name: 'App',
  components: {LoadingComponents}
})
</script>
