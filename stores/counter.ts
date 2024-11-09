import { defineStore } from "pinia";
export const useCounterStore = defineStore('counter', {
    state: () => ({
        counter: 0,
        access_token: null,
        id_user: null,
        full_name: null,
    }),

    actions: {
    }
})
