<script setup lang="ts">

import {reactive, h, onMounted} from 'vue';
import {HomeOutlined, PieChartOutlined, SettingOutlined, UndoOutlined, UserOutlined} from '@ant-design/icons-vue';
import {useProfileStore} from "~/stores/profileStore";
import apiService from "~/services/apiService";
definePageMeta({
  layout: 'dashboard', // Specify the layout for this page
  meta: [
    { name: 'description', content: 'Dashboard page description' },
  ],
});
const { getProfile } = apiService();
const profileStore = useProfileStore();
// Define the sidebar menu items
const listMenu = reactive([
  {
    key: 1,
    label: "Home",
    icon: () => h(HomeOutlined),
    route: '/dashboard/',
  },
  {
    key: 2,
    label: "Todo List",
    icon: () => h(UndoOutlined),
    route: '/dashboard/todolist',
  },
  {
    key: 3,
    label: "Users",
    icon: () => h(UserOutlined),
    route: '/dashboard/todolist',
  },
  {
    key: 4,
    label: "Log Out",
    icon: () => h(UndoOutlined),
    route: '/login',
  },
]);

const fetchGeneralProfile = async () => {
  const getId = localStorage.getItem('user_id');
  const getData = await getProfile(parseInt(getId));
  console.log(getData.fullName);
  profileStore.setFullName(getData.fullName);
}

onMounted(async () => {
  fetchGeneralProfile();
})
</script>

<template>
  <a-layout style="min-height: 100vh">
    <!-- Sidebar -->
    <a-layout-sider width="350px" style="padding: 24px" theme="dark">
      <a-card style="background-color: white">
        Logo
      </a-card>
      <a-menu mode="inline" style="margin-top: 24px" theme="dark" defaultSelectedKeys="['1']">
        <a-menu-item v-for="menu in listMenu" :key="menu.key">
          <NuxtLink :to="menu.route" :style="{ display: 'flex', alignItems: 'center' }">
            <component :is="menu.icon" style="margin-right: 8px" />
            {{ menu.label }}
          </NuxtLink>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>

    <!-- Main Content Area -->
    <a-layout>
      <!-- Header -->
      <a-layout-header style="background: #fff; padding: 0 24px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 8px rgba(0, 21, 41, 0.1)">
        <div style="font-size: 20px; font-weight: bold;">Dashboard</div>
        <div style="padding: 0 20px;">{{ profileStore.fullName }}</div>
      </a-layout-header>

      <!-- Content -->
      <a-layout-content style="margin: 20px; background: #fff; padding: 24px; min-height: 280px; border-radius: 8px;">
        <KeepAlive>
          <nuxt-page />
        </KeepAlive>
      </a-layout-content>

      <!-- Footer -->
      <a-layout-footer style="text-align: center; padding: 10px 0; background: #001529; color: #fff;">
        © 2024 Your Company - All Rights Reserved.
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style scoped>
/* Add custom styles if necessary */
</style>
