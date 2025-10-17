<script setup>
import { onMounted, ref } from 'vue';


const text = "Innovating Smart Solutions for a Connected World Using AI, IoT, and Augmented Reality"
const displayText = ref('')
let highlightWords = ['Smart', 'Connected', 'Augmented']
let i = 0


function type() {
    if (i <= text.length) {
        displayText.value += text.charAt(i)
        i++
    }
    if (i >= text.length) {
        return 
    }
    applyColor()
}

function applyColor() {
    let html = displayText.value

    highlightWords.forEach(word => {
        const regex = new RegExp(`\\b${word}\\b`, 'gi')
        html = html.replace(regex, `<span class='text-[#BE100F]'>${word}</span>`)
    })

    displayText.value = html
}

onMounted(() => {
    setInterval(type, 35)
})

</script>

<template>
    <div
        class="bg-[black]  flex flex-col gap-y-[20px] h-fit relative items-center rounded-[15px] lg:rounded-[32px]  text-white mt-[44px] p-[40px] sm:p-[50px] lg:p-[100px] font-[nim]">
        <div>
            <p v-html="displayText" class="text-[20px]  lg:text-[55px] md:text-[40px] uppercase"></p>
        </div>
        <!-- <div class="text-white bg-[red] px-[70px] py-1 rounded-[10px] text-center">
            <a class="text-[16px] " href="">Start</a>
        </div> -->
    </div>
</template>