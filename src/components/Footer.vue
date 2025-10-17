<template>

    <div
        class="bg-[black] flex flex-col md:flex-row lg:flex-row justify-around gap-y-[60px] relative items-center rounded-[22px]  text-white mt-[54px] p-[40px] ">

        <div class="w-full md:w-[400px] lg:w-[400px]">
            <h2 class="text-[30px] font-[nim]">About us</h2>
            <p class="leading-[1.6]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo iure nobis
                exercitationem nihil incidunt
                expedita repellat sequi dolor fuga! Corrupti, consequatur! Cum soluta esse eaque porro? Architecto
                similique veritatis repellat deserunt nesciunt. Nesciunt impedit deleniti enim doloremque tempora
                molestiae facere?</p>
        </div>

        <div class="flex flex-col text-center md:text-start lg:text-start md:flex-row lg:flex-row gap-y-9 gap-x-[97px]">
            <div class="flex flex-col gap-y-2">
                <h2 class="text-[20px] font-[nim]">Links</h2>
                <a href="">Services</a>
                <a href="">Blog</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>


            <div
                class="flex border-l-1 pl-2.5 v rotate-90 md:rotate-0 lg:rotate-0  mt-8 justify-center flex-col gap-y-5">

                <i class="fa rotate-[-90deg] md:rotate-0  fa-instagram"></i>
                <i class="fa rotate-[-90deg] md:rotate-0  fa-telegram"></i>
                <i class="fa rotate-[-90deg] md:rotate-0   fa-linkedin"></i>
                <i class="fa rotate-[-90deg] md:rotate-0   fa-envelope"></i>

            </div>
        </div>

    </div>
    <!-- <p class="text-center pt-2">&copy;All rights reserved</p> -->
</template>

<style scoped>
.v {
    position: relative;
    transition: cubic-bezier(0.455, 0.03, 0.515, 0.955) 1s;
}

.v::before {
    content: 'Follow';
    position: absolute;
    left: -130%;
    rotate: -90deg;

}
</style>