import {defineStore} from "pinia";
import {reactive} from "vue";

export interface TodoParams {
    id?: number| string | null;
    activityNo: string | null;
    subject: string | null;
    description: string | null;
    status: string | null;
}

export const useTodoListStore = defineStore("TodoListStore", () => {
    const name = "TodoListStore";
    const statusAction = ref<string | null>(null)
    const formTodoList = reactive<TodoParams>({
        id: null,
        activityNo: null,
        subject: null,
        description: null,
        status: null
    });

    const todoEdit = () => {
        console.log('edit TodoListStore');
    }

    const todoView = () => {
        console.log('view TodoListStore');
    }

    const resetFormTodoList = () => {
        formTodoList.id = null;
        formTodoList.activityNo = null;
        formTodoList.status = null;
        formTodoList.description = null;
        formTodoList.subject = null;
    }

    return {
        name,
        formTodoList,
        todoEdit,
        todoView,
        statusAction,
        resetFormTodoList
    }
})
