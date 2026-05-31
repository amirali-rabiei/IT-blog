<script setup>
import { useLanguageStore } from '../store/languageStore';


const language = useLanguageStore()

</script>
<template>
    <div class="p-2"  id="contact">
        <div
            :class="['mt-[200px] flex flex-col items-center gap-y-[50px] justify-around bg-[#BE100F] max-w-[1000px] mx-auto rounded-[22px] text-white p-[40px] md:p-[5rem]', language.lang === 'fa' || language.lang === 'ar' ? 'lg:flex-col text-right' : ' text-left']">
            <p
  class="text-[1.25rem] sm:text-[2rem] md:text-[2.5rem] font-[Montserrat,yek] max-w-[90%] sm:max-w-[600px] md:max-w-[750px] text-center font-bold mx-auto">
  {{ $t('contact.text') }}
</p>

            <div class="flex flex-col md:flex-row bg-white p-[0.25rem] max-w-[600px] w-full rounded-[0.5rem]">
                <!-- <input type="text" placeholder="Enter your email here..."
                    class="w-[100%] text-[1rem] text-black/72 p-[0.80rem] outline-0 bg-white">
                <button
                    class="py-[0.75rem] mt-4 px-[1.5rem] bg-[#BE100F] font-[500] rounded-[5px] flex items-center gap-x-2">Subscribe
                    <i class="fa fa-arrow-right"></i></button> -->
            </div>
        </div>
       
    </div>
</template>