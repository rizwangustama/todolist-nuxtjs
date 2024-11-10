export default defineNuxtRouteMiddleware((to, from) => {
    const userToken = useCookie('authToken'); // Pastikan nama cookie sesuai
    if (!userToken.value) {
        return navigateTo('/login');
    }
});
