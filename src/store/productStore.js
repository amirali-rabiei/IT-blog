import { defineStore } from 'pinia'
import api from '../api/api'

export const useProductStore = defineStore('useProduct', {
    state: () => ({
        data: null,
        loading: false
    }),

    actions: {
        async getProducts(l) {
            try {
                const response = await api.get(`/products?language=${l}`)
                // const response = await axios.get('https://py-64mn.onrender.com/products')
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