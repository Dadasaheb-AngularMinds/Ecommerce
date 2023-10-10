import { AxiosRequestConfig, AxiosResponse } from "axios";

export const handlePreRequest = (AxiosRequestConfig) => {
  const token = JSON.parse(localStorage.getItem("token"));

  let config = AxiosRequestConfig;
  if (config.url.includes("/auth")) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

export function handleResponseSuccess(AxiosResponse) {
  console.log(AxiosResponse)
  return AxiosResponse.data;
}
