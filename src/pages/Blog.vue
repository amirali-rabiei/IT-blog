<script setup>
import { onMounted, ref, watch, computed } from 'vue';
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import { useBlogStore } from '../store/blogStore';
import { useLanguageStore } from '../store/languageStore';
import { RouterLink } from 'vue-router';

const useBlog = useBlogStore()
const language = useLanguageStore()

const articles = ref([])
const loading = ref(true)


const getBlogTranslation = (blog) => {
    return blog?.translations?.find(
        t => t.language === language.lang
    ) || null
}


const translatedArticles = computed(() => {
    return articles.value.filter(article =>
        article.translations?.some(t => t.language === language.lang)
    )
})

async function getBlogs(currentLang) {
    loading.value = true
    await useBlog.getBlogs(currentLang)
    articles.value = useBlog.data || []
    loading.value = false
}

onMounted(async () => {
    await getBlogs(language.lang)

    watch(() => language.lang, (newLang) => {
        getBlogs(newLang)
    })
})
</script>

<template>
    <div>
        <Header />

        <div
            class="mt-[100px] w grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-x-[22px] lg:gap-x-[22px] w-fit mx-auto gap-y-[120px] p-4 bg-[#F9F9F9]">
            <!-- Skeleton -->
            <div v-if="loading || !translatedArticles.length">
                <div class="mx-auto rounded-md p-4 space-y-4">
                    <div class="animate-pulse flex justify-center gap-x-1">
                        <div v-for="n in 3" :key="n" class="h-4 rounded bg-gray-200 w-[446px]"></div>
                    </div>
                </div>
            </div>

            <!-- Articles -->
            <div v-else v-for="article in translatedArticles" :key="article.id"
                class="flex flex-col gap-x-3 items-center relative w-full">
                <img class="w-[446px] h-[300px] rounded-t-2xl" :src="`https://py-64mn.onrender.com${article.image}`"
                    :alt="getBlogTranslation(article)?.title || ''" />

                <div :class="[
                    'bg-white leading-relaxed w-full md:w-[446px] h-[200px] p-5',
                    language.lang === 'fa' || language.lang === 'ar'
                        ? 'text-right'
                        : 'text-left'
                ]">
                    <p class="text-[20px] text-[#181A2A] md:text-[22px] ">
                        {{ getBlogTranslation(article)?.title }}
                    </p>

                    <p class="mb-2 text-gray-600 text-[18px]  line-clamp-2">
                        {{ getBlogTranslation(article)?.description }}
                    </p>

                    <div>
                        <RouterLink :to="`/blog/${article.id}`">
                            <span class="text-[#BE100F]">More</span>
                            <i class="fa fa-arrow-right ml-2"></i>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>

        <Footer class="mt-[150px]" />
    </div>
</template>