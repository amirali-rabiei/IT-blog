<script setup>
import { useLanguageStore } from '../store/languageStore';


const language = useLanguageStore()

</script>
<template>
    <div id="about"
        :class="['bg-[#F2F5F6]  mt-[100px]', language.lang === 'fa' || language.lang === 'ar' ? 'text-right' : 'text-left']">

        <div id="contact"
            class=" flex-col gap-y-7  px-7 py-12 container mx-auto flex md:justify-between md:flex-row  md:gap-x-[50px] lg:gap-x-[0px] ">
            <div class="w-full md:w-[550px]">
                <h2
                    :class="['text-[30px] font-normal text-[#081F3C]', language.lang === 'fa' || language.lang === 'ar' ? 'text-right' : 'text-left']">
                    {{ $t('footer.title') }}</h2>
                <p
                    :class="['leading-relaxed   text-[#718e9c]', language.lang === 'fa' || language.lang === 'ar' ? 'text-right' : 'text-left']">
                    {{ $t('footer.description') }}</p>
            </div>

            <div :class="['flex flex-col gap-y-2']">
                <h2
                    :class="['text-[20px] text-[#081F3C]', language.lang === 'fa' || language.lang === 'ar' ? 'text-right' : 'text-left']">
                    {{ $t('footer.links') }}</h2>
                <div
                    :class="['text-[#718e9c] flex flex-col  gap-y-2', language.lang === 'fa' || language.lang === 'ar' ? 'text-right' : 'text-left']">
                    <RouterLink :to="{ path: '/', hash: '#activities' }">{{ $t('header.activities') }}
                    </RouterLink>
                    <RouterLink :to="{ path: '/', hash: '#products' }">{{ $t('header.products') }}</RouterLink>
                    <RouterLink to="/blog">{{ $t('header.blog') }}</RouterLink>
                    <RouterLink to="/">{{ $t('footer.home') }}</RouterLink>
                </div>
            </div>
            <div
                :class="['flex flex-col gap-y-2', language.lang === 'fa' || language.lang === 'ar' ? 'text-right' : 'text-left']">
                <h2 class="text-[20px] text-[#081F3C] mr-1">{{ $t('footer.contact-us') }}</h2>
                <div class="text-[#718e9c] flex flex-col gap-y-2">
                    <div class="flex flex-col gap-y-4 ">
                        <div class="flex flex-col gap-y-3.5">
                            <div
                                :class="['flex gap-x-1.5 items-center', language.lang === 'fa' || language.lang === 'ar' ? 'flex-row-reverse' : 'flex-row']">
                                <i class="fa fa-phone"></i>
                                <a href="tel:02122584956">02122584956</a>
                            </div>
                            <div
                                :class="['flex gap-x-1.5 items-center', language.lang === 'fa' || language.lang === 'ar' ? 'flex-row-reverse' : 'flex-row']">
                                <i class="fa fa-mobile-alt mr-1"></i>
                                <a href="tel:+989103137825">0910 313 7825</a>
                            </div>
                        </div>
                        <div
                            :class="['flex gap-x-1.5 items-center', language.lang === 'fa' || language.lang === 'ar' ? 'flex-row-reverse' : 'flex-row']">
                            <i class="fa fa-envelope mr-1"></i>
                            <a href="mailto:info@svs-co.com">info@svs-co.com</a>
                            <!-- <br>
                            <i class="fa fa-envelope mr-1"></i>
                            <span>md.sadeghi.gh@gmail.com</span> -->
                        </div>
                        <div
                            :class="['flex gap-x-1.5 items-center', language.lang === 'fa' || language.lang === 'ar' ? 'flex-row-reverse' : 'flex-row']">
                            <i class="fa fa-globe mr-1"></i>
                            <a href="https://svs-co.com" target="_blank">svs-co</a>
                        </div>
                        <div
                            :class="['flex gap-x-1.5 items-center', language.lang === 'fa' || language.lang === 'ar' ? 'flex-row-reverse' : 'flex-row']">
                            <i class="fa fa-map mr-1"></i>
                            <span>{{ $t('footer.address') }}</span>
                        </div>
                    </div>
                </div>
            </div>


        </div>

        <div
            :class="['flex flex-col justify-center  items-center text-center md:text-start lg:text-start md:flex-row lg:flex-row  gap-y-9 gap-x-[97px]', language.lang === 'fa' || language.lang === 'ar' ? 'md:flex-row-reverse lg:flex-row-reverse' : 'lg:flex-row']">
            <div class="flex  border-l-1 pl-2.5 v  mt-8 justify-center flex-col gap-y-5">
                <a href="https://www.instagram.com/svs.co?igsh=MW52Y2NidW9seWY4dA%3D%3D&utm_source=qr" target="_blank">
                    <i class="fa fa-instagram rotate-180"></i>
                </a>
                <a href="https://t.me/svs_co_com" target="_blank">
                    <i class="fa fa-telegram rotate-280"></i>
                </a>
                <a href="https://www.linkedin.com/company/satrapvirasazan" target="_blank">
                    <i class="fa fa-linkedin -rotate-90"></i>
                </a>
                <a href="mailto:md.sadeghi.gh@gmail.com" target="_blank">
                    <i class="fa  fa-envelope -rotate-90"></i>
                </a>
            </div>
        </div>

    </div>
    <!-- <p class="text-center pt-2">&copy;All rights reserved</p> -->
</template>

<style scoped>
.v {
    position: relative;
    transition: cubic-bezier(0.455, 0.03, 0.515, 0.955) 1s;
    rotate: 90deg;
}

.v::before {
    content: 'Follow';
    position: absolute;
    left: -130%;
    rotate: -90deg;

}


a {
    position: relative;
}

a::after {
    content: '';
    position: absolute;
    width: 0%;
    height: 1px;
    background: red;
    bottom: 0;
    left: 0;
    transition: 1s;
}

a:hover,
i:hover {
    color: #BE100F;
    transition: 0.5s;
}
</style>