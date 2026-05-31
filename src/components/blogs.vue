<script setup>
import { onMounted, ref, watch, computed } from 'vue';
import { useBlogStore } from '../store/blogStore';
import { useLanguageStore } from '../store/languageStore';
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const useBlog = useBlogStore()
const language = useLanguageStore()

const articles = ref([])
const loading = ref(true)


const getBlogTranslation = (blog) => {
    return blog?.translations?.find(
        t => t.language === locale.value
    ) || null
}


const translatedArticles = computed(() => {
    return articles.value.filter(article =>
        article.translations?.some(t => t.language === locale.value)
    );
});


async function fetchBlogs(currentLang) {
    loading.value = true
    await useBlog.getBlogs(currentLang)
    articles.value = useBlog.data || []
    loading.value = false
}

onMounted(async () => {
    await fetchBlogs(locale.value)

    watch(locale, (newLocale) => {
        fetchBlogs(newLocale)
    })
})
</script>

<template>
    <div class="p-2">
        <div class="mt-[100px] w-fit mx-auto">
            <div :class="['flex ', language.lang === 'fa' || language.lang === 'ar' ? 'justify-end' : 'justify-start']">
                <p
                    class="text-[23px] text-[#081F3C] ml-2 md:text-[40px]  mb-5 border-b w-fit border-[#BE100F]">
                    {{ $t('achievements.blogs') }}
                </p>
            </div>

            <div v-if="loading || translatedArticles.length === 0">
                <div class="mx-auto rounded-md p-4 space-y-4">
                    <div class="animate-pulse grid grid-cols-1 md:grid-cols-2 gap-x-1">
                        <div v-for="n in 2" :key="n" class="h-4 rounded bg-gray-200 w-full md:w-[350px]"></div>
                    </div>
                </div>
            </div>

            <div v-else
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-[22px] gap-y-[50px] p-6 bg-[#F9F9F9]">

                <div v-for="article in translatedArticles" :key="article.id"
                    class="flex gap-x-3 items-center relative w-fit">

                    <img loading="lazy" class="w-[400px] h-[366px] object-cover rounded-2xl"
                        :src="`https://py-64mn.onrender.com${article.image}`"
                        :alt="getBlogTranslation(article)?.title || ''">

                    <div :class="[
                        'bg-white w-full absolute bottom-0 p-5',
                        language.lang === 'fa' || language.lang === 'ar'
                            ? 'right-0 text-right'
                            : 'text-left left-0'
                    ]">

                        <p class="text-[20px] pb-3 md:text-[22px] text-[#181A2A] ">
                            {{ getBlogTranslation(article)?.title }}
                        </p>

                        <p class="mb-2 text-[#696A75]  text-[18px]  truncate">
                            {{ getBlogTranslation(article)?.description }}
                        </p>

                        <RouterLink :to="`/blog/${article.id}`">
                            <span class="text-[#BE100F]">More</span>
                            <i class="fa fa-arrow-right ml-2"></i>
                        </RouterLink>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>
