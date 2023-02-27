import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  ParamEncoder,
} from "axios";
import queryString from "query-string";

const baseURL: string = "http://127.0.0.1:5000/api/v1";

const publicClient: AxiosInstance = axios.create({
  baseURL,
  paramsSerializer: {
    encode: (params: ParamEncoder) => queryString.stringify(params),
  },
});

publicClient.interceptors.request.use(async (config: any) => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
    },
  };
});

publicClient.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response && response.data) return response.data;
    return response;
  },
  (error: AxiosError) => {
    throw error.response?.data;
  }
);

export default publicClient;
