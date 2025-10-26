<script setup>
import { useLanguageStore } from '../store/languageStore';


const language = useLanguageStore()

</script>
<template>
    <div id="contact"
        :class="['mt-[100px] flex flex-col md:flex-row lg:flex-row gap-y-[50px] justify-around bg-[black] rounded-[22px] text-white p-[40px]', language.lang === 'fa' || language.lang === 'ar' ? 'lg:flex-row-reverse text-right' : 'lg:flex-row text-left']">
        <div class="w-[100%] md:w-[400px] lg:w-[400px] flex flex-col gap-y-6">
            <div class="">
                <h2 class="text-4xl font-[nim]">{{ $t('contact.title') }}</h2>
                <p class="leading-relaxed">{{ $t('contact.description') }}</p>
            </div>
            <div class="flex flex-col gap-y-4">
                <div>
                    <i class="fa fa-phone mr-1"></i>
                    <span>+98 999 999 99</span>
                </div>
                <div>
                    <i class="fa fa-envelope mr-1"></i>
                    <span>ai@gmail.com</span>
                </div>
                <div>
                    <i class="fa fa-map mr-1"></i>
                    <span>example , exmaple blvevarde</span>
                </div>
            </div>
        </div>
        <div class="mx-auto md:mx-0 md:text-start w-full lg:w-fit md:w-fit lg:text-start">
            <div
                :class="['flex flex-col gap-y-6', language.lang === 'fa' || language.lang === 'ar' ? 'text-right' : 'text-left']">
                <div>
                    <label for="username" class="block">{{ $t('contact.username') }}</label>
                    <input id="username" :class="['outline-0 text-[15px] border-b border-red-500 text-[#A8A8A8] w-full lg:w-[300px]', language.lang === 'fa' || language.lang === 'ar' ? 'text-right' : 'text-left']"
                        type="text">
                </div>
                <div>
                    <label for="email" class="block">{{ $t('contact.email') }}</label>
                    <input id="email"
                        :class="['outline-0 border-b text-[15px] border-red-500 text-[#A8A8A8] w-full lg:w-[300px]', language.lang === 'fa' || language.lang === 'ar' ? 'text-right' : 'text-left']"
                        type="text">
                </div>
                <div>
                    <label for="message" class="block">{{ $t('contact.message') }}</label>
                    <textarea id="message" cols="20" rows="2"
                    :class="['outline-0 border-b text-[15px] border-red-500 text-[#A8A8A8] w-full lg:w-[300px]', language.lang === 'fa' || language.lang === 'ar' ? 'text-right' : 'text-left']"></textarea>
                </div>
                <div class="py-2">
                    <button class="text-[black]  rounded-[6px] bg-[white] lg:w-fit md:w-fit py-1 px-7">{{
                        $t('contact.submit') }}</button>
                </div>

            </div>
        </div>
    </div>
</template>