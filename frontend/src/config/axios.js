import axios from "axios";

const baseURL = "http://localhost:3000/";

const config = {
  baseURL,
};

export const axiosInstance = axios.create(config);

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
