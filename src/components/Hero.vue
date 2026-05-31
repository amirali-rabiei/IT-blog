<script setup>
import { ref, watch, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const displayText = ref('')
const r = ref('en')

let i = 0
let interval = null
let highlightWords = ['Innovating', 'AI', 'IoT', 'Augmented Reality', 'نوآورانه', 'هوش مصنوعی', 'واقعیت افزوده', 'ابتكار', 'إنترنت الأشياء', 'الواقع المعزز']



function getText(lang) {
    if (lang === 'fa') {
        return 'ارائه راهکارهای هوشمند نوآورانه برای جهانی متصل با استفاده از هوش مصنوعی، اینترنت اشیا و واقعیت افزوده'
    } else if (lang === 'en-US' || lang === 'en') {
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
        class=" aa  flex hide-scrollbar flex-col gap-y-[20px] overflow-auto h-[80vh] relative items-center lg:-[32px]  text-white mt-[44px] p-[40px] sm:p-[50px] lg:p-[100px] ">
        <div class="container ">
            <p v-html="displayText"
                :class="['text-[29px] leading-[1.5]  mt-20 md:mt-10 lg:text-[55px] md:text-[40px] uppercase', locale === 'en' || locale === 'en-US' ? 'text-left' : 'text-right']">
            </p>
        </div>
        <!-- <div class="text-white bg-[red] px-[70px] py-1 rounded-[10px] text-center">
            <a class="text-[16px] " href="">Start</a>
        </div> -->
    </div>
</template>


<style scoped>
.aa {
    font-family: "Montserrat", "yekb";
    font-weight: 1000;
    background-image: url('../assets/Untitled.jpeg');
    background-size: cover;
    background-position: right;
}

.hide-scrollbar::-webkit-scrollbar {
    display: none;
}

.hide-scrollbar {
    -ms-overflow-style: none;
    /* IE & Edge */
    scrollbar-width: none;
    /* Firefox */
}
</style>