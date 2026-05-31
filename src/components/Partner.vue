<script setup>
import ScrollReveal from 'scrollreveal';
import { onMounted, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { useCompanyStore } from '../store/companyStore';

const useCompany = useCompanyStore()
const companies = ref([])
const loading = ref(true)

async function fetchCompanies() {
    loading.value = true
    await useCompany.getComanies()
    companies.value = useCompany.data || []
    loading.value = false
}

onMounted(async () => {
    await fetchCompanies()
})

onMounted(() => {
    const scrollRevealOption = {
        distance: "50px",
        origin: "left",
        duration: 1000,
    };
    ScrollReveal().reveal('.boxAni', {
        ...scrollRevealOption,
        interval: 300,
        reset: true
    });
})
</script>

<template>
    <div class="mt-[148px] flex flex-col p-3 items-center gap-y-[65px]">
        <div class="md:w-[735px] max-w-[90%] w-[100%] text-center">
            <p class="text-[28px]  text-[#081F3C] md:text-[40px]">{{ $t('parent.title') }}</p>
            <p class="text-[18px] md:text-[20px] text-gray-600">{{ $t('parent.description') }}</p>
        </div>

        <div class="w-full md:w-[700px] flex">

           
            <div v-if="loading || !companies.length" class="mx-auto rounded-md p-4 space-y-4 w-full flex justify-center">
                <div class="mx-auto rounded-md p-4 space-y-4">
                    <div class="animate-pulse grid grid-cols-1 justify-center gap-x-1">
                        <div v-for="n in 3" :key="n" class="h-4 rounded bg-gray-200 w-[150px]"></div>
                    </div>
                </div>
            </div>

            
            <Swiper
                v-else
                class="mt-[10px] container"
                :space-between="2"
                data-swiper-autoplay="2000"
                :slides-per-view="3"
                :breakpoints="{ 320: { slidesPerView: 2 }, 640: { slidesPerView: 3 }, 1024: { slidesPerView: 3 } }"
            >
                <SwiperSlide v-for="company in companies" :key="company.id">
                    <div class="w-[150px] flex flex-col items-center border-[1px] p-3 border-[#f7f8fd] mx-[2px] boxAni">
                        <img
                            :src="`https://py-64mn.onrender.com${company.image}`"
                            class="w-[100px] h-[100px] m-auto object-cover"
                            :alt="company.title"
                        >
                        <h5 class="text-[22px] mt-4 text-[#081F3C] font-[nim] mb-[10px]">
                            {{ company.title }}
                        </h5>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    </div>
</template>

<style scoped>
h1 {
    font-weight: 700;
}

</style>
