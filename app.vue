<template>
  <div>
    <NuxtLayout/>
  </div>
</template>

<script lang="ts" setup>
import {useCounterStore} from "~/stores/counter";
import { useProfileStore } from "~/stores/profileStore";

const nami = useCounterStore();
const profileStore = useProfileStore();
</script>
