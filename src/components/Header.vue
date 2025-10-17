<template>
    <header class="mt-[40px]">

        <nav class="flex justify-around items-center">
            <div>
                Dummy
            </div>
            <div class="lg:hidden md:hidden">
                <i class="fa fa-bars"></i>
            </div>

            <div class="hidden md:block lg:block">
                <div class="flex items-center gap-x-[131px] font-[nim]">

                    <div class="flex gap-x-7 links">
                        <a href="#services">Services</a>
                        <a href="">About us</a>
                        <a href="#a">Contact us</a>
                        <a href="">Blog</a>
                    </div>

                    <div class="text-white bg-[#BE100F] px-[50px] py-1 rounded-[10px] text-center">
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