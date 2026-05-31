import { defineStore } from 'pinia'
import api from '../api/api'

export const useBlogStore = defineStore('useBlog', {
    state: () => ({
        data: null,
        loading: false
    }),

    actions: {
        async getBlogs(l) {
            try {
                const response = await api.get(`/blog?language=${l}`)
                // const response = await axios.get(`https://py-64mn.onrender.com/blog?language=${l}`)
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