<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '../api/api'

const username = ref('')
const password = ref('')
const router = useRouter()

const login = async () => {
    const formData = new FormData()
    formData.append('username', username.value)
    formData.append('password', password.value)

    const res = await api.post('/admin/login', formData)

    if (res.status === 200) {

        router.push('/dashboard')
    } else {
        alert('Username یا Password اشتباه است')
    }
}
</script>

<template>
    <div>
        <section>
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div
                    class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1
                            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <div class="space-y-4 md:space-y-6">
                            <div>
                                <label for="username"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                    username</label>
                                <input v-model="username" type="username" name="username" id="username"
                                    class="bg-gray-50 border outline-0 border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </div>
                            <div>
                                <label for="password"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input v-model="password" type="password" name="password" id="password"
                                    placeholder="••••••••"
                                    class="bg-gray-50 border outline-0 border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </div>
                            <div
                                class="bg-[white]  px-[50px] w-fit mx-auto sm:px-[35px] py-1 rounded-[10px] text-center">
                                <button @click="login" class="text-[16px]">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>