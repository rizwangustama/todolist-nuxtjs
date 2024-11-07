import { defineStore } from "pinia";
export const useCounterStore = defineStore('counter', {
    state: () => ({
        counter: 0,
        name: 'Hamba Allah'
    }),

    actions:{
        increment() {
            this.counter++
        },
        decrement() {
            this.counter--
        },
        changeName(name: string): void {
            this.name = 'Rizwan Gustama'
        }
    }
})
