<script setup lang="ts">
import {reactive, ref} from 'vue';
definePageMeta({
  layout: 'default',
})

const formLogin = reactive<any>({
  username: '',
  password: ''
})

const handleLogin = () => {
  alert(`Login with username ${ formLogin.username }`);
};
</script>

<template>
  <div id="form-login">
  <a-card title="Login" :style="{ width: '500px', margin: 'auto' }">
    <a-form :model="formLogin">
      <a-form-item label="User Name" style="{ width: 100% }" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
        <a-input
            v-model:value="formLogin.username"
            placeholder="Enter your username"
            style="width: 100%"
        />
      </a-form-item>

      <a-form-item label="Password" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
        <a-input
            type="password"
            v-model:value="formLogin.password"
            placeholder="Enter your password"
            style="width: 100%"
        />
      </a-form-item>

      <a-form-item :wrapper-col="{ span: 24 }">
        <a-flex gap="middle">
          <a-button type="primary" @click="handleLogin" style="width: 100%">
            Login
          </a-button>
          <a-button type="default" @click="handleLogin" style="width: 100%">
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
