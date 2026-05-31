<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { onMounted, ref, watch, computed } from 'vue';
import { useProductStore } from '../store/productStore';
import { useLanguageStore } from '../store/languageStore';

const useProduct = useProductStore()
const products = ref([])
const language = useLanguageStore()
const loading = ref(true)

const getProductTranslation = (product) => {
    return product?.translations?.find(
        t => t.language === language.lang
    ) || null;
};


const translatedProducts = computed(() => {
    return products.value.filter(product =>
        product.translations?.some(t => t.language === language.lang)
    );
});


async function fetchProducts(currentLang) {
    loading.value = true
    await useProduct.getProducts(currentLang)
    products.value = useProduct.data || []
    loading.value = false
}

onMounted(async () => {
    await fetchProducts(language.lang)

    watch(() => language.lang, (newLang) => {
        fetchProducts(newLang)
    })
})
</script>

<template>
    <div class="mt-[176px]" id="products">
        <div id="services" class="text-center w-full">
            <p class=" text-[#081F3C] text-[28px] md:text-[40px] lg:text-[50px] uppercase">
                {{ $t('products.title') }}
            </p>

            <p class="max-w-[90%] mx-auto  text-[18px] text-gray-600">
                {{ $t('products.description') }}
            </p>
        </div>

        <div class="p-2 relative w-[100%] md:w-[80%] mx-auto">

          
            <div v-if="loading || translatedProducts.length === 0">
                <div class="mx-auto rounded-md p-4 space-y-4">
                    <div class="animate-pulse flex justify-center gap-x-1">
                        <div v-for="n in 3" :key="n" class="h-4 rounded bg-gray-200 w-[350px]"></div>
                    </div>
                </div>
            </div>

          
            <Swiper v-else class="mt-16 container" :space-between="20" :slides-per-view="3" :breakpoints="{
                320: { slidesPerView: 1, spaceBetween: 10 },
                640: { slidesPerView: 2, spaceBetween: 15 },
                1024: { slidesPerView: 3, spaceBetween: 20 }
            }">
                <SwiperSlide v-for="product in translatedProducts" :key="product.id">
                    <div
                        class="w-full mx-auto border-[2px] rounded-[10px] border-[#f7f8fd] flex flex-col h-full md:h-[500px]">
                        <img class="w-full h-[267px] object-cover rounded-t-[10px]"
                            :src="`https://py-64mn.onrender.com${product.image}`"
                            :alt="getProductTranslation(product)?.title || ''" />
                        <div :class="[
                            'bg-white p-4 flex flex-col flex-1 gap-y-2',
                            language.lang === 'fa' || language.lang === 'ar' ? 'text-right' : 'text-left'
                        ]">
                            <p class=" text-[#081F3C] text-[clamp(16px,2vw,22px)]">
                                {{ getProductTranslation(product)?.title }}
                            </p>
                            <p class="text-gray-600  text-[clamp(14px,1.5vw,18px)] flex-1 truncate">
                                {{ getProductTranslation(product)?.description }}
                            </p>
                            <div class="mt-auto">
                                <RouterLink
                                    class="text-white bg-[#BE100F] px-4 py-2 rounded text-center text-[clamp(14px,1.5vw,16px)]"
                                    :to="`/product/${product.id}`">
                                    More
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    </div>
</template>
