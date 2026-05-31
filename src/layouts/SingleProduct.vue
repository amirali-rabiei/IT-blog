<script setup>
import { onMounted, ref, watch } from 'vue';
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import { useRoute } from 'vue-router';
import { useLanguageStore } from '../store/languageStore';
import NotFound from '../pages/NotFound.vue';
import api from '../api/api.js';

const router = useRoute()
const id = router.params.id

const image = ref('')
const title = ref('')
const description = ref('')
const content = ref('')
const date = ref('')
const loading = ref(false)
const notFound = ref(false)

const language = useLanguageStore()

async function getBlog() {
    loading.value = false
    notFound.value = false
    try {
        const response = await api.get(`/products/${id}`, {
            params: { language: language.lang }
        })

        if (!response.data) {
            notFound.value = true
            return
        }
        image.value = response.data.image
        title.value = response.data.translations[0].title
        description.value = response.data.translations[0].description
        content.value = response.data.translations[0].content
        date.value = response.data.created_at
        loading.value = true
    } catch (error) {
        console.log(error)
        notFound.value = true
    }
}


onMounted(() => {
    getBlog()
})

watch(() => language.lang, () => {
    getBlog()
})
</script>

<template>
    <div>
        <Header />

        <div v-if="!loading && !notFound">
            <div class="mx-auto rounded-md p-4 space-y-4">
                <div class="animate-pulse gap-y-4 flex flex-col">
                    <div class="h-4 rounded bg-gray-200 w-[200px]"></div>
                    <div class="h-4 rounded bg-gray-200 w-full"></div>
                    <div class="h-4 rounded bg-gray-200 w-[300px]"></div>
                    <div class="h-4 rounded bg-gray-200 w-full"></div>
                </div>
            </div>
        </div>

        <div v-if="notFound">
            <NotFound :title="'Blog'" />
        </div>

        <div v-else-if="loading">
            <div
                :class="['w-full lg:w-[800px] mx-auto p-5 mt-[80px]', language.lang === 'fa' || language.lang === 'ar' ? 'text-right' : 'text-left']">
                <p class="text-[#181A2A]   text-[21px] md:text-[36px] font-semibold">{{
                    title }}</p>
                <p class="text-[#696A75] text-[14px] mt-[24px] mb-[36px]">{{ new Date(date).toDateString() }}</p>
                <img class="w-full mb-[32px] h-auto object-cover rounded-[12px]"
                    :src="`https://py-64mn.onrender.com${image}`" :alt="title" loading="lazy">
                <p class="text-[#3B3C4A] break-words  text-[19px] md:text-[21px] leading-relaxed"
                    v-html="content"></p>
            </div>
        </div>

        <Footer />
    </div>
</template>
