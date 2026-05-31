<script setup>
import { ref, useTemplateRef } from 'vue';
import { useI18n } from 'vue-i18n'
import { useLanguageStore } from '../store/languageStore';

const isMenu = ref(false)
const menuRef = useTemplateRef('menu')
const lang = useLanguageStore()

function toggleMenu() {
    if (menuRef.value.style.display == 'block') {
        menuRef.value.style.display = 'none'
        isMenu.value = false
    } else {
        menuRef.value.style.display = 'block'
        isMenu.value = true
    }
}
const { locale } = useI18n()
const language = ref(locale.value)
const changeLangState = () => {
    locale.value = language.value
    useLanguageStore().changeLanguage(language.value)
}

</script>

<template>
    <div class="border-b-[2px] bg-white border-[#f7f8fd] sticky p-5 top-0 z-100 w-full">
        <header class="mt-[30px]">


            <nav class="flex container mx-auto justify-between lg:justify-around items-center">

                <div>
                    <div v-if="lang.lang === 'fa'">
                        <RouterLink :to="'/'">
                            <img class="w-[120px] h-auto md:w-[70px] lg:w-[135px] object-contain lg:h-[65px]"
                                src="../assets/1.png" alt="Logo">
                        </RouterLink>
                    </div>
                    <div v-else>
                        <RouterLink :to="'/'">
                            <img class="w-[120px] h-auto md:w-[70px] lg:w-[135px] object-contain lg:h-[65px]"
                                src="../assets/2.jpg" alt="Logo">
                        </RouterLink>
                    </div>
                </div>
                <div class="lg:hidden md:hidden">
                    <i @click="toggleMenu" :class="!isMenu ? 'fa fa-bars' : 'fa fa-close'"></i>
                </div>

                <div class="hidden md:block lg:block">
                    <div class="flex items-center lg:gap-x-[121px] sm:gap-[50px] ">

                        <div class="flex gap-x-7 text-black/65 links">

                            <RouterLink to="/blog">{{ $t('header.blog') }}</RouterLink>
                            <RouterLink :to="{ path: '/', hash: '#contact' }">{{ $t('header.contact') }}</RouterLink>
                            <RouterLink :to="{ path: '/', hash: '#about' }">{{ $t('header.about-us') }}</RouterLink>
                            <RouterLink :to="{ path: '/', hash: '#products' }">{{ $t('header.products') }}</RouterLink>
                            <RouterLink :to="{ path: '/', hash: '#activities' }">{{ $t('header.activities') }}
                            </RouterLink>
                        </div>

                        <div class="relative inline-block">
                            <select v-model="language" @change="changeLangState" class=" bg-[#BE100F] text-white 
           px-5 py-2 rounded-xl 
           text-sm font-medium
           cursor-pointer
           focus:outline-none focus:ring-2 focus:ring-white/40
           transition-all duration-200">
                                <option value="en" Selected>🇺🇸 English</option>
                                <option value="fa">🇮🇷 Persian</option>
                                <option value="ar">🇸🇦 Arabic</option>
                            </select>


                        </div>

                    </div>
                </div>

            </nav>
            <div ref="menu" class="hidden  md:hidden left-0 h-screen w-full absolute top z-100">
                <div class="h-full bg-black flex justify-center text-white">
                    <ul class="mt-[100px] flex flex-col items-center gap-y-[30px]">
                        <RouterLink :to="{ path: '/', hash: '#activities' }">{{ $t('header.activities') }}
                        </RouterLink>
                        <RouterLink :to="{ path: '/', hash: '#products' }">{{ $t('header.products') }}</RouterLink>
                        <RouterLink :to="{ path: '/', hash: '#about' }">{{ $t('header.about-us') }}</RouterLink>
                        <RouterLink :to="{ path: '/', hash: '#contact' }">{{ $t('header.contact') }}</RouterLink>
                        <RouterLink to="/blog">{{ $t('header.blog') }}</RouterLink>

                        <div class="relative inline-block">
                            <select v-model="language" @change="changeLangState" class=" bg-[#BE100F] text-white 
           px-5 py-2 rounded-xl 
           text-sm font-medium
           cursor-pointer
           focus:outline-none focus:ring-2 focus:ring-white/40
           transition-all duration-200">
                                <option value="en" Selected>🇺🇸 English</option>
                                <option value="fa">🇮🇷 Persian</option>
                                <option value="ar">🇸🇦 Arabic</option>
                            </select>


                        </div>
                    </ul>

                </div>
            </div>
        </header>

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
    background: #BE100F;
    bottom: 0;
    left: 0;
    transition: 1s;
}

.links>a:hover:after {
    width: 100%;
    transition: 1s;
}
</style>