<script setup>
import { useLanguageStore } from '../store/languageStore';
import ScrollReveal from 'scrollreveal';
import { onMounted } from 'vue';

onMounted(() => {
    const scrollRevealOption = {
        distance: "50px",
        origin: "left",
        duration: 3000,
    };
    ScrollReveal().reveal('.boxAni', {
        ...scrollRevealOption,
        cleanup: true
    });
})
const language = useLanguageStore()

</script>

<template>
    <div
        :class="['mt-[200px] flex flex-col sm:flex-row bg-[#F9F9F9] p-4 gap-y-[60px] justify-evenly items-center', language.lang == 'fa' || language.lang === 'ar' ? 'md:flex-row-reverse' : '']">
        <div
            :class="['flex flex-col sm:flex-row bg-[#F9F9F9] gap-y-[60px] justify-evenly items-center', language.lang == 'fa' || language.lang === 'ar' ? 'md:flex-row-reverse' : '']">
            <div class="relative z-1 boxAni">
                <!-- <div
                class="w-full md:w-[85%] lg:w-[100%] lg:left-2  absolute -z-1 rounded-[20px]  top-6  md:right-5 h-[480px]  md:rotate-1 bg-[#BE100F]">
            </div> -->
                <img class="w-[85%] mx-auto  lg:w-[100%] md:h-[450px] lg:h-[470px] object-cover rounded-[20px] "
                    src="../assets/i.jpeg"
                    alt="img">
            </div>
            <div
                :class="['w-[100%] boxAni md:w-[46%] text-center', language.lang === 'fa' || language.lang === 'ar' ? 'md:text-right ' : 'md:text-left']">
                <p class="text-[28px] text-[#081F3C] md:text-[40px]">{{ $t('introduce.title') }}</p>
                <p class="text-[18px] text-balance  mx-auto text-black/72">{{
                    $t('introduce.description') }}</p>
                <div class="py-7 relative">
                    <a class="text-[16px] text-white bg-[#BE100F] mx-auto md:mx-0 px-[20px] w-fit mt-5 py-2 rounded-[10px] text-center"
                        href="#contact">{{ $t('introduce.contact') }}</a>
                </div>
            </div>
        </div>
    </div>
</template>