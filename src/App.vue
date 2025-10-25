<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
const firstSeqment = computed(() => {
  return '/' + route.path.split('/')[1]
})

</script>
<template>
  <div :class="firstSeqment === '/dashboard' ? '' : 'container mx-auto px-2 lg:px-10'">
    <RouterView></RouterView>
  </div>
</template>