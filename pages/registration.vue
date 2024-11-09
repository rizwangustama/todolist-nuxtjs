<script setup lang="ts">
import {useAuthStore} from "~/stores/authStore";

definePageMeta({
  layout: 'default',
})
const authStore = useAuthStore();

const handleRegistration = () => {
  authStore.submitRegistration();
}

</script>

<template>
  <div id="form-registration">
    <a-layout>

    <a-card title="Registration" :style="{ width: '600px', margin: 'auto' }">
      <a-form :model="authStore.formRegistration">
        <a-form-item label="User Name" style="{ width: 100% }" :label-col="{ span: 7 }" :wrapper-col="{ span: 17 }">
          <a-input
              v-model:value="authStore.formRegistration.username"
              placeholder="Enter your username"
              style="width: 100%"
          />
        </a-form-item>

        <a-form-item label="Password" style="{ width: 100% }" :label-col="{ span: 7 }" :wrapper-col="{ span: 17 }">
          <a-input
              v-model:value="authStore.formRegistration.password"
              placeholder="Enter your password"
              style="width: 100%"
          />
        </a-form-item>

        <a-form-item label="Password Confirmation" style="{ width: 100% }" :label-col="{ span: 7 }" :wrapper-col="{ span: 17 }">
          <a-input
              v-model:value="authStore.formRegistration.currentPassword"
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
