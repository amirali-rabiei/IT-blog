<script setup lang="ts">
import { useLanguageStore } from '../store/languageStore';

const lang = useLanguageStore()

</script>

<template>
    <div
        :class="['mt-[200px] flex flex-col sm:flex-row bg-[#F9F9F9] p-4 gap-y-[60px] justify-around items-center', lang.lang == 'fa' || lang.lang === 'ar' ? 'md:flex-row-reverse' : '']">
        <div class="relative z-1">
            <div
                class="w-full md:w-[85%] lg:w-[100%] lg:left-2  absolute -z-1 rounded-[20px]  top-6  md:right-5 h-[480px]  md:rotate-1 bg-[#BE100F]">
            </div>
            <img class="w-[85%] mx-auto lg:w-[100%] h-[600px] object-cover rounded-[20px] " src="./a.jpg" alt="img">
        </div>
        <div :class="['w-[100%]  md:w-[46%] text-center', lang.lang === 'fa' ? 'md:text-right ' : 'md:text-left']">
            <h1 class="text-[28px] md:text-[40px] font-[nim]">{{ $t('introduce.title') }}</h1>
            <p class="text-[18px] text-gray-600">{{ $t('introduce.description') }}</p>
            <div class="text-white bg-[#BE100F] mx-auto md:mx-0 px-[50px] w-fit mt-5 py-2 rounded-[10px] text-center">
                <a class="text-[16px] font-semibold" href="#contact">{{ $t('introduce.contact') }}</a>
            </div>
        </div>
    </div>
</template>