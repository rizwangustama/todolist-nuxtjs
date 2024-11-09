<template>
  <div>
    <NuxtLayout/>
  </div>
  <h1>{{ nami.name }}</h1>
</template>

<script lang="ts" setup>
import {useCounterStore} from "~/stores/counter";

const nami = useCounterStore();
</script>
