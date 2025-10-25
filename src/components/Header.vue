<script setup>
import { ref, useTemplateRef } from 'vue';
import { useI18n } from 'vue-i18n'
import { useLanguageStore } from '../store/languageStore';

const isMenu = ref(false)
const menuRef = useTemplateRef('menu')

function toggleMenu() {
    if (menuRef.value.style.display == 'none') {
        menuRef.value.style.display = 'block'
        isMenu.value = true
    } else {
        menuRef.value.style.display = 'none'
        isMenu.value = false
    }
}
const { locale } = useI18n()
const language = ref()
const changeLangState = () => {
    locale.value = language.value
    useLanguageStore().changeLanguage(language.value)
}

</script>

<template>
    <header class="mt-[30px] bg-white sticky p-5 top-0 z-100 w-full">


        <nav class="flex justify-between lg:justify-around items-center">

            <div>
                Dummy
            </div>
            <div class="lg:hidden md:hidden">
                <i @click="toggleMenu" :class="!isMenu ? 'fa fa-bars' : 'fa fa-close'"></i>
            </div>

            <div class="hidden md:block lg:block">
                <div class="flex items-center lg:gap-x-[121px] sm:gap-[50px] font-[nim]">

                    <div class="flex gap-x-7 links">
                        <a href="#services">{{ $t('header.activities') }}</a>
                        <a href="#services">{{ $t('header.products') }}</a>
                        <a href="">{{ $t('header.about-us') }}</a>
                        <a href="#contact">{{ $t('header.contact') }}</a>
                        <RouterLink to="/blog">{{ $t('header.blog') }}</RouterLink>
                    </div>

                    <div class="text-white bg-[#BE100F] px-[50px] sm:px-[35px] py-1 rounded-[10px] text-center">
                        {{ $t('header.eng') }}
                        <select name="" id="" @change="changeLangState" v-model="language" class=" w-[15px]">
                            <option disabled value="">Choose language</option>
                            <option value="en" selected>En</option>
                            <option value="fa">Fa</option>
                            <option value="ar">Ar</option>
                        </select>
                        <!-- <button class="text-[16px]" href="" @click="changeLangState">{{ $t('header.eng') }}</button> -->
                    </div>

                </div>
            </div>

        </nav>

    </header>
    <div ref="menu" class="hidden md:hidden left-0 w-full h-screen fixed top z-1">
        <div class="h-full bg-black flex justify-center text-white">
            <ul class="mt-[100px] flex flex-col items-center gap-y-[30px]">
                <a href="#services">{{ $t('header.activities') }}</a>
                <a href="#services">{{ $t('header.products') }}</a>
                <a href="">{{ $t('header.about-us') }}</a>
                <a href="#contact">{{ $t('header.contact') }}</a>
                <RouterLink to="/blog">{{ $t('header.blog') }}</RouterLink>

                <div class="text-white bg-[#BE100F] px-[50px] sm:px-[35px] py-1 rounded-[10px] text-center">
                    {{ $t('header.eng') }}
                    <select name="" id="" @change="changeLangState" v-model="language" class=" w-[15px]">
                        <option disabled value="">Choose language</option>
                        <option value="en" selected>En</option>
                        <option value="fa">Fa</option>
                        <option value="ar">Ar</option>
                    </select>
                    <!-- <button class="text-[16px]" href="" @click="changeLangState">{{ $t('header.eng') }}</button> -->
                </div>
            </ul>

        </div>
    </div>

</template>

<style scoped>
.links>a {
    position: relative;
}

.links>a::after {
    content: '';
    position: absolute;
    width: 0%;
    height: 1px;
    background: red;
    bottom: 0;
    left: 0;
    transition: 1s;
}

.links>a:hover:after {
    width: 100%;
    transition: 1s;
}
</style>