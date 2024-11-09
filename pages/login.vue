<script setup lang="ts">
import { useAuthStore } from "~/stores/authStore";

definePageMeta({
  layout: 'default',
});
const authStore = useAuthStore();
const router = useRouter();
const handleLogin = () => {
  authStore.submitLogin();
};

const handleRegister = () => {
  router.push('/registration');
};
</script>

<template>
  <div id="form-login">
  <a-card title="Login" :style="{ width: '500px', margin: 'auto' }">
    <a-form :model="authStore.formLogin">
      <a-form-item label="User Name" style="{ width: 100% }" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
        <a-input
            v-model:value="authStore.formLogin.username"
            placeholder="Enter your username"
            style="width: 100%"
        />
      </a-form-item>

      <a-form-item label="Password" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
        <a-input
            type="password"
            v-model:value="authStore.formLogin.password"
            placeholder="Enter your password"
            style="width: 100%"
        />
      </a-form-item>

      <a-form-item :wrapper-col="{ span: 24 }">
        <a-flex gap="middle">
          <a-button type="primary" @click="handleLogin" style="width: 100%">
            Login
          </a-button>
          <a-button type="default" @click="handleRegister" style="width: 100%">
            Registration
          </a-button>
        </a-flex>
      </a-form-item>
    </a-form>
  </a-card>
  </div>
</template>

<style scoped>
#form-login {
  height: 100vh;
  display: flex;
}
/* You can customize additional styles here if needed */
</style>
