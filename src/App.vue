<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<template>
  <div :class="route.path === '/dashboard' ? '' : 'container mx-auto px-2 lg:px-10'">
    <RouterView></RouterView>
  </div>
</template>