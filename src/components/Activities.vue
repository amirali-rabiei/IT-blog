<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { onMounted, ref, watch, computed } from 'vue';
import { useI18n } from 'vue-i18n'
import { useActivityStore } from '../store/activityStore';
import { useBlogStore } from '../store/blogStore';
import { useLanguageStore } from '../store/languageStore';

const { locale } = useI18n()
const useActivity = useActivityStore()
const useBlog = useBlogStore()
const language = useLanguageStore()

const activities = ref([])
const loading = ref(true)


const getActivityTranslation = (activity) => {
    return activity?.translations?.find(
        t => t.language === locale.value
    ) || null;
};


const translatedActivities = computed(() => {
    return activities.value.filter(activity =>
        activity.translations?.some(t => t.language === locale.value)
    );
});

async function fetchData(currentLang) {
    loading.value = true
    await useActivity.getActivities(currentLang)
    await useBlog.getBlogs(currentLang)
    activities.value = useActivity.data || []
    loading.value = false
}

onMounted(async () => {
    await fetchData(locale.value)

    watch(locale, (newLocale) => {
        fetchData(newLocale)
    })
})
</script>

<template>
    <div id="activities" class="mt-[276px]">
        <div class="text-center w-full">
            <p class=" text-[#081F3C] md:text-[40px] text-[28px] lg:text-[50px] uppercase">
                {{ $t('activities.title') }}
            </p>
            <p class="max-w-[90%] mx-auto text-[18px] leading-relaxed text-gray-600">
                {{ $t('activities.description') }}
            </p>
        </div>

        <div class="p-1">


            <div v-if="loading || translatedActivities.length === 0">
                <div class="mx-auto rounded-md p-4 space-y-4">
                    <div class="animate-pulse flex justify-center gap-x-1">
                        <div v-for="n in 3" :key="n" class="h-4 rounded bg-gray-200 w-[350px]"></div>
                    </div>
                </div>
            </div>


            <Swiper v-else class="mt-16 container" :space-between="20" :slides-per-view="3" :breakpoints="{
                320: { slidesPerView: 1, spaceBetween: 10 },
                640: { slidesPerView: 2, spaceBetween: 15 },
                1024: { slidesPerView: 3, spaceBetween: 10 }
            }">
                <SwiperSlide v-for="activity in translatedActivities" :key="activity.id">
                    <RouterLink :to="`/activity/${activity.id}`">
                        <div class="flex relative productContainer justify-center w-full max-w-[400px] mx-auto">
                            <img class="w-full h-[200px] md:h-[267px] object-cover rounded-[15px]"
                                :src="`https://py-64mn.onrender.com${activity.image}`"
                                :alt="getActivityTranslation(activity)?.title || ''" />

                            <div :class="[
                                'productContent opacity-0 text-white p-4 md:p-5 w-full h-full absolute bottom-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent rounded-[15px]',
                                language.lang === 'fa' || language.lang === 'ar' ? 'text-right' : 'text-left'
                            ]">
                                <p
                                    class=" text-white text-[clamp(18px,2vw,28px)] md:text-[clamp(22px,2.5vw,30px)]">
                                    {{ getActivityTranslation(activity)?.title }}
                                </p>
                                <p
                                    class="text-[clamp(14px,1.5vw,20px)]  md:text-[clamp(16px,1.8vw,20px)] text-white line-clamp-3">
                                    {{ getActivityTranslation(activity)?.description }}
                                </p>
                            </div>
                        </div>
                    </RouterLink>
                </SwiperSlide>
            </Swiper>

        </div>
    </div>
</template>

<style scoped>
.productContainer:hover .productContent {
    opacity: 1;
}
</style>
