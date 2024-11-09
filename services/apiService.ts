import axios from "axios";
import {useProfileStore} from "~/stores/profileStore";


const useApiService = () => {
  const config = useRuntimeConfig();
  const router = useRouter();
  const profileStore = useProfileStore();
  const apiAuth = axios.create({
    baseURL:config.public.axiosBaseUrl,
    headers: {
      // Authorization: `Bearer ${config.public.authorization}`
      // Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    }
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
          profileStore.setToken(res.data.payload.access_token);
          profileStore.setId(res.data.payload.id);
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

    const getListTodo = async () => {
      await api.get('/todolist').then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      })
    }
  return {
    getApiAuth,
    submitRegister,
    getListTodo,
  }
}

export default useApiService;
