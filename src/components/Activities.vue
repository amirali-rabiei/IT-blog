<script setup>
import { computed, onBeforeMount, onBeforeUnmount, onMounted, ref } from 'vue';


const products = [
    { title: '1', img: 'https://plus.unsplash.com/premium_photo-1733342533441-c4309b51da17?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032', des: 'hii' },
    { title: '2', img: 'https://plus.unsplash.com/premium_photo-1733342533441-c4309b51da17?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032', des: 'hii' },
    { title: '3', img: 'https://plus.unsplash.com/premium_photo-1733342533441-c4309b51da17?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032', des: 'hii' },
    { title: '4', img: 'https://plus.unsplash.com/premium_photo-1733342533441-c4309b51da17?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032', des: 'hii' },
    { title: '5', img: 'https://plus.unsplash.com/premium_photo-1733342533441-c4309b51da17?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032', des: 'hii' },

]
let startIndex = ref(0)
let n = ref(3)
const width = ref()

function up() {
    width.value = window.innerWidth
    if (width.value < 900) {
        n.value = 1
    } else if (width.value > 900) {
        n.value = 3
    }
}

onMounted(() => {
    up()
    window.addEventListener('resize', up)
})

const show = computed(() => {
    return products.slice(startIndex.value, startIndex.value + n.value)
})


const next = () => {
    if (startIndex.value <= products.length) {

        if (width.value > 900) {
            startIndex.value += 3
        } else if (width.value < 900) {
            startIndex.value += 1
        }
        if (startIndex.value >= products.length) {
            startIndex.value = 0
        }
    }
}

const prev = () => {
    if (startIndex.value - 2 >= 0) {
        startIndex.value = 0
    }
}

setInterval(next, 5000)

</script>

<template>
    <div class="mt-[276px]">
        <div id="services" class="text-center w-full">
            <!-- <p class="font-[Bnim] text-[44px] uppercase">Lorem Ipsum is simply</p> -->
            <p class="font-[Bnim] text-[28px] md:text-[78px] uppercase">{{ $t('activities.title') }}</p>
            <p class=" text-[18px] leading-relaxed text-gray-600">{{ $t('activities.description') }}</p>
        </div>



        <div class="flex lg:grid-cols-3  mx-auto w-fit gap-4 justify-center mt-[120px]">


            <div v-for="product in show" :key="product.title" class="productContainer w-full lg:w-[100%] relative">
                <img class="w-[400px] h-auto md:h-[267px] rounded-[15px]" :src="product.img" alt="">
                <div
                    class="productContent opacity-0  text-white p-[15px] w-full h-full absolute bottom-0 lg:w-[400px] md:w-[476px] flex flex-col gap-y-[15px] justify-end">
                    <h1 class="text-[22px] md:text-[30px] font-bold">{{ product.title }}</h1>
                    <p class="text-[18px] md:text-[20px] ">Empowering businesses with intelligent
                        automation and data-driven insights.
                    </p>
                </div>
            </div>


            <!-- <div class="productContainer w-full lg:w-[100%] relative">
                <img class="w-[400px] h-auto md:h-[267px] rounded-[15px]"
                    src="https://plus.unsplash.com/premium_photo-1733342533441-c4309b51da17?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032"
                    alt="">
                <div
                    class="productContent opacity-0 text-white p-[15px] w-full h-full absolute bottom-0 lg:w-[400px] md:w-[476px] flex flex-col gap-y-[15px] justify-end">
                    <h1 class="text-[22px] md:text-[30px] font-bold">AI Solutions</h1>
                    <p class="text-[18px] md:text-[20px] ">Empowering businesses with intelligent
                        automation and data-driven insights.
                    </p>
                </div>
            </div>

            <div class="productContainer w-full lg:w-[100%] relative">
                <img class="w-[400px] h-auto md:h-[267px] rounded-[15px]"
                    src="https://plus.unsplash.com/premium_photo-1733342533441-c4309b51da17?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032"
                    alt="">
                <div
                    class="productContent opacity-0 text-white p-[15px] w-full h-full absolute bottom-0 lg:w-[400px] md:w-[476px] flex flex-col gap-y-[15px] justify-end">
                    <h1 class="text-[22px] md:text-[30px] font-bold">AI Solutions</h1>
                    <p class="text-[18px] md:text-[20px] ">Empowering businesses with intelligent
                        automation and data-driven insights.
                    </p>
                </div>
            </div>

            <div class="productContainer w-full lg:w-[100%] relative">
                <img class="w-[400px] h-auto md:h-[267px] rounded-[15px]"
                    src="https://plus.unsplash.com/premium_photo-1733342533441-c4309b51da17?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032"
                    alt="">
                <div
                    class="productContent opacity-0 text-white p-[15px] w-full h-full absolute bottom-0 lg:w-[400px] md:w-[476px] flex flex-col gap-y-[15px] justify-end">
                    <h1 class="text-[22px] md:text-[30px] font-bold">AI Solutions</h1>
                    <p class="text-[18px] md:text-[20px] ">Empowering businesses with intelligent
                        automation and data-driven insights.
                    </p>
                </div>
            </div> -->




        </div>
        <button @click="next">Next</button>
        <br>
        <button @click="prev">Prev</button>
    </div>
</template>


<style scoped>
.productContainer:hover .productContent {
    opacity: 1;
}
</style>