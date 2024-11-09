import {defineStore} from "pinia";
import {reactive} from "vue";

export interface TodoParams {
    activityNo: string | null;
    subject: string | null;
    description: string | null;
    status: string | null;
}

export const useTodoListStore = defineStore("TodoListStore", () => {
    const name = "TodoListStore";
    const formTodoList = reactive<TodoParams>({
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

    return {
        name,
        formTodoList,
        todoEdit,
        todoView
    }
})
