import { createApp, watch } from 'vue'
import App from './App.vue'
import './assets/main.css'
import router from '../router'
import { createI18n } from 'vue-i18n'

import { useLanguageStore } from './store/languageStore'
import { createPinia } from 'pinia'

// English translation json

import enHeader from './locales/en/header.json'
import enProducts from './locales/en/products.json'
import enActivities from './locales/en/activities.json'
import enAchievements from './locales/en/achievements.json'
import enIntroduce from './locales/en/introduce.json'
import enDashboard from './locales/en/dashboard.json'
import enContact from './locales/en/contact.json'
import enFooter from './locales/en/footer.json'




// End English translation json


// Persian translation json

import faHeader from './locales/fa/header.json'
import faProducts from './locales/fa/products.json'
import faActivities from './locales/fa/activities.json'
import faAchievements from './locales/fa/achievements.json'
import faIntroduce from './locales/fa/introduce.json'
import faDashboard from './locales/fa/dashboard.json'
import faContact from './locales/fa/contact.json'
import faFooter from './locales/fa/footer.json'


// End Perisna translation json

import arHeader from './locales/ar/header.json'
import arProducts from './locales/ar/products.json'
import arActivities from './locales/ar/activities.json'
import arAchievements from './locales/ar/achievements.json'
import arIntroduce from './locales/ar/introduce.json'
import arDashboard from './locales/ar/dashboard.json'
import arContact from './locales/ar/contact.json'
import arFooter from './locales/ar/footer.json'


const app = createApp(App)
app.use(createPinia())
app.use(router)

const useLanguage = useLanguageStore()

const messages = {
    en: {
        header: enHeader,
        products: enProducts,
        activities: enActivities,
        achievements: enAchievements,
        introduce: enIntroduce,
        dashboard: enDashboard,
        contact: enContact,
        footer: enFooter
    },
    fa: {
        header: faHeader,
        products: faProducts,
        activities: faActivities,
        achievements: faAchievements,
        introduce: faIntroduce,
        dashboard: faDashboard,
        contact: faContact,
        footer: faFooter

    },
    ar: {
        header: arHeader,
        products: arProducts,
        activities: arActivities,
        achievements: arAchievements,
        introduce: arIntroduce,
        dashboard: arDashboard,
        contact: arContact,
        footer: arFooter

    }
}

const i18n = createI18n({
    legacy: false,
    locale: useLanguage.lang,
    fallbackLocale: 'en',
    messages
})




app.use(i18n)
app.mount('#app')
