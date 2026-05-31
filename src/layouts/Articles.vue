<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useBlogStore } from '../store/blogStore';

const articles = ref([])

const useBlog = useBlogStore()


onMounted(async () => {
    await useBlog.getBlogs()
    articles.value = useBlog.data
})


</script>

<template>
    <div>
        <RouterLink to="/dashboard/new-article" class="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-sm">{{
            $t('dashboard.add-article') }}
        </RouterLink>


        <div class="mt-[100px] relative">


            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm  text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Image
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Created
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="article in articles" :key="article.title"
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img class="w-[50px] h-[50px] object-cover"
                                    :src="`https://py-64mn.onrender.com${article.image}`" :alt="'NO IMG'">
                            </th>
                            <th scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ article.translations[0].title }}
                            </th>
                            <td class="px-6 py-4">
                                {{ new Date(article.created_at).toDateString() }}
                            </td>
                            <td class="px-6 py-4 ">
                                <!-- <a href="#"
                                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> -->
                                <div class="flex gap-x-2 ">
                                    <RouterLink :to="`/dashboard/edit-article/${article.id}`">
                                        <i class="fa fa-edit text-[lightgreen]"></i>
                                    </RouterLink>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </div>

</template>