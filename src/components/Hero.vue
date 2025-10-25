<script setup>
import { ref, watch, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const displayText = ref('')
const r = ref(locale.value)

let i = 0
let interval = null
let highlightWords = ['Smart', 'Connected', 'Augmented', 'هوشمند', 'متصل', 'واقعیت افزوده', 'ذكية', 'متصل', 'الواقع المعزز']



function getText(lang) {
    if (lang === 'fa') {
        return 'ارائه راهکارهای هوشمند نوآورانه برای جهانی متصل با استفاده از هوش مصنوعی، اینترنت اشیا و واقعیت افزوده'
    } else if (lang === 'en') {
        return 'Innovating Smart Solutions for a Connected World Using AI, IoT, and Augmented Reality'
    } else if (lang === 'ar') {
        return 'ابتكار حلول ذكية لعالم متصل باستخدام الذكاء الاصطناعي وإنترنت الأشياء والواقع المعزز'
    }
}


function typeText(text) {
    displayText.value = ''
    i = 0
    if (interval) clearInterval(interval)

    interval = setInterval(() => {
        if (i < text.length) {
            displayText.value += text.charAt(i)
            i++
            applyColor()
        } else {
            clearInterval(interval)
        }
    }, 25)
}

function applyColor() {
    let html = displayText.value
    highlightWords.forEach(word => {
        const regex = new RegExp(`${word}`, 'gi')
        html = html.replace(regex, `<span class='text-[#BE100F]'>${word}</span>`)
    })
    displayText.value = html
}


watch(locale, (newLocale) => {
    r.value = newLocale
    const text = getText(newLocale)
    typeText(text)
}, { immediate: true })


onMounted(() => {
    typeText(getText(r.value))
})

</script>

<template>
    <div
        class="bg-[black]  flex flex-col gap-y-[20px] h-fit relative items-center rounded-[15px] lg:rounded-[32px]  text-white mt-[44px] p-[40px] sm:p-[50px] lg:p-[100px] font-[nim]">
        <div>
            <p v-html="displayText"
                :class="['text-[20px] lg:text-[55px] md:text-[40px] uppercase', locale === 'en' ? 'text-left' : 'text-right']">
            </p>
        </div>
        <!-- <div class="text-white bg-[red] px-[70px] py-1 rounded-[10px] text-center">
            <a class="text-[16px] " href="">Start</a>
        </div> -->
    </div>
</template>