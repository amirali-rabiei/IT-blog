<script setup>
import { ref, useTemplateRef } from 'vue';

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
                        <a href="#services">Activites</a>
                        <a href="#services">Products</a>
                        <a href="">About us</a>
                        <a href="#contact">Contact</a>
                        <RouterLink to="/blog">Blog</RouterLink>
                    </div>

                    <div class="text-white bg-[#BE100F] px-[50px] sm:px-[35px] py-1 rounded-[10px] text-center">
                        <a class="text-[16px]" href="">ENG</a>
                    </div>

                </div>
            </div>

        </nav>

    </header>
    <div ref="menu" class="hidden md:hidden left-0 w-full h-screen fixed top z-1">
        <div class="h-full bg-black flex justify-center text-white">
            <ul class="mt-[100px] flex flex-col gap-y-[30px]">
                <a href="#services">Activites</a>
                <a href="#services">Products</a>
                <a href="">About us</a>
                <a href="#contact">Contact</a>
                <RouterLink to="/blog">Blog</RouterLink>
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