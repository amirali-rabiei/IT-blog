<template>
    <header class="mt-[30px]  bg-white sticky p-5 top-0 z-1 w-full">

        <nav class="flex justify-between lg:justify-around items-center">
            <div>
                Dummy
            </div>
            <div class="lg:hidden md:hidden">
                <i class="fa fa-bars"></i>
            </div>

            <div class="hidden md:block lg:block">
                <div class="flex items-center lg:gap-x-[121px] sm:gap-[50px] font-[nim]">

                    <div class="flex gap-x-7 links">
                        <a href="#services">Activites</a>
                        <a href="#services">Products</a>
                        <a href="">About us</a>
                        <a href="#contact">Contact</a>
                        <!-- <a href="">Blog</a> -->
                        <RouterLink to="/blog">Blog</RouterLink>
                    </div>

                    <div class="text-white bg-[#BE100F] px-[50px] sm:px-[35px] py-1 rounded-[10px] text-center">
                        <a class="text-[16px]" href="">ENG</a>
                    </div>

                </div>
            </div>

        </nav>
    </header>
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