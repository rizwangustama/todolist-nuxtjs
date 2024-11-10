<script lang="ts" setup>
import {DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined} from "@ant-design/icons-vue";
import { notification } from 'ant-design-vue';
import {reactive, onMounted} from "vue";
import apiService from "~/services/apiService";
import FormTodoList from "~/components/FormTodoList.vue";
import {useTodoListStore} from "~/stores/todoListStore";

definePageMeta({
  layout: 'dashboard',
  middleware: ['auth'],
})

const { getListTodo, getSubmitAddTodoList, getDeleteTodoList, getSubmitEditTodoList } = apiService();
const todoListStore = useTodoListStore();

const dataTodoList = ref<any[]>([]);
const isLoading = ref<boolean>(false);

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

const handleAction = (record: any, value: string) => {
  todoListStore.statusAction = value;
  if (value === 'VIEW') isDisabled.value = true; else isDisabled.value = false;
  // * Form Todo List
    todoListStore.formTodoList.id = record.id;
    todoListStore.formTodoList.activityNo = record.activityNo;
    todoListStore.formTodoList.subject = record.subject;
    todoListStore.formTodoList.description = record.description;
    todoListStore.formTodoList.status = record.status;
    isModal.value = true;
}

const handleSubmit = async () => {
  isLoading.value = true;

  console.log(todoListStore.statusAction);
  // ini a Add
  if (todoListStore.statusAction === 'EDIT') {
    try {
      const body = {
        id: todoListStore.formTodoList.id,
        subject: todoListStore.formTodoList.subject,
        description: todoListStore.formTodoList.description,
        status: todoListStore.formTodoList.status,
      }
      const update =  await getSubmitEditTodoList(body);
      console.log('update', update);
      if (update.isSuccessfully) {
        notification.success({
          message: 'Notification Successfull',
          description:
              'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
        isModal.value = false;
        setTimeout(() => {
          fetchTodoList();
          isLoading.value = false;

        }, 1000)
      } else {
        notification.error({
          message: 'Error Message',
          description: 'Error Message',
        })
      }
    } catch (e) {
      console.log(e);
      isLoading.value = false;
    }

  } else  {
    const body = {
      subject: todoListStore.formTodoList.subject,
      description: todoListStore.formTodoList.description,
      status: todoListStore.formTodoList.status,
    };

    try {
      const data = await getSubmitAddTodoList(body);
      if (data.isSuccessfully) {
        notification.success({
          message: 'Notification Title',
          description:
              'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
        isModal.value = false;
        setTimeout(() => {
          fetchTodoList();
          isLoading.value = false;
        }, 1000)
        // isLoading.value = false;
      } else {
        notification.error({
          message: 'Error Message',
          description: 'Error Message',
        })
      }
    } catch (error) {
      console.log(error);
    }
  }

}

const handleDelete = async (paramId: number) => {
  isLoading.value = true;
  const body = {
    id: paramId
  }
  const dataDelete = await getDeleteTodoList(body);
  if (dataDelete.isSuccessfully) {
    notification.success({
      message: 'Notification Title',
      description: 'Data Deleted Successfully',
    })
    setTimeout(() => {
      fetchTodoList();
      isLoading.value = false;
    }, 1000)
  } else {
    notification.error({
      message: 'Error Message',
      description: 'Error Message',
    })
    isLoading.value = false;
  }
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
  todoListStore.statusAction = 'ADD'
  todoListStore.resetFormTodoList();
}

const fetchTodoList = async  () => {
  try {
    const getDataList = await getListTodo(); // assuming getListTodo is an async function that fetches the todo list
    if (getDataList.isSuccessfully) {
      dataTodoList.value = getDataList.payload
    }
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
        :data-source="dataTodoList"
        :loading="isLoading"
    >
      <template #bodyCell="{ column, text, record }">
        <template v-if="column.dataIndex === 'action'">
          <a-flex gap="small">
            <a-button type="primary" :icon="h(DeleteOutlined)"  @click="handleDelete(record.id)" danger></a-button>
            <a-button type="primary" :icon="h(EditOutlined)" @click="handleAction(record,'EDIT')"></a-button>
            <a-button :icon="h(EyeOutlined)"  @click="handleAction(record,'VIEW')" ></a-button>
          </a-flex>
        </template>
      </template>
    </a-table>
  </a-card>

  <a-modal v-model:open="isModal" title="Edit Todo List" centered @ok="handleSubmit" :okButtonProps="{ disabled: isDisabled }">
    <FormTodoList />
  </a-modal>
</template>

<style scoped></style>
