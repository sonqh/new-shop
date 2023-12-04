import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const apiConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

const api: AxiosInstance = axios.create(apiConfig);

// Add interceptor for request
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  },
);

// Add interceptor for response
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error) => {
    // Handle response error
    return Promise.reject(error);
  },
);

export default api;
