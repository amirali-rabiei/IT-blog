<script setup>
import { useTemplateRef } from 'vue';


const m = useTemplateRef('m')
function show() {
    if (m.value.style.display == 'none') {
        m.value.style.display = 'block'
    } else[
        m.value.style.display = 'none'
    ]
}

</script>

<template>
    <div class="flex h-screen">
        <div ref="m"
            class="bg-[#151718] p-[30px] absolute md:relative left-0 h-screen md:block z-100 hidden text-white font-[nim] md:w-fit lg:w-[281px]">
            <div class="mb-5 float-end md:hidden">
                <i @click="show" class="fa fa-close"></i>
            </div>

            <div>
                <h2>Dummy</h2>
                <hr>
            </div>
            <div class="flex flex-col gap-y-[17px] mt-[52px] text-[#747475]">
                <!-- <a href="">Article</a> -->
                <RouterLink to="/dashboard/article">Article</RouterLink>
                <a href="">Products</a>
                <a href="">Comapnies</a>
                <a href="">Achivements</a>
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