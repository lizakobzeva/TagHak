import { urls } from "@/lib/constants/urls";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: urls.api,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    if (error.response.status === 401) {
      axiosInstance.get("/users/refresh_token");
    }
    return error;
  }
);

export default axiosInstance;
