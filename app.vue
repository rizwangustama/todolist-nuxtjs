<template>
  <div>
    <NuxtLayout/>
  </div>
</template>

<script lang="ts" setup>
import {useCounterStore} from "~/stores/counter";

const nami = useCounterStore();
</script>
