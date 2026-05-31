import { defineStore } from 'pinia'
import api from '../api/api'

export const useActivityStore = defineStore('useActivity', {
    state: () => ({
        data: null,
        loading: false
    }),

    actions: {
        async getActivities(l) {
            try {
                const response = await api.get(`/activities`, {
                    params: { language: l }
                })
                // const response = await axios.get(`https://py-64mn.onrender.com/activities?language=${l}`)
                this.data = response.data

                if (response.status === 200) {
                    this.loading = true
                }
            } catch (error) {
                this.loading = false
            }
        }
    }
})