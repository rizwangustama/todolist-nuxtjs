<script lang="ts" setup>
import {DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined} from "@ant-design/icons-vue";
import {reactive} from "vue";

definePageMeta({
  layout: 'dashboard',
})

const formTodoList = reactive<any>({
  subject: '',
  description: '',
  status: '',
})

const isDisabled = ref<boolean>(false);
const isModal = ref<boolean>(false);

const columns = [
  {
    title: 'Activity No',
    dataIndex: 'activityNo',
  },
  {
    title: 'Subject',
    dataIndex: 'subject',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
  {
    title: 'Action',
    dataIndex: 'action',
  },
];

const todoListData: any = [];
for (let i = 0; i < 46; i++) {
  todoListData.push({
    key: i,
    activityNo: `AC-000${i}`,
    description: `Description --${i}`,
    subject: `Edward King ${i}`,
    status: `Done ${i}`,
  });
}

// Define the action function (you can replace with actual logic for edit/delete)
const handleAction = (record: any) => {
  console.log(`Action on ${record.name}`);
}

const handleActionEdit = (record: any, value: string) => {
  console.log(value);
  if (value === 'VIEW') isDisabled.value = true; else isDisabled.value = false;

  formTodoList.activityNo = record.activityNo;
  formTodoList.subject = record.subject;
  formTodoList.description = record.description;
  formTodoList.status = record.status;
  isModal.value = true;
}

const handleSubmit = () => {

  alert('hello World')
  resetValue();
}

const resetValue = () => {
  formTodoList.activityNo = null;
  formTodoList.subject = null;
  formTodoList.description = null;
  formTodoList.status = null;
  isDisabled.value = false;
}
const handleShowModal = () => {
  isModal.value = !isModal.value;
}
</script>

<template>
  <a-card title="List Todo List">
<!--    <NuxtLink to="/dashboard/todolist/add">-->
<!--      <a-button type="primary" :icon="h(PlusOutlined)" :style="{ marginBottom: '24px' }">Add New</a-button>-->
<!--    </NuxtLink>-->

    <a-button type="primary" :icon="h(PlusOutlined)" :style="{ marginBottom: '24px' }" @click="handleShowModal()">Add New</a-button>

    <a-table
        :columns="columns"
        :data-source="todoListData"
    >
      <template #bodyCell="{ column, text, record }">
        <template v-if="column.dataIndex === 'action'">
          <a-flex gap="small">
            <a-button type="primary" :icon="h(DeleteOutlined)" danger></a-button>
            <a-button type="primary" :icon="h(EditOutlined)" @click="handleActionEdit(record,'EDIT')"></a-button>
            <a-button :icon="h(EyeOutlined)"  @click="handleActionEdit(record,'VIEW')" ></a-button>
          </a-flex>
        </template>
      </template>
    </a-table>
  </a-card>

  <a-modal v-model:open="isModal" title="Edit Todo List" centered @ok="handleSubmit">

    <a-form :model="formTodoList" :style="{ paddingTop: '32px' }">
      <a-form-item
          label="Activity Number"
          :label-col="{ span: 6 }"
          :wrapper-col="{ span: 18 }"
      >
        <a-input
            :disabled="true"
            placeholder="Enter your Number"
            style="width: 100%"
            v-model:value="formTodoList.activityNo"
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
            v-model:value="formTodoList.subject"
            :disabled="isDisabled"
        />
      </a-form-item>

      <a-form-item
          label="Status"
          :label-col="{ span: 6 }"
          :wrapper-col="{ span: 18 }"
      >
        <a-select
            v-model:value="formTodoList.status"
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
  </a-modal>
</template>

<style scoped></style>
