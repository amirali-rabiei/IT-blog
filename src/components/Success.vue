<script setup>

const props = defineProps({
    title: String,
    message: String
})

</script>

<template>
    <div class="bg-blue-100 border-t sticky top-0 z-100 border-b border-green-500 text-green-700 px-4 py-3 w-fit float-end"
        role="alert">
        <p class="font-bold">{{ props.title }}</p>
        <p class="text-sm">{{ props.message }}</p>
    </div>
</template>