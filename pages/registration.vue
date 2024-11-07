<script setup lang="ts">
definePageMeta({
  layout: 'default',
})
import { reactive } from "vue";

interface UserRegister {
  username: string,
  password: string,
  password_confirmation: string,
}

const formRegistration = reactive<UserRegister>({
  username: '',
  password: '',
  password_confirmation: '',
});

</script>

<template>
  <div id="form-registration">
    <a-layout>

    <a-card title="Registration" :style="{ width: '600px', margin: 'auto' }">
      <a-form :model="formRegistration">
        <a-form-item label="User Name" style="{ width: 100% }" :label-col="{ span: 7 }" :wrapper-col="{ span: 17 }">
          <a-input
              v-model:value="formRegistration.username"
              placeholder="Enter your username"
              style="width: 100%"
          />
        </a-form-item>

        <a-form-item label="Password" style="{ width: 100% }" :label-col="{ span: 7 }" :wrapper-col="{ span: 17 }">
          <a-input
              v-model:value="formRegistration.password"
              placeholder="Enter your password"
              style="width: 100%"
          />
        </a-form-item>

        <a-form-item label="Password Confirmation" style="{ width: 100% }" :label-col="{ span: 7 }" :wrapper-col="{ span: 17 }">
          <a-input
              v-model:value="formRegistration.password_confirmation"
              placeholder="Enter your password confirmation"
              style="width: 100%"
          />
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 24 }">
          <a-flex gap="middle">
            <a-button type="primary" style="margin-left: auto">
              Registration
            </a-button>
          </a-flex>
        </a-form-item>
      </a-form>
    </a-card>
    </a-layout>
  </div>
</template>

<style scoped>
#form-registration {
  display: flex;
  height: 100vh;
}
</style>
