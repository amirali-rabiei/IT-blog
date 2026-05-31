<script setup>

const props = defineProps({
    title: String
})

</script>

<template>
    <div>
        <h1 class="font-[nim] text-5xl text-center mt-[50px]">{{props.title}} not found</h1>
    </div>
</template>