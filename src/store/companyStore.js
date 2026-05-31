import { defineStore } from 'pinia'
import api from '../api/api'

export const useCompanyStore = defineStore('useCompany', {
    state: () => ({
        data: null,
        loading: false
    }),

    actions: {
        async getComanies() {
            try {
                const response = await api.get(`/parent-companies`)
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