<script setup>
import { ref, onMounted, useTemplateRef } from "vue";
import { useRoute, useRouter } from "vue-router";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import api from "../api/api";

const router = useRouter();
const id = useRoute().params.id;

const activeLang = ref("fa");
const form = ref({
    fa: { title: "", description: "" },
    en: { title: "", description: "" },
    ar: { title: "", description: "" },
});
const contentHtml = ref({ fa: "", en: "", ar: "" });
const editorInstance = ref(null);
const image = ref(null);
const imagePreview = useTemplateRef('preview');

const editorOptions = {
    theme: "snow",
    modules: {
        toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            ["link", "image", "video", "formula"],
            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }],
            [{ font: [] }],
            [{ align: [] }],
            ["clean"],
        ],
    },
};

const getBlog = async () => {
    try {
        const res = await api.get(`/blog/${id}`);
        ['fa', 'en', 'ar'].forEach(lang => {
            const t = res.data.translations.find(t => t.language === lang);
            if (t) {
                imagePreview.value.style.backgroundImage = `url('${res.data.image}')`
                imagePreview.value.style.backgroundSize = 'cover'
                form.value[lang].title = t.title;
                form.value[lang].description = t.description;
                contentHtml.value[lang] = t.content;
            }
        });
        image.value = res.data.image;
        if (image.value) {
            imagePreview.value.style.backgroundImage = `url('${image.value}')`;
            imagePreview.value.style.backgroundSize = 'cover';
        }
        if (editorInstance.value) editorInstance.value.root.innerHTML = contentHtml.value[activeLang.value];
    } catch (err) {
        console.log(err);
    }
};

const switchEditorContent = (newLang) => {
    if (editorInstance.value) contentHtml.value[activeLang.value] = editorInstance.value.root.innerHTML;
    activeLang.value = newLang;
    if (editorInstance.value) editorInstance.value.root.innerHTML = contentHtml.value[activeLang.value] || "";
};

const save = async () => {
    if (editorInstance.value) contentHtml.value[activeLang.value] = editorInstance.value.root.innerHTML;
    const fd = new FormData();
    if (image.value instanceof File) fd.append("image", image.value);
    ['fa', 'en', 'ar'].forEach(lang => {
        fd.append(`${lang}_title`, form.value[lang].title || "");
        fd.append(`${lang}_description`, form.value[lang].description || "");
        fd.append(`${lang}_content`, contentHtml.value[lang] || "");
    });
    try {
        await api.put(`/admin/blog/${id}`, fd);
        router.push("/dashboard/articles");
    } catch (err) {
        console.log(err);
        alert("Error saving blog. Check console.");
    }
};

const onSelectImg = (e) => {
    const file = e.target.files[0];
    image.value = file;
    const fr = new FileReader();
    fr.onload = (e) => {
        imagePreview.value.style.backgroundImage = `url('${e.target.result}')`;
        imagePreview.value.style.backgroundSize = 'cover';
    };
    fr.readAsDataURL(file);
};

const deleteArticle = async () => {
    try {
        await api.delete(`/admin/blog/${id}`);
        router.push("/dashboard/articles");
    } catch (err) {
        console.log(err);
    }
};

onMounted(() => getBlog());
</script>

<template>
    <div class="space-y-5">
        <div class="flex items-center justify-center w-full md:w-[446px]">
            <label ref="preview"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 rounded-lg cursor-pointer relative">
                <div class="w-full h-full absolute" v-if="image && typeof image === 'string'"></div>
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg class="w-8 h-8 mb-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                    </svg>
                    <p class="mb-2 text-sm text-gray-500"><span class="font-semibold">Click to upload image</span></p>
                </div>
                <input type="file" class="hidden" @change="onSelectImg" />
            </label>
        </div>

        <div class="flex gap-2 border-b pb-2">
            <button v-for="l in ['fa', 'en', 'ar']" :key="l" @click="switchEditorContent(l)"
                :class="['px-3 py-1 rounded', activeLang === l ? 'bg-blue-600 text-white' : 'bg-gray-200']">
                {{ l.toUpperCase() }}
            </button>
        </div>

        <div class="space-y-3">
            <div>
                <label for="text" class="block mb-2 text-sm font-medium text-gray-900">Title</label>
                <input maxlength="67" v-model="form[activeLang].title" type="text" id="title"
                :class="['border outline-0 border-gray-300 text-[#747475] rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:focus:border-blue-500', activeLang === 'fa' || activeLang === 'ar' ? 'text-right' : 'text-left']">
            </div>
            <div>
                <label for="text" class="block mb-2 text-sm font-medium text-gray-900">Description</label>
                <input v-model="form[activeLang].description" type="text" id="description"
                :class="['border outline-0 border-gray-300 text-[#747475] rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:focus:border-blue-500', activeLang === 'fa' || activeLang === 'ar' ? 'text-right' : 'text-left']">
            </div>
            <div>
                <label class="block mb-2">Content</label>
                <QuillEditor :options="editorOptions" @ready="editorInstance = $event" class="h-52 bg-white" />
            </div>
        </div>
        <div class="flex gap-2">
            <button @click="save" class="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded"> {{ $t('dashboard.save-all') }}
            </button>
            <button @click="deleteArticle" class="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded"> {{ $t('dashboard.delete')
                }}
            </button>
        </div>
    </div>
</template>
