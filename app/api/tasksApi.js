import {create} from 'apisauce';
import Config from 'react-native-config';

const tasks = create({
  baseURL: Config.TASK_API_URL,
  timeout: 15000,
});

tasks.addAsyncResponseTransform(async response => {
  response.originalError = null;
  response.headers = null;
  response.config = null;
});

// Response interceptor for API calls
tasks.axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  async function (error) {
    return Promise.reject(error);
  },
);

export default tasks;
