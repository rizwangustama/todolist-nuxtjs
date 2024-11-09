import { defineStore } from "pinia";
import {reactive} from "vue";
import { useRouter } from 'nuxt/app';


interface LoginForm {
    username: string | null;
    password: string | null;

}

interface RegisterForm {
    username: null | string,
    password: null | string,
    currentPassword: null | string,
    fullName: null | string,
}

export const useAuthStore = defineStore('authStore', () => {
    const router = useRouter();
    const name = 'satu';
    const formLogin = reactive<LoginForm>({
        username: null,
        password: null,
    });

    const access_token = ref<string | null>(null);

    const formRegistration = reactive<RegisterForm>({
        username: null,
        password: null,
        currentPassword: null,
        fullName: null,
    })

    const submitLogin = (value: string) => {
        alert('hadeuhh' + value);
    }

    const submitRegistration = () => {
        console.log('submit Login');
    }

    return {
        name,
        formLogin,
        formRegistration,
        submitLogin,
        submitRegistration,
        access_token,
    }
})
