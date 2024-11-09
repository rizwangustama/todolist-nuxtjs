<script lang="ts" setup>

import {useTodoListStore} from "~/stores/todoListStore";

const TodoListStore = useTodoListStore();

const isDisabled = ref<boolean>(false);



</script>

<template>
  <a-form :model="TodoListStore.formTodoList" :style="{ paddingTop: '32px' }">
    <a-form-item
        label="Activity Number"
        :label-col="{ span: 6 }"
        :wrapper-col="{ span: 18 }"
    >
      <a-input
          :disabled="true"
          placeholder="Enter your Number"
          style="width: 100%"
          v-model:value="TodoListStore.formTodoList.activityNo"
      />
    </a-form-item>

    <a-form-item
        label="Subject"
        :label-col="{ span: 6 }"
        :wrapper-col="{ span: 18 }"
    >
      <a-input
          placeholder="Enter your Subject"
          style="width: 100%"
          v-model:value="TodoListStore.formTodoList.subject"
          :disabled="isDisabled"
      />
    </a-form-item>

    <a-form-item
        label="Status"
        :label-col="{ span: 6 }"
        :wrapper-col="{ span: 18 }"
    >
      <a-select
          v-model:value="TodoListStore.formTodoList.status"
          placeholder="Select Status"
          style="width: 100%"
          :disabled="isDisabled"
      >
        <a-select-option value="Unmarked">Unmarked</a-select-option>
        <a-select-option value="Done">Done</a-select-option>
        <a-select-option value="Canceled">Canceled</a-select-option>
      </a-select>
    </a-form-item>

    <a-form-item
        label="Description"
        :label-col="{ span: 6 }"
        :wrapper-col="{ span: 18 }"
    >
      <a-textarea
          placeholder="Enter your Description"
          style="width: 100%"
          v-model:value="formTodoList.description"
          :disabled="isDisabled"
      />
    </a-form-item>
  </a-form>
</template>

<style scoped>
</style>
