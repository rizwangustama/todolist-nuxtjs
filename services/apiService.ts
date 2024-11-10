import axios from "axios";
import {useProfileStore} from "~/stores/profileStore";
import { useCookie, useRouter } from '#app';

const useApiService = () => {
  const config = useRuntimeConfig();
  const router = useRouter();
  const tokenCookie = useCookie('authToken');
  const userIdCookie = useCookie('userId');
  const profileStore = useProfileStore();
  const apiAuth = axios.create({
    baseURL:config.public.axiosBaseUrl,
    headers: {}
  });

  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("access_token");
  }

    const getApiAuth = async (body: any) => {
      await apiAuth.post('/auth/login', body, {
        headers: {}
      }).then((res: any) => {
        console.log(res.data.isSuccessfully);
        if (res.data.isSuccessfully) {
          tokenCookie.value = res.data.payload.access_token;
          userIdCookie.value = res.data.payload.id;
          profileStore.setToken(res.data.payload.access_token);
          profileStore.setId(res.data.payload.id);
          profileStore.setFullName(res.data.payload.fullName);
          router.push('/dashboard');
        } else {
          router.push('/login');
        }
      }).catch((error: any) => {
        console.log(error);
        router.push('/login');
      })
    }

    const submitRegister = async () => {
      console.log('submit Register');
    }

    const api =  axios.create({
      baseURL:config.public.axiosBaseUrl,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    });

  const getProfile = async (id: number | string | null) => {
    let result: any;
    console.log(id);
    await api.get(`/users/${id}`).then((res: any) => {
      console.log(res);
      if(res.data.isSuccessfully) {
        result = res.data.payload;
      } else {
        result = res.data;
      }
    }).catch((error: any) => {
      console.log(error);
    })

    return result;
  }

    const getListTodo = async () => {
      let result: any;
      await api.get('/todolist').then((res) => {
        console.log(res);
        if (res.data.isSuccessfully) {
          result = res.data;
        } else {
          result = res.data;
        }
      }).catch((err) => {
        console.log(err);
      });
      return result;
    }

    const getSubmitAddTodoList = async (body: any) => {
      let result: any;
      await api.post('/todolist', body).then((res) => {
        if (res.data.isSuccessfully) {
          result = res.data;
        } else{
          result = res.data;
        }
      }).catch((error) => {
        console.log(error);
      })
      return result;
    }

    const getSubmitEditTodoList = async (body: any) => {
      let result: any;
      await api.put('/todolist', body).then((res) => {
        if (res.data.isSuccessfully) {
          result = res.data;
        } else {
          result = res.data;
        }
      })
      return result;
    }

    const getDeleteTodoList = async (body: any) => {
      let result: any;
      await api.delete('/todolist',  { data: body }).then((res: any) => {
        if (res.data.issuccessfully) {
          result = res.data;
        } else result = res.data;
      }).catch((error) => {
        console.log(error);
      })
      return result;
    }
  return {
    getApiAuth,
    submitRegister,
    getListTodo,
    getSubmitAddTodoList,
    getDeleteTodoList,
    getSubmitEditTodoList,
    getProfile
  }
}

export default useApiService;
