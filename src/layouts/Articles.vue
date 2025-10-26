<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const articles = ref()

onMounted(async () => {
    const response = await axios.get('https://it-blog-p5h0.onrender.com/api/blogs')
    articles.value = response.data
    console.log(response.data)
})

</script>

<template>
    <RouterLink to="/dashboard/new-article" class=" bg-blue-600 text-white px-4 py-2 rounded-sm">Add article
    </RouterLink>
    <div class="mt-[100px] gap-y-[40px] grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 md:gap-x-[22px]">

        <div v-for="article in articles" :key="article.title"
            class="flex flex-col  gap-x-3 items-center relative w-fit">
            <img class="w-[300px] rounded-t-2xl  "
                src="https://plus.unsplash.com/premium_photo-1733185420970-a7b2d6610d1c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500"
                alt="">
            <div class=" bg-white leading-relaxed w-full md:w-[300px]   p-5">
                <h2 class="text-[20px] md:text-[30px] font-[nim]">{{ article.title }}</h2>
                <p class="mb-2 text-gray-600 text-[18px]">{{ article.content }}</p>
                <a class="text-[#BE100F]" href=""></a>
                <i class="fa fa-arrow-right ml-2"></i>
            </div>
        </div>


        <!-- <div class="flex flex-col  gap-x-3 items-center relative w-fit">
            <img class="w-[300px] rounded-t-2xl  "
                src="https://plus.unsplash.com/premium_photo-1733185420970-a7b2d6610d1c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500"
                alt="">
            <div class=" bg-white leading-relaxed w-full md:w-[300px]   p-5">
                <h2 class="text-[20px] md:text-[30px] font-[nim]">How Ai Works?</h2>
                <p class="mb-2 text-gray-600 text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Id, accusamus?...</p>
                <a class="text-[#BE100F]" href="">More</a>
                <i class="fa fa-arrow-right ml-2"></i>
            </div>
        </div>
        <div class="flex flex-col  gap-x-3 items-center relative w-fit">
            <img class="w-[300px] rounded-t-2xl  "
                src="https://plus.unsplash.com/premium_photo-1733185420970-a7b2d6610d1c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500"
                alt="">
            <div class=" bg-white leading-relaxed w-full md:w-[300px]   p-5">
                <h2 class="text-[20px] md:text-[30px] font-[nim]">How Ai Works?</h2>
                <p class="mb-2 text-gray-600 text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Id, accusamus?...</p>
                <a class="text-[#BE100F]" href="">More</a>
                <i class="fa fa-arrow-right ml-2"></i>
            </div>
        </div>
        <div class="flex flex-col  gap-x-3 items-center relative w-fit">
            <img class="w-[300px] rounded-t-2xl  "
                src="https://plus.unsplash.com/premium_photo-1733185420970-a7b2d6610d1c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500"
                alt="">
            <div class=" bg-white leading-relaxed w-full md:w-[300px]   p-5">
                <h2 class="text-[20px] md:text-[30px] font-[nim]">How Ai Works?</h2>
                <p class="mb-2 text-gray-600 text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Id, accusamus?...</p>
                <a class="text-[#BE100F]" href="">More</a>
                <i class="fa fa-arrow-right ml-2"></i>
            </div>
        </div>
        <div class="flex flex-col  gap-x-3 items-center relative w-fit">
            <img class="w-[300px] rounded-t-2xl  "
                src="https://plus.unsplash.com/premium_photo-1733185420970-a7b2d6610d1c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500"
                alt="">
            <div class=" bg-white leading-relaxed w-full md:w-[300px]   p-5">
                <h2 class="text-[20px] md:text-[30px] font-[nim]">How Ai Works?</h2>
                <p class="mb-2 text-gray-600 text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Id, accusamus?...</p>
                <a class="text-[#BE100F]" href="">More</a>
                <i class="fa fa-arrow-right ml-2"></i>
            </div>
        </div> -->

    </div>

</template>