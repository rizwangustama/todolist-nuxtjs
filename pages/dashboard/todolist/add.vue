<script lang="ts" setup>
definePageMeta({
  layout: 'dashboard',
})
</script>

<template>
  <a-card title="Add Todo List">
  <a-form>
    <a-form-item label="Subject" style="{ width: 100% }" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
      <a-input
          placeholder="Enter your Subject"
          style="width: 100%"
      />
    </a-form-item>

    <a-form-item label="Description" style="{ width: 100% }" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
      <a-input
          placeholder="Enter your Description"
          style="width: 100%"
      />
    </a-form-item>

    <a-form-item label="Description" style="{ width: 100% }" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
      <a-select
          placeholder="Enter your Description"
          style="width: 100%"
      >
        <a-select-option value="jack">Unmarked</a-select-option>
        <a-select-option value="lucy">Done</a-select-option>
        <a-select-option value="jack">Canceled</a-select-option>
      </a-select>
    </a-form-item>

    <a-form-item :wrapper-col="{ span: 24 }">
      <a-flex gap="middle">
        <a-button type="primary" style="margin-left: auto">
          Submit
        </a-button>
      </a-flex>
    </a-form-item>
  </a-form>
  </a-card>
</template>
