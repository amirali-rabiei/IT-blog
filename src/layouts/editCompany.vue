<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import api from "../api/api";

const router = useRouter();
const id = useRoute().params.id;

const image = ref(null);
const imagePreview = ref(null);
const title = ref("");

const getCompanies = async () => {
    try {
        const res = await api.get(`/parent-companies/${id}`)

        title.value = res.data.title;
        if (res.data.image) {
            image.value = null
            imagePreview.value.style.backgroundImage = `url('${res.data.image}')`
            imagePreview.value.style.backgroundSize = 'cover'
        }
    } catch (err) {
        console.log(err);
    }
};

const save = async () => {
    if (!title.value) {
        alert("Title is required!");
        return;
    }

    const fd = new FormData();
    fd.append("title", title.value);
    if (image.value) {
        fd.append("image", image.value);
    }

    try {
        await api.put(`/admin/parent-companies/${id}`, fd, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        router.push("/dashboard/companies");
    } catch (err) {
        console.log(err);
        alert("Error saving company. Check console.");
    }
};

const onSelectImg = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    image.value = file;

    const fr = new FileReader();
    fr.onload = (e) => {
        if (imagePreview.value) {
            imagePreview.value.style.backgroundImage = `url('${e.target.result}')`;
            imagePreview.value.style.backgroundSize = 'cover';
        }
    };
    fr.readAsDataURL(file);
};

const deleteCompany = async () => {
    try {
        await api.delete(`/admin/parent-companies/${id}`);
        router.push("/dashboard/companies");
    } catch (err) {
        console.log(err);
    }
};

onMounted(() => getCompanies());
</script>

<template>
    <div class="space-y-5">
        <div class="flex items-center justify-center w-[150px] h-[150px]">
            <label ref="imagePreview"
                class="flex flex-col items-center relative justify-center w-[150px] h-[150px] border-2 border-gray-300 rounded-lg cursor-pointer">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg class="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                    </svg>
                    <p class="mb-2 text-sm text-gray-500"><span class="font-semibold">Click to upload image</span></p>
                </div>
                <input id="dropzone-file" @change="onSelectImg" type="file" class="hidden" />
            </label>
        </div>

        <div class="space-y-3">
            <div>
                <label for="title" class="block mb-2 text-sm font-medium text-gray-900">Title</label>
                <input v-model="title" type="text" id="title"
                    class="border outline-0 border-gray-300 text-[#747475] rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
            </div>
        </div>

        <div class="flex gap-2">
            <button @click="save" class="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded">
                {{$t('dashboard.save-all')}}
            </button>
            <button @click="deleteCompany" class="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded">
                {{$t('dashboard.delete')}}
            </button>
        </div>
    </div>
</template>
