<script setup>
import axios from 'axios';
import { ref } from 'vue';

import { useRouter } from 'vue-router'

const router = useRouter()

const title = ref('')
const content = ref('')
const language = ref('')


const add = async () => {

    const data = {
        title: title.value,
        content: content.value,
        language: language.value
    }

    const res = await axios.post('https://it-blog-p5h0.onrender.com/api/blog', data)
    if (res.status === 200) {
        router.push('/dashboard/article')
    }
}

</script>

<template>
    <div class="space-y-4 md:space-y-6">
        <div>
            <label for="text" class="block mb-2 text-sm font-medium text-gray-900">Title</label>
            <input v-model="title" type="text" id="title"
                class="bg-[##151718] border outline-0 border-gray-300 text-[#747475] rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:focus:border-blue-500">
        </div>
        <div>
            <label for="text" class="block mb-2 text-sm font-medium text-gray-900">Content</label>
            <input v-model="content" type="text" id="title"
                class="bg-[##151718] border outline-0 border-gray-300 text-[#747475] rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:focus:border-blue-500">
        </div>
        <div>
            <label for="text" class="block mb-2 text-sm font-medium text-gray-900">Language</label>
            <input v-model="language" type="text" id="title"
                class="bg-[##151718] border outline-0 border-gray-300 text-[#747475] rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:focus:border-blue-500">
        </div>
        <button @click="add" class=" bg-blue-600 text-white px-3.5 py-1.5 rounded-sm">Add article</button>
    </div>
</template>