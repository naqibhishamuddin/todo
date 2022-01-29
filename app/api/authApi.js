import {create} from 'apisauce';
import Config from 'react-native-config';

const auth = create({
  baseURL: Config.AUTH_API_URL,
  timeout: 15000,
});

auth.addAsyncResponseTransform(async response => {
  response.originalError = null;
  response.headers = null;
  response.config = null;
});

// Response interceptor for API calls
auth.axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  async function (error) {
    return Promise.reject(error);
  },
);

export default auth;
