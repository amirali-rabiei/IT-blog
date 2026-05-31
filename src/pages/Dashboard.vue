<script setup>
import { onMounted, useTemplateRef } from 'vue';
import { useLanguageStore } from '../store/languageStore';
import { useRouter } from 'vue-router';
import api from '../api/api';

const router = useRouter()

const m = useTemplateRef('m')
function show() {
    if (m.value.style.display == 'block') {
        m.value.style.display = 'none'
    } else[
        m.value.style.display = 'block'
    ]
}

const lang = useLanguageStore()

onMounted(async () => {
    const res = await api.get('https://py-64mn.onrender.com/admin/check')
    if (res.status === 403) {
        router.push('/login')
    }
})

const handleLogout = async () => {
    try {

        const res = await fetch('https://py-64mn.onrender.com/admin/logout', { method: 'post' })
        if (res.status === 200) {
            router.push('/')
        }

    } catch (error) {
        console.log(error)
    }
}

</script>

<template>
    <div
        :class="['flex h-screen', lang.lang === 'fa' || lang.lang === 'ar' ? 'flex-row-reverse text-right' : 'flex-row text-left']">
        <div ref="m"
            class="bg-[#151718] overflow-auto p-[30px] absolute md:relative left-0 h-screen md:block z-100 hidden text-white font-[nim] md:w-fit lg:w-[281px]">
            <div class="mb-5 float-end md:hidden">
                <i @click="show" class="fa fa-close"></i>
            </div>

            <div>
                <p class="text-white border-b pb-2"> {{ $t('dashboard.dashboard') }}</p>
            </div>
            <div class="flex flex-col gap-y-[17px] mt-[52px]  text-[#747475]">
                <RouterLink to="/" class=" hover:text-gray-400">{{ $t('dashboard.home') }}</RouterLink>
                <RouterLink to="/dashboard/articles" class=" hover:text-gray-400">{{ $t('dashboard.article') }}
                </RouterLink>
                <RouterLink to="/dashboard/activities" class=" hover:text-gray-400">{{ $t('dashboard.activity') }}
                </RouterLink>
                <RouterLink to="/dashboard/products" class=" hover:text-gray-400">{{ $t('dashboard.products') }}
                </RouterLink>
                <RouterLink to="/dashboard/companies" class=" hover:text-gray-400">{{ $t('dashboard.companies') }}
                </RouterLink>
                <p @click="handleLogout" class="hover:text-gray-400 cursor-pointer">{{$t('dashboard.logout')}}</p>
                <!-- <a href="">{{ $t('dashboard.companies') }}</a>
                <a href="">{{ $t('dashboard.achievements') }}</a> -->
            </div>
        </div>
        <div class="bg-[#F9F9F9] w-[100%] p-[26px] overflow-auto">
            <div class="lg:hidden md:hidden">
                <i @click="show" class="fa fa-bars mb-[70px]"></i>
            </div>
            <RouterView></RouterView>
        </div>

    </div>
</template>