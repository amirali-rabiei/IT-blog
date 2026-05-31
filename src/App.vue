<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
const firstSeqment = computed(() => {
  return '/' + route.path.split('/')[1]
})

</script>
<template>
  <div :class="firstSeqment === '/dashboard' ? '' : ''">
    <RouterView></RouterView>
  </div>
</template>