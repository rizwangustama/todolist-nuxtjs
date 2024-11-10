import { defineStore } from "pinia";
export const useProfileStore = defineStore('profileStore', {
    state: () => ({
        access_token: null,
        id_user: null,
        fullName: null,
    }),

    actions: {
        setToken(token: any) {
            if (typeof window !== "undefined") {
                // Safe to access localStorage here
                this.access_token = token;
                localStorage.setItem("access_token", token);
                // Your logic here...
            }

        },

        setId(id: any) {
            if (typeof window !== "undefined") {
                this.id_user = id;
                localStorage.setItem("user_id", JSON.stringify(id));
            }
        },

        setFullName(fullName: any) {
            if (typeof window !== "undefined") {
                this.fullName = fullName;
                localStorage.setItem("fullName", JSON.stringify(fullName));
            }
        }
    }
})
