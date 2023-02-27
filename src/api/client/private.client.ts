import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  ParamEncoder,
} from "axios";
import queryString from "query-string";

const baseURL: string = "http://127.0.0.1:5000/api/v1";

const privateClient: AxiosInstance = axios.create({
  baseURL,
  paramsSerializer: {
    encode: (params: ParamEncoder) => queryString.stringify(params),
  },
});

privateClient.interceptors.request.use(async (config: any) => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("actkn")}`,
    },
  };
});

privateClient.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response && response.data) return response.data;
    return response;
  },
  (error: AxiosError) => {
    throw error.response?.data;
  }
);

export default privateClient;
