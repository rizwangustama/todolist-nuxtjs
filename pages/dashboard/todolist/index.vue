<script lang="ts" setup>
import {DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined} from "@ant-design/icons-vue";
import {reactive, onMounted} from "vue";
import apiService from "~/services/apiService";

definePageMeta({
  layout: 'dashboard',
})

const { getListTodo } = apiService();

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

const fetchTodoList = async  () => {
  try {
    await getListTodo(); // assuming getListTodo is an async function that fetches the todo list
  } catch (error) {
    console.error('Error fetching todo list:', error);
  }
}

onMounted(async () => {
  fetchTodoList()
})
</script>

<template>
  <a-card title="List Todo List">
    <a-flex gap="middle">
      <a-button type="primary" :icon="h(PlusOutlined)" :style="{ marginBottom: '24px' }" @click="handleShowModal()">Add New</a-button>
      <a-button type="primary" danger :icon="h(DeleteOutlined)" :style="{ marginBottom: '24px' }" @click="handleShowModal()">Delete All</a-button>
    </a-flex>
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

  <a-modal v-model:open="isModal" title="Edit Todo List" centered @ok="handleSubmit" :okButtonProps="{ disabled: isDisabled }">
    <LazyFormTodoList />
  </a-modal>
</template>

<style scoped></style>
